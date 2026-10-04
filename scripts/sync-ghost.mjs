import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import TurndownService from "turndown";

const GENERATOR_VERSION = "2.0.0";
const GHOST_API_URL = (process.env.GHOST_API_URL || "https://modalpathethics.com").replace(/\/$/, "");
const CANONICAL_SITE_URL = (process.env.CANONICAL_SITE_URL || "https://modalpathethics.com").replace(/\/$/, "");
const MIRROR_BASE_URL = (process.env.MIRROR_BASE_URL || "https://mirror.modalpathethics.com").replace(/\/$/, "");
const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY;

if (!GHOST_CONTENT_API_KEY) {
  console.error("Missing GHOST_CONTENT_API_KEY.");
  process.exit(1);
}

for (const [name, value] of Object.entries({ GHOST_API_URL, CANONICAL_SITE_URL, MIRROR_BASE_URL })) {
  if (!/^https?:\/\//i.test(value)) {
    console.error(`${name} must be an absolute http(s) URL.`);
    process.exit(1);
  }
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

function canonicalUrlFor(post) {
  if (post.url && /^https?:\/\//i.test(post.url)) return post.url;
  const slug = encodeURIComponent(post.slug || slugifyFilename(post.title));
  return `${CANONICAL_SITE_URL}/${slug}/`;
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

function articleMarkdown(post, item, generatedAt) {
  const html = stripGhostHtml(post.html || "");
  const mdBody = turndown.turndown(html).trim();
  const plain = post.plaintext || mdBody.replace(/[#*_>`~-]/g, "");

  const frontmatter = [
    "---",
    `title: "${yamlEscape(post.title)}"`,
    `slug: "${yamlEscape(item.slug)}"`,
    `canonical_url: "${yamlEscape(item.canonical_url)}"`,
    `mirror_url: "${yamlEscape(item.mirror_markdown_url)}"`,
    `published_at: "${yamlEscape(post.published_at)}"`,
    `updated_at: "${yamlEscape(post.updated_at)}"`,
    "tags:",
    ...(item.tags.length ? item.tags.map(t => `  - "${yamlEscape(t)}"`) : ["  []"]),
    "authors:",
    ...(item.authors.length ? item.authors.map(a => `  - "${yamlEscape(a)}"`) : ["  []"]),
    `source: "Ghost Content API — published post"`,
    `mirror_generated_at: "${generatedAt}"`,
    `mirror_generator_version: "${GENERATOR_VERSION}"`,
    `sha256_plaintext: "${sha256(plain)}"`,
    "---",
    ""
  ].join("\n");

  const titleLine = mdBody.startsWith("# ") ? "" : `# ${post.title}\n\n`;
  return `${frontmatter}${titleLine}${mdBody}\n`;
}

function articleHtml(post, item, generatedAt) {
  const title = xmlEscape(post.title);
  const body = stripGhostHtml(post.html || "");
  const tags = item.tags.length ? item.tags.map(xmlEscape).join(" · ") : "—";
  const authors = item.authors.length ? item.authors.map(xmlEscape).join(", ") : "—";

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title} — Modal Path Ethics Mirror</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, noarchive">
  <link rel="canonical" href="${xmlEscape(item.canonical_url)}">
  <style>
    :root { color-scheme: dark; --bg:#0b0b0b; --panel:#121212; --fg:#ece7db; --muted:#9c9689; --line:#3c372e; --accent:#d2a94d; }
    * { box-sizing: border-box; }
    body { margin:0; background:var(--bg); color:var(--fg); font:18px/1.68 ui-serif, Georgia, serif; }
    main { max-width:900px; margin:0 auto; padding:48px 20px 80px; }
    .mirrorbar { font:13px/1.5 ui-monospace, SFMono-Regular, Consolas, monospace; color:var(--muted); border:1px solid var(--line); background:var(--panel); padding:14px 16px; margin-bottom:32px; }
    .mirrorbar strong { color:var(--accent); letter-spacing:.06em; }
    a { color:var(--accent); }
    h1,h2,h3,h4 { line-height:1.18; }
    img, video { max-width:100%; height:auto; }
    pre { overflow:auto; background:#151515; border:1px solid var(--line); padding:16px; }
    code { background:#171717; padding:.08rem .25rem; }
    blockquote { border-left:3px solid var(--accent); margin-left:0; padding-left:1rem; color:#c8c1b4; }
    hr { border:0; border-top:1px solid var(--line); margin:2rem 0; }
    .meta { color:var(--muted); font-size:.88rem; }
  </style>
</head>
<body>
<main>
  <div class="mirrorbar">
    <strong>MODAL PATH ETHICS — STATIC MIRROR</strong><br>
    Published corpus fallback. Canonical source: <a href="${xmlEscape(item.canonical_url)}">modalpathethics.com</a><br>
    <a href="/articles/${item.slug}.md">Markdown</a> · <a href="/">Mirror index</a>
  </div>
  <h1>${title}</h1>
  <p class="meta">Published ${dateOnly(item.published_at)} · Updated ${dateOnly(item.updated_at)} · ${authors}<br>Tags: ${tags}<br>Mirror generated ${xmlEscape(generatedAt)}</p>
  ${body}
</main>
</body>
</html>
`;
}

function buildIndexMarkdown(items, generatedAt) {
  const rows = items.map(item => `- ${dateOnly(item.published_at)} — [${item.title}](${item.mirror_markdown_path}) ([HTML](${item.mirror_html_path})) · [canonical](${item.canonical_url})`).join("\n");
  return `# Modal Path Ethics — Published Article Index

Mirror generated: ${generatedAt}

Canonical publication: ${CANONICAL_SITE_URL}

Mirror: ${MIRROR_BASE_URL}

Published article count: ${items.length}

${rows}
`;
}

function buildAllArticles(items, articleBodies, generatedAt) {
  const parts = [`# All Published Modal Path Ethics Articles\n\nMirror generated: ${generatedAt}\n\nCanonical publication: ${CANONICAL_SITE_URL}\n`];
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
      <link>${xmlEscape(item.canonical_url)}</link>
      <guid isPermaLink="false">${xmlEscape(item.mirror_html_url)}</guid>
      <pubDate>${new Date(item.published_at).toUTCString()}</pubDate>
      <description>${xmlEscape(item.excerpt || "")}</description>
    </item>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Modal Path Ethics — Static Mirror</title>
    <link>${xmlEscape(CANONICAL_SITE_URL)}</link>
    <description>Machine-readable mirror feed for published Modal Path Ethics articles.</description>
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
    `${MIRROR_BASE_URL}/manifest.json`,
    `${MIRROR_BASE_URL}/articles/index.md`,
    `${MIRROR_BASE_URL}/articles/index.json`,
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
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Modal Path Ethics — Static Mirror</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, noarchive">
  <link rel="canonical" href="${xmlEscape(CANONICAL_SITE_URL)}/">
  <style>
    :root { color-scheme: dark; --bg:#090909; --panel:#111; --panel2:#151515; --fg:#eee9df; --muted:#989185; --line:#39342c; --accent:#d0a84c; --ok:#8fae8d; }
    * { box-sizing:border-box; }
    body { margin:0; background:linear-gradient(180deg,#090909 0,#0d0c0a 100%); color:var(--fg); font:16px/1.55 system-ui,-apple-system,Segoe UI,sans-serif; min-height:100vh; }
    main { max-width:1120px; margin:0 auto; padding:56px 22px 90px; }
    .eyebrow { font:12px/1.4 ui-monospace,SFMono-Regular,Consolas,monospace; color:var(--accent); letter-spacing:.16em; }
    h1 { font:700 clamp(2rem,5vw,4.4rem)/.98 ui-serif,Georgia,serif; margin:.45rem 0 1rem; max-width:900px; }
    .lede { max-width:780px; color:#c6c0b5; font-size:1.05rem; }
    .status { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:10px; margin:28px 0; }
    .card { background:rgba(18,18,18,.92); border:1px solid var(--line); padding:16px; min-height:86px; }
    .label { color:var(--muted); font:11px/1.4 ui-monospace,SFMono-Regular,Consolas,monospace; letter-spacing:.08em; text-transform:uppercase; }
    .value { margin-top:5px; font-size:1.05rem; overflow-wrap:anywhere; }
    .ok { color:var(--ok); }
    a { color:var(--accent); }
    .tools { display:flex; flex-wrap:wrap; gap:9px; margin:18px 0 34px; }
    .tools a { text-decoration:none; border:1px solid var(--line); background:var(--panel); padding:9px 11px; }
    .searchbox { position:sticky; top:0; z-index:3; padding:12px 0; background:linear-gradient(180deg,var(--bg) 72%,transparent); }
    input { width:100%; font:16px/1.4 ui-monospace,SFMono-Regular,Consolas,monospace; color:var(--fg); background:#0d0d0d; border:1px solid #5a5142; padding:14px 15px; outline:none; }
    input:focus { border-color:var(--accent); box-shadow:0 0 0 1px var(--accent); }
    .resultmeta { color:var(--muted); font-size:.86rem; margin:10px 0; }
    #results { display:grid; gap:8px; }
    .result { background:var(--panel); border:1px solid #28251f; padding:14px 15px; }
    .result:hover { border-color:#514938; background:var(--panel2); }
    .title { font:600 1rem/1.3 ui-serif,Georgia,serif; }
    .excerpt { color:#aaa399; margin-top:5px; font-size:.92rem; }
    .sub { color:var(--muted); font:12px/1.45 ui-monospace,SFMono-Regular,Consolas,monospace; margin-top:7px; }
    footer { color:var(--muted); margin-top:44px; border-top:1px solid var(--line); padding-top:18px; font-size:.86rem; }
    @media (max-width:760px){ .status{grid-template-columns:1fr 1fr;} }
    @media (max-width:480px){ .status{grid-template-columns:1fr;} main{padding-top:36px;} }
  </style>
</head>
<body>
<main>
  <div class="eyebrow">FAILURE-RESISTANT PUBLICATION LAYER</div>
  <h1>Modal Path Ethics<br>Static Mirror</h1>
  <p class="lede">A plain, independently generated copy of the <strong>published</strong> Modal Path Ethics corpus. The canonical publication remains <a href="${xmlEscape(CANONICAL_SITE_URL)}">modalpathethics.com</a>. This mirror exists for retrieval, provenance, archival fallback, and machine access.</p>

  <section class="status" aria-label="Mirror status">
    <div class="card"><div class="label">Status</div><div class="value ok">HEALTHY / SYNCED</div></div>
    <div class="card"><div class="label">Published documents</div><div class="value">${items.length}</div></div>
    <div class="card"><div class="label">Last mirror build</div><div class="value">${xmlEscape(generatedAt)}</div></div>
    <div class="card"><div class="label">Canonical source</div><div class="value">modalpathethics.com</div></div>
  </section>

  <nav class="tools" aria-label="Machine-readable outputs">
    <a href="/articles/index.md">Article index · Markdown</a>
    <a href="/articles/index.json">Article index · JSON</a>
    <a href="/articles/all-articles.md">Full corpus · Markdown</a>
    <a href="/manifest.json">Manifest</a>
    <a href="/llms.txt">llms.txt</a>
    <a href="/rss.xml">RSS</a>
    <a href="/sitemap.xml">Sitemap</a>
    <a href="/meta/provenance.json">Provenance</a>
  </nav>

  <div class="searchbox">
    <input id="search" type="search" placeholder="Search published titles, excerpts, tags, authors…" autocomplete="off" aria-label="Search mirror">
  </div>
  <div class="resultmeta" id="resultmeta">Loading article index…</div>
  <section id="results" aria-live="polite"></section>

  <footer>
    Mirror generator v${GENERATOR_VERSION}. Only posts returned by Ghost's public Content API are mirrored. Draft and preview URLs are not part of this corpus.
  </footer>
</main>
<script>
(() => {
  const input = document.getElementById('search');
  const results = document.getElementById('results');
  const meta = document.getElementById('resultmeta');
  let articles = [];

  const norm = value => String(value || '').toLowerCase();
  const clear = node => { while (node.firstChild) node.removeChild(node.firstChild); };

  function render(list, query) {
    clear(results);
    const shown = list.slice(0, 100);
    meta.textContent = query
      ? (list.length + ' match' + (list.length === 1 ? '' : 'es') + (list.length > 100 ? ' · showing first 100' : ''))
      : (articles.length + ' published articles · showing newest ' + Math.min(100, articles.length));

    for (const item of shown) {
      const card = document.createElement('article');
      card.className = 'result';

      const title = document.createElement('div');
      title.className = 'title';
      const link = document.createElement('a');
      link.href = item.mirror_html_path;
      link.textContent = item.title;
      title.appendChild(link);

      const excerpt = document.createElement('div');
      excerpt.className = 'excerpt';
      excerpt.textContent = item.excerpt || '';

      const sub = document.createElement('div');
      sub.className = 'sub';
      const tags = (item.tags || []).join(' · ');
      sub.textContent = String(item.published_at || '').slice(0,10) + (tags ? ' · ' + tags : '');

      const links = document.createElement('div');
      links.className = 'sub';
      const md = document.createElement('a');
      md.href = item.mirror_markdown_path;
      md.textContent = 'markdown';
      const canonical = document.createElement('a');
      canonical.href = item.canonical_url;
      canonical.textContent = 'canonical';
      links.append(md, document.createTextNode(' · '), canonical);

      card.append(title, excerpt, sub, links);
      results.appendChild(card);
    }
  }

  function search() {
    const q = norm(input.value).trim();
    if (!q) return render(articles, '');
    const terms = q.split(/\\s+/).filter(Boolean);
    const matched = articles.filter(item => {
      const hay = norm([item.title, item.excerpt, ...(item.tags || []), ...(item.authors || [])].join(' '));
      return terms.every(term => hay.includes(term));
    });
    render(matched, q);
  }

  fetch('/articles/index.json', { cache: 'no-store' })
    .then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(data => {
      articles = data.articles || [];
      render(articles, '');
      input.addEventListener('input', search);
    })
    .catch(err => {
      meta.textContent = 'Article index unavailable: ' + err.message;
    });
})();
</script>
</body>
</html>
`;
}

function build404Html() {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Not found — Modal Path Ethics Mirror</title><style>body{margin:0;background:#0a0a0a;color:#eee8dc;font:18px/1.6 system-ui,sans-serif;display:grid;place-items:center;min-height:100vh}main{max-width:720px;padding:24px}a{color:#d0a84c}code{color:#c7bea9}</style></head><body><main><h1>Mirror path not found.</h1><p>This mirror only retains files generated from currently published Modal Path Ethics posts and its machine-readable indexes.</p><p><a href="/">Return to mirror index</a> · <a href="${xmlEscape(CANONICAL_SITE_URL)}">Open canonical publication</a></p></main></body></html>`;
}

function buildLlmsTxt(items, generatedAt) {
  return `# Modal Path Ethics — Static Mirror

Purpose: retrieval and archival fallback for PUBLISHED Modal Path Ethics articles.

Canonical publication:
${CANONICAL_SITE_URL}/

Mirror base:
${MIRROR_BASE_URL}/

Mirror generated:
${generatedAt}

Published article count:
${items.length}

Primary article index (Markdown):
${MIRROR_BASE_URL}/articles/index.md

Machine-readable article index (JSON):
${MIRROR_BASE_URL}/articles/index.json

Full published corpus (Markdown):
${MIRROR_BASE_URL}/articles/all-articles.md

Manifest:
${MIRROR_BASE_URL}/manifest.json

Provenance metadata:
${MIRROR_BASE_URL}/meta/provenance.json

Retrieval rules:
- This mirror contains published posts only.
- The canonical article URL in each record is authoritative for publication identity.
- Use mirror Markdown as a fallback when the canonical article cannot be retrieved.
- Do not infer draft, scheduled, preview, or deleted content from this mirror.
- Do not treat absence from the mirror as evidence that a draft does not exist.
`;
}

async function main() {
  const generatedAt = new Date().toISOString();
  const posts = await fetchAllPosts();

  // Rebuild generated article output from scratch so unpublished/deleted posts
  // disappear from the mirror on the next successful sync.
  await fs.rm("articles", { recursive: true, force: true });
  await ensureDir("articles");
  await ensureDir("meta");

  const items = [];
  const articleBodies = new Map();

  for (const post of posts) {
    const slug = slugifyFilename(post.slug);
    const canonicalUrl = canonicalUrlFor(post);
    const publishedAt = post.published_at || generatedAt;
    const tags = (post.tags || []).map(t => t.name).filter(Boolean);
    const authors = (post.authors || []).map(a => a.name).filter(Boolean);

    const item = {
      title: post.title,
      slug,
      published_at: publishedAt,
      updated_at: post.updated_at,
      canonical_url: canonicalUrl,
      excerpt: post.excerpt || "",
      tags,
      authors,
      mirror_markdown_path: `/articles/${slug}.md`,
      mirror_html_path: `/articles/${slug}.html`,
      mirror_markdown_url: `${MIRROR_BASE_URL}/articles/${slug}.md`,
      mirror_html_url: `${MIRROR_BASE_URL}/articles/${slug}.html`
    };

    const md = articleMarkdown(post, item, generatedAt);
    item.sha256_plaintext = sha256(post.plaintext || md);
    const html = articleHtml(post, item, generatedAt);

    await writeText(`articles/${slug}.md`, md);
    await writeText(`articles/${slug}.html`, html);
    articleBodies.set(slug, md);
    items.push(item);
  }

  const indexObj = {
    schema_version: 2,
    generator_version: GENERATOR_VERSION,
    generated_at: generatedAt,
    source_api: GHOST_API_URL,
    canonical_site: CANONICAL_SITE_URL,
    mirror_base_url: MIRROR_BASE_URL,
    corpus_scope: "published Ghost posts only",
    article_count: items.length,
    articles: items
  };

  const provenance = {
    schema_version: 1,
    generator: "mpe-static-mirror",
    generator_version: GENERATOR_VERSION,
    generated_at: generatedAt,
    source_api: GHOST_API_URL,
    canonical_site: CANONICAL_SITE_URL,
    mirror_base_url: MIRROR_BASE_URL,
    selection_rule: "All posts returned by Ghost Content API /posts endpoint using the configured public Content API key.",
    excludes: ["drafts", "scheduled posts not returned as published", "preview URLs", "deleted/unpublished posts after next successful sync"],
    integrity: "Each article record includes sha256_plaintext over Ghost plaintext when available, otherwise generated Markdown."
  };

  await writeText("articles/index.json", JSON.stringify(indexObj, null, 2) + "\n");
  await writeText("articles/index.md", buildIndexMarkdown(items, generatedAt));
  await writeText("articles/all-articles.md", buildAllArticles(items, articleBodies, generatedAt));
  await writeText("manifest.json", JSON.stringify(indexObj, null, 2) + "\n");
  await writeText("meta/provenance.json", JSON.stringify(provenance, null, 2) + "\n");
  await writeText("rss.xml", buildRss(items, generatedAt));
  await writeText("sitemap.xml", buildSitemap(items));
  await writeText("index.html", buildHomeHtml(items, generatedAt));
  await writeText("404.html", build404Html());
  await writeText("llms.txt", buildLlmsTxt(items, generatedAt));

  console.log(`Mirror v${GENERATOR_VERSION}: synced ${items.length} published posts from ${GHOST_API_URL}.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
