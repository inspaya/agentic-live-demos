# Production artifact contract

This directory is a **build artifact**, not source. It is produced by
`pnpm run build:pages:sync` in the app repo and committed here only because
GitHub Pages serves files straight from git.

- **App source of truth:** `agentic_coding_live_demos/001_danga_lead_gen/danga-lead-gen`
- **Operational runbook (read this):** `RUNBOOK.md` in that repo — see §2.1
  *Production contract* for the invariants and §6.1 for the deploy procedure.
- **Rebuild with:** `pnpm run build:pages:sync` from the app repo. Never hand-edit
  anything in `dist/`; the next build overwrites it.

## Invariants this artifact must satisfy

Enforced automatically — `scripts/build-pages.mjs` aborts the build on #6, and
`scripts/check-dist-paths.py` (run in CI) enforces #4 and #5:

1. Every registered placement code has a page at `dist/l/<code>.html`.
2. Retiring a placement (`active: false`) never removes its page.
3. Retirement changes only validity/analytics, never resolution.
4. Production QR URLs use the HTTPS Pages origin
   (`https://inspaya.github.io/agentic-live-demos/001_danga_lead_gen_qr/dist`).
5. No localhost/loopback URLs anywhere in the artifact.
6. The build fails if a registered placement has no generated page.
7. Unknown codes may 404 on Pages but reach the recovery experience via the
   repo-root `404.html` shim.

## Why `dist/` contains `server/`, `static/` and flattened HTML side by side

Pages serves only the flattened files at the root: `index.html`,
`l/<code>.html`, `_next/static/…`. The `server/` and `static/` trees are build
intermediates that the flatten step copies rather than moves, so they survive in
the artifact. They are inert on Pages — nothing links to them — but they are
also why `dist/` is larger than the pages it serves.

**Do not try to `next start` this directory.** It is a static-hosting artifact,
not a server build: Next 16 answers every route with a 308 to the base path
root, with or without `PAGES_BASE_PATH` exported. Verified, not assumed.

That matters for how you check a change:

| Goal | Use |
|---|---|
| Check app behaviour (cookies, attribution, banners) | `pnpm build && pnpm start` in the app repo, or `pnpm e2e` |
| Check the **published** artifact | `scripts/check-dist-paths.py` + a static file server over `dist/` |

`pnpm e2e` rebuilds `dist/` with the plain localhost build, so always re-run
`pnpm build:pages:sync` before committing `dist/` — otherwise the committed
artifact silently reverts to a localhost, non-flattened build.

## Reproducibility

`dist/` rebuilds byte-identically from unchanged source, so a Pages diff shows
only what actually changed. Next.js is pinned to a build ID derived from a hash
of its inputs (`generateBuildId` in the app repo's `next.config.ts`); left to
default it mints a random ID per build and rewrites ~500 files every time.

Three manifests still differ between two builds of identical source, because
Next generates fresh random secrets in them:

- `prerender-manifest.json` — `previewModeId`, `previewModeSigningKey`,
  `previewModeEncryptionKey`
- `server/server-reference-manifest.{json,js}` — `encryptionKey`

Those are preview-mode/Server-Action secrets for a server runtime. A static
Pages deployment never reads them. Two consequences worth knowing:

1. Expect exactly these three to churn on every publish.
2. They are **committed signing keys in a public repository**, freshly generated
   each build. Harmless while this app has no preview mode or draft content, but
   do not add gated draft content without stripping or pinning them first.

## Known cosmetic gap

`dist/favicon.ico` is a **directory** (the flattened `favicon.ico` route), so
the `<link rel="icon">` in each page does not resolve on Pages and the browser
falls back to `/favicon.ico`. This predates the current build and is cosmetic
only — the icon asset itself ships at
`dist/_next/static/media/favicon.2vob68tjqpejf.ico`.
