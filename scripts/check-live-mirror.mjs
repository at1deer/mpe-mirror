import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const base = (process.env.MIRROR_BASE_URL || "https://mirror.modalpathethics.com").replace(/\/$/, "");
const maxAgeHours = Number(process.env.MAX_MIRROR_AGE_HOURS || 12);

function responseDiagnostics(response) {
  const names = ["server", "cf-ray", "cf-mitigated", "cf-cache-status",
    "content-type", "location", "age", "retry-after"];
  return JSON.stringify({
    status: response.status,
    finalUrl: response.url,
    headers: Object.fromEntries(names.map(name => [name, response.headers.get(name)]))
  });
}

async function probe(url) {
  const response = await fetch(url, {
    headers: { "Cache-Control": "no-cache" },
    signal: AbortSignal.timeout(30000),
  });
  const body = await response.text();
  if (!response.ok) {
    console.error("HTTP failure:", responseDiagnostics(response));
    // Log only a short, normalized title, not arbitrary response HTML.
    const title = body.match(/<title[^>]*>([^<]{1,200})<\/title>/i)?.[1];
    if (title) console.error("Response page title:", JSON.stringify(title.replace(/\s+/g, " ").trim()));
  }
  return { response, body };
}

async function request(relativePath) {
  const plainUrl = new URL(relativePath, base);
  const url = new URL(plainUrl);
  // Unique query avoids previously cached copies when testing the live deployment.
  url.searchParams.set("mirror_smoke", String(Date.now()));
  const result = await probe(url);
  if (result.response.status !== 200) {
    // The stable public URL matters independently of the cache-busting probe.
    // A successful stable request is diagnostic only: do not conceal probe failure.
    try {
      const plain = await probe(plainUrl);
      console.error("Stable URL comparison:", responseDiagnostics(plain.response));
    } catch (error) {
      console.error("Stable URL comparison failed:", error.message);
    }
    assert.equal(result.response.status, 200, `${url}: HTTP ${result.response.status}`);
  }
  return result;
}

function sha256(content) {
  return createHash("sha256").update(content, "utf8").digest("hex");
}

function assertType(response, expected, path) {
  const actual = response.headers.get("content-type") || "";
  assert.ok(actual.toLowerCase().startsWith(expected), `${path}: expected ${expected}, got ${actual}`);
}

async function main() {
  const local = JSON.parse(await readFile("articles/index.json", "utf8"));
  const { response: indexResponse, body: indexBody } = await request("/articles/index.json");
  assertType(indexResponse, "application/json", "articles/index.json");
  const live = JSON.parse(indexBody);
  assert.equal(live.canonical_site, "https://modalpathethics.com", "Unexpected canonical site");
  assert.ok(live.article_count > 0 && live.articles.length === live.article_count, "Malformed live index");
  assert.equal(live.article_count, local.article_count, "Live corpus count differs from GitHub");
  assert.equal(live.generated_at, local.generated_at, "Live index is not the current GitHub build");
  const ageHours = (Date.now() - Date.parse(live.generated_at)) / 3600000;
  assert.ok(Number.isFinite(ageHours) && ageHours >= -0.25 && ageHours < maxAgeHours,
    `Live index age is ${ageHours.toFixed(2)} hours`);

  const { response: manifestResponse, body: manifestBody } = await request("/manifest.json");
  assertType(manifestResponse, "application/json", "manifest.json");
  const manifest = JSON.parse(manifestBody);
  assert.equal(manifest.article_count, live.article_count, "Manifest/index article count mismatch");
  assert.equal(manifest.generated_at, live.generated_at, "Manifest/index generation mismatch");

  const article = live.articles[0];
  assert.ok(article?.mirror_markdown_path && article?.mirror_html_path, "Article paths missing");
  const mdPath = article.mirror_markdown_path;
  const { response: mdResponse, body: markdown } = await request(mdPath);
  assertType(mdResponse, "text/plain", mdPath);
  const localMarkdown = await readFile(mdPath.slice(1), "utf8");
  assert.equal(sha256(markdown), sha256(localMarkdown), "Served Markdown differs from GitHub");
  assert.ok(markdown.startsWith("---\n") && markdown.includes(`slug: "${article.slug}"`),
    "Served Markdown is not a full article with expected provenance");

  const htmlPath = article.mirror_html_path;
  const { response: htmlResponse, body: html } = await request(htmlPath);
  assertType(htmlResponse, "text/html", htmlPath);
  const localHtml = await readFile(htmlPath.slice(1), "utf8");
  assert.equal(sha256(html), sha256(localHtml), "Served HTML differs from GitHub");

  console.log(`PASS mirror: ${live.article_count} articles, generated ${live.generated_at}, sample ${article.slug}`);
  console.log(`PASS live Markdown MIME and exact SHA-256: ${sha256(markdown)}`);
  console.log("PASS index, manifest, and HTML match GitHub");
}

main().catch(error => {
  console.error("FAIL live mirror retrieval:", error);
  process.exitCode = 1;
});
