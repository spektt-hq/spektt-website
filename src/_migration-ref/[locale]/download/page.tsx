import type { Metadata } from 'next'
import Image from 'next/image'
import {
  getDictionary,
  locales,
  type Locale,
} from '@/dictionaries/getDictionary'
import { buildAlternates } from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = (
    locales.includes(rawLocale as Locale) ? rawLocale : 'en'
  ) as Locale
  const dict = await getDictionary(locale)

  return {
    title: dict.meta.download.title,
    description: dict.meta.download.description,
    alternates: buildAlternates(locale, '/download'),
    openGraph: {
      title: dict.meta.download.title,
      description: dict.meta.download.description,
      url: `https://spektt.com/${locale}/download`,
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
      title: dict.meta.download.title,
      description: dict.meta.download.description,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

export default async function Download({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (
    locales.includes(rawLocale as Locale) ? rawLocale : 'en'
  ) as Locale
  const dict = await getDictionary(locale)

  return (
    <div className='min-h-screen bg-warmBlue flex flex-col items-center justify-center px-4 gap-8'>
      <Image
        src='/icon.png'
        alt='Spektt Logo'
        width={128}
        height={40}
        className='object-contain'
      />

      <p className='text-textLighter font-regular text-lg text-center'>
        {dict.download.description}
      </p>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        <a
          href='https://apps.apple.com/app/spektt/id6770248818'
          target='_blank'
          rel='noopener noreferrer'
          className='w-40 hover:opacity-80 transition-opacity'
        >
          <Image
            src='/appstore.png'
            alt='Download on App Store'
            width={160}
            height={53}
          />
        </a>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='w-44 hover:opacity-80 transition-opacity'
        >
          <Image
            src='/playstore.png'
            alt='Get it on Google Play'
            width={176}
            height={53}
          />
        </a>
      </div>
    </div>
  )
}
