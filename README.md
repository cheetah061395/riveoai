# Riveo

Pre-launch homepage for Riveo, a face-scanning device that matches you to your
foundation shade. Next.js App Router, Tailwind CSS v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Single route: `src/app/page.tsx` renders the hero, the three-panel match row,
and the skin report section.

## Deploys

Pushing to `main` deploys to production automatically. Other branches get
preview deployments.

Signups need `GOOGLE_FORM_ACTION_URL` and `GOOGLE_FORM_EMAIL_ENTRY` set (see
`.env.example`). They are configured in Vercel; copy them into `.env.local` for
local work. Without them `/api/subscribe` returns 503 rather than silently
dropping the address.
