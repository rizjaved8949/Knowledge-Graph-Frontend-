# HR Ontology Management Frontend (Vercel)

This repository contains ONLY the two management frontends:

- `/ontology-studio`
- `/organization-onboarding`

It contains no Supabase service-role key, no HR source datasets, no graph storage, and no Python backend.

## Local development

```bash
cp .env.example .env
# set VITE_MANAGEMENT_API_URL to your local or Render backend
npm install
npm run dev
```

Local backend example:

```env
VITE_MANAGEMENT_API_URL=http://127.0.0.1:8000
```

## Vercel

Import this repository in Vercel and add:

`VITE_MANAGEMENT_API_URL=https://YOUR-BACKEND.onrender.com`

Build command: `npm run build`

Output directory: `dist`

## Security

Never add `SUPABASE_SECRET_KEY` to this frontend. The browser only calls the backend API.
