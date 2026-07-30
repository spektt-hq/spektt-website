import type { Metadata } from 'next'
import { getDictionary, locales, type Locale } from '@/dictionaries/getDictionary'
import { buildAlternates } from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const dict = await getDictionary(locale)

  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: buildAlternates(locale, '/about'),
    openGraph: {
      title: dict.meta.about.title,
      description: dict.meta.about.description,
      url: `https://spektt.com/${locale}/about`,
      siteName: 'Spektt',
      images: [{ url: '/spektt-new-favicon.png', width: 512, height: 512, alt: 'Spektt' }],
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: dict.meta.about.title,
      description: dict.meta.about.description,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

export default async function About({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const dict = await getDictionary(locale)
  const d = dict.about

  return (
    <div className='min-h-screen bg-warmBlue pt-24 pb-16'>
      <div className='container max-w-4xl mx-auto px-4'>
        <h1 className='text-3xl md:text-5xl font-bold text-white text-center mb-12'>
          {d.heading} <span className='text-lightBlue'>{d.headingHighlight}</span>?
        </h1>

        <div className='space-y-6 text-textLighter font-regular text-base md:text-lg leading-relaxed'>
          <p>{d.p1}</p>
          <p>{d.p2}</p>
          <p>{d.p3}</p>
          <p>{d.p4}</p>
          <p>{d.p5}</p>
          <p>{d.p6}</p>
        </div>

        <div className='mt-16'>
          <p className='text-lightBlue font-italic text-3xl md:text-4xl italic'>
            {d.signature}
          </p>
          <p className='text-textLighter font-medium mt-2'>{d.company}</p>
        </div>
      </div>
    </div>
  )
}
