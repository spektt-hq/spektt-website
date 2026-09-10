import type { Metadata } from 'next'
import { headers } from 'next/headers'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://spektt.com'),
  title: 'Spektt — Where Creatives Compete',
  description:
    'Join Spektt, the creative platform where you showcase your work, enter Showdowns, and compete for prizes.',
  openGraph: {
    title: 'Spektt — Where Creatives Compete',
    description:
      'Join Spektt, the creative platform where you showcase your work, enter Showdowns, and compete for prizes.',
    url: 'https://spektt.com',
    siteName: 'Spektt',
    images: [
      {
        url: '/spektt-new-favicon.png',
        width: 512,
        height: 512,
        alt: 'Spektt',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Spektt — Where Creatives Compete',
    description:
      'Join Spektt, the creative platform where you showcase your work, enter Showdowns, and compete for prizes.',
    images: ['/spektt-new-favicon.png'],
  },
}

// JSON-LD structured data — tells Google our site name and logo for search results
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const locale = headersList.get('x-locale') ?? 'en'
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir}>
      <head>
        {/* Smart Banner — shows "Open in Spektt" on mobile Safari before app is installed */}
        <meta name='apple-itunes-app' content='app-id=6770248818' />

        {/* JSON-LD — Google uses this to show the Spektt logo in search results */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className='antialiased'>
        <NextTopLoader color='#048BA8' showSpinner={false} />
        {children}
      </body>
    </html>
  )
}
