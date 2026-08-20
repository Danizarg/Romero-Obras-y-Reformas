# Instructions for Future Claude Sessions

1. Read `MASTER_PROMPT.md`.
2. Read `CLAUDE_CONTEXT.md` (this file).
3. Read `README.md`.
4. Inspect Git history.
5. Run the project (`npm install && npm run dev` → <http://localhost:3400>).
6. Continue from the highest-priority unfinished task (see **Next tasks**).
7. Do not rebuild working functionality without reason.
8. Update this file before ending the session.

---

## Project goal

Replace the current default-WordPress site for **Romero Obras y Reformas** (San Pedro de
Alcántara, Marbella) with a premium, architectural, craftsmanship-led website that makes the
company's real work — especially its hand-carved Arabic plasterwork — look as good as it
actually is.

Doubles as a **sales demo**: `?proposal=true` reveals a private redesign offer (500 € struck
through → 300 € summer offer).

---

## Verified business information

All of this was confirmed on the live site (August 2026) and lives in `lib/site.ts`.
**Do not add facts that cannot be verified.**

| Field | Value | Source |
| ----- | ----- | ------ |
| Phone | +34 952 78 50 90 | `/contacto/` |
| Email | info@romerobrasyreformas.com | `/contacto/` |
| Address | Calle Vega del Mar, 14, San Pedro de Alcántara, CP 29400, Marbella (Málaga) | `/contacto/` |
| Hours | Lunes a viernes, 8:00 – 15:30 | `/contacto/` |
| Facebook | facebook.com/escayolasanpedro | `/contacto/` |
| X | x.com/EscayolaSanPedr | `/contacto/` |
| Services | Escayola, Albañilería, Mantenimiento, Trabajos Árabes | homepage + `/servicios/` |
| Reach | Andalucía, plus France and Morocco | `/trabajos-arabes-2/` |

### Deliberately NOT used

- **WhatsApp** — no WhatsApp number is published anywhere on the current site. The brief
  says not to invent one. `site.whatsapp` is `null`. If the owner confirms a number, add it.
- **"35 years"** — the phrase appears on `/trabajos-realizados/`, but it is unclear and
  unconfirmed, so no years-in-business claim is made anywhere on the site.
- **"Escayolas San Pedro"** — an apparent former/parallel brand name visible in the site
  header and social handles. Worth asking the owner about; not used in the redesign.
- No customer counts, awards, review scores, certifications or guarantees. None are verifiable.
- No invented client names, addresses or project titles. Gallery labels are neutral categories.

---

## Stack

- **Next.js 14.2.35** (App Router) — pinned above 14.2.5, which had a security advisory
- **TypeScript** (strict), **Tailwind CSS**, **Framer Motion**
- **Instrument Sans** (UI) + **Instrument Serif** (available as `font-display`) via `next/font`
- Dev port **3400** (3200 is used by another local project)

### Config notes (important)

`postcss.config.mjs` resolves `tailwind.config.ts` by **absolute path**, and the Tailwind
`content` globs are resolved from `__dirname`. This is deliberate: the dev server is
sometimes launched from a different working directory, and with relative paths Tailwind
silently generated **no utilities at all**. Do not revert these to plain relative paths.

---

## Repository structure

```
app/
  layout.tsx        fonts, SEO metadata, GeneralContractor JSON-LD
  page.tsx          section composition order
  globals.css       design tokens, type scale, grain/plaster textures
components/
  Nav, Hero, StructureToFinish, ReformasIntegrales, ServiceExplorer,
  ArabicCraft, ImageExpand, MaterialDetail, Gallery, Lightbox,
  TypographicMoment, Process, Trust, Marbella, Contact, Proposal, Footer,
  Reveal (shared reveal + MaskLines primitives)
lib/site.ts         ALL verified business data + content
public/work/        38 authentic project photographs
raw-assets/         original downloads (git-ignored)
```

## Component status

| Component | Status | Notes |
| --------- | ------ | ----- |
| Nav | Done | Fixed, transparent → solid on scroll, mobile sheet |
| Hero | Done | Dark open → image reveal → word-mask headline → copy → CTA |
| StructureToFinish | Done | Pinned 4-stage: Estructura / Superficie / Detalle / Acabado |
| ReformasIntegrales | Done | Authentic 3-stage progression (see design decisions) |
| ServiceExplorer | Done | 4 services, swipeable rail, visuals change per service |
| ArabicCraft | Done | Pinned 4-step craft sequence, signature section |
| ImageExpand | Done | Grows ~68vw → capped 1400px, then statement |
| MaterialDetail | Done | Yeso / Escayola / Mortero / Pladur |
| Gallery + Lightbox | Done | Filterable editorial grid; keyboard + swipe viewer |
| TypographicMoment | Done | Near-black, "Estructura. Superficie. Acabado." |
| Process | Done | 5 stages, scroll-linked progress line |
| Trust | Done | Only genuine operational strengths |
| Marbella | Done | Restrained geographic section, parallax |
| Contact | Done | Verified details + 5-field form (mailto) |
| Proposal | Done | `?proposal=true` only |
| Footer | Done | Verified contact + real social links |

---

## Assets and image sources

All 38 photographs in `public/work/` are **authentic Romero Obras y Reformas work**, scraped
from their own WordPress uploads at `romerobrasyreformas.com/wp-content/uploads/2026/01/`.

**No external, stock or competitor imagery is used anywhere.** There is therefore no
`CONCEPT IMAGE — REPLACE BEFORE PRODUCTION` item in this build.

Naming: `arabe-*` / `arabe-v-*` (Trabajos Árabes), `escayola-*` / `escayola-v-*`,
`obra-*` / `obra-v-*` (Albañilería), `hero-techo-artesonado.jpg`. `-v-` = vertical/portrait.

### Art direction

Leads with the plaster and Arabic carved work (white/cream on warm off-white) — it is
genuinely premium and photographs well. Several older interiors in their library (yellow
mosaic bathroom, orange villa exterior) are dated and are deliberately kept out of hero and
large-format positions.

---

## Animations

Roughly one meaningful transformation per 1–2 viewport heights:

- Hero: staged reveal + scroll parallax/scale
- StructureToFinish: pinned cross-fade with clip-path wipes + progress bar
- ServiceExplorer: clip-path reveal on service change
- ArabicCraft: pinned 4-step sequence with step rail
- ImageExpand: scroll-linked width growth
- Process: scroll-linked vertical progress line, stages fade up
- Marbella: contained parallax
- Reveals/MaskLines used throughout

`prefers-reduced-motion` is respected in `globals.css`.

---

## Important design decisions

1. **No fake before/after slider.** `obra-01`, `obra-02` and `obra-v-01` are genuinely the
   *same pool pavilion* at three build stages — but they are different angles, not aligned
   crops. A wipe slider would have misaligned and misrepresented them. Per the brief
   ("if no genuine matching pair exists, do not fake it"), `ReformasIntegrales` presents
   them as a labelled **Obra → Proceso → Resultado** progression instead.

2. **Progressive "zoom" uses different photographs, not digital magnification.** The Arabic
   craft sequence goes wide surface → pattern → carving → finished room using four distinct
   images, because magnifying an 800px source would go visibly soft.

3. **Image frames are capped near native resolution.** ArabicCraft caps at 800px;
   ImageExpand caps at 1400px and uses the only 1500px asset.

4. **No pseudo-Arabic typography.** The Arabic craft is expressed through imagery, geometry
   and pacing, per the brief.

5. **Lightbox uses CSS transitions, not `AnimatePresence`.** The closed state is always
   `visibility: hidden` + `pointer-events: none` via inline styles, so a fullscreen overlay
   can never be left blocking the page mid-transition.

6. **Spanish-first copy.** The business and its customers are Spanish-speaking; the hero
   uses *"Del primer muro al último detalle."* (one of the brief's approved copy examples)
   rather than the English headline options.

---

## Known issues

1. **IMAGE RESOLUTION — the main production blocker.** Every authentic photo is
   **800 × 530 px or smaller**; the single largest is `hero-techo-artesonado.jpg` at
   1500 × 1125. The brief asks for 2400px+ for full-screen use.
   - The layout is art-directed to hide this (capped frames, graded scrims, typographic
     full-bleed sections), but the **pinned StructureToFinish images are shown full-bleed and
     will look soft on 1440px+ displays.**
   - **Action: ask the owner for the original camera files before production launch.**
     Dropping them into `public/work/` with the same filenames requires no code changes.

2. **Contact form uses `mailto:`.** No backend. Fine for a demo; wire to a real endpoint
   (Resend / Formspree / API route) before production.

3. **Photography is dated.** Several images look 2010-era. New photography of recent work
   would raise the result more than any further code change.

4. **Visual verification was limited.** The Browser pane was not displayed during the build
   session, so the page could not composite frames — no screenshots, and rAF-driven
   animations did not advance under automation. Layout, DOM, responsive widths, the lightbox
   and proposal mode were verified programmatically; **the motion design has not been
   watched end-to-end by a human yet.**

---

## Next tasks (priority order)

1. **Have a human scroll the whole page** at 1440px and on a real phone, and watch the
   motion. Confirm the pinned sequences feel right and are not too long.
2. Request original high-resolution photography from the owner (see Known issues 1).
3. Confirm with the owner: WhatsApp number, years in business, and the
   "Escayolas San Pedro" brand relationship. Add to `lib/site.ts` only once verified.
4. Wire the contact form to a real submission endpoint.
5. Consider a `/aviso-legal` + `/politica-de-privacidad` page (LOPD/GDPR expectation for a
   Spanish business site).
6. Add `opengraph-image` and a favicon.

---

## Last session summary

**Session 1 — 20 Aug 2026**

- Verified the repository (`origin` → `Danizarg/Romero-Obras-y-Reformas`, branch `main`,
  previously empty apart from `.gitattributes`).
- Researched the live site: homepage, `/servicios/`, `/quienes-somos/`, `/contacto/`,
  `/trabajos-realizados/` and the three gallery pages found via `wp-sitemap.xml`.
  Extracted verified contact details and enumerated 44 original image URLs.
- Downloaded and curated 38 authentic photographs into `public/work/`; measured every file
  and discovered the 800px resolution ceiling that drove the art direction.
- Scaffolded Next.js 14 + TypeScript + Tailwind + Framer Motion and built all 17 sections.
- Fixed during the session:
  - Next 14.2.5 → 14.2.35 (security advisory)
  - Tailwind generating **zero** utilities because config/content globs resolved against the
    wrong cwd — now resolved absolutely
  - Body font not applied (moved to `globals.css`, no longer dependent on a utility class)
  - `duration-400/600` were not real Tailwind values and were silently ignored — added to
    the theme
  - Anchor targets hidden behind the fixed header — added `scroll-margin-top`
  - Lightbox reimplemented on CSS transitions with a hard `pointer-events: none` closed state
- `npm run build` passes clean; all six breakpoints (375 → 1920) are free of horizontal
  overflow; lightbox keyboard navigation, scroll lock and proposal mode verified.
