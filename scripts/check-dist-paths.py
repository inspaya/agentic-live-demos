#!/usr/bin/env python3
"""Fail if any demo export contains domain-absolute links.

GitHub Project Pages serve this repo under
`/<owner>.github.io/agentic-live-demos/`, so a domain-absolute URL such as
`href="/_next/..."` or `href="/offer"` 404s. Every demo MUST be built with a
`basePath` (or equivalent) matching its Pages subpath, e.g.
`/agentic-live-demos/001_danga_lead_gen_qr/dist`.

Usage:
  python3 scripts/check-dist-paths.py [--fix-hint]
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
# href="/..." / src="/..." / srcset="/..." / action="/..." / url(/...) —
# but NOT protocol-relative "//..." and NOT the Pages subpath prefix.
ABS_RE = re.compile(r'''(?:href|src|srcset|action)="((?:/(?!/))[^"]*)"''')
CSS_URL_RE = re.compile(r'''url\(\s*"((?:/(?!/))[^"]*)"\s*\)|url\(\s*((?:/(?!/))[^\s)]+)\s*\)''')
ALLOWED_PREFIX = "/agentic-live-demos/"
EXCLUDE_DIRS = {".git", ".github", "scripts", "node_modules"}


def scan():
    problems = []
    for html in sorted(ROOT.rglob("*.html")):
        try:
            rel = html.relative_to(ROOT)
        except ValueError:
            continue
        if rel.parts[0] in EXCLUDE_DIRS:
            continue
        if rel.name == "index.html" and len(rel.parts) == 1:
            continue  # root card index uses relative links by design
        text = html.read_text(encoding="utf-8", errors="replace")
        for i, line in enumerate(text.splitlines(), 1):
            hits = [m.group(1) or m.group(2) for m in CSS_URL_RE.finditer(line)]
            hits += [m.group(1) for m in ABS_RE.finditer(line)]
            for url in hits:
                if not url or url.startswith(ALLOWED_PREFIX):
                    continue
                problems.append(f"{rel}:{i}: {url[:100]}")
    return problems


def main():
    problems = scan()
    if problems:
        print(f"FAIL: {len(problems)} domain-absolute URL(s) would 404 on Project Pages:")
        for p in problems[:30]:
            print(f"  {p}")
        if len(problems) > 30:
            print(f"  …and {len(problems) - 30} more")
        print("\nRebuild the demo with its Pages subpath as basePath, e.g.")
        print("  PAGES_BASE_PATH=/agentic-live-demos/<folder>/dist pnpm build")
        sys.exit(1)
    print("OK: no domain-absolute URLs in demo exports.")


if __name__ == "__main__":
    main()
