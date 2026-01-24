# NexGen Consulting Website

Produktionsreife Website mit Next.js App Router, TypeScript und Tailwind.

## Setup

```bash
npm install
npm run dev
```

Die App laeuft dann unter `http://localhost:3000`.

## Environment

Kopieren Sie `.env.example` zu `.env.local` und fuellen Sie die Werte aus:

- `NEXT_PUBLIC_SITE_URL` fuer absolute URLs in SEO/Sitemap
- `NEXT_PUBLIC_CALENDLY_URL` fuer die Terminbuchung
- Optional Analytics (GA4 oder Plausible)
- SMTP Werte fuer den Versand der Formularanfragen

## Deployment

1. Repository mit Vercel verbinden
2. Environment Variablen setzen
3. Build mit `npm run build`

## Content Pflege

- Blogartikel: `src/content/blog/*.md`
- Case Studies: `src/content/cases/*.md`

Jeder Beitrag nutzt Frontmatter fuer Titel, Beschreibung und Datum.

## Struktur

- `src/app` Seiten und Routen
- `src/components` UI und Sektionen
- `src/lib` Utilities, Tracking, Validation
- `src/content` Markdown Inhalte
