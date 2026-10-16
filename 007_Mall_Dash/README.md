# Mall Dash — Cart Rush Arcade (POC)

A zero-build, fully offline single-page arcade prototype for **Mall Dash**: a fast-paced top-down
game where the player drives a shopping cart through crowded mall aisles, collects everything on a
dynamic shopping list, dodges hazards, and banks the run at the Checkout Line before the clock dies.

## Run it

Open `dist/index.html` in any modern browser. No install, no build step, no network access.

```
007_Mall_Dash/
├─ meta.json                       # gallery metadata (title, thumbnail, entry point)
├─ 007_Mall_Dash_2026_10_16.png    # thumbnail / cabinet screenshot
├─ README.md                       # this file
└─ dist/
   ├─ index.html                   # self-contained demo (markup + Alpine state + canvas engine)
   └─ assets/
      ├─ alpine.min.js             # reactive UI state
      └─ tailwind.min.css          # prebuilt offline utility stylesheet
```

## Controls

| Action | Keys |
| --- | --- |
| Drive the cart | `W A S D` or Arrow keys |
| Start / restart run | `Enter`, `Space`, or the ▶ Start Run button |
| Touch | On-screen D-pad on the cabinet control deck |

Movement uses real momentum: the cart drifts on turns, so ease off the stick before corners.

## Gameplay

- **Shopping list HUD** — 5 glowing targets (Shoes, Electronics, Pretzel, Coffee, Ice Cream) sit at
  the top of the screen and tick green with live check-marks the moment a matching item is picked up.
- **Mall hazards** — 6 wandering shopper NPCs patrol fixed lanes and slow the cart on collision;
  4 wet-floor spills send the cart sliding out of control for about a second.
- **Timer rush** — a 75-second countdown (flashes red under 15s) enforces quick decisions.
- **Checkout** — the green CHECKOUT LINE zone logs the run and pays a `time remaining × 10` bonus.
  Arriving early bounces you with a "need N more items" warning.
- **Pop-up notifications** — `+100 PTS · SHOES!` score pop-ups float upward on every pickup,
  alongside toast messages and Start / Run Complete / Time Up modals.
- **Randomized runs** — the cart's spawn point, the whole item layout (never on shelves, spills or
  the checkout zone) and NPC patrol easing are remixed on every run.
- **Leaderboard + run stats** — finished runs are inserted into the local cabinet leaderboard and
  summarised in the Run Stats tab.

## Presentation

Vibrant pixel-art mall rendered on a 960×560 canvas (crisp `image-rendering: pixelated`) with a
pastel tile floor, stocked store racks, striped awnings, CRT scanlines and vignette — all framed
inside a neon arcade cabinet with marquee, joystick, control deck and touch D-pad.

## Technical notes

- Single-file front end: Tailwind utilities + inline SVG icons + an Alpine.js state tree driving a
  `requestAnimationFrame` canvas engine. No frameworks beyond the two local assets.
- 100% offline: no CDN links, webfonts, remote images or telemetry.
- No persistence: scores live in memory for the session only.
