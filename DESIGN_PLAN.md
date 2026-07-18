# NexGen Consulting – Design- und Umsetzungsplan

Stand: 18. Juli 2026

## Zielbild

NexGen soll als präziser Digitalisierungspartner für den operativen Mittelstand auftreten – nicht als austauschbare Webagentur. Die Website zeigt, wie aus manuellen, unübersichtlichen Abläufen klare und messbare Systeme werden.

Leitidee: **Komplexe Abläufe. Klar verbunden.**

## Designrichtung

- Tiefes Navy als Kompetenz- und Technologiefarbe
- Warmes Ivory für eine hochwertige, weniger sterile Grundfläche
- Kupferorange als gezielter Marken- und Interaktionsakzent passend zum Logo
- Große, knappe Editorial-Typografie statt gleichförmiger Card-Walls
- Prozessgrafiken und UI-Visuals statt generischer Stockfotografie
- Animationen erklären Datenfluss, Übergaben und Fortschritt

## Homepage-Dramaturgie

1. Kompakter Header mit klaren Leistungswegen und primärem Analyse-CTA
2. Hero mit animiertem Prozess-Canvas: Excel, E-Mail und Papier werden zu einem stabilen Workflow
3. Vertrauensleiste mit regionalem Fokus, KPI-Logik und stufenweisem Vorgehen
4. Problem-zu-System-Sektion mit drei konkreten Transformationspfaden
5. Drei große Leistungswelten statt fünf gleichgewichteter Kacheln
6. Interaktiver Branchen-Navigator für Dienstleistung, Handwerk und Fertigung
7. Methodik als verbundene Delivery-Rail mit konkreten Projektergebnissen
8. Echte Referenz und klar gekennzeichnete Prozessbeispiele
9. Persönlicher Ansprechpartner und Arbeitsweise
10. Wissenshub, FAQ und Abschluss-CTA

## Motion-Regeln

- Nur `transform`, `opacity` und SVG-Strokes animieren
- Pro Viewport maximal ein dominanter Effekt
- Kein Scroll-Jacking, Autoplay-Video, Partikelhintergrund oder dekoratives WebGL
- Pointer-Effekte nur auf Geräten mit präzisem Zeiger
- `prefers-reduced-motion` stoppt alle nicht notwendigen Bewegungen
- Mobile erhält vereinfachte, inhaltlich vollständige Animationen

## SEO- und Qualitätsregeln

- Suchintention und Nutzen bleiben in serverseitig gerendertem HTML sichtbar
- Canonicals, Open Graph, strukturierte Daten und interne Links pro Seitentyp
- `/danke` bleibt `noindex` und wird aus der Sitemap entfernt
- Rendering-Ressourcen unter `/_next` werden nicht blockiert
- Keine erfundenen Kennzahlen, Logos oder Referenzen
- Zielwerte: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1
- Lighthouse-Ziele: Performance, Accessibility, Best Practices und SEO jeweils ≥ 95

## Umsetzungsumfang dieses Relaunch-Schritts

- globales Designsystem und Motion-Tokens
- Header, Footer und Skip-Link
- neue Homepage mit Process Canvas, Transformationssektion, Leistungsbühne, Branchen-Navigator, Methodik, Proof und Ansprechpartner
- bestehende Formulare, Consent, Terminbuchung, Blog, Cases und API-Logik bleiben funktional
- technische SEO-Korrekturen an Sitemap, Robots und Danke-Seite
- bestehende Leistungsseiten profitieren automatisch vom überarbeiteten Designsystem

## Folgeausbau

- verifizierte Kundenkennzahlen und weitere echte Referenzen einpflegen
- Branchenlandingpages erst nach Bereitstellung einzigartiger Fachinhalte
- Artikel mit Autor, Quellen und Aktualisierungsdatum ausbauen
- dynamische OG-Bilder pro Artikel, Case und Leistung
- Search-Console- und Conversion-Dashboard nach dem Launch
