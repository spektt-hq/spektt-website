import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
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
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
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
