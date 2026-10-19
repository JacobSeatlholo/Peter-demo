# Dr Peter Garner Jones — Landing Page

A single-page website for Dr Peter Garner Jones, therapeutic massage, CranioSacral
and energy work practitioner, 99 Kloof Street, Gardens, Cape Town.

Plain HTML + CSS + vanilla JavaScript. No frameworks, no build step, no
dependencies — it runs anywhere that serves files, including GitHub Pages.

---

## Publish to GitHub Pages (2 minutes)

The remote is already wired to `git@github.com:JacobSeatlholo/Peter-demo.git`.
From this folder:

```bash
git push -u origin main
```

Then on GitHub:

1. Open the repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, set **Source: Deploy from a branch**.
3. Choose branch `main`, folder `/ (root)`, and click **Save**.
4. Wait ~1 minute. The site will be live at
   `https://jacobseatlholo.github.io/Peter-demo/`

> Already pushed? Re-push any change (even a README edit) and Pages rebuilds
> automatically. No build tooling is ever needed.

## Preview locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Edit before going live

The following are **placeholders** chosen to look complete in a demo. Replace
them with the practice's real details (search for each in `index.html`):

| Placeholder | Where | Replace with |
|---|---|---|
| `+27 (0)82 555 0123` | top bar, Visit section, JSON-LD | real phone number |
| `hello@petergarnerjones.co.za` | Visit section, booking button | real email address |
| `R450 – R950` fees | Sessions section | confirmed prices |
| Credential list | "The Practice" section | exact qualifications & registration bodies |
| Client quotes ("Thandi M.", "David K.") | In clients' words | real, permissioned testimonials |
| Photos in `assets/img/` | throughout | owned or licensed photography |
| `since 2003` / "two decades" | footer, hero, bio | actual years in practice |
| Geo coordinates in JSON-LD | bottom of `index.html` | exact location if desired |

## Structure

```
index.html        all content and JSON-LD structured data
styles.css        hand-written stylesheet (palette + type tokens at the top)
script.js         nav, tabs, FAQ, scroll reveals — progressive enhancement only
assets/img/       optimised photography
assets/favicon.svg
.nojekyll         tells GitHub Pages to serve files as-is
```

## Notes on the build

- Relative asset paths throughout, so it works under `/Peter-demo/` on GitHub
  Pages without changes.
- Accessibility: skip link, ARIA tab pattern with keyboard support, focus
  styles, `prefers-reduced-motion` honoured, alt text on every image.
- SEO: meta description, Open Graph tags, and `schema.org/MassageTherapy`
  structured data with address, hours and contact details.
- Fonts load from Google Fonts (Fraunces + Work Sans) with system fallbacks,
  so the page still reads well offline.
