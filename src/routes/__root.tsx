import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from '@tanstack/react-router'
import { locales, type Locale } from '@/dictionaries/locales'
import NotFound from '@/components/NotFound'
import '../styles/globals.css'

// JSON-LD structured data — tells Google our site name and logo for search results.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Spektt',
  url: 'https://spektt.com',
  logo: 'https://spektt.com/spektt-new-favicon.png',
  sameAs: ['https://spektt.com'],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Spektt',
  url: 'https://spektt.com',
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Smart Banner — "Open in Spektt" on mobile Safari before the app is installed.
      { name: 'apple-itunes-app', content: 'app-id=6770248818' },
      { title: 'Spektt — Where Creatives Compete' },
      {
        name: 'description',
        content:
          'Join Spektt, the creative platform where you showcase your work, enter Showdowns, and compete for prizes.',
      },
      { property: 'og:site_name', content: 'Spektt' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Spektt — Where Creatives Compete' },
      {
        property: 'og:description',
        content:
          'Join Spektt, the creative platform where you showcase your work, enter Showdowns, and compete for prizes.',
      },
      { property: 'og:image', content: 'https://spektt.com/spektt-new-favicon.png' },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [
      { rel: 'icon', href: '/spektt-new-favicon.png' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(organizationJsonLd),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(websiteJsonLd),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  // The locale is the first path segment (/$locale/...). Set <html lang/dir> from it so
  // Arabic renders RTL without a client flash — router state is available during SSR.
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const seg = pathname.split('/')[1]
  const locale = (locales.includes(seg as Locale) ? seg : 'en') as Locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir}>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
