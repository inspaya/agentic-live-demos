#!/usr/bin/env python3
"""Regenerate root index.html from top-level demo folders.

Each top-level folder (excluding dot-folders, scripts, .github) becomes one card.
Optional per-folder meta.json:
  {"title": "...", "description": "...", "thumbnail": "preview.png", "entry": "dist/index.html"}

Entry auto-detection order (unless meta.json "entry" is set):
  <folder>/index.html -> <folder>/dist/index.html -> GitHub folder view (no live demo)

Usage:
  python3 scripts/generate-index.py [--check] [--repo owner/name]
"""
import argparse
import html
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EXCLUDE = {".git", ".github", ".vscode", "scripts", "node_modules", "__pycache__"}


def detect_repo() -> str:
    try:
        out = subprocess.run(
            ["git", "remote", "get-url", "origin"],
            cwd=ROOT, capture_output=True, text=True, timeout=10,
        )
        url = out.stdout.strip()
        m = re.search(r"[:/]([^/:]+/[^/]+?)(?:\.git)?$", url)
        if m:
            return m.group(1)
    except Exception:
        pass
    return "inspaya/agentic-live-demos"


def prettify(name: str) -> str:
    name = re.sub(r"^[0-9]+[_-]+", "", name)
    name = name.replace("_", " ").replace("-", " ").strip()
    return " ".join(w.capitalize() for w in name.split()) or name


def load_demos():
    demos = []
    for p in sorted(ROOT.iterdir()):
        if not p.is_dir() or p.name in EXCLUDE or p.name.startswith("."):
            continue
        meta = {}
        meta_path = p / "meta.json"
        if meta_path.is_file():
            try:
                meta = json.loads(meta_path.read_text())
            except json.JSONDecodeError as e:
                print(f"WARNING: {meta_path} invalid JSON: {e}", file=sys.stderr)
        title = meta.get("title") or prettify(p.name)
        description = meta.get("description") or ""
        thumbnail = meta.get("thumbnail") or ""
        entry = meta.get("entry")
        if entry:
            entry_path = f"{p.name}/{entry}"
        elif (p / "index.html").is_file():
            entry_path = f"{p.name}/index.html"
        elif (p / "dist" / "index.html").is_file():
            entry_path = f"{p.name}/dist/index.html"
        else:
            entry_path = ""
        thumb_src = f"{p.name}/{thumbnail}" if thumbnail and (p / thumbnail).is_file() else ""
        demos.append({
            "folder": p.name,
            "title": title,
            "description": description,
            "entry": entry_path,
            "thumbnail": thumb_src,
        })
    return demos


def card_html(d) -> str:
    folder = html.escape(d["folder"])
    title = html.escape(d["title"])
    desc = html.escape(d["description"])
    initials = html.escape("".join(w[0] for w in d["title"].split()[:2]).upper() or folder[:2].upper())
    if d["thumbnail"]:
        media = f'<img class="thumb" src="{html.escape(d["thumbnail"])}" alt="{title} preview" loading="lazy" onerror="this.remove()">'
    else:
        media = f'<div class="thumb thumb-fallback" aria-hidden="true"><span>{initials}</span></div>'
    if d["entry"]:
        actions = (
            f'<a class="btn btn-primary" href="./{html.escape(d["entry"])}">Open Live Demo</a>'
            f'<a class="btn" href="https://github.com/{REPO}/tree/main/{folder}">Source</a>'
        )
        badge = f'<code class="folder">{folder}</code>'
    else:
        actions = f'<a class="btn" href="https://github.com/{REPO}/tree/main/{folder}">View Source</a>'
        badge = f'<code class="folder">{folder}</code><span class="pill">no preview</span>'
    return (
        f'<article class="card" data-folder="{folder}">\n'
        f"  {media}\n"
        f'  <div class="card-body">\n'
        f"    <h2>{title}</h2>\n"
        f"    <div class=\"meta-row\">{badge}</div>\n"
        + (f"    <p>{desc}</p>\n" if desc else "")
        + f'    <div class="actions">{actions}</div>\n'
        f"  </div>\n"
        f"</article>"
    )


REPO = detect_repo()

PAGE_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Agentic Live Demos</title>
<meta name="description" content="Live demos — one card per demo folder in this repo.">
<!-- generated: {generated_at} | repo: {repo} | demos: {count} — do not edit cards by hand, run scripts/generate-index.py -->
<style>
:root {{ color-scheme: light dark; --bg: #0f1216; --panel: #171c22; --text: #e8edf2; --muted: #9aa7b4; --accent: #34d399; --border: #26313c; }}
@media (prefers-color-scheme: light) {{ :root {{ --bg: #f6f8fa; --panel: #ffffff; --text: #1a232e; --muted: #5b6b7a; --border: #e2e8f0; }} }}
* {{ box-sizing: border-box; }}
body {{ margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; background: var(--bg); color: var(--text); }}
header {{ max-width: 1100px; margin: 0 auto; padding: 48px 20px 8px; }}
header h1 {{ margin: 0 0 8px; font-size: clamp(28px, 4vw, 44px); letter-spacing: -0.02em; }}
header p {{ margin: 0; color: var(--muted); max-width: 70ch; }}
.toolbar {{ max-width: 1100px; margin: 0 auto; padding: 20px 20px 0; display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }}
#search {{ flex: 1; min-width: 220px; padding: 10px 14px; border-radius: 10px; border: 1px solid var(--border); background: var(--panel); color: var(--text); font-size: 15px; }}
.count {{ color: var(--muted); font-size: 14px; }}
main {{ max-width: 1100px; margin: 0 auto; padding: 20px; }}
.grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }}
.card {{ background: var(--panel); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column; }}
.thumb {{ width: 100%; height: 170px; object-fit: cover; display: block; background: #0c0f13; }}
.thumb-fallback {{ height: 170px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #10b981, #0ea5e9); font-size: 44px; font-weight: 800; color: #fff; }}
.card-body {{ padding: 16px; display: flex; flex-direction: column; gap: 10px; flex: 1; }}
.card-body h2 {{ margin: 0; font-size: 19px; }}
.card-body p {{ margin: 0; color: var(--muted); font-size: 14px; line-height: 1.5; }}
.meta-row {{ display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }}
.folder {{ font-size: 12px; background: rgba(125,125,125,.15); padding: 3px 8px; border-radius: 20px; }}
.pill {{ font-size: 11px; color: var(--muted); border: 1px solid var(--border); padding: 2px 8px; border-radius: 20px; }}
.actions {{ margin-top: auto; display: flex; gap: 8px; padding-top: 6px; }}
.btn {{ display: inline-block; padding: 9px 14px; border-radius: 10px; border: 1px solid var(--border); color: var(--text); text-decoration: none; font-size: 14px; font-weight: 600; }}
.btn-primary {{ background: var(--accent); border-color: transparent; color: #06281d; }}
#live-note {{ display: none; }}
footer {{ max-width: 1100px; margin: 0 auto; padding: 8px 20px 48px; color: var(--muted); font-size: 13px; }}
.empty {{ padding: 40px; text-align: center; color: var(--muted); border: 1px dashed var(--border); border-radius: 16px; }}
</style>
</head>
<body>
<header>
  <h1>Agentic Live Demos</h1>
  <p>Every top-level folder in this repo is a live demo. Cards below are generated from the repo state — add a folder with an optional <code>meta.json</code> and a card appears automatically.</p>
</header>
<div class="toolbar">
  <input id="search" type="search" placeholder="Filter demos…" aria-label="Filter demos">
  <span class="count" id="count"></span>
  <span class="count" id="live-note"></span>
</div>
<main>
  <div class="grid" id="grid">
{cards}
  </div>
</main>
<footer>Last generated {generated_at} (UTC) · <a href="https://github.com/{repo}">github.com/{repo}</a> · static cards + live GitHub API refresh</footer>
<script>
const REPO = "{repo}";
const STATIC_FOLDERS = {static_folders_json};
const search = document.getElementById("search");
const grid = document.getElementById("grid");
const countEl = document.getElementById("count");
const liveNote = document.getElementById("live-note");
function updateCount() {{
  const visible = [...grid.children].filter(c => c.style.display !== "none").length;
  countEl.textContent = visible + " demo" + (visible === 1 ? "" : "s");
}}
search.addEventListener("input", () => {{
  const q = search.value.toLowerCase();
  [...grid.children].forEach(c => {{
    c.style.display = c.textContent.toLowerCase().includes(q) ? "" : "none";
  }});
  updateCount();
}});
updateCount();
function esc(s) {{ return String(s ?? "").replace(/[&<>"']/g, c => ({{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}}[c])); }}
function cardEl(d) {{
  const a = document.createElement("article");
  a.className = "card"; a.dataset.folder = d.folder;
  const initials = esc((d.title || d.folder).split(/\\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase());
  const media = d.thumbnail
    ? `<img class="thumb" src="./${{esc(d.folder)}}/${{esc(d.thumbnail)}}" alt="${{esc(d.title)}} preview" loading="lazy" onerror="this.remove()">`
    : `<div class="thumb thumb-fallback" aria-hidden="true"><span>${{initials}}</span></div>`;
  const entry = d.entry ? `./${{esc(d.folder)}}/${{esc(d.entry.replace(d.folder + "/", ""))}}` : "";
  const actions = entry
    ? `<a class="btn btn-primary" href="${{entry}}">Open Live Demo</a><a class="btn" href="https://github.com/${{REPO}}/tree/main/${{esc(d.folder)}}">Source</a>`
    : `<a class="btn" href="https://github.com/${{REPO}}/tree/main/${{esc(d.folder)}}">View Source</a>`;
  a.innerHTML = media + `<div class="card-body"><h2>${{esc(d.title)}}</h2>`
    + `<div class="meta-row"><code class="folder">${{esc(d.folder)}}</code>${{entry ? "" : '<span class="pill">no preview</span>'}}</div>`
    + (d.description ? `<p>${{esc(d.description)}}</p>` : "")
    + `<div class="actions">${{actions}}</div></div>`;
  return a;
}}
async function refreshFromGitHub() {{
  try {{
    const res = await fetch(`https://api.github.com/repos/${{REPO}}/contents/`);
    if (!res.ok) return;
    const items = await res.json();
    const remoteDirs = items.filter(i => i.type === "dir" && !i.name.startsWith(".") && !["scripts", "node_modules"].includes(i.name)).map(i => i.name);
    const known = new Set([...grid.children].map(c => c.dataset.folder));
    // Remove cards for deleted folders
    [...grid.children].forEach(c => {{ if (!remoteDirs.includes(c.dataset.folder)) c.remove(); }});
    // Add cards for new folders
    for (const folder of remoteDirs) {{
      if (known.has(folder)) continue;
      let meta = {{}};
      try {{
        const m = await fetch(`./${{folder}}/meta.json`);
        if (m.ok) meta = await m.json();
      }} catch (e) {{}}
      const title = meta.title || folder.replace(/^[0-9]+[_-]+/, "").replace(/[_-]/g, " ").replace(/\\b\\w/g, c => c.toUpperCase());
      let entryRel = meta.entry || "";
      if (!entryRel) {{
        for (const cand of ["index.html", "dist/index.html"]) {{
          try {{ const h = await fetch(`./${{folder}}/${{cand}}`, {{ method: "HEAD" }}); if (h.ok) {{ entryRel = cand; break; }} }} catch (e) {{}}
        }}
      }}
      grid.appendChild(cardEl({{ folder, title, description: meta.description || "", thumbnail: meta.thumbnail || "", entry: entryRel ? folder + "/" + entryRel : "" }}));
    }}
    // Enrich existing cards with Pages-hosted meta.json (cheap, no rate limit)
    for (const c of grid.children) {{
      if (!STATIC_FOLDERS.includes(c.dataset.folder)) continue;
      try {{
        const m = await fetch(`./${{c.dataset.folder}}/meta.json`);
        if (!m.ok) continue;
        const meta = await m.json();
        if (meta.title) {{ const h = c.querySelector("h2"); if (h && h.textContent !== meta.title) h.textContent = meta.title; }}
        if (meta.description && !c.querySelector("p")) {{
          const p = document.createElement("p"); p.textContent = meta.description;
          c.querySelector(".card-body").insertBefore(p, c.querySelector(".actions"));
        }}
      }} catch (e) {{}}
    }}
    liveNote.textContent = "· live-synced with GitHub";
    liveNote.style.display = "";
    updateCount();
  }} catch (e) {{ /* offline / rate-limited: keep static cards */ }}
}}
refreshFromGitHub();
</script>
</body>
</html>
"""


def render(demos, repo: str) -> str:
    if demos:
        cards = "\n".join(card_html(d) for d in demos)
    else:
        cards = '<div class="empty">No demo folders yet. Add a top-level folder to get your first card.</div>'
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M")
    return PAGE_TEMPLATE.format(
        generated_at=now,
        repo=repo,
        count=len(demos),
        cards=cards,
        static_folders_json=json.dumps([d["folder"] for d in demos]),
    )


def main():
    global REPO
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="fail if index.html is stale")
    ap.add_argument("--repo", default=None, help="override owner/name")
    args = ap.parse_args()
    if args.repo:
        REPO = args.repo
    else:
        REPO = detect_repo()
    demos = load_demos()
    out = render(demos, REPO)
    target = ROOT / "index.html"
    if args.check:
        if not target.is_file():
            print("index.html missing — run scripts/generate-index.py", file=sys.stderr)
            sys.exit(1)
        # Ignore the volatile timestamp line so --check is stable across minutes.
        current = re.sub(r"<!-- generated: .*? -->",
                         "<!-- generated: -->", target.read_text())
        fresh = re.sub(r"<!-- generated: .*? -->",
                       "<!-- generated: -->", out)
        # Also normalize the footer timestamp the same way.
        current = re.sub(r"Last generated .*? \(UTC\)", "Last generated (UTC)", current)
        fresh = re.sub(r"Last generated .*? \(UTC\)", "Last generated (UTC)", fresh)
        if current != fresh:
            print("index.html is stale — run scripts/generate-index.py", file=sys.stderr)
            sys.exit(1)
        print(f"OK: index.html up to date ({len(demos)} demos).")
        return
    target.write_text(out)
    print(f"Wrote {target} with {len(demos)} card(s): {', '.join(d['folder'] for d in demos) or 'none'}")


if __name__ == "__main__":
    os.chdir(ROOT)
    main()
