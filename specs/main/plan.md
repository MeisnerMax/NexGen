# Projektplan NexGen Consulting

## Meilenstein 1 - Technische Hygiene und Sicherheit (Woche 1)
- [ ] Secrets bereinigen: Nodemailer-Credentials in `.env`, Transporter auf ENV-Variablen umstellen (Commit: `chore(api): externalize mail transport credentials`).
- [ ] `/api/chat` absichern: Eingaben validieren, Timeout setzen, externe Requests kapseln (Commit: `fix(api): harden chatbot request handling`).
- [ ] Meta und Analytics vereinheitlichen: OG-Tags zentralisieren, `Analytics` nur einmal rendern (Commit: `refactor(seo): dedupe head meta and analytics`).

## Meilenstein 2 - UX und Content Konsolidierung (Woche 2)
- [ ] Fehlende Route `/services/online` ergaenzen oder Links an vorhandene Seiten anpassen (Commit: `feat(services): add online offering page`).
- [ ] Navigation und CTA-Ziele konsistent halten, Burger-Menue pruefen (Commit: `chore(ui): align navigation targets and cta states`).
- [ ] Tailwind-Markenfarben definieren und dokumentieren (`bg-blue`, `text-brand`) (Commit: `style(tailwind): declare brand color utilities`).

## Meilenstein 3 - SEO und Performance Ausbau (Woche 3)
- [ ] Sitemap-Generation aktivieren, leere `public/sitemap.xml` ersetzen, Build-Pipeline anpassen (Commit: `build(seo): wire sitemap generation into pipeline`).
- [ ] Medien optimieren: `next/image` einsetzen, Video-Poster definieren, Assets komprimieren (Commit: `perf(media): optimize imagery and hero video`).
- [ ] Vercel Speed Insights produktiv anbinden und dokumentieren (Commit: `chore(analytics): enable vercel speed insights`).

## Meilenstein 4 - Content und Automatisierung (Woche 4)
- [ ] Blog-Routing einfuehren: `/blog` Seite erstellen, Markdown (`/posts`) rendern, Slider-Links verbinden (Commit: `feat(blog): publish markdown driven listing`).
- [ ] Kontaktformular-UX verbessern: bessere Statusmeldungen, Double-Submit verhindern, Tests fuer `/api/contact` (Commit: `feat(contact): improve ux and add api tests`).
- [ ] Chatbot-Wissen erweitern: Dokumentenparser fertigstellen, Caching und Limits hinzufuegen (Commit: `feat(chatbot): enhance knowledge sources`).

## Laufende Aufgaben
- Regressionstests: Nach jedem Meilenstein `npm run build && npm run export` ausfuehren.
- Dokumentation aktuell halten (Specs, README, Deployment-Notizen).
