#!/usr/bin/env python3
"""Fail if any demo export cannot work on GitHub Project Pages.

Project Pages serves this repo under `/<owner>.github.io/<repo>/`, so a
domain-absolute URL such as `href="/_next/..."` or `href="/offer"` 404s. Every
demo MUST be built with a `basePath` matching its Pages subpath, e.g.
`/<repo>/001_danga_lead_gen_qr/dist`.

Three independent failure modes are checked. They have different causes and
different fixes, which is why they are separate rules:

  1. domain-absolute — an unprefixed site-root path. Cause: built without
     `basePath`.
  2. loopback origin — `localhost` / `127.0.0.1` inlined in the output. Cause:
     `NEXT_PUBLIC_*` is inlined at build time, so a `.env.local` left on
     `http://localhost:3000` ships localhost canonical links, metadataBase and
     QR targets into production. This shipped once already (commit b155310 set
     only PAGES_BASE_PATH), which is why it is a rule of its own.
  3. off-subpath absolute — a URL on this Pages host that skips the
     `/<repo>/` prefix. Cause: `NEXT_PUBLIC_SITE_URL` set without
     `PAGES_BASE_PATH`, i.e. rule 1's inverse.

A fourth failure mode — a registered placement shipping without its
`dist/l/<code>.html`, which is a live 404 on static hosting — is checked at
build time by `scripts/build-pages.mjs` in the app repo instead. That check
needs both `src/data/placements.json` and `dist/`, and failing the build
prevents the bad artifact from existing at all, which is strictly better than
catching it in Pages CI afterwards.

**Rules 2 and 3 scan every text artifact under `dist/`, vendor chunks
included.** Next's own runtime does reference legitimate absolute URLs
(`react.dev/errors`, `nextjs.org/docs`, `w3.org` SVG namespaces) — that is why
those hosts are not policed — but it never references a loopback origin, and
rule 3 only fires on this site's own host. Excluding files wholesale previously
hid the bug in `static/chunks/2hge6nry4v6i0.js`, which is exactly where the
inlined env value lives. Rule 1 stays HTML/CSS-only, because that is where DOM
references can appear.

Usage:
  python3 scripts/check-dist-paths.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

REPO_NAME = "agentic-live-demos"
PAGES_HOST = "inspaya.github.io"
ALLOWED_PREFIX = f"/{REPO_NAME}/"

# href="/..." / src="/..." / srcset="/..." / action="/..." / url(/...) —
# but NOT protocol-relative "//..." and NOT the Pages subpath prefix.
ABS_RE = re.compile(r'''(?:href|src|srcset|action)="((?:/(?!/))[^"]*)"''')
CSS_URL_RE = re.compile(
    r'''url\(\s*"((?:/(?!/))[^"]*)"\s*\)|url\(\s*((?:/(?!/))[^\s)]+)\s*\)'''
)
ABSOLUTE_URL_RE = re.compile(r'''https?://[^\s"'<>)\\]+''')

# Host via regex, not urllib: minified bundles contain fragments like
# "http://[a]" that make urlparse raise, and a guard must never crash on the
# very artifacts it inspects.
HOST_RE = re.compile(r"^https?://(\[[^\]]*\]|[^/:?#]+)", re.IGNORECASE)

BAD_HOST_RE = re.compile(
    r"^(localhost|127\.\d+\.\d+\.\d+|0\.0\.0\.0|\[?::1\]?|.*\.localhost|.*\.local)$",
    re.IGNORECASE,
)

# `.map` is excluded on purpose: source maps embed vendored doc comments, and
# Next's own sources contain literal "https://localhost" examples (e.g. in the
# `set()` docs) that have nothing to do with our build config.
SCAN_SUFFIXES = {".html", ".js", ".mjs", ".css", ".json", ".rsc", ".txt", ".xml"}
SKIP_DIR_PARTS = {"cache", "dev", "trace"}
EXCLUDE_DIRS = {".git", ".github", "scripts", "node_modules", "__pycache__"}


def html_artifacts():
    for html in sorted(ROOT.rglob("*.html")):
        rel = html.relative_to(ROOT)
        if rel.parts[0] in EXCLUDE_DIRS:
            continue
        yield rel, html


def text_artifacts():
    """Every text artifact under a demo dist/, vendor chunks included."""
    for dist in sorted(ROOT.glob("*/dist")):
        if not dist.is_dir():
            continue
        for path in sorted(dist.rglob("*")):
            if not path.is_file() or path.suffix.lower() not in SCAN_SUFFIXES:
                continue
            rel = path.relative_to(ROOT)
            if SKIP_DIR_PARTS & set(rel.parts):
                continue  # turbopack build cache, not shipped output
            yield rel, path


def scan():
    problems = []

    # --- rule 1: domain-absolute DOM references (HTML + CSS only) ---
    for rel, html in html_artifacts():
        if rel.name == "index.html" and len(rel.parts) == 1:
            continue  # root card index uses relative links by design
        text = html.read_text(encoding="utf-8", errors="replace")
        for i, line in enumerate(text.splitlines(), 1):
            hits = [m.group(1) or m.group(2) for m in CSS_URL_RE.finditer(line)]
            hits += [m.group(1) for m in ABS_RE.finditer(line)]
            for url in hits:
                if not url or url.startswith(ALLOWED_PREFIX):
                    continue
                problems.append((f"{rel}:{i}", url, "domain-absolute"))

    # --- rules 2 & 3: loopback origins and off-subpath absolute URLs ---
    for rel, path in text_artifacts():
        text = path.read_text(encoding="utf-8", errors="replace")
        seen = set()
        for m in ABSOLUTE_URL_RE.finditer(text):
            url = m.group(0)
            host_match = HOST_RE.match(url)
            host = (host_match.group(1) if host_match else "").lower()
            if not host or host in seen:
                continue
            seen.add(host)
            if BAD_HOST_RE.match(host):
                problems.append(
                    (str(rel), url[:120], "loopback origin inlined at build time")
                )
            elif host == PAGES_HOST and f"{PAGES_HOST}{ALLOWED_PREFIX}" not in url:
                problems.append(
                    (str(rel), url[:120], f"Pages URL missing the /{REPO_NAME}/ prefix")
                )
            # Other hosts are out of scope: vendored runtime legitimately
            # references react.dev, nextjs.org, w3.org and friends, and an
            # allowlist of them could never be complete enough to be useful.

    return problems


def main():
    problems = scan()
    if problems:
        print(f"FAIL: {len(problems)} URL(s) would break on Project Pages:")
        for where, url, kind in problems[:40]:
            print(f"  [{kind}]\n      {where}\n      {url}")
        if len(problems) > 40:
            print(f"  …and {len(problems) - 40} more")
        print(
            "\nRebuild with BOTH the subpath and the public origin, e.g.\n"
            "  node scripts/build-pages.mjs --sync --pages-repo <path-to-agentic-live-demos>\n"
            "\nNever rely on .env.local for a deploy build. NEXT_PUBLIC_* values are\n"
            "inlined at build time, so a localhost NEXT_PUBLIC_SITE_URL ships\n"
            "localhost canonical links and localhost QR URLs to production, and\n"
            "neither can be corrected without a full rebuild."
        )
        sys.exit(1)
    print("OK: no domain-absolute, loopback, or off-subpath URLs in demo exports.")


if __name__ == "__main__":
    main()