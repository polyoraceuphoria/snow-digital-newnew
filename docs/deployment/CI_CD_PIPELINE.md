# Snow Digital Group - CI/CD Pipeline

This repository is the public Snow Digital Group marketing site.

## Purpose

The public site sells and supports the work:

- Marketing-facing service credibility.
- Upwork/profile trust.
- Public intake path.
- Public-safe samples and terms.

It should move more slowly than SnowGlobeHQ. Change it when the change improves trust, conversion, mobile quality, or operational clarity.

## GitHub Actions

Workflow:

- `.github/workflows/ci.yml`

Runs on:

- Pull requests.
- Pushes to `main`.
- Manual dispatch.

Checks:

- `npm ci`
- `npm run build`
- Confirms `dist/index.html`, `dist/robots.txt`, `dist/sitemap.xml`, and `dist/_redirects` exist.

## Cloudflare Pages Production

Recommended production setup:

```txt
Project: snow-digital-services
Repository: polyoraceuphoria/snow-digital-newnew
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
Custom domains:
- www.snowdigitalgroup.com
- snowdigitalgroup.com once apex/root is stable
```

Cloudflare Pages can remain connected directly to GitHub. The GitHub Action is the build-quality gate; Cloudflare Pages is the deployment surface.

## DNS

Fast operating URL for marketplace profiles:

```txt
https://www.snowdigitalgroup.com/
```

Long-term clean setup:

- Keep Squarespace as registrar if desired.
- Move nameservers to Cloudflare when apex/root reliability and subdomain control matter.
- Preserve Google Workspace MX/TXT/DKIM records before changing nameservers.
- Add `snowglobe.snowdigitalgroup.com` separately for SnowGlobeHQ.

## Release Cadence

Use this cadence:

- Public site: measured, polished, trust-first changes.
- SnowGlobeHQ: faster internal iteration.

Do not mix internal Snow Angel tooling, DigiTrap language, or private operations into the public marketing site.
