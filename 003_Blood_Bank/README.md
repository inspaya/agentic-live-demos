# LifeLine Blood Bank — POC Build

Single-page, zero-build prototype for blood bank inventory search, SMS order dispatch, and stock-deducting payments.

## Structure

```
003_Blood_Bank/
├── dist/                  # Deployable build
│   ├── index.html         # App entry point
│   └── assets/
│       ├── alpine.min.js
│       └── tailwind.min.css
└── README.md
```

## Run

Open `dist/index.html` in a browser — no server, build step, or network access required (100% offline; all assets are local).

## Features

1. **Blood-group search** — enter a group (e.g. `O-`) to list every bank that stocks it, with name, location, contact, and live unit count.
2. **SMS gateway on order** — select blood group, bank, and quantity to dispatch an order notification to the bank via the simulated `packagist/sms-gateway`; messages appear in the SMS Log tab.
3. **Payment deducts stock** — paying an order subtracts the requested units from that bank's inventory, reflected instantly across search results, the stock matrix, and KPI cards.

## Stack

- Alpine.js (reactivity) + pre-built offline Tailwind stylesheet
- Inline SVG icons, dark theme, no CDNs
