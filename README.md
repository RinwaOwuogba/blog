# Bolarinwa Owuogba — blog

A personal blog built with [Astro](https://astro.build) (the official blog starter, personalized).
Static output, so it hosts for free and every post is a Markdown file I own.

## Write a post

Drop a Markdown (or MDX) file into `src/content/blog/`:

```md
---
title: 'My post title'
description: 'One-line summary (shows in the list + as the meta description).'
pubDate: 'Aug 07 2026'
heroImage: '../../assets/my-image.jpg'   # optional
---

Your content here. Code blocks get syntax highlighting automatically.
```

That's the whole workflow: add a file, commit, push. No editor, no database.

## Run / build locally

Node is run inside Docker to keep the host clean (drop the `docker run …` wrapper if you have Node ≥ 20 locally):

```bash
# dev server at http://localhost:4321
docker run --rm -it -u "$(id -u):$(id -g)" -e HOME=/tmp -w /work \
  -p 4321:4321 -v "$PWD:/work" node:22 \
  npm run dev -- --host

# production build → ./dist
docker run --rm -u "$(id -u):$(id -g)" -e HOME=/tmp -w /work \
  -v "$PWD:/work" node:22 npm run build
```

Plain Node equivalents: `npm install`, then `npm run dev` / `npm run build`.

## Deploy (Cloudflare Pages — free)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings: **Framework preset: Astro**, **Build command: `npm run build`**, **Output dir: `dist`**.
4. Deploy. Every `git push` to the main branch redeploys automatically.

GitHub Pages and Netlify work the same way (build `npm run build`, publish `dist`).

## Point your own domain

1. Register a domain (e.g. a `.dev`).
2. In Cloudflare Pages → your project → **Custom domains**, add it and follow the DNS steps.
3. Set `site:` in [`astro.config.mjs`](./astro.config.mjs) to that domain (drives RSS + sitemap URLs).

Owning the domain is the point: if you ever move off Astro, your URLs and SEO come with you.

## Import existing posts (from Hashnode / Substack)

1. Export your posts as Markdown (Hashnode: dashboard → export; Substack: export from settings).
2. Drop each `.md` into `src/content/blog/`, add the frontmatter block above, and set `pubDate`
   to the original date so the archive timeline stays correct.
3. Re-host images: put them in `src/assets/` and reference them, rather than hotlinking the old
   platform's CDN (which can break later).

## Structure

- `src/content/blog/` — your posts (Markdown/MDX)
- `src/pages/` — `index.astro` (home), `about.astro`, `blog/` (list + post route)
- `src/components/` — `Header`, `Footer`, etc. (edit social links here)
- `src/consts.ts` — site title + description
- `astro.config.mjs` — site URL + integrations
