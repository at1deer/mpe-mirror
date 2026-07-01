# Modal Path Ethics Static Mirror

This repo is a clean, static mirror for published Modal Path Ethics articles.

## What this mirror is for

- Stable Markdown article bodies for ChatGPT/project use.
- Stable HTML article pages for browser fallback.
- Machine-readable article indexes.
- Track carryover and current track status.
- No book PDF in the mirror.

## Source hierarchy

1. Published article text mirrored from Ghost.
2. Canon and track files in `/canon` and `/tracks`.
3. Current working-chat instructions.
4. Drafts only when explicitly marked as drafts.

## Quick setup

1. In Ghost Admin, create a Custom Integration and copy the Content API key.
2. Create a GitHub repo and push this starter package.
3. Add repository secret: `GHOST_CONTENT_API_KEY`.
4. Add repository variables:
   - `GHOST_API_URL` = `https://modalpathethics.com`
   - `MIRROR_BASE_URL` = `https://mirror.modalpathethics.com`
5. Run the GitHub Action: **Sync Ghost mirror**.
6. Connect the repo to Cloudflare Pages.
7. Add custom domain: `mirror.modalpathethics.com`.

## Local sync

```bash
npm install
GHOST_API_URL="https://modalpathethics.com" \
GHOST_CONTENT_API_KEY="your_content_api_key" \
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

## No book in mirror

The book PDF belongs in the ChatGPT Project only, not this public mirror.
