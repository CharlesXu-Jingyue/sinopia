# Sinopia: Charles Xu's personal site

This file briefs Claude Code. Read it before changing anything.

## What the site is

A personal site for Jingyue (Charles) Xu, PhD candidate in Computation and Neural Systems at Caltech, hosted on GitHub Pages at https://charlesxu-jingyue.github.io/sinopia/ (repository `CharlesXu-Jingyue/sinopia`, remote `git@github.com:CharlesXu-Jingyue/sinopia.git`).

The whole design rests on one metaphor from fresco painting:

- **The fresco (surface)** is the first thing a visitor meets: a single Renaissance-style fresco of scholars at work, followed by the central idea and the **Transactions** (literary theses and philosophical essays). This is the polished, consolidated layer.
- **The sinopia (beneath)** is the red-earth underdrawing a fresco painter made on the rough plaster before painting. Here it holds the working research: neuroscience, mathematics, engineering, cybernetics, plus Vita (introduction, CV, journal notes).
- The fresco is divided into five **giornate** (day-patches of plaster). Clicking a giornata fades its plaster away to reveal the sinopia beneath it and opens that topic's block under the fresco. "Lift the whole fresco" (or Research in the header) reveals the whole sinopia and flips the surface text to the **research glossary**, a one-column list of all works, arranged by category, giornata or year.

The five giornate, left to right:

| id | name | figure group in the fresco |
|---|---|---|
| `neuroscience` | Neuroscience | the anatomist with the brain drawing and his students |
| `mathematics` | Mathematics | the standing scholars, the statue niche, the geometer at his slate |
| `vita` | Vita | the woman writing on the steps, letters at her feet, the central vault and floor |
| `engineering` | Engineering | the mechanical knight, its builders, the flying machine |
| `cybernetics` | Cybernetics | the self-regulating furnace, the old man adjusting it, the figure pointing to the ship |

## Stack

- Astro (static output), no UI framework. Plain CSS with tokens in `src/styles/global.css`. Small vanilla TypeScript controllers in `<script>` tags.
- Content collections (`src/content.config.ts`): `transactions`, `works`, `journal`, all Markdown with frontmatter validated by zod.
- Deploys with `.github/workflows/deploy.yml` (the official Astro action) on every push to `main`.

## Where things live

```
src/data/url.ts         url() helper that prefixes the base path
src/data/site.ts        name, author, links, the central idea on the surface
src/data/giornate.ts    the five giornate: polygons, seams, labels, ledes, code snippets
src/data/vita.ts        introduction, portrait path, CV rows
src/data/terms.ts       giornata, fresco, sinopia: dictionary entry + meaning on this site, shown in a hover/click card
src/content/transactions/*.md   theses and essays (kind: thesis | essay)
src/content/works/*.md          research works (giornata: neuroscience | mathematics | engineering | cybernetics)
src/content/journal/*.md        short dated notes for the Vita block
src/components/Fresco.astro     the fresco, giornate buttons, seams, hover float
src/components/Beneath.astro    the block under the fresco for each giornata (cards, or Vita)
src/components/Research.astro   the research glossary
src/components/Glossed.astro    renders a line of text, turning the words in terms.ts into cards
src/components/Transactions.astro
src/pages/index.astro           page assembly + the controller script (lift, open, flip)
src/pages/transactions/[id].astro, src/pages/works/[id].astro   reading pages
src/pages/toys/homeostat.astro  first toy model (Ashby homeostat, animal/machine notation)
public/images/fresco.webp, sinopia.webp   the paired images (sinopia is registered to the fresco)
```

## Common tasks

- **Add an essay or thesis:** new Markdown file in `src/content/transactions/` with `title`, `kind`, `date`, `summary`.
- **Add a work:** new file in `src/content/works/` with `title`, `category` (publication, talk, toy model, simulation, build, code, analysis, note, essay, reading notes), `date`, `giornata` (or `other` for work outside the four; listed last in the Giornata view, no block), and `description` (one or two sentences on its role in the investigation of the mind named in the headline). Optional: `link` (external page or toy), `featured: true` (shown in its giornata's block; keep about one per giornata), `thumb`, Markdown body (shown on its own page at `/works/<file name>`).
- **Add a publication:** a work with `category: publication` plus `authors` (full names, in order), `venue`, `status`, `doi`, `abstract`, and optionally `volume`, `issue`, `pages`. The item page highlights Charles's name (names listed in `site.nameInAuthorLists`) and generates the APA reference (`src/data/apa.ts`).
- **Add a toy model:** a page under `src/pages/toys/`, self-contained like `homeostat.astro`, plus a work entry with `category: toy model` and `link` pointing to it.
- **Replace the fresco images:** keep the same composition; export both at higher resolution, register the sinopia to the fresco (see below), save as `public/images/fresco.webp` and `sinopia.webp`. If the pixel size changes, scale all polygon and seam points in `giornate.ts` by the same factor and update `IMAGE`.
- **Register the sinopia to the fresco:** the sinopia must line up with the fresco or lifted patches look misaligned. Use OpenCV `findTransformECC` (affine) on blurred gradient-magnitude images of both, then `warpAffine` the sinopia. Check with a checkerboard strip comparison.
- **Redraw a seam:** seams must follow the outlines of figure groups and never cut through a face, a hand or a key object. Neighbouring polygons share their edge points exactly; the five polygons tile the whole image.

## Rules to keep

- First encounter is the fresco and the surface (central idea + Transactions). Research stays hidden until the whole fresco is lifted or Research is clicked.
- Header: name on the left; Transactions, Research, CV on the right, in that order. It is a see-through strip pinned to the top (on narrow screens only the nav row stays pinned). Transactions and Research scroll "The Fresco" or "The Sinopia" to the top, just under the strip.
- No numbers on the giornate. Hover (and keyboard focus) makes a giornata float slightly with a soft shadow and shows its name.
- Seams are quiet hairlines, not heavy ridges.
- Respect `prefers-reduced-motion`: no float, flip or animation.
- Base path: the site lives under `/sinopia/`. Every internal link, image and asset path goes through `url()` from `src/data/url.ts`; never hardcode a path starting with `/`. If the site moves to the root, change only `base` in `astro.config.mjs`.
- Accessible controls: real `<button>` and `<a>`, labels on icon-only controls, text contrast at least 4.5:1.
- Writing on the site: no em dashes. Expand domain acronyms on first use. Equations define every symbol.
- Placeholder text is in square brackets; Charles replaces it. Never invent publications, dates or biography.

## Commands

```
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview
```

Node 22.23.4 or newer is required by this Astro version.
