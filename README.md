# Ilgaz Kuscu Portfolio

The source for [ilgazkuscu.github.io](https://ilgazkuscu.github.io), a single-page portfolio organized as a vertical, scroll-snapping project deck.

## Production surface

The deployed site is currently driven by the static entry point at the repository root:

- `index.html` contains the portfolio structure and project copy.
- `readability.css` owns the production layout and visual system.
- `higgs-explorer.js` powers the interactive CERN chart.
- `public/` contains files copied into the build output unchanged.

The `src/` directory contains a separate React prototype. It is type-checked during the build, but it is not mounted by the production `index.html`. Until the two implementations are intentionally consolidated, edit the root files for deployed-site changes and keep shared links or claims consistent in `src/`.

## Development

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Validation

```bash
npm run build
```

The build runs the TypeScript project references and then writes the production site to `dist/`.

## Deployment

```bash
npm run deploy
```

This builds the site and publishes `dist/` to the `gh-pages` branch. GitHub Pages must be configured to serve that branch.

## Content guidelines

- Link projects to their public repository or live demo when one exists.
- Keep metrics only when the repository or linked analysis supports them.
- Describe private or in-progress work without implying that its source is public.
- Verify desktop and mobile layouts after changing project copy.
