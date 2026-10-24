# ~/ashutosh — portfolio

Portfolio of **Ashutosh Khanal Upadhyay** — IT support technician at a 24/7
hospital in Kathmandu, routing toward network engineering.

Built by hand with vanilla HTML, CSS and JavaScript on [Vite](https://vite.dev).
No frameworks, no UI kits — the whole page ships in ~15 KB gzipped.

## Design notes

- **Color** — [Catppuccin](https://catppuccin.com) `mocha` (dark, default) and
  `latte` (light). Theme preference persists in `localStorage` and respects
  `prefers-color-scheme` on first visit. Accent colors are darkened in latte
  where the palette value would fail WCAG AA as text.
- **Type** — JetBrains Mono for headings/labels/terminal chrome, IBM Plex Sans
  for body copy.
- **Theme** — network operations: a traceroute that types itself in the hero,
  career milestones rendered as hops, skills grouped as network interfaces
  (`eth0`, `wlan0`…), packets riding the topology lines in the background.
- **Motion** — micro-interactions only (scroll reveals, count-up stats, packet
  drift, hover lifts), all disabled under `prefers-reduced-motion`.
- **Mobile-first** — single column under 640px, hamburger nav, 44px+ touch
  targets, no horizontal overflow at 320px.

## Develop

```bash
npm install
npm run dev      # local dev server
```

## Build & deploy

```bash
npm run build    # static site → dist/
npm run preview  # serve the production build locally
```

`dist/` is fully static — host it anywhere:

- **GitHub Pages** — push `dist/` to a `gh-pages` branch (or use Actions)
- **Netlify / Cloudflare Pages / Vercel** — set build command `npm run build`,
  publish directory `dist`

## Structure

```
index.html              all content & sections
src/styles/tokens.css   Catppuccin palettes + type/spacing scale
src/styles/             base, layout, components, animations
src/main.js             theme toggle, nav, reveals, typing, counters
public/favicon.svg      little network-triangle mark
```

---

Hand-built in Kathmandu · 27.7172° N, 85.3240° E · no packets were dropped.
