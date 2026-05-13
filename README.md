# Ilgaz Kuscu Portfolio

A single-page portfolio for `ilgazkuscu.github.io`, built as a dark, projects-forward site with Apple-style expanding project decks.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo is configured to deploy the static `dist` folder with `gh-pages`.

```bash
npm install
npm run build
npm run deploy
```

After deployment, set GitHub Pages to serve from the `gh-pages` branch if it is not already configured that way.

## Editing project content

All project copy lives in:

```text
src/data/projects.ts
```

Each project supports:

- title
- category
- tagline
- context
- what I built bullets
- stack chips
- metrics
- GitHub and demo links

## Interaction notes

Project cards open into a fullscreen deck. The deck supports:

- vertical scroll-snap sections
- close button
- Escape-to-close
- focus restoration after close
- progress dots
- reduced-motion support

## Resume link

The hero includes a `/resume.pdf` link. Add a file at:

```text
public/resume.pdf
```

or update the link in `src/App.tsx`.
