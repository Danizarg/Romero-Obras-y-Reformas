# Romero Obras y Reformas — Website Redesign

Premium redesign concept for [romerobrasyreformas.com](https://romerobrasyreformas.com), a
construction, renovation and decorative plasterwork business based in San Pedro de
Alcántara, Marbella.

The current site is a default WordPress install (its page title is still
"Just another WordPress site"). This repository contains a complete replacement
built around the company's real work — in particular its hand-carved Arabic
plasterwork, which is its strongest and least-known differentiator.

---

## Quick start

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3400>.

```bash
npm run build
```

## Proposal mode

The public page is the redesigned business website. Adding a query parameter
reveals a private redesign offer section at the bottom of the page:

```
http://localhost:3400/?proposal=true
```

The proposal section is **not** rendered without that parameter, and is read
from the browser URL so the public page stays fully static.

---

## Stack

| Layer      | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | Next.js 14 (App Router), static output  |
| Language   | TypeScript (strict)                     |
| Styling    | Tailwind CSS + a small CSS design system |
| Motion     | Framer Motion                           |
| Fonts      | Instrument Sans + Instrument Serif (next/font) |

## Structure

```
app/          layout, metadata, JSON-LD, global design system
components/   one file per page section
lib/site.ts   ALL verified business data and content
public/work/  authentic project photography from the current site
```

**`lib/site.ts` is the single source of truth for business facts.** Phone,
email, address, hours, services and social links there were verified against the
live site. Do not add claims that cannot be verified.

---

## Documentation

| File                                   | Purpose                              |
| -------------------------------------- | ------------------------------------ |
| [MASTER_PROMPT.md](./MASTER_PROMPT.md) | The complete original build brief    |
| [CLAUDE_CONTEXT.md](./CLAUDE_CONTEXT.md) | Persistent project memory and state |

A future session should be able to clone this repository and continue by reading
`MASTER_PROMPT.md`, `CLAUDE_CONTEXT.md` and this file.

---

## Known constraint — image resolution

Every authentic photograph recovered from the current website is **800 × 530 px
or smaller** (one hero-slider image is 1500 × 1125). The brief asks for
2400 px+ imagery for full-screen use and forbids visible upscaling.

The layout is art-directed around this: image frames are capped near their
native size, "zoom" sequences use different photographs rather than digital
magnification, and full-bleed moments are typographic or heavily graded.

See CLAUDE_CONTEXT.md → *Known issues* before any production launch.
