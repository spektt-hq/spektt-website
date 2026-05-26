# Spektt Website — Claude Context

## Resuming a Session

At the start of any new session on this website, say:
> **"Read `C:\Users\USER\documents\spektt-website\spektt\CLAUDE.md` and let's work on the website"**

This file has everything. One read and you're fully up to speed.

---

This is the **marketing and deep-link website** for the Spektt mobile app (`spektt.com`). It handles SEO, brand content, legal pages, app download redirects, and deep-link fallback pages (shown when the Spektt app is not installed and a user clicks a shared link).

Mobile app lives at: `C:\Users\USER\Videos\app\spektt`

---

## Commands

```bash
npm run dev          # http://localhost:3000
npm run build        # production build
npm run translate    # auto-fill missing fr/es/pt/ar keys from en.json via MyMemory
```

Deploy: push to `main` → Vercel auto-deploys.

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16, App Router |
| Language | TypeScript strict |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (page transitions), GSAP (Hero) |
| Icons | react-icons |
| i18n | JSON dictionaries, `[locale]` routing, 5 languages (EN/FR/ES/PT/AR), RTL Arabic |
| Middleware | `src/proxy.ts` — Next.js 16 renamed middleware convention to `proxy.ts` |
| Deploy | Vercel — auto-deploys on push to `main` |

---

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout — JSON-LD, Smart Banner, OG meta
│   ├── globals.css
│   ├── robots.ts
│   ├── sitemap.ts                 # All pages × 5 locales
│   ├── icon.png                   # Favicon
│   └── [locale]/
│       ├── layout.tsx             # Locale layout (Navbar, Footer)
│       ├── page.tsx               # Homepage
│       ├── template.tsx           # Page transitions (Framer Motion)
│       ├── not-found.tsx
│       ├── about/page.tsx
│       ├── contact/page.tsx
│       ├── download/page.tsx      # App Store + Play Store download page
│       ├── help/                  # Help centre (FAQ, accordion, search)
│       ├── privacy/page.tsx
│       ├── terms/page.tsx
│       ├── showdown-rules/page.tsx
│       ├── profile/[username]/page.tsx  # Deep link fallback — profiles
│       ├── c/[slug]/page.tsx            # Deep link fallback — Clusters
│       └── s/[slug]/page.tsx            # Deep link fallback — Showdowns
├── components/                    # Navbar, Footer, Hero, Features, etc.
├── dictionaries/                  # getDictionary, locales, type helpers
└── proxy.ts                       # Middleware — locale detection + redirect
messages/
├── en.json                        # English (source of truth for short strings)
├── fr.json  es.json  pt.json  ar.json
└── help/, legal/                  # Long-form content — translate via Claude only
public/
├── .well-known/
│   ├── assetlinks.json            # Android App Links verification
│   └── apple-app-site-association # iOS Universal Links (no file extension — intentional)
├── spektt-new-favicon.png
├── appstore.png / playstore.png
└── fonts/
scripts/
└── auto-translate.js              # Translates missing keys in en.json → fr/es/pt/ar
```

---

## Context Files

| File | Read when |
|------|-----------|
| `spektt-website-context/site-content/help-section-blueprint.md` | Updating Help Centre |
| `spektt-website-context/site-content/privacy-policy-blueprint.md` | Updating Privacy Policy |
| `spektt-website-context/site-content/terms-and-conditions-blueprint.md` | Updating Terms |

---

## Deep Linking — How It Works

```
User taps spektt.com/profile/kaycee
│
├── App installed → iOS Universal Link / Android App Link → opens app directly
│
└── App NOT installed → browser opens URL
    ├── proxy.ts middleware redirects /profile/kaycee → /en/profile/kaycee
    └── [locale]/profile/[username]/page.tsx renders
        Shows: logo + "@kaycee is on Spektt" + download buttons
```

**Key files:**
- `public/.well-known/assetlinks.json` — Android (SHA256 of production keystore)
- `public/.well-known/apple-app-site-association` — iOS (Team ID + Bundle ID)
- `next.config.ts` — serves both `.well-known/` files with `Content-Type: application/json`
- Mobile app `app.config.js` — `associatedDomains` (iOS) + `intentFilters` (Android)

**Slug URLs:** `/profile/{username}` · `/c/{clusterSlug}` · `/s/{showdownSlug}`

---

## i18n — How It Works

All pages under `src/app/[locale]/`. `proxy.ts` detects locale and redirects:
- `spektt.com/` → `spektt.com/en/` (or user's language from cookie/Accept-Language)

**Adding new short strings:**
1. Add key to `messages/en.json` only
2. Run `npm run translate` — auto-fills fr/es/pt/ar

**Long-form content** (help, legal): edit the English file, then ask Claude to translate in-session.

---

## Content Sync — App ↔ Website

**Rule: the app's feature context drives the website content.**

| App changes | Update on website | How |
|-------------|-------------------|-----|
| New feature (Clusters, DMs, etc.) | Add help articles to `messages/help/help-en.json` | Claude translates in-session |
| New data collected / new integration | Update `messages/legal/privacy-en.json` + all 5 languages | Claude translates in-session |
| Platform rules change | Update `messages/legal/terms-en.json` + all 5 languages | Claude translates in-session |
| Showdown rules change | Update `messages/legal/showdown-rules-en.json` + all 5 languages | Claude translates in-session |
| New website page or UI string | Add to `messages/en.json` | `npm run translate` |

**Always update the blueprint first** before changing any legal/help JSON file.

---

## Hard Rules

- **No hardcoded URLs** — App Store: `id6770248818` · Play Store: `#` until published
- **All pages must have `generateMetadata`** — title, description, openGraph, twitter
- **Never rename `.well-known/` files** — iOS/Android verification fails silently
- **Never break `proxy.ts`** — it handles all locale redirects
- **`apple-app-site-association` has no file extension** — required by Apple, served as JSON via `next.config.ts`

---

## Completed

### Pages
- ✅ Homepage — Hero, WhatIsSpektt, Features, HowItWorks, ShowdownsHighlight, CTA
- ✅ About, Contact, Download, Help (FAQ + search), Privacy, Terms, Showdown Rules

### Infrastructure
- ✅ i18n — 5 languages, RTL Arabic, locale switcher, `npm run translate` script
- ✅ `[locale]` routing + `proxy.ts` middleware
- ✅ sitemap.ts, robots.ts, OG metadata, page transitions, nextjs-toploader

### SEO & Deep Linking
- ✅ JSON-LD — Organization + WebSite (Google logo in search)
- ✅ Smart Banner — `<meta name="apple-itunes-app">` (mobile Safari)
- ✅ `assetlinks.json` + `apple-app-site-association` + `next.config.ts` headers
- ✅ Deep link fallback pages — `/profile/[username]`, `/c/[slug]`, `/s/[slug]` (all 5 languages)
- ✅ App Store links updated to real URL across Hero, Footer, CTA, Download, fallback pages

---

## In Progress

_Nothing currently._

---

## Next Up

1. **Play Store link** — replace `#` with real Google Play URL when Android app is published
2. **Help Centre redesign** — Photocrowd-style sidebar layout (spec: `help-section-blueprint.md`)
3. **Canonical + hreflang tags** — so Google indexes `spektt.com` as root, not `spektt.com/en`
4. **Dynamic OG for fallback pages** — fetch real user/cluster/showdown name once public Firestore read is available

---

## Known Issues

| Issue | Status |
|-------|--------|
| Google homepage not at top of search | No canonical tag — fix: add `alternates.canonical` to homepage metadata |
| Google site logo grey circle | JSON-LD added — Google re-crawl takes days/weeks |
| Play Store links are `#` placeholder | Update when Android app is published |

---

## Architecture Decisions

- **`[locale]` routing** — locale always in URL → CDN-cacheable, no client-side hydration for locale
- **JSON dictionaries** — no Lingui, no i18next. Plain JSON, type-safe via TypeScript inference
- **`proxy.ts` as middleware** — Next.js 16 uses `proxy.ts` as the middleware file (renamed from `middleware.ts`)
- **`.well-known/` in `public/`** — static files; `next.config.ts` sets `Content-Type: application/json` (required — default would be `text/plain` which breaks verification)

---

## Session Notes

| Key | Value |
|-----|-------|
| App Store ID | `6770248818` |
| iOS Team ID | `G777UARD6Y` |
| Bundle ID | `com.spektt.app` |
| Android package | `com.spektt.app` |
| Production SHA256 | `EB:83:13:C8:24:3F:91:C0:52:8B:2C:1E:77:07:D8:A4:5E:1B:B9:03:C4:AF:E4:2A:06:27:A2:B6:C0:B7:82:C3` |
| Support email | `support@spektt.com` |
| Team email | `team@spektt.com` |
