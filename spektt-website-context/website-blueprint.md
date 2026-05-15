# Spektt Website — Blueprint

> This file is the source of truth for the Spektt marketing website (`spektt.com`).
> Read this before touching any page in `spektt-website/`.

---

## 1. Purpose

`spektt.com` is a **marketing and legal website** — not the app. It exists to:
- Tell potential users what Spektt is and why they should download it
- Link to the App Store and Google Play
- Host the Help Centre, Privacy Policy, and Terms & Conditions
- Provide a contact point for users and press

The website does **not** replicate app functionality. No login, no feed, no uploads.

---

## 2. Tech Stack

| Item | Choice |
|------|--------|
| Framework | Next.js 16.2.6 (App Router) |
| Styling | Tailwind CSS v4 with `@theme` directive |
| Language | TypeScript |
| Hosting | Vercel |
| Domain | `spektt.com` (Namecheap → Vercel DNS) |
| Repo | `github.com/spektt-hq/spektt-website` |
| Deploy | Auto-deploy on push to `main` |
| Animations | GSAP (Hero), Framer Motion (page transitions) |
| Icons | react-icons (fa6, hi2, ai, io5, bs, md) |
| i18n | Next.js 16 built-in App Router — `[locale]` directory, server-only dictionary loaders |

---

## 3. Pages

All pages live under `src/app/[locale]/`. The middleware proxy redirects bare paths (e.g. `/privacy`) to `/en/privacy`. Every page exports `generateStaticParams` for all 5 locales.

### 3.1 Home — `/`

The landing page. First impression for anyone who hears about Spektt.

**Sections (top to bottom):**
1. **Hero** — GSAP rotating text animation, two background images with overlay, App Store + Google Play buttons
2. **What is Spektt?** — Short description of the platform (`bg-dark`)
3. **Features** — 6 cards: Showdowns, Clusters, Feed, Pro, Leaderboard, DMs (`bg-warmBlue`)
4. **How it works** — 3 numbered steps: Create account → Upload your work → Compete & grow (`bg-dark`)
5. **Showdowns highlight** — Pulse vs Premium Showdown explainer cards (`bg-warmBlue`)
6. **Download CTA** — App Store / Google Play buttons repeated (`bg-dark`)
7. **Footer** — Links to Help, Privacy, Terms, Contact, social handles

**Tone:** Confident, energetic, creative. Speaks to creatives globally.

---

### 3.2 Help Centre — `/help`

Full searchable FAQ, organised by category with sidebar navigation.

**File structure:**
```
src/app/[locale]/help/
├── page.tsx          ← server component, loads both dictionaries, metadata
├── HelpClient.tsx    ← 'use client' — all UI logic, merges structure + translations
└── helpData.ts       ← category structure only (IDs, related links — no Q&A text)

src/dictionaries/
└── getHelpDictionary.ts  ← server-only loader for help JSON files

messages/help/
├── help-en.json      ← 11 categories, ~90 Q&As (English)
├── help-fr.json      ← French
├── help-es.json      ← Spanish
├── help-pt.json      ← Brazilian Portuguese
└── help-ar.json      ← Arabic
```

**How the merge works:** `helpData.ts` provides structural data (category IDs, related link arrays). The JSON files provide translatable Q&A content. `HelpClient` merges them at render: structure from `helpData`, translated titles from `dict.categoryTitles`, translated articles from the JSON.

**Categories and section IDs (order matters — matches sidebar):**

| # | Category | Section ID |
|---|----------|------------|
| 1 | Getting Started | `getting-started` |
| 2 | Your Profile | `your-profile` |
| 3 | Your Account & Settings | `account-settings` |
| 4 | Uploads & Content | `uploads-content` |
| 5 | Showdowns | `showdowns` |
| 6 | Clusters | `clusters` |
| 7 | Rankings & Leaderboard | `rankings-leaderboard` |
| 8 | Subscriptions & Pro | `subscriptions-pro` |
| 9 | Messages | `messages` |
| 10 | Milestones | `milestones` |
| 11 | Community Guidelines & Safety | `community-guidelines` |

**Implementation:**
- Left sidebar (sticky, desktop) — highlights active section via IntersectionObserver
- Horizontal scrollable pills (mobile) — same active highlight
- Search bar — client-side filter across all Q&A, shows matching results as accordions
- Each Q&A item is an individual accordion with smooth `max-h` + `opacity` CSS transition
- Related topics chips at the bottom of each category section
- "Still need help? support@spektt.com" footer CTA

**Footer sync:** The section IDs above are hardcoded in `Footer.tsx` helpLinks. If an ID changes here, it must change in the Footer too. See `ai-workflow-rules.md`.

---

### 3.3 Privacy Policy — `/privacy`

**File structure:**
```
src/app/[locale]/privacy/
├── page.tsx        ← server component, all content, metadata
└── PrivacyToC.tsx  ← 'use client' — smooth scroll Table of Contents
```

- 16 sections
- Table of Contents at the top — clicking a section smoothly scrolls to it (uses `scrollIntoView`)
- **Effective Date and Last Updated must be updated whenever content changes**
- Current dates: `May 26th, 2026`
- Company: Axlume Tech Limited
- Contact: legal@spektt.com

---

### 3.4 Terms & Conditions — `/terms`

**File structure:**
```
src/app/[locale]/terms/
├── page.tsx        ← server component, all content, metadata
└── TermsToC.tsx    ← 'use client' — smooth scroll Table of Contents
```

- 20 sections
- Table of Contents at the top — same smooth scroll pattern as Privacy
- **Effective Date and Last Updated must be updated whenever content changes**
- Current dates: `May 26th, 2026`
- Company: Axlume Tech Limited
- Includes: age table (Section 2), Showdown rules with 14-day claim window and 10% withholding tax (Section 6), CSAM zero-tolerance (Section 9)

---

### 3.5 Contact — `/contact`

| Channel | Address |
|---------|---------|
| General | hello@spektt.com |
| Support | support@spektt.com |
| Legal | legal@spektt.com |
| Showdowns | showdowns@spektt.com |

Includes a note directing users to the Help Centre before contacting support.

---

### 3.6 Download — `/download`

Minimal page. Spektt logo, one line of copy, two download buttons (App Store + Google Play). Useful for QR codes and link-in-bio.

---

### 3.7 About — `/about`

Global positioning. Covers what Spektt is, the Showdowns/Clusters story, and the team. Signed off as "The Spektt Team / Axlume Tech Limited".

---

### 3.8 Showdown Rules — `/showdown-rules`

Official contest rules governing all Showdowns on the platform. 18 sections covering contest types, eligibility, judging, prizes, tax compliance, disputes, and governing law.

**File structure:**
```
src/app/[locale]/showdown-rules/
└── page.tsx    ← server component, loads getShowdownRulesDictionary, renders 18 sections

src/dictionaries/
└── getShowdownRulesDictionary.ts  ← server-only loader

messages/legal/
├── showdown-rules-en.json  ← 18 sections (English)
├── showdown-rules-fr.json  ← French
├── showdown-rules-es.json  ← Spanish
├── showdown-rules-pt.json  ← Brazilian Portuguese
└── showdown-rules-ar.json  ← Arabic
```

**Key emails hardcoded in JSX (not in JSON):**
- Disputes / contact: `showdowns@spektt.com`
- AMOE free entry: `support@spektt.com`
- Privacy Policy link: `/${locale}/privacy`

**Split-string fields** (see i18n section for pattern):
- `s5.p1Before` / `s5.p1After` — AMOE email
- `s14.p1Before` / `s14.p1After` — disputes email
- `s16.p1Before` / `s16.p1Link` / `s16.p1After` — privacy policy link
- `s9.bBefore` / `s9.bDays` / `s9.bAfter` — bold inline "14 CALENDAR DAYS"

---

## 4. Design Rules

### Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `warmBlue` | `#0e2439` | Primary background |
| `lightBlue` | `#0496FF` | Primary accent, CTAs, links, icons |
| `white` | `#FFFFFF` | Headings and primary text |
| `textLighter` | `#9ca3af` | Body text, subtext, captions |
| `dark` | `#0a1929` | Alternate section background |
| `white-50` | `#d9ecff` | Light text variant |
| `blue-50` | `#839cb5` | Muted blue text |

### Typography

Custom fonts loaded via `@font-face` in `globals.css`:

| Class | Font file |
|-------|-----------|
| `font-extraBold` | Spektt-Extrabold |
| `font-bold` | Spektt-Bold |
| `font-medium` | Spektt-Medium |
| `font-regular` | Spektt-Regular |
| `font-light` | Spektt-Light |
| `font-fairPlay-Medium` | PlayfairDisplay-Medium |

### Utility Classes (globals.css)

| Class | What it does |
|-------|-------------|
| `privacy-policy-text` | Body text style — `text-textLighter font-regular text-sm` |
| `privacy-policy-header` | Section heading style — `text-white font-medium` |
| `container` | Centred container — `mx-auto w-full max-w-7xl px-4 md:px-8` |
| `scroll-top` | Fixed scroll-to-top button |
| `navbar-links` | Mobile slide-in nav drawer |

### Layout

- All pages: `bg-warmBlue` base background, `pt-24 pb-16` to clear fixed navbar
- All pages use the standard `container` class (`max-w-7xl`)
- Home sections alternate: `bg-warmBlue` / `bg-dark`
- Mobile-first — designed for 375px, scales up
- Light mode is **not** supported

### Breakpoints

| Name | Width |
|------|-------|
| `sm` | 480px |
| `md` | 768px |
| `lg` | 1024px |

---

## 5. Component Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx              ← root layout (html/body, font classes)
│   ├── template.tsx            ← Framer Motion page transitions
│   ├── icon.png                ← Favicon (Spektt infinity-loop icon)
│   ├── sitemap.ts              ← generates /sitemap.xml for all locales + pages
│   ├── robots.ts               ← generates /robots.txt
│   └── [locale]/
│       ├── layout.tsx          ← locale layout (Header, Footer, ScrollToTop, dir attr)
│       ├── page.tsx            ← Home
│       ├── about/page.tsx
│       ├── contact/page.tsx
│       ├── download/page.tsx
│       ├── showdown-rules/page.tsx
│       ├── terms/
│       │   ├── page.tsx
│       │   └── TermsToC.tsx
│       ├── privacy/
│       │   ├── page.tsx
│       │   └── PrivacyToC.tsx
│       └── help/
│           ├── page.tsx
│           ├── HelpClient.tsx
│           └── helpData.ts
├── components/
│   ├── index.ts                ← barrel exports
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Backdrop.tsx
│   ├── ScrollToTop.tsx
│   ├── LanguageSwitcher.tsx    ← locale switcher dropdown (desktop + mobile)
│   ├── Hero.tsx
│   ├── WhatIsSpektt.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── ShowdownsHighlight.tsx
│   └── CTA.tsx
├── dictionaries/
│   ├── getDictionary.ts        ← loads messages/[locale].json (UI strings + meta)
│   ├── getHelpDictionary.ts    ← loads messages/help/help-[locale].json
│   ├── getShowdownRulesDictionary.ts  ← loads messages/legal/showdown-rules-[locale].json
│   └── locales.ts              ← exports: locales array + Locale type
└── middleware.ts               ← proxy: redirects non-locale paths → /en/...

messages/
├── en.json                     ← UI strings + meta titles/descriptions for all pages
├── fr.json
├── es.json
├── pt.json
├── ar.json
├── help/
│   ├── help-en.json            ← 11 categories, ~90 Q&As
│   ├── help-fr.json
│   ├── help-es.json
│   ├── help-pt.json
│   └── help-ar.json
└── legal/
    ├── showdown-rules-en.json  ← 18 sections
    ├── showdown-rules-fr.json
    ├── showdown-rules-es.json
    ├── showdown-rules-pt.json
    └── showdown-rules-ar.json
```

---

## 6. SEO

| Page | Title tag | Meta description |
|------|-----------|-----------------|
| `/` | Spektt — Where Creatives Compete | Join Spektt, the creative platform where you showcase your work, enter Showdowns, and compete for prizes. |
| `/help` | Help Centre — Spektt | Find answers to your questions about Spektt — Showdowns, Clusters, Pro, and more. |
| `/privacy` | Privacy Policy — Spektt | How Spektt collects, uses, and protects your data. |
| `/terms` | Terms & Conditions — Spektt | The rules that govern your use of the Spektt platform. |
| `/contact` | Contact — Spektt | Get in touch with the Spektt team. |
| `/download` | Download Spektt | Download Spektt on iOS and Android. |
| `/about` | About — Spektt | The story behind Spektt and the team building it. |
| `/showdown-rules` | Showdown Rules — Spektt | The official contest rules governing all Showdowns on the Spektt platform. |

Meta strings are stored in `messages/[locale].json` under the `meta` key and loaded via `getDictionary`.

---

## 7. Public Assets

```
public/
├── fonts/                    ← 6 custom TTF font files (loaded via @font-face in globals.css)
├── spektt_text_icon.png      ← "Spektt" wordmark — used in Header navbar only
├── spektt-new-favicon.png    ← Square app icon — used as OG/Twitter image across all pages
├── appstore.png              ← App Store download button
├── playstore.png             ← Google Play download button
├── girl-on-horse.webp        ← Hero background image 1
└── black-gril.webp           ← Hero background image 2
```

---

## 8. i18n — Translation Structure

5 locales: `en` (default), `fr`, `es`, `pt`, `ar`.

### How routing works
- All pages are under `src/app/[locale]/`
- `src/middleware.ts` redirects bare paths (e.g. `/help`) → `/en/help`
- Every page has `generateStaticParams` returning all 5 locales — pages are pre-rendered at build time

### Dictionary layers

| Layer | Location | Contents |
|-------|----------|----------|
| UI + meta | `messages/[locale].json` | Nav labels, page meta titles/descriptions, category headings |
| Help Q&A | `messages/help/help-[locale].json` | 11 categories, ~90 Q&As per locale |
| Page body content | `messages/legal/[page]-[locale].json` | Full translated text for pages with many sections |

### Adding a new translation string
- **Meta or UI label**: add to `meta.[key]` (or appropriate namespace) in all 5 `messages/[locale].json`
- **Full page content**: create `messages/legal/[page]-[locale].json` x5, add a loader in `src/dictionaries/get[Page]Dictionary.ts`, load it in the page server component

### RTL (Arabic)
Add `dir={isRtl ? 'rtl' : 'ltr'}` to the page's root element:
```tsx
const isRtl = locale === 'ar'
<div dir={isRtl ? 'rtl' : 'ltr'}>
```

### Split-string pattern for inline links
When a translated sentence contains a hardcoded link mid-sentence, split it into parts in the JSON:
- `p1Before` / `p1After` — text either side of an email `<a>` tag
- `p1Before` / `p1Link` / `p1After` — text + link label + trailing text (e.g. Privacy Policy)
- `bBefore` / `bHighlight` / `bAfter` — text either side of a `<strong>` span

---

## 9. What Comes Later (Post-Launch)

- Blog / Press page
- Creator spotlight pages
- Leaderboard preview (public-facing, read-only)
- Showdown results archive
- Careers page
