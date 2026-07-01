# Modal Path Ethics Static Mirror

This repo is a clean, static mirror for published Modal Path Ethics articles.

## What this mirror is for

- Stable Markdown article bodies.
- Stable HTML article pages for browser fallback.
- Machine-readable article indexes.
- Track carryover and current track status.

## Source hierarchy

1. Published article text mirrored from Ghost.
2. Canon and track files in `/canon` and `/tracks`.
3. Current working-chat instructions.
4. Drafts only when explicitly marked as drafts.

## Local sync

```bash
npm install
GHOST_API_URL="https://modalpathethics.com" \
GHOST_CONTENT_API_KEY="" \
MIRROR_BASE_URL="https://mirror.modalpathethics.com" \
npm run sync
```

## Generated files

After sync:

```text
/articles/index.md
/articles/index.json
/articles/all-articles.md
/articles/<slug>.md
/articles/<slug>.html
/manifest.json
/sitemap.xml
/rss.xml
/llms.txt
```
