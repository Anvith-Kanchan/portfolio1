# Anvith Kanchan — Portfolio

Responsive single-page engineering portfolio built with React, Vite, and CSS.

## Run locally

From the repository root:

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production-ready static files to `dist/`.

## Production hosting

The live site is hosted on **Cloudflare Workers**:

**https://portfolio1.anvian.workers.dev/**

This is a Workers deployment using the `workers.dev` hostname. It is not a GitHub Pages or Cloudflare Pages deployment.

The `portfolio1` Worker already exists in Cloudflare. To publish an update, use the deployment method configured for that Worker and publish the latest Vite build from `dist/`. Check **Cloudflare Dashboard → Workers & Pages → portfolio1 → Deployments** to confirm that a deployment completed.

## Project details

Portfolio content is based on the supplied resume. The LinkedIn destination in `src/main.jsx` can be replaced with the exact profile URL when available.

## Stack

- React
- Vite
- CSS
- Cloudflare Workers
