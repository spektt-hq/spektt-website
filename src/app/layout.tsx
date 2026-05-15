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
      <body className='antialiased'>
        <NextTopLoader color='#048BA8' showSpinner={false} />
        {children}
      </body>
    </html>
  )
}
