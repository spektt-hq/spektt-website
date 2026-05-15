# AI Workflow Rules — Spektt Website

Rules for how Claude should approach work on this codebase. Read this before touching any page.

---

## Spec First, Code Second

Never start writing code for a new page or feature without a clear spec. If the user describes something in conversation but there is no written spec, draft one and get confirmation before implementing.

A spec must answer:

1. What does the user see and do?
2. What pages or components are affected?
3. What are the edge cases (empty state, loading, mobile layout)?
4. Does this touch any protected page or component (see below)?

If any of these are unanswered, ask — do not assume.

---

## Scoping Rules

- Implement exactly what was asked. No bonus features, no "while I'm here" refactors.
- A bug fix does not justify surrounding cleanup. Fix the bug, stop.
- A new page does not justify redesigning existing pages nearby.
- If you notice a problem outside the current scope, call it out in a message — do not fix it silently.

---

## Legal Pages — Date Rule

**This is mandatory. Never skip it.**

Whenever the content of either legal page changes — even a single word — update both date fields at the top of that page:

```
Effective Date: [new date]
Last Updated: [new date]
```

| Page | File |
|------|------|
| Terms & Conditions | `src/app/[locale]/terms/page.tsx` |
| Privacy Policy | `src/app/[locale]/privacy/page.tsx` |

Use the current date at the time of the change. If unsure what date to use, ask the user.

---

## Help Page — Footer Sync Rule

The Footer (`src/components/Footer.tsx`) has hardcoded anchor links to help sections:

```ts
{ href: `/${locale}/help#getting-started`, label: 'Getting Started' }
{ href: `/${locale}/help#showdowns`, label: 'Showdowns' }
{ href: `/${locale}/help#clusters`, label: 'Clusters' }
{ href: `/${locale}/help#subscriptions-pro`, label: 'Pro Subscription' }
{ href: `/${locale}/help#milestones`, label: 'Milestones & XP' }
```

If you ever rename or remove a section ID in `src/app/[locale]/help/helpData.ts`, you **must** update the matching `href` in Footer.tsx at the same time. A broken anchor is a silent failure — there is no build error.

---

## Protected Pages — Do Not Modify Without Discussion

These pages are live-facing legal documents. Changes have real consequences.

| Page | Why protected |
|------|---------------|
| `src/app/[locale]/terms/page.tsx` | Legally binding document. Content changes require explicit instruction from the user. Always update the date when changing. |
| `src/app/[locale]/privacy/page.tsx` | Legally binding document. Content changes require explicit instruction from the user. Always update the date when changing. |
| `src/components/Footer.tsx` | Contains legal links and help anchor links. Changes here affect every page. |
| `src/components/Header.tsx` | Nav structure affects every page. |
| `src/app/globals.css` | Global styles and custom tokens. Changes here affect the entire site. |

---

## Adding New Pages

1. Create `src/app/[locale]/[page]/page.tsx` as a server component.
2. Add `generateStaticParams` returning all 5 locales (`en`, `fr`, `es`, `pt`, `ar`).
3. Add the page's meta title and description to all 5 `messages/[locale].json` files under the `meta` key.
4. Use `getDictionary(locale)` to load meta strings and pass them to `generateMetadata`.
5. If the page has substantial translatable body content, create `messages/legal/[page]-[locale].json` for all 5 locales and a server-only loader at `src/dictionaries/get[Page]Dictionary.ts`.
6. If the page needs client-side interactivity (search, accordion, scroll), extract it into `[Page]Client.tsx` in the same directory. Never put `'use client'` on the page file.
7. Add the page to `src/app/sitemap.ts`.
8. Add the page link to `src/components/Header.tsx` nav links if it belongs in the nav.
9. Add the page link to `src/components/Footer.tsx` if it belongs in the footer.
10. Use `bg-warmBlue` as the page background, `privacy-policy-text` / `privacy-policy-header` for body text and headings.
11. For Arabic RTL: add `dir={isRtl ? 'rtl' : 'ltr'}` to the page root where `const isRtl = locale === 'ar'`.

---

## i18n — Translation Pattern

The site supports 5 locales: `en` (default), `fr`, `es`, `pt`, `ar`.

### Never hardcode user-facing strings in a page component.
All translatable text must come from a dictionary. The only strings acceptable directly in JSX are hardcoded values that are the same in every language: email addresses, URLs, company names, currency symbols.

### Dictionary layers
| Layer | File | Loaded by |
|-------|------|-----------|
| UI strings + page meta | `messages/[locale].json` | `getDictionary(locale)` |
| Help Q&A content | `messages/help/help-[locale].json` | `getHelpDictionary(locale)` |
| Showdown rules content | `messages/legal/showdown-rules-[locale].json` | `getShowdownRulesDictionary(locale)` |

### When adding a string
- **Meta title/description**: add to `meta.[pageKey]` in all 5 `messages/[locale].json`.
- **UI label or heading**: add to the appropriate namespace in all 5 `messages/[locale].json`.
- **Full page body**: create `messages/legal/[page]-[locale].json` × 5 + a loader in `src/dictionaries/`.

### Split-string pattern
For translated sentences that contain a hardcoded `<a>` tag or `<strong>` span mid-sentence, split the string across multiple JSON keys:
- `p1Before` / `p1After` — text either side of an inline email link
- `p1Before` / `p1Link` / `p1After` — text + link label + trailing text (e.g. Privacy Policy)
- `bBefore` / `bDays` / `bAfter` — text either side of a bold/highlighted span

---

## Styling Rules

- Always use the existing custom tokens: `bg-warmBlue`, `bg-dark`, `text-lightBlue`, `text-textLighter`, `text-white-50`.
- Use `privacy-policy-text` for body/paragraph text and `privacy-policy-header` for section headings.
- Do not hardcode hex colours inline — use the token names.
- All pages use `pt-24 pb-16` top/bottom padding to clear the fixed navbar.
- All pages use the standard `container` class (`max-w-7xl`). Do not override with a narrower max-width.

---

## Handling Missing Requirements

- For UI details (spacing, copy, icon choice) — make a reasonable choice consistent with existing pages, note what you chose, and move on.
- For content changes to legal pages — stop and ask. Do not rewrite legal content unprompted.
- For new pages not in the blueprint — stop and ask. Confirm the spec before building.

---

## Git Workflow

### Branching strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — Vercel deploys from here. Only merge when code is ready to go live. |
| `dev` | Active development — all day-to-day work happens here. |

**Never push directly to `main` during active development.** Work on `dev`, test it, then merge to `main` to deploy.

### Creating the dev branch (one-time setup)
```
git checkout -b dev
git push -u origin dev
```

### Daily push routine
```
git add .
git commit -m "type: short description"
git push
```

### Merging dev → main (when ready to deploy)
```
git checkout main
git merge dev
git push
git checkout dev
```

### Commit message format — Conventional Commits

```
type: short description
```

| Type | When to use |
|------|-------------|
| `feat:` | new page, new component, new feature |
| `fix:` | bug fix |
| `style:` | UI / design changes |
| `content:` | copy, translation, text changes |
| `chore:` | dependencies, config, cleanup |
| `refactor:` | code restructure, no new feature |

**Examples:**
```
feat: add showdown rules page with i18n
fix: hero gap between text and download buttons
style: update container max-width to 7xl
content: add French translations for help section
chore: remove unused public assets
```

---

## Keeping Docs in Sync

Update these files when their content changes:

| File | Update when |
|------|-------------|
| `website-blueprint.md` | A page is added, a section changes, or implementation details change |
| `ai-workflow-rules.md` | A new workflow rule is established |

Do not let these files drift. A stale context file is worse than no context file.
