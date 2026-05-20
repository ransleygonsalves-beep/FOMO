# FOMO Campus — Mobile Web App

A self-contained interactive mobile web prototype for the FOMO co-working campus in Stavanger, Norway.

## Overview

FOMO Campus is a single-file React prototype (`index.html`) that simulates the member-facing mobile app for a campus with co-working spaces, a restaurant (Soi21), meeting rooms, and concierge support.

## Screens

| Screen | Nav Tab | Description |
|--------|---------|-------------|
| Home | Home | Greeting, campus pass NFC card, events carousel, quick actions, My Day |
| Meeting | Meeting | Themed meeting room browser with location filter, date/time booking sheet, success screen |
| Soi21 | Soi21 | Food & bar ordering, table booking, expandable cart, slide-to-pay, add to tab — all with success screens |
| Support | Support | Campus support ticket form (category, location, description) with success screen |
| Community | Community | Coming soon placeholder |

## User Journeys with Success Screens

| Journey | Trigger | Success message |
|---------|---------|-----------------|
| Book a meeting room | Confirm button in booking sheet | "You're booked" — room, date, time, catering |
| Order food | Slide to pay via Vipps | "Enjoy your meal!" — ready in ~15 min |
| Add to tab | "Add to tab instead" link | "We'll settle up at the end" |
| Book a table | Reserve table button | "See you at Soi21" — guests, date, time |
| Submit support ticket | Submit button | "We're on it, hold tight" — category, location |

## Quick Actions (Home screen)

All four quick action cards navigate directly to the relevant screen:
- **Book a Room** → Meeting
- **Order from Soi21** → Soi21
- **Raise a Request** → Support
- **Gym & Wellness** → Community

## Tech Stack

- **React 18** (UMD build, loaded locally from `libs/`)
- **Babel Standalone 7.29** (JSX compiled at runtime, loaded locally)
- **No build step** — open `index.html` directly in a browser
- **No CDN dependencies** — fully offline capable

## Project Structure

```
project/
├── index.html          # Main app — all screens, components, styles
├── libs/
│   ├── react.js
│   ├── react-dom.js
│   └── babel.min.js
├── fomo/
│   ├── assets/         # Logos, flamingo images
│   └── fonts/          # DM Serif Display, DM Sans (TTF)
└── screens/            # Reference JSX files (not loaded at runtime)
```

## Running

Open `project/index.html` in any modern browser. No server required.

If the screen is blank, check the browser console — a visible red error overlay will display any compile or runtime errors.

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `FOMO_INK` | `#111111` | Primary text, dark backgrounds |
| `FOMO_PINK` | `#fcc9ca` | Accent, highlights |
| `FOMO_BG` | `#f9f4e8` | App background |
| `FOMO_INK_2` | `#5b5b5b` | Secondary text |
| `FOMO_BORDER` | `#e6dcc4` | Borders, dividers |

## Fonts

- **DM Serif Display** — headings, italic accent text
- **DM Sans** — all UI text
