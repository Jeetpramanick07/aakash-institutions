# Aakash Institutions — Vercel Ready

This project has been converted from a TanStack Start / Cloudflare-style export into a standard Vite React single-page app for Vercel deployment.

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Vercel settings

- Framework Preset: Vite
- Install Command: npm install
- Build Command: npm run build
- Output Directory: dist
- Root Directory: ./

The `vercel.json` file includes SPA rewrites so `/about`, `/services`, and `/contact` work after deployment.
