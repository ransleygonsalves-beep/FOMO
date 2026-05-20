# CLAUDE.md — FOMO Campus Prototype

## Architecture

Everything lives in a single file: `index.html`. All JSX is inside a `<script type="text/plain" id="app-code">` tag and compiled at runtime by Babel. Do not split code across files — the prototype is intentionally self-contained.

React and Babel are loaded from `libs/` (local copies, no CDN).

## Editing the App

All changes go into `index.html`. The file is structured in this order:

1. `<head>` — font faces, CSS reset, script tags for libs
2. Error overlay (`<div id="err">`) + `window.onerror` handler
3. `<script type="text/plain" id="app-code">` — all JSX:
   - Design tokens (`FOMO_INK`, `FOMO_PINK`, etc.)
   - Icon data (`_ICN` object) + `Icon` component
   - Shared UI components (`Screen`, `BottomNav`, `Pill`, etc.) — `StatusBar` returns null (hidden)
   - Screen components: `HomeScreen`, `RoomsScreen`, `Soi21Screen`, `SupportScreen`, `CommunityScreen`
   - Root `App` component
4. Babel compiler script that reads `app-code` and executes it

## Icon System

Icons are inlined in the `_ICN` object — no icon CDN. Two formats:

- **Stroke icons** (Iconsax Linear): array of path `d` strings → rendered as `strokeWidth: 1.5`, `fill: none`
- **Fill icons** (Phosphor): `{ vb: '0 0 256 256', d: '...' }` object → rendered as `fill: color`

To add a new icon, add an entry to `_ICN`. To replace an existing icon, update its entry. The `Icon` component handles both formats automatically.

## Bottom Sheets

Pattern: backdrop at `zIndex: 89`, sheet at `bottom: 84px; zIndex: 90` (sits above BottomNav which is `bottom: 0; zIndex: 100`). Close button should be `position: absolute; top: 14; right: 14`.

## Success Screens

Each journey that completes has a full-screen success overlay (`position: absolute; inset: 0; zIndex: 95`). Pattern:
- Dark circle with checkmark icon at top
- Eyebrow label + DM Serif Display headline
- FOMO_PINK summary card with key details
- Supporting text
- Done / action button that dismisses the overlay

Journeys with success screens: book meeting room (`roomBooked`), order food (`orderSuccess`), add to tab (`tabSuccess`), book table (`tableBooked`), submit support ticket (`supportSuccess`).

## Scroll Padding

When a sticky cart bar or bottom sheet is visible, increase `paddingBottom` on the scrollable container so the last items are not hidden. Current values in Soi21Screen: `cartCount > 0 ? (orderExpanded ? 510 : 270) : 90`.

## Navigation

The `App` component manages `navTab` state and passes `{ navTab, onNavChange }` props to each screen. To navigate programmatically from within a screen, call `onNavChange('tab-id')` or the local `setNavTab`. Tab IDs: `home`, `bookings`, `food`, `support`, `community`.

Quick action cards on the Home screen use the `nav` field on each action object to trigger navigation via `setNavTab(a.nav)`.

## Meeting Room Filter

The location filter (All / South / West / East / North) works by filtering `rooms` array: `rooms.filter(r => location === 'All' || r.loc.startsWith(location))`. Room `loc` values are formatted as `'Building · Floor'` (e.g. `'South · 2F'`).

## Design Language

- Headlines: `DM Serif Display`, italic for accent words
- UI text: `DM Sans`
- Beige background `#f9f4e8`, ink `#111111`, pink accent `#fcc9ca`
- Border radius: cards `12–18px`, pills `999px`
- No drop shadows except on floating elements (cart bar, bottom sheets)

## Do Not

- Do not add CDN dependencies — the prototype must work offline
- Do not split `index.html` into multiple files
- Do not add comments explaining what code does — only add comments for non-obvious constraints
- Do not introduce abstractions beyond what the task requires
