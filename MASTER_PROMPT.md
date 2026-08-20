# MASTER BUILD — ROMERO OBRAS Y REFORMAS

> This file contains the complete, original build brief for this project.
> It is the specification of record. Read it before changing anything.

## REPOSITORY — CRITICAL

Everything for this project must be created and maintained inside:

`https://github.com/Danizarg/Romero-Obras-y-Reformas`

This repository is the single source of truth for the entire Romero Obras y Reformas redesign.

- Do NOT create the project elsewhere.
- Do NOT modify any previous repository.

Before doing anything:

1. Confirm the current working directory is the local clone of `https://github.com/Danizarg/Romero-Obras-y-Reformas`
2. Run `git status`
3. Run `git remote -v`
4. Run `git branch --show-current`
5. Verify that `origin` points to `https://github.com/Danizarg/Romero-Obras-y-Reformas`
6. If the repository is empty, initialize the entire project here.
7. If files already exist, inspect them before modifying anything.

Create and maintain these files in the repository root: `MASTER_PROMPT.md`, `CLAUDE_CONTEXT.md`, `README.md`.

Store the full build brief inside `MASTER_PROMPT.md`. Use `CLAUDE_CONTEXT.md` as persistent
project memory between Claude Code sessions and computers. A future session should be able to
clone this repository and continue by reading only those three files.

Before every session ends:

- run `npm run build`
- run `git status`
- review `git diff`
- update `CLAUDE_CONTEXT.md`
- commit meaningful work
- push to `origin/main` if authenticated

Do not claim something was pushed unless Git confirms it.

## ROLE

You are Claude Code acting as: senior creative director, senior frontend engineer, premium
construction-industry web designer, UI/UX specialist, motion designer, art director,
conversion designer.

Create a completely new premium website redesign concept for `https://romerobrasyreformas.com`.

Primary interaction-quality benchmark: `https://www.apple.com/es/macbook-pro/`

- We are NOT copying any previous project.
- We are NOT using Marbella Interior Design or MarbellaLuxe as layout templates.
- This must be fresh and tailored to a construction / renovation / craftsmanship business.

The constant is the quality target: **Apple-level interaction discipline + premium
architectural construction presentation + Marbella/Costa del Sol positioning.**

## CORE GOAL

The existing website does not present the company at the level its work could justify. The
current site is extremely basic and still exposes the default WordPress-style title
"Just another WordPress site". It focuses on Escayola, Albañilería, Mantenimiento and
Trabajos Árabes. The company describes itself as a trusted construction team using
standardized processes and detail-oriented execution.

Turn that into a website that feels professional, premium, architectural, modern, credible,
tactile, construction-focused, visually strong and suited to Marbella property owners.

Do not make it look like a flashy startup. Do not make it look like a generic contractor template.

## FIRST — RESEARCH THE BUSINESS

Before coding, inspect the entire current website: homepage, service pages, project
galleries, images, contact details, company history, service areas, phone numbers, email,
social media, project photos, Arabic plasterwork examples, pool/refurbishment work,
maintenance work.

Verify all information before using it. Do not invent facts.

## CURRENT VERIFIED SERVICES

**Escayola** — interior decorative plasterwork: partitions, smooth ceilings, mouldings,
built-in plaster furniture, plastered walls and ceilings, plasterboard / Pladur systems.

**Albañilería** — full home renovations, commercial premises, tiling, flooring, kitchens,
bathrooms, swimming pools, general construction.

**Mantenimiento** — plumbing, electricity, air conditioning, carpentry, locksmithing,
glazing, pool maintenance, spa maintenance.

**Trabajos Árabes** — decorative sculpted plaster / themed surfaces. The current site says
the company specializes in artisan Arabic-style decorative work and has performed work not
only in Andalucía but also in France and Morocco. Verify these claims before using them.

## BUSINESS POSITIONING

This company has something visually distinctive that many renovation companies do not:
**craftsmanship** — plaster, ornament, sculpted surfaces, ceilings, detailing, Arabic
decorative work. That should become one of the central visual ideas.

The site should not only say "We do renovations." It should visually communicate:
**structure → material → detail → finish.**

## PERSISTENT CONTEXT

`CLAUDE_CONTEXT.md` must contain: project goal, verified business information, current
stack, repository structure, component status, assets, image sources, animations, important
design decisions, known issues, next tasks, last session summary.

At the top:

```
# Instructions for Future Claude Sessions
1. Read MASTER_PROMPT.md.
2. Read CLAUDE_CONTEXT.md.
3. Read README.md.
4. Inspect Git history.
5. Run the project.
6. Continue from the highest-priority unfinished task.
7. Do not rebuild working functionality without reason.
8. Update CLAUDE_CONTEXT.md before ending.
```

## VISUAL CONCEPT

Architectural editorial design + craftsmanship + premium Marbella refurbishment.

Inspiration: raw plaster, limestone, dark steel, warm concrete, cream stucco, shadow,
architectural drawings, texture, Mediterranean materials. Use restrained colors.

### Palette

- **Canvas** — warm architectural off-white
- **Dark** — deep charcoal / near-black
- **Secondary** — stone grey
- **Accent** — warm sand / terracotta / muted brass

Do not overuse gold. Do not use startup gradients.

### Typography

Strong modern sans-serif for functional text (Instrument Sans, Geist, Manrope, Inter).
Consider one restrained serif or architectural display face for major statements.

Do not use decorative pseudo-Arabic fonts — that would cheapen the brand. Arabic
craftsmanship should be expressed through geometry, texture, pattern, imagery and
transitions, not stereotypical typography.

## HERO — CRITICAL

The opening must immediately show **construction as transformation**.

Headline candidates: "Built with precision. Finished with character." / "From structure to
finish." / "Craftsmanship you can see." Choose the strongest after seeing the imagery.

Supporting copy: *Reformas, construcción y acabados especializados en Marbella y la Costa
del Sol.* Only use Costa del Sol positioning if supported.

Primary CTA: **Solicitar presupuesto**. Secondary: **Ver trabajos**.

### Hero visual

Do not use a generic stock construction worker. Use a finished villa, high-quality plaster
detail, architectural ceiling, interior construction transformation, pool / renovation, or
craftsmanship detail. Prioritize authentic imagery. Document external imagery clearly.

### Hero animation

Apple-like restraint: near-black neutral opening → architectural texture appears → image
slowly reveals → headline masks in → supporting copy → CTA → scroll begins the
transformation sequence. Do not create a cheesy logo animation.

## SIGNATURE SCROLL EXPERIENCE — STRUCTURE TO FINISH

A pinned / scroll-linked sequence:

1. **Structure** — raw construction / masonry
2. **Surface** — plaster, wall, ceiling
3. **Detail** — moulding / artisan detail / Arabic decorative work
4. **Finish** — completed interior

Use image transitions, masking, scale, clip-path, progress-linked motion. Inspired by
Apple's product storytelling, adapted to construction.

## SECTION — REFORMAS INTEGRALES

A large editorial section, not a generic card.

Headline: **Reformas integrales, sin perder detalle.**

Use strong before / during / after visuals if legitimate matching project imagery exists.
Do not fabricate before/after pairs.

### Before / after interaction

If the business has actual matching before/after photos, create a high-quality comparison
slider (BEFORE/AFTER or OBRA/RESULTADO), supporting mouse and touch. **If no genuine
matching pair exists: do not fake it. Use a progressive process instead.**

## SERVICES — DO NOT USE BORING CARDS

Create an interactive service explorer for ESCAYOLA, ALBAÑILERÍA, MANTENIMIENTO, TRABAJOS
ÁRABES. Each option should materially change the visual.

- **Escayola** — ceiling, moulding, wall finish, plaster detail — *Superficies hechas a medida.*
- **Albañilería** — structural renovation, tile, flooring, pool, kitchen/bathroom — *Del cambio parcial a la reforma completa.*
- **Mantenimiento** — technical/home maintenance context — *Una vivienda que sigue funcionando.*
- **Trabajos Árabes** — decorative handcrafted plaster, geometric detail, ornamental ceiling / wall — *Artesanía que no se fabrica en serie.*

Only use copy that accurately reflects their services.

## ARABIC CRAFTSMANSHIP — SIGNATURE SECTION

The company's most distinctive differentiator. Give it a dedicated section; do not treat it
as one small service card.

Headline: **El detalle también se construye.**

Use large close-up imagery. Create a slow scroll zoom into detail:
wide surface → closer pattern → carved detail → completed room. Should feel tactile.

## MATERIAL DETAIL INTERACTION

Apple-style close-up feature reveals. Categories: YESO, ESCAYOLA, MORTERO, PLADUR — only if
clearly supported by the business. When selected: image changes, detail crop changes, short
explanation changes. Do not overcomplicate.

## POOLS / EXTERIOR

If suitable project imagery exists, create a section around exterior transformation.

Headline: **Dentro. Fuera. Todo forma parte del proyecto.** Only if authentic and relevant.

## PROJECT GALLERY

A curated editorial gallery — large landscape, narrow vertical detail, full-width image,
2-image split, material close-up. Keep labels minimal. If actual project names are
unavailable use neutral categories: REFORMA INTEGRAL, ESCAYOLA, EXTERIOR, DETALLE.
Do not invent addresses or client names.

### Project lightbox

A premium fullscreen viewer supporting keyboard, swipe, next/previous, image count, minimal
UI. Dark background. Photography should dominate.

## PROCESS SECTION

Turn their stated process orientation into: **Un proceso claro. Un resultado controlado.**

Stages: 01 VISITA, 02 PLANIFICACIÓN, 03 EJECUCIÓN, 04 ACABADOS, 05 ENTREGA. Only use stages
that can reasonably reflect their workflow. Do not invent certifications or guarantees.

As the user scrolls, each stage activates and a line progresses. Keep it simple and precise.

## TRUST SECTION

Do not use fake customer counts, years, awards or review scores unless verified. Instead use
genuine operational strengths: multidisciplinary team, complete renovation capability,
specialized craftsmanship, technical resources, work beyond Andalucía where verified.

## MARBELLA POSITIONING

Restrained geographic section. Headline: **Reformas en Marbella.** Homes, villas, commercial
spaces and exterior areas. Do not over-romanticize Marbella — this is a construction
business, not a resort hotel.

## CONTACT / CONVERSION

Headline: **Cuéntanos qué quieres transformar.** CTA: **Solicitar presupuesto**.

Show verified phone, email and service area. Optional minimal form: Nombre, Teléfono, Email,
Tipo de trabajo, Mensaje. Do not ask for 12 fields.

### WhatsApp

If the company uses WhatsApp publicly, make it available as a conversion option.
Do not add a random WhatsApp number. Verify it.

## APPLE-STYLE MOTION THROUGHOUT

Do not spend all animation budget on the hero. Use scroll-linked image scale, pinned service
explorer, detail reveals, text mask reveals, image expansion, process progress, controlled
parallax. Aim for roughly one meaningful visual transformation every 1–2 viewport heights.

### Do not over-animate

Avoid bouncing tools, flying construction icons, rotating hammers, glowing borders, sparks,
fake dust particles, gimmicky scroll effects. This is premium construction, not a game.

### Apple-style image expansion

At least one section where an image begins at ~65–75vw and grows as the user scrolls until
nearly full viewport. At full expansion, show a short statement.

### Large typographic moment

A near-black section with huge type: "From the first wall to the final detail." or
"Structure. Surface. Finish." Reveal progressively. Do not use too many words.

## MOBILE

Test 375px, 430px, 768px, 1024px, 1440px, 1920px. Mobile must be deliberate: reduce pinned
durations, use swipeable service selectors, portrait crops, readable text, no overflow.

## IMAGE SOURCING

Priority: (1) authentic Romero imagery, (2) higher-resolution variants from the current
website, (3) legitimate royalty-free concept imagery where needed. Search original image
URLs. Do not use thumbnails full-screen.

**External image rule:** do NOT scrape competitors' construction photos and present them as
Romero's work. If external concept imagery is used, document
`CONCEPT IMAGE — REPLACE BEFORE PRODUCTION` in `CLAUDE_CONTEXT.md`.

**Image quality:** for full-screen sections prefer 2400px+, ideally 3000–5000px. Do not
upscale visibly low-resolution assets.

## COPY QUALITY

The existing text contains grammatical and wording issues. Rewrite copy professionally but
preserve meaning. Avoid generic lines like "Convertimos tus sueños en realidad."

Use concrete language: *Reformas completas. Acabados precisos.* / *Cada superficie importa.*
/ *Del primer muro al último detalle.* / *Construcción con oficio.*

## SEO

Title: **Reformas en Marbella | Romero Obras y Reformas**

Description: **Reformas integrales, albañilería, escayola, mantenimiento y trabajos
decorativos especializados en Marbella.**

Verify geographic/service claims before finalizing.

## PROPOSAL MODE

Implement `?proposal=true`. Normal mode: the redesigned business website. Proposal mode:
private redesign offer.

Small: PROPUESTA DE REDISEÑO

Large: **Una web a la altura del trabajo que realizáis.**

Pricing: *Precio habitual* **500 €** de-emphasized / struck through. Then *Oferta de verano*
**300 €**, pago único.

Include: rediseño completo, adaptación móvil, animaciones premium, portfolio de trabajos,
integración de contacto, instalación y puesta en marcha.

CTA: **Actualizar la web**. Keep it premium. No red SALE graphics.

## IMPORTANT — THIS IS A SALES DEMO

The client needs to understand immediately that their current site looks old while their
actual work can look premium. The redesign should create a dramatic before/after effect.
But do NOT insult the existing site — let the contrast speak for itself.

## AUTONOMOUS AUDIT

After building the first version, inspect it critically:

- Does this look like a professional Marbella construction business?
- Does it feel more valuable than a generic tradesman website?
- Does craftsmanship come through?
- Are services easy to understand?
- Does the Arabic work feel distinctive rather than gimmicky?
- Is text readable? Are images sharp?
- Does motion continue throughout the page?
- Does mobile work properly?
- Would this convince an owner to pay €300?

Find the five worst problems. Fix them. Then review again.

## BUILD

Run `npm run build`. Fix TypeScript, hydration, broken images, animation cleanup, mobile
overflow, console errors.

## FINAL TARGET

This should not feel like a prettier WordPress contractor website. It should feel like a
modern architectural construction studio with serious craftsmanship.

Apple remains the benchmark for interaction quality, restraint, progressive disclosure,
motion, image presentation and typography hierarchy. But the visual identity must remain:
**construction + materials + craftsmanship + Marbella.**

The finished site should make the old website feel obsolete immediately. The owner should
look at it and think: *"This presents our work much more professionally."*
