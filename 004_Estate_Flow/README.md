# EstateFlow — Dist Build

Property operations prototype for FCT Abuja. Static, no build step required.

## Run

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 3000
```

Then visit `http://localhost:3000`.

## Contents

| File | Purpose |
|---|---|
| `index.html` | Single-file app (HTML, inline SVG, Alpine.js state) |
| `assets/tailwind.min.css` | Offline Tailwind utility stylesheet |
| `assets/alpine.min.js` | Alpine.js 3.17.4 (reactivity) |
| `assets/leaflet.js` / `leaflet.css` | Leaflet 1.9.4 map engine |

## Notes

- Fully offline except map tiles (Esri World Street Map, with OSM/Topo fallback).
- All amounts in Nigerian Naira (₦).
- Data is in-memory only — a refresh resets to the seed records.
