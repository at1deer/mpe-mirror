# MPE Mirror Setup Checklist

## Ghost

- [ ] Ghost Admin → Settings → Integrations.
- [ ] Add custom integration: `MPE Mirror`.
- [ ] Copy Content API Key.
- [ ] Confirm API URL. Usually `https://modalpathethics.com`.

## GitHub

- [ ] Create repo: `mpe-mirror` or `modal-path-ethics-mirror`.
- [ ] Push this starter package.
- [ ] Add repository secret:
  - `GHOST_CONTENT_API_KEY`
- [ ] Add repository variables:
  - `GHOST_API_URL` = `https://modalpathethics.com`
  - `MIRROR_BASE_URL` = `https://mirror.modalpathethics.com`
- [ ] Run Actions → Sync Ghost mirror → Run workflow.
- [ ] Confirm generated article files committed.

## Cloudflare Pages

- [ ] Workers & Pages → Create application → Pages → Connect to Git.
- [ ] Select mirror repo.
- [ ] Framework preset: None / Static HTML.
- [ ] Build command: leave blank.
- [ ] Output directory: `/`.
- [ ] Deploy.
- [ ] Add custom domain: `mirror.modalpathethics.com`.

## Smoke test

Open:

- [ ] `https://mirror.modalpathethics.com/llms.txt`
- [ ] `https://mirror.modalpathethics.com/articles/index.md`
- [ ] `https://mirror.modalpathethics.com/articles/index.json`
- [ ] `https://mirror.modalpathethics.com/articles/all-articles.md`
- [ ] `https://mirror.modalpathethics.com/tracks/current-track-status.md`

Then test five known problem articles by slug.
