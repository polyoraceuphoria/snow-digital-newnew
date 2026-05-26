# Cloudflare Pages Deploy Guide

Project name:

`snow-digital-services`

Current launch target:

Cloudflare Pages preview URL. Final domain will be configured later by Michael.

Build settings:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

Dashboard path:

1. Push the repo to GitHub.
2. Open Cloudflare Dashboard.
3. Go to Workers & Pages.
4. Create a Pages project.
5. Connect `https://github.com/polyoraceuphoria/snow-digital-newnew`.
6. Set build command to `npm run build`.
7. Set output directory to `dist`.
8. Deploy preview.
9. Review the preview URL.
10. Add the final custom domain when Michael is ready.

Dashboard direct-upload path:

1. Run `npm run build`.
2. Open Cloudflare Dashboard.
3. Go to Workers & Pages.
4. Create a Pages project.
5. Choose direct upload.
6. Upload the contents of the local `dist` folder, or use `snow-digital-services-pages-upload.zip` if Cloudflare accepts a zip upload.
7. Review the generated `pages.dev` URL.

Direct upload path if Wrangler is authenticated:

```bash
npm run build
npx wrangler pages deploy dist --project-name=snow-digital-services
```

Current status:

- `dist` builds successfully and is ready for Pages.
- `snow-digital-services-pages-upload.zip` was created as a dashboard-upload fallback with the built site files at the zip root.
- Direct upload was attempted from this environment.
- Wrangler could not deploy because no `CLOUDFLARE_API_TOKEN` was available in the non-interactive session.

Do not connect production custom domain until Michael confirms the final domain and email setup.
