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

Content is **data-driven and modular** — to change what the site says, you almost
always edit a data file, not a component:

```
index.html                    slim shell + mount points + <noscript> fallback
src/main.js                   mounts components, wires interactions
src/data/profile.js           ← EDIT ME: identity, socials, stats, experience,
                               skills ("interfaces"), certifications, about copy
src/data/projects.js          ← EDIT ME: featured projects + github repos
src/components/               one file per section
  icon.js                     inline SVG icon set (currentColor, theme-aware)
  header.js hero.js about.js route.js
  projects.js skills.js contact.js footer.js
  section.js                  shared section-header renderer
src/lib/interactions.js       theme, nav, reveals, counters, typing, navspy
src/styles/                   tokens / base / layout + one CSS file per component
src/assets/profile.webp       profile photo (compressed)
```

Adding a project = add an object to `src/data/projects.js`. Adding a skill
group = add an object to `interfaces` in `src/data/profile.js`. New icon =
one line in `src/components/icon.js`.

---

Hand-built in Kathmandu · 27.7172° N, 85.3240° E · no packets were dropped.
