# Sinopia

The personal site of Jingyue (Charles) Xu: a fresco of ideas on the surface, and the research beneath it.

Live at https://charlesxu-jingyue.github.io/sinopia/ once deployed.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:4321/sinopia/ (the site lives under `/sinopia/`, locally as on GitHub).

## Publish it on GitHub Pages

1. The repository is `CharlesXu-Jingyue/sinopia`, and this folder is already a git repository with that remote. Push it:
   ```
   git push -u origin main
   ```
2. On GitHub, open the repository's **Settings › Pages** and set **Source** to **GitHub Actions**. (Pages on a project repository needs the repository to be public, or a paid plan for a private one.)
3. The site is served from `/sinopia/`. To serve it from the root address instead, rename the repository to `CharlesXu-Jingyue.github.io` and set `base: '/'` in `astro.config.mjs`.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. The first run takes a minute or two; its progress shows under the **Actions** tab.

## Edit the content

- The central idea on the surface: `src/data/site.ts`
- Transactions (theses and essays): `src/content/transactions/`
- Research works: `src/content/works/`
- Vita (introduction, CV rows): `src/data/vita.ts`; journal notes: `src/content/journal/`
- Your CV as a PDF: add it as `public/cv.pdf`
- A portrait: add an image under `public/images/` and set `portrait` in `src/data/vita.ts`

`CLAUDE.md` explains the design and structure in full, for you and for Claude Code.
