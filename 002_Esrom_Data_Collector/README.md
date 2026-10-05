# Esrom — Public Electoral Security Dashboard (W-4 demo)

Single-file demo build for the **Esrom Data Collector** — Nigeria 2027 General Elections.

> **Observer Data — not official INEC results**

## What this is

Public dashboard answering the 3 product mandates:

1. **Verified collection** — only verified incidents are shown (C-2 publish predicate)
2. **Electoral linkage** — Direct / Indirect / Background coding with transparent score
3. **Actor + conduct** — who did what to whom (perpetrator / victim / passive / intervener / detained-arrested)

Full spec: see `../../spec/` (G1–G4, FR-x, linkage methodology).

## Run

No build step. Open directly:

```powershell
# from this folder
Start-Process index.html
# or serve locally:
python -m http.server 8000
# then visit http://localhost:8000/index.html
```

Requires internet for CDN + basemap:

- `unpkg.com/maplibre-gl@4.7.1`
- `basemaps.cartocdn.com/gl/positron-gl-style/style.json`

## Contents

| File | Description |
|------|-------------|
| `index.html` | Entire app — map, filters, KPIs, incident list, actor×conduct matrix, CSV/GeoJSON export |
| `README.md` | This file |

## Features

- MapLibre map of Nigeria (center `[8.5, 9.5]`, zoom 5) with linkage-colored dots: Direct `#f87171`, Indirect `#fbbf24`, Background `#94a3b8`
- Filters: linkage chips (All/Direct/Indirect/Background), incident type (`VAC/BAL/VINT/INEC/ASSN/CLSH/SECF/VBUY/PROP/OTH`), state (Lagos/Kano/Rivers), 2023 baseline overlay toggle
- KPIs (live rows only, historical excluded): verified total, Direct count, actor-coded count, security passivity %
- Incident list cards + click-popup detail (id, type, severity, linkage sum, LGA/state, actors, note)
- Actor × conduct matrix (live only, `party-*` collapsed to `Party-linked (alleged)` per FR-20)
- Export: `esrom-export.csv` and `esrom-export.geojson`, both watermarked with attribution

## Methodology (footer)

`linkage = temporal(1–3) + geographic(1–3) + motive(1–3) → 7–9 Direct · 5–6 Indirect · 3–4 Background. Weights v1-draft.`

## Seed data

9 in-file rows in `SEED` (GPS jittered demo values):

- 7 live 2027 rows (`ESR-2027-000101` … `000107`) across Lagos / Kano / Rivers
- 2 historical 2023 baseline rows (`ESR-2023-009901/02`, 45% opacity, excluded from G-metrics)

Replace `SEED` with verified API/file export for production.

## Constraints

- Nothing public without 3-step verification (field → state lead → situation room)
- Every public surface must keep the `Observer Data` watermark (FR-23)
- No citizen crowdsourcing, no PVT/results verification, no persistent actor dossiers in v1
