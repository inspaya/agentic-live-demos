# Zarabid Emporium — Prototype

Static single-page prototype for **Zarabid Emporium**, an online store for natural
skincare, organic supplements and Nigerian food exports (rice, palm oil, groundnut
oil, **curry** and **kuli kuli**). All prices are in Naira (₦).

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8080
# → http://localhost:8080
```

No build step, no installs, no internet connection required.

## What's inside

| Path | Purpose |
|---|---|
| `index.html` | The whole app — markup, styles and logic in one file |
| `assets/` | Offline Tailwind stylesheet, Alpine.js, logo and product images |
| `README.md` | This file |

## Features

- **Landing page** — hero, KPI cards, department cards and product highlights
- **Highlight range** — curry and kuli kuli featured alongside rice, palm oil and groundnut oil
- **Shop** — 11 products with search, category filters, quantity steppers and a live basket
- **Order placement** — checkout modal with delivery destination, payment method and order summary; submitting creates a real order entry
- **Order desk** — filter by status (Pending / Packing / In Transit / Delivered) and advance each order through the fulfilment flow
- **Responsive** — works on mobile, tablet and desktop; toast notifications on every action

## Tech

- [Alpine.js](https://alpinejs.dev) 3.x — reactive state and UI logic
- Tailwind CSS — utility classes from the bundled offline stylesheet
- Inline SVG icons — no external icon libraries or CDNs
