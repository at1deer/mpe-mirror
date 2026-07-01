import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import TurndownService from "turndown";

const GHOST_API_URL = (process.env.GHOST_API_URL || "https://modalpathethics.com").replace(/\/$/, "");
const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY;
const MIRROR_BASE_URL = (process.env.MIRROR_BASE_URL || "https://mirror.modalpathethics.com").replace(/\/$/, "");

if (!GHOST_CONTENT_API_KEY) {
  console.error("Missing GHOST_CONTENT_API_KEY.");
  process.exit(1);
}

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-"
});

turndown.addRule("ghostFigcaption", {
  filter: ["figcaption"],
  replacement: (content) => content ? `\n\n_${content}_\n\n` : "\n\n"
});

function slugifyFilename(value) {
  return String(value || "untitled")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 160) || "untitled";
}

function yamlEscape(value) {
  return String(value ?? "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function dateOnly(value) {
  return value ? String(value).slice(0, 10) : "undated";
}

function sha256(value) {
  return crypto.createHash("sha256").update(value || "", "utf8").digest("hex");
}

function xmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function stripGhostHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeText(file, content) {
  await ensureDir(path.dirname(file));
  await fs.writeFile(file, content, "utf8");
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { "Accept-Version": "v6.0" }
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Ghost API request failed ${res.status} ${res.statusText}: ${url}\n${body.slice(0, 500)}`);
  }
  return res.json();
}

async function fetchAllPosts() {
  const posts = [];
  let page = 1;
  let pages = 1;

  do {
    const url = new URL(`${GHOST_API_URL}/ghost/api/content/posts/`);
    url.searchParams.set("key", GHOST_CONTENT_API_KEY);
    url.searchParams.set("include", "tags,authors");
    url.searchParams.set("formats", "html,plaintext");
    url.searchParams.set("order", "published_at desc");
    url.searchParams.set("limit", "100");
    url.searchParams.set("page", String(page));

    const data = await fetchJson(url.toString());
    posts.push(...(data.posts || []));
    pages = data.meta?.pagination?.pages || 1;
    page += 1;
  } while (page <= pages);

  return posts;
}

function articleMarkdown(post, generatedAt) {
  const html = stripGhostHtml(post.html || "");
  const mdBody = turndown.turndown(html).trim();
  const plain = post.plaintext || mdBody.replace(/[#*_>`~-]/g, "");
  const tags = (post.tags || []).map(t => t.name).filter(Boolean);

  const frontmatter = [
    "---",
    `title: "${yamlEscape(post.title)}"`,
    `slug: "${yamlEscape(post.slug)}"`,
    `canonical_url: "${yamlEscape(post.url)}"`,
    `published_at: "${yamlEscape(post.published_at)}"`,
    `updated_at: "${yamlEscape(post.updated_at)}"`,
    "tags:",
    ...(tags.length ? tags.map(t => `  - "${yamlEscape(t)}"`) : ["  []"]),
    `source: "Ghost Content API published post"`,
    `mirror_generated_at: "${generatedAt}"`,
    `sha256_plaintext: "${sha256(plain)}"`,
    "---",
    ""
  ].join("\n");

  const titleLine = mdBody.startsWith("# ") ? "" : `# ${post.title}\n\n`;
  return `${frontmatter}${titleLine}${mdBody}\n`;
}

function articleHtml(post, markdownUrl) {
  const title = xmlEscape(post.title);
  const body = stripGhostHtml(post.html || "");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="${xmlEscape(post.url)}">
  <style>
    body { font: 18px/1.65 system-ui, -apple-system, Segoe UI, sans-serif; max-width: 860px; margin: 3rem auto; padding: 0 1rem; color: #141414; }
    img { max-width: 100%; height: auto; }
    code, pre { background: #f3f3f3; }
    pre { padding: 1rem; overflow-x: auto; }
    blockquote { border-left: 4px solid #ddd; margin-left: 0; padding-left: 1rem; color: #444; }
    .meta { color: #666; font-size: .95rem; }
  </style>
</head>
<body>
  <p class="meta"><a href="/articles/${post.slug}.md">Markdown</a> · <a href="${xmlEscape(post.url)}">Canonical</a> · ${dateOnly(post.published_at)}</p>
  <h1>${title}</h1>
  ${body}
</body>
</html>
`;
}

function buildIndexMarkdown(items, generatedAt) {
  const rows = items.map(item => `- ${item.published_at.slice(0, 10)} — [${item.title}](${item.mirror_markdown_path}) ([HTML](${item.mirror_html_path}))`).join("\n");
  return `# Modal Path Ethics Article Index

Generated: ${generatedAt}

Canonical site: ${GHOST_API_URL}

${rows}
`;
}

function buildAllArticles(items, articleBodies, generatedAt) {
  const parts = [`# All Modal Path Ethics Articles\n\nGenerated: ${generatedAt}\n`];
  for (const item of items) {
    parts.push(`\n<!-- ARTICLE_START slug="${item.slug}" title="${item.title.replaceAll('"', '&quot;')}" published_at="${item.published_at}" -->\n`);
    parts.push(articleBodies.get(item.slug));
    parts.push(`\n<!-- ARTICLE_END slug="${item.slug}" -->\n`);
  }
  return parts.join("\n");
}

function buildRss(items, generatedAt) {
  const entries = items.slice(0, 50).map(item => `
    <item>
      <title>${xmlEscape(item.title)}</title>
      <link>${xmlEscape(item.mirror_html_url)}</link>
      <guid>${xmlEscape(item.mirror_html_url)}</guid>
      <pubDate>${new Date(item.published_at).toUTCString()}</pubDate>
      <description>${xmlEscape(item.excerpt || "")}</description>
    </item>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Modal Path Ethics Mirror</title>
    <link>${xmlEscape(MIRROR_BASE_URL)}</link>
    <description>Static mirror of published Modal Path Ethics articles.</description>
    <lastBuildDate>${new Date(generatedAt).toUTCString()}</lastBuildDate>
    ${entries}
  </channel>
</rss>
`;
}

function buildSitemap(items) {
  const urls = [
    `${MIRROR_BASE_URL}/`,
    `${MIRROR_BASE_URL}/llms.txt`,
    `${MIRROR_BASE_URL}/articles/index.md`,
    `${MIRROR_BASE_URL}/articles/all-articles.md`,
    ...items.flatMap(item => [item.mirror_markdown_url, item.mirror_html_url])
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${xmlEscape(u)}</loc></url>`).join("\n")}
</urlset>
`;
}

function buildHomeHtml(items, generatedAt) {
  const list = items.slice(0, 50).map(item => `<li>${dateOnly(item.published_at)} — <a href="${item.mirror_html_path}">${xmlEscape(item.title)}</a> · <a href="${item.mirror_markdown_path}">md</a></li>`).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Modal Path Ethics Mirror</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font: 18px/1.55 system-ui, -apple-system, Segoe UI, sans-serif; max-width: 960px; margin: 3rem auto; padding: 0 1rem; }
    code { background: #f3f3f3; padding: .1rem .25rem; border-radius: .25rem; }
  </style>
</head>
<body>
  <h1>Modal Path Ethics Mirror</h1>
  <p>Generated: ${xmlEscape(generatedAt)}</p>
  <ul>
    <li><a href="/llms.txt">llms.txt</a></li>
    <li><a href="/articles/index.md">Article index Markdown</a></li>
    <li><a href="/articles/index.json">Article index JSON</a></li>
    <li><a href="/articles/all-articles.md">All articles fallback</a></li>
    <li><a href="/tracks/current-track-status.md">Current track status</a></li>
  </ul>
  <h2>Recent articles</h2>
  <ul>${list}</ul>
</body>
</html>
`;
}

async function main() {
  const generatedAt = new Date().toISOString();
  const posts = await fetchAllPosts();

  await ensureDir("articles");

  const items = [];
  const articleBodies = new Map();

  for (const post of posts) {
    const slug = slugifyFilename(post.slug);
    const md = articleMarkdown(post, generatedAt);
    const html = articleHtml(post, `/articles/${slug}.md`);
    const published = post.published_at || generatedAt;
    const baseName = slug;

    await writeText(`articles/${baseName}.md`, md);
    await writeText(`articles/${baseName}.html`, html);

    articleBodies.set(slug, md);

    items.push({
      title: post.title,
      slug,
      published_at: published,
      updated_at: post.updated_at,
      canonical_url: post.url,
      excerpt: post.excerpt || "",
      tags: (post.tags || []).map(t => t.name).filter(Boolean),
      mirror_markdown_path: `/articles/${baseName}.md`,
      mirror_html_path: `/articles/${baseName}.html`,
      mirror_markdown_url: `${MIRROR_BASE_URL}/articles/${baseName}.md`,
      mirror_html_url: `${MIRROR_BASE_URL}/articles/${baseName}.html`,
      sha256_plaintext: sha256(post.plaintext || md)
    });
  }

  const indexObj = {
    generated_at: generatedAt,
    canonical_site: GHOST_API_URL,
    mirror_base_url: MIRROR_BASE_URL,
    article_count: items.length,
    articles: items
  };

  await writeText("articles/index.json", JSON.stringify(indexObj, null, 2) + "\n");
  await writeText("articles/index.md", buildIndexMarkdown(items, generatedAt));
  await writeText("articles/all-articles.md", buildAllArticles(items, articleBodies, generatedAt));
  await writeText("manifest.json", JSON.stringify(indexObj, null, 2) + "\n");
  await writeText("rss.xml", buildRss(items, generatedAt));
  await writeText("sitemap.xml", buildSitemap(items));
  await writeText("index.html", buildHomeHtml(items, generatedAt));

  // Refresh llms.txt with current generated date while preserving static pointers.
  await writeText("llms.txt", `# Modal Path Ethics Mirror

Generated: ${generatedAt}

This is a static mirror of published Modal Path Ethics articles.

Canonical public site:
${GHOST_API_URL}/

Primary article index:
${MIRROR_BASE_URL}/articles/index.md

Machine-readable article index:
${MIRROR_BASE_URL}/articles/index.json

All articles in one fallback file:
${MIRROR_BASE_URL}/articles/all-articles.md

Current track context:
${MIRROR_BASE_URL}/tracks/current-track-status.md

Religion/warfare carryover:
${MIRROR_BASE_URL}/tracks/religion-warfare-carryover.md

Project instructions:
${MIRROR_BASE_URL}/canon/chatgpt-project-instructions.md

Do not use draft files as substitutes for published article text unless Aidan Lawson explicitly instructs you to do so.
If an article page cannot be opened, list the exact failed URL and stop. Do not guess from memory or stale drafts.
`);

  console.log(`Synced ${items.length} posts from ${GHOST_API_URL}.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
