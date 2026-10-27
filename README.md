# NEXON Dunakeszi Teniszklub: three homepage directions

One page, seven alternative designs for the club's new site. The bar at the top switches between them (`?v=a` … `?v=g`).

| Version | Direction (Mobbin references) |
|---|---|
| A · Teljesítmény | The Performance Lab, Nike After Dark Tour: huge uppercase grotesk, mono labels, clay-orange accent |
| D · Plakát | Nike After Dark Tour: monochrome lime poster type on black, boxed statements, name marquee |
| E · Mozi | Sana, VanMoof, The Performance Lab: inset photo cards, light grotesk, split wordmark, chapter ticks |
| F · Torna | Uniswap Cup: visible grid, chip labels, the training path as a bracket, scoreboard |
| G · Szett | adidas, Shopify Supply, Superpower: black-and-white kit catalogue, triptych, spec sheets |
| B · Krónika | Runner, KOBU, Studio Freight: editorial masthead, serif headlines, halftone photos, stamp and note |
| C · Klubélet | Readymag, Maxima Therapy: segmented pill navigation, chunky type, draggable fact stickers |

All versions use the approved **dot-space** background (`assets/kit/`, from the vertical's `dot-space.zip`). Each version has its own choreography, palette and display font in `assets/app.js`; the site-specific shapes are `6·3·1` (A: 2026 indoor national championship medals), `1992` (B: founding year), `4–8` (C: ovi-suli ages), `27` (D: countries and team size at the Champions Bowl world final), `07–21` (E: opening hours), `15` (F: weekly hours for competitive juniors) and `DTK` (G: the monogram on the coaches' shirts).

Content comes from dunakesziteniszklub.hu (programmes, prices, coaches, results); nothing is invented.

## Files

- `index.html`: all three versions
- `assets/css/base.css`: shared base and the version switcher; `a.css` … `g.css`: one per version
- `assets/app.js`: version switching, dot-space mounting, tabs, stickers
- `assets/img/`: optimised photos (`ht/` holds the halftone versions used by B)

Run locally with any static server, e.g. `python3 -m http.server`.

## Deploy

The Vercel project (`nexon-dunakeszi-iranyok`) serves a small loader page plus a `vercel.json` rewrite of `/c/<commit>/*` to this public repo on jsDelivr, pinned to a commit. The loader fetches `index.html` from that path and writes it into the page, so a new version only needs a push and a redeploy with the new commit hash. If this repo becomes private, the deployed page stops loading.
