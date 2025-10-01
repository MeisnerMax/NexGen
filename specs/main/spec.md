# NexGen Consulting - Systemspezifikation

## Ueberblick
- Next.js (Pages Router) mit React 18 bildet das Frontend, kann via `npm run export` statisch ausgegeben werden und nutzt Vercel-Builds.
- Tailwind-Utilities plus globale Styles (Inter-Font, schwarzer Background) verantworten das Design; markenspezifische Farben wie `bg-blue`, `text-[#E64000]` werden projektspezifisch eingesetzt.
- Animationsstack: AOS initialisiert global Scroll-Effekte, GSAP ScrollTrigger steuert Parallax im Hero.
- Interaktive Module: Swiper-Slider (Testimonials/Blog), Chatbot-Komponente mit OpenAI-Anbindung und Kontaktformular mit Nodemailer.
- Monitoring: `DefaultSeo` mit `next-seo.config.js`, Vercel Analytics sowie eingebundene (noch ungenutzte) Vercel Speed Insights.

## Architektur
### App-Shell & Layout
- `pages/_app.js` bindet globale CSS/AOS, setzt `DefaultSeo`, kapselt Seiten in `components/Layout` und rendert `Analytics`.
- `components/Layout.js` liefert Grundgeruest (NavBar + Footer um `main` als `flex`-Spalte).
- `pages/_document.js` (Dateiname im Repo `pages/_documents.js`) setzt `Html lang="de"`, preconnects Google Fonts und laedt `Inter`.

### Komponenten
- `components/NavBar.js`: Sticky Header mit Burger-Menue (State + Outside-Click), importiert OG-Tags via `Head` (Redundanz zu `DefaultSeo`).
- `components/Hero.js`: Vollbild-Video mit IntersectionObserver-Lazyload, GSAP-Parallax und CTA.
- `components/ServiceCategory.js`: Grid-Wrapper mit GSAP-Einblendung abhaengig von `direction`.
- `components/ServiceCard.js`: Klickbare Karte mit Icon-Slot, CTA, Hover-Animation.
- `components/Chatbot.js`: Floating Widget, Markdown-Ausgabe, ruft `/api/chat`.
- Slider (`TestimonialsSlider.js`, `BlogSlider.js`): Swiper Navigation/Autoplay, clientseitig via dynamic import.
- `components/Footer.js`: Statisches Footer-Layout mit Socials und Rechtliches.

### Seiten
- `pages/index.js`: Landingpage mit Hero, Service-Bloecken, mehrfachen CTAs, optionaler Testimonials-/Blog-Sektion (auskommentiert). Importiert `NavBar`, `Hero`, `ServiceCategory`, `Chatbot`, `Footer`, `Analytics`.
- `pages/services/*`: Spezifische Angebotsseiten (website, marketing, app, software, schulungen, contact). Gemeinsame Struktur: Einleitendes Hero-Panel, Nutzenabschnitte, Pakete/CTAs, Chatbot-Einbindung.
- Rechtliches: `pages/impressum.js`, `pages/datenschutz.js`.
- APIs: `pages/api/contact.js` (Nodemailer via Gmail SMTP, aktuell Klartext-Credentials) und `pages/api/chat.js` (OpenAI Chat Completions + axios `fetchWebsiteContent`).

### Assets & Styles
- `tailwind.config.js`: Content-Globs auf `pages`/`components`, erweitert Farben minimal (`primary: #000000`).
- `styles/globals.css`: Importiert Tailwind Layer, setzt `scroll-behavior: smooth`, schwarzen Body-Background und redundante Font-Deklaration.
- Statische Medien unter `public/images` (Service-Illustrationen, Logo) und `public/videos/hero.mp4`.

## Routing & Navigation
- Top-Level: `/`, `/services/website`, `/services/marketing`, `/services/app`, `/services/software`, `/services/schulungen`, `/services/contact`, `/impressum`, `/datenschutz`.
- Nicht vorhandene Route: Mehrere Servicekarten verlinken auf `/services/online` (404-Risiko).
- Navigation ueber Burger-Menue mit denselben Service-Routen; Social-Links fuehren nach LinkedIn/Instagram.
- API-Routen: `/api/contact`, `/api/chat`.

## UI/UX Leitlinien
- Markenfarben: Dunkelblau (`bg-blue`), Orange (`#E64000`), Schwarz; grosszuegige Headlines, runde CTAs, Hover-Schattierungen.
- Hero: Video-Hintergrund plus dunkles Overlay fuer Lesbarkeit, Fallback-Bild vor Videoladevorgang.
- ServiceCards: Hover-Translate/-Shadow, zentrale Icons, klarer CTA-Link.
- Mobile Menu: Dropdown mit Links und Social Icons, Outside-Click schliesst das Menu.
- Kontaktseite: Zweispaltig (Kontaktinfo + Formular), Checkbox-Mehrfachauswahl, Statusmeldungen unter dem Button.
- Chatbot-Button persistent rechts unten, Modal mit Markdown-Rendering und Lade-Indikator.

## Design System
### Farben
- `bg-brand-primary` / `text-brand-primary`: #0B1F3A (dunkles Navy fuer Header, Section-Wrapper, Callouts).
- `bg-brand-accent` / `text-brand-accent`: #FF7A00 (Orange fuer CTA-Buttons, Hover-States, Key Icons).
- Neutrale: `text-neutral-900` (#111827) fuer Headlines, `text-neutral-500` (#6B7280) fuer Fliesstext, `bg-neutral-100` (#F3F4F6) fuer Sektionen.
- Feedback: `text-success-600` (#16A34A), `text-warn-500` (#F59E0B), `text-error-600` (#DC2626) fuer Statusmeldungen und Badges.

### Typografie
- Ueberschriften: Inter (Fallback SF Pro, Manrope) mit `font-semibold`/`font-bold` (`text-4xl md:text-5xl` fuer H1, `text-3xl` fuer H2, `text-2xl` fuer H3), strenge H-Hierarchie ohne Spruenge.
- Fliesstext: Inter Regular/Medium (`text-base md:text-lg` + `leading-relaxed`), Links mit `underline-offset-4` fuer klare Erkennbarkeit.
- Utility-Tokens: `font-heading` (600/700) und `font-body` (400/500) koennen in Tailwind Plugins hinterlegt werden.

### Spacing & Grid
- 4/8-pt-Raster: Basisabstaende `gap-4` (16px) und `gap-8` (32px); Buttons nutzen `px-6 py-3` (24x12).
- Maximalbreite: `max-w-[1240px]` bzw. `container mx-auto px-4` fuer Seitencontent.
- Vertikale Rhythmik: Sektionen mit `py-16` (64px) oder `py-24` (96px) fuer gleichmaessige Luft.

### Radii & Schatten
- Karten und Drawer: `rounded-xl` fuer Standard, `rounded-2xl` im Hero/CTA.
- Schatten: `shadow-lg` fuer Hover, `shadow-xl/2xl` fuer modale Layer, mit `shadow-brand` Option fuer farbige Glows.

### Motion
- Scroll-Reveals via AOS (`data-aos="fade-up"`, `duration-1000`) und GSAP Parallax im Hero.
- Interaktionen: `transition-transform duration-300 ease-out` fuer Buttons/Cards, `hover:-translate-y-1` fuer Lift.
- `@media (prefers-reduced-motion: reduce)` in global.css reduziert Animationen auf Opacity/Fade-only.

### Komponentenbibliothek
- `NavBar` + mobiles Drawer (`sticky`, `bg-brand-primary/90`, `border-brand-accent`).
- Hero: Fullscreen Video (`h-screen`, `object-cover`) mit animiertem Overlay-Text (`text-5xl font-bold`, `data-aos`).
- Buttons: `btn-primary` (`bg-brand-accent text-white`), `btn-secondary` (`bg-neutral-100 text-brand-primary`), `btn-ghost` (`border border-brand-primary text-brand-primary`).
- Karten (`ServiceCard`): `rounded-2xl`, `shadow-lg`, Icon-Badges mit `bg-brand-accent`.
- Section-Wrapper: `bg-brand-primary` oder `bg-neutral-100`, `py-16`, `px-8`, optional `border-brand-accent` Bottom Lines.
- Footer: `bg-brand-primary`, `text-neutral-100`, Links mit `hover:text-brand-accent`.

### Accessibility & SEO
- Farbkontrast >= 4.5:1 zwischen Text und Hintergrund (z. B. `text-white` auf `bg-brand-primary`, `text-brand-primary` auf `bg-neutral-100`).
- Fokuszustand: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent` fuer Buttons und Links.
- Semantische Headlines (H1-H3) und Landmark Roles (`nav`, `main`, `footer`); kein Ueberspringen von Heading Levels.
- Meta-Tags via `DefaultSeo`, Seiten-spezifische JSON-LD; OG-Felder zentralisieren in Config statt Komponentenduplikate.
## SEO & Performance
- `next-seo.config.js` + `DefaultSeo` liefern OG/Twitter Defaults; `pages/index.js` ergaenzt Meta/JSON-LD manuell -> doppelte Definitionen moeglich.
- `next-sitemap.config.js` erzeugt Sitemap/Robots beim Post-Build, aber `public/sitemap.xml` ist leer -> Pipeline pruefen.
- `Analytics` wird global (`_app`) und zusaetzlich in `index.js` gerendert (doppeltes Tracking).
- Hero-Video lazy-loadet Quelle, verhindert unnoetige Requests ausserhalb des Viewports.
- `fetchWebsiteContent` ruft komplette externe Seite bei jeder Chat-Anfrage ab -> Latenz und Fehleranfaelligkeit.
- Keine serverseitige Validierung/Rate-Limits im Chatbot; Contact-API prueft Pflichtfelder, testet aber jedes Mal die SMTP-Verbindung.

## Risiken & Baustellen
- Sicherheitskritisch: Klartext-SMTP-Zugangsdaten in `pages/api/contact.js`; muss in Umgebungsvariablen ausgelagert werden.
- Broken Links: fehlende `/services/online` Route.
- Meta/Analytics-Dopplungen zwischen Layout, NavBar und seiten-spezifischen `Head`-Bloecken.
- Tailwind-Farben wie `bg-blue` ohne Definition -> Styling-Wartbarkeit eingeschraenkt.
- Blog-Markdown (`/posts`) wird nirgends gerendert; BlogSlider verweist auf `/blog` Route, die nicht existiert.

