Redesigned Contact Page Proposal

This folder contains a standalone, framework-agnostic redesign of the Contact
page to align with a modern consulting site aesthetic. It is built with plain
HTML/CSS/JS so it can be ported to any stack (static HTML, React, Next.js,
Astro, etc.).

Files:
- index.html   — reference markup (hero, contact details, form, FAQ, map)
- contact.css  — themeable styles using CSS variables
- contact.js   — minimal accessible form handling (no external deps)

How to integrate:
1) Copy the structure into your actual contact page template/component.
2) Map the CSS variables in :root to your global theme (colors, fonts).
3) If you use a design system (e.g., Tailwind/Chakra), port the class names
   by following the semantic structure from index.html.
4) Replace the map iframe with your location, or swap for a static image.
5) Wire up the form submit endpoint or service (e.g., Formspree, API route).

Note: This proposal avoids any external network calls and fonts. It includes
robust focus styles, accessible labels, and responsive layout.

