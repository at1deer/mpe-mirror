# Modal Path Ethics Static Mirror

This repository builds the public fallback at **https://mirror.modalpathethics.com** from the published Modal Path Ethics corpus.

## Purpose

The mirror is deliberately simpler than the canonical Ghost site. It exists for:

- reliable retrieval when Ghost/browser tooling fails;
- stable Markdown and plain HTML fallbacks;
- machine-readable indexes and corpus export;
- publication provenance and integrity hashes;
- recovery of currently published text without relying on chat memory or stale drafts.

The canonical publication is **https://modalpathethics.com**.

## Data flow

```text
Ghost Content API (published posts only)
        ↓
GitHub Actions sync every six hours
        ↓
Static Markdown / HTML / JSON / RSS / sitemap
        ↓
Cloudflare Pages
        ↓
https://mirror.modalpathethics.com
```

## Important scope rule

The generator rebuilds `/articles` from scratch on every successful sync. Posts that are unpublished or deleted therefore disappear from the mirror at the next successful run.

Drafts, scheduled posts that are not publicly returned by the Ghost Content API, and `/p/<uuid>/` preview URLs are not mirrored.

## GitHub configuration

Required repository secret:

- `GHOST_CONTENT_API_KEY`

Optional repository variable:

- `GHOST_API_URL` — defaults locally to `https://modalpathethics.com`; the existing deployment may use the Ghost origin if that is more reliable.

The workflow pins these deployment identities directly:

```text
CANONICAL_SITE_URL=https://modalpathethics.com
MIRROR_BASE_URL=https://mirror.modalpathethics.com
```

This prevents an old GitHub variable from causing generated mirror links to point to `modal-path-ethics.ghost.io`.

## Local sync

```bash
npm install
GHOST_API_URL="https://modalpathethics.com" \
GHOST_CONTENT_API_KEY="..." \
CANONICAL_SITE_URL="https://modalpathethics.com" \
MIRROR_BASE_URL="https://mirror.modalpathethics.com" \
npm run sync
```

## Generated outputs

```text
/index.html
/404.html
/llms.txt
/manifest.json
/rss.xml
/sitemap.xml
/meta/provenance.json
/articles/index.md
/articles/index.json
/articles/all-articles.md
/articles/<slug>.md
/articles/<slug>.html
```

## Historical files

Old `/canon` and `/tracks` files were manually maintained project-context aids, not part of the published corpus. Mirror v2 no longer links to them or presents them as current machine orientation. They can be deleted from the repository after verifying the new mirror build.
