# Snow Digital Services Site

Public website for Snow Digital Services.

Primary offer:

Send the messy file. Get back a clean spreadsheet.

## Local Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Cloudflare Pages

- GitHub repo: `https://github.com/polyoraceuphoria/snow-digital-newnew`
- Build command: `npm run build`
- Output directory: `dist`
- Project name: `snow-digital-services`

The final custom domain and email are intentionally left TBD for Michael to configure in Cloudflare.

Direct upload, after Cloudflare auth is available:

```bash
npm run build
npx wrangler pages deploy dist --project-name=snow-digital-services
```

Manual dashboard fallback:

Use the generated `snow-digital-services-pages-upload.zip` or upload the contents of `dist` in Cloudflare Pages direct upload.

## Structure

- `src/` - React/TypeScript app
- `public/assets/site/` - selected public visual assets
- `docs/source-audit/` - source and asset audit
- `docs/deployment/` - GitHub and Cloudflare handoff notes
- `docs/QA_REPORT.md` - launch QA notes
- `docs/security_publication_check.md` - public safety check

## Safety Notes

The Manus prototype was used as a visual reference. Generated Manus code, analytics, editor scripts, fake testimonials, fake metrics, old email identity, and old portal links were not reused.

## Launch Checklist

- Confirm final Cloudflare Pages preview.
- Confirm final domain.
- Configure final email.
- Review starter privacy and terms.
- Connect custom domain after preview approval.
