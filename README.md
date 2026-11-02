# Anvith Kanchan — Portfolio

Responsive single-page engineering portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy with Cloudflare Pages

This repository is configured for a root-hosted Cloudflare Pages deployment.

In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git** and select this GitHub repository. Set:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | React (Vite), or configure manually |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repository root; leave the default) |
| Node.js version | `22.23.4` (also pinned in `.node-version`) |

Cloudflare Pages Git integration automatically builds and deploys new commits to the production branch and can create preview deployments for other branches.

## Content

Project details and technical claims are limited to the supplied resume. The LinkedIn destination can be updated in `src/main.jsx` with the exact profile URL.

## Tech

React, Vite, CSS, Cloudflare Pages.
