# COMPAX Construction

**Live concept:** https://compax-construction.vercel.app

A fully navigable, responsive, editorial construction company experience designed and engineered by **Bespoke Technologies**.

> **Demonstration only.** COMPAX is a fictional construction company. The project stories, services, locations, briefs, and features are editorial concept content, not evidence of delivered construction projects. The imagery is licensed third-party architectural photography and must not be presented as completed COMPAX work. No real company track record, employees, offices, awards or statistics are claimed.

## Experience

- Cinematic homepage, with a distinctive brand and considered typography.
- Our Story / company perspective with principles and narrative.
- Expertise page with six detailed service areas and sector categories.
- Portfolio of eight hypothetical projects with nine sector filters and individual case study pages.
- Four full-length editorial stories with individual URLs.
- Contact experience: validated form prepares a WhatsApp message to **Bespoke Technologies**, for the visitor to approve and send. No backend writes or database.
- Responsive mobile navigation, reduced-motion support, accessible page structure, keyboard-focus indicators and image alt text.
- Dynamic client-side page titles/descriptions; HTTP direct-route fallback via Vercel rewrites.

## Technology and project structure

This is deliberately a **dependency-free static ES-module application** (HTML + modern CSS + JavaScript), not Next.js or a React application. It is appropriate for a lightweight demonstration with no content-management backend.

| File | Responsibility |
| --- | --- |
| `index.html` | Document shell, fonts, Open Graph, entrypoint |
| `data.js` | Structured sample projects, services, editorial stories and imagery references |
| `app.js` | Page layouts, rendering, navigation, filters and contact |
| `styles.css` | Design tokens, layout, breakpoints, accessible motion |
| `favicon.svg` | Original COMPAX brand symbol |
| `vercel.json` | Direct-route rewrites and security-related headers |

## Run locally

Serve the folder with any static server, for example:

```sh
npx serve -s .
```

Open the URL printed by the server. The `-s` option enables SPA fallback for client-side pages.

## Deployment

The GitHub `main` branch is connected to a Vercel project called `compax-construction`. Commits to `main` trigger production deployments. The public address is https://compax-construction.vercel.app.

There are no environment variables, credentials, database migrations or third-party APIs required for rendering the website. The site does depend on externally hosted Unsplash imagery and Google Fonts being available; replace them with locally owned, fully licensed assets when adapting to a client.

## Updating the demonstration

- To update or add a sample project, edit the `projects` collection in `data.js`.
- To add an article, edit the `insights` collection.
- To change the visual identity, update tokens at the top of `styles.css` plus the SVG favicon and site wordmark in `app.js`.
- To alter the primary pages, edit the matching render functions in `app.js`.
- For new routes, update `vercel.json` so direct entry and refresh remain functional.

## Before repurposing for a real construction client

1. Replace all illustrative content, photography, and company identity with verified, client-approved assets.
2. Confirm permission to use client project photographs, project facts, certificates, titles and testimonials.
3. Replace the demo WhatsApp destination with the client's approved contact endpoint; implement an appropriate spam-protected backend if structured inquiry processing is required.
4. Move to server-rendered page-specific HTML and metadata for professional SEO, richer preview cards and indexing when needed (Next.js is a suitable migration path).
5. Add privacy/legal pages as applicable, analytics only with appropriate privacy settings, tests and monitoring.

## Verification checklist

- [x] GitHub repository and Vercel Git deployment linked.
- [x] Root deployment returns HTTP 200.
- [x] Direct visits to /about, /expertise, /projects, project details, /insights, article details, /contact return HTTP 200.
- [x] JavaScript source syntax validation completed.
- [ ] Comprehensive mobile/desktop visual regression tests.
- [ ] Full accessibility audit with screen readers.
- [ ] Confirm all externally hosted images and fonts resolve in target browsers.

## Credits

Design and development: [Bespoke Technologies](https://www.bespoketech.com.ng). Editorial imagery: Unsplash. Typeface families: DM Sans and Instrument Serif via Google Fonts. Company identity: original fictional concept.

_For Honor and For Excellence._
