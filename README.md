# NEXON Dunakeszi Teniszklub: three homepage directions

One page, three alternative designs for the club's new site. The bar at the top switches between them (`?v=a`, `?v=b`, `?v=c`).

| Version | Direction (Mobbin references) |
|---|---|
| A · Teljesítmény | The Performance Lab, Nike After Dark Tour: huge uppercase grotesk, mono labels, clay-orange accent |
| B · Krónika | Runner, KOBU, Studio Freight: editorial masthead, serif headlines, halftone photos, stamp and note |
| C · Klubélet | Readymag, Maxima Therapy: segmented pill navigation, chunky type, draggable fact stickers |

All three use the approved **dot-space** background (`assets/kit/`, from the vertical's `dot-space.zip`). Each version has its own choreography, palette and display font in `assets/app.js`; the site-specific shapes are `6·3·1` (A: the 2026 indoor national championship medals), `1992` (B: founding year) and `4–8` (C: ovi-suli ages).

Content comes from dunakesziteniszklub.hu (programmes, prices, coaches, results); nothing is invented.

## Files

- `index.html`: all three versions
- `assets/css/base.css`: shared base and the version switcher; `a.css`, `b.css`, `c.css`: one per version
- `assets/app.js`: version switching, dot-space mounting, tabs, stickers
- `assets/img/`: optimised photos (`ht/` holds the halftone versions used by B)

Run locally with any static server, e.g. `python3 -m http.server`.
