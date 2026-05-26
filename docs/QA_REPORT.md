# QA Report

## Checks

- Desktop layout: verified in local browser preview at `http://127.0.0.1:4173/`; hero collision was found and fixed.
- Mobile layout: verified at 390x844 viewport; headline word clipping was found and fixed.
- Link check: required routes returned HTTP 200 locally.
- CTA check: header, hero, service cards, pricing/service flows, and intake CTA route correctly.
- Intake check: static intake path implemented; final email still TBD and clearly disclosed.
- Asset check: four WebP assets copied and hashed.
- Public/private safety check: app/public source avoids old email, old portal link, fake social proof, fake metrics, and restricted family-role language.
- Secret scan check: app/public source scan returned no restricted terms.
- Build result: `npm run build` passed.
- Preview result: `npm run preview -- --port 4173` served successfully.
- Cloudflare direct upload: attempted with `npx wrangler pages deploy dist --project-name=snow-digital-services`; blocked because non-interactive Wrangler requires `CLOUDFLARE_API_TOKEN`.
- Deploy artifact: `snow-digital-services-pages-upload.zip` created from `dist` for manual Cloudflare dashboard upload.

## Known Issues

- Final Cloudflare domain is TBD.
- Final Cloudflare email is TBD.
- Privacy and terms are starter drafts.
- This environment refuses creating a project-local `.git` entry, so `git init .` is blocked here.
- Cloudflare Pages deploy requires Michael to authenticate Wrangler or set a Cloudflare API token.

## Recommended Next Actions

1. Run install/build/preview.
2. Verify the preview visually on desktop and mobile.
3. Deploy to Cloudflare Pages preview.
4. Configure final domain and email in Cloudflare.
