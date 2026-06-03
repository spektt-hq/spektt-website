import { getDictionary, locales, type Locale } from '@/dictionaries/getDictionary'
import type { Metadata } from 'next'
import Image from 'next/image'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  return {
    title: `Collection — Spektt`,
    description: `View this collection on Spektt — the creative community platform.`,
    openGraph: {
      title: `Collection — Spektt`,
      description: `View this collection on Spektt — the creative community platform.`,
      url: `https://spektt.com/col/${slug}`,
      siteName: 'Spektt',
      images: [{ url: '/spektt-new-favicon.png', width: 512, height: 512, alt: 'Spektt' }],
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `Collection — Spektt`,
      description: `View this collection on Spektt — the creative community platform.`,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

/**
 * Deep link fallback — shown when the Spektt app is not installed.
 * When the app IS installed, iOS Universal Links / Android App Links open the app directly.
 */
export default async function CollectionFallback({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const dict = await getDictionary(locale)

  return (
    <div className='min-h-screen bg-warmBlue flex flex-col items-center justify-center px-4 gap-8'>
      <Image src='/icon.png' alt='Spektt Logo' width={128} height={40} className='object-contain' />

      <div className='flex flex-col items-center gap-2 text-center'>
        <p className='text-textLighter font-regular text-lg'>{dict.fallback.collectionMessage}</p>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        <a
          href='https://apps.apple.com/app/spektt/id6770248818'
          target='_blank'
          rel='noopener noreferrer'
          className='w-40 hover:opacity-80 transition-opacity'
        >
          <Image src='/appstore.png' alt='Download on App Store' width={160} height={53} />
        </a>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='w-44 hover:opacity-80 transition-opacity'
        >
          <Image src='/playstore.png' alt='Get it on Google Play' width={176} height={53} />
        </a>
      </div>
    </div>
  )
}
