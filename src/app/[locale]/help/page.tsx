import type { Metadata } from 'next'
import { getDictionary, locales, type Locale } from '@/dictionaries/getDictionary'
import { getHelpDictionary } from '@/dictionaries/getHelpDictionary'
import HelpClient from './HelpClient'

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
    title: dict.meta.help.title,
    description: dict.meta.help.description,
    openGraph: {
      title: dict.meta.help.title,
      description: dict.meta.help.description,
      url: `https://spektt.com/${locale}/help`,
      siteName: 'Spektt',
      images: [{ url: '/spektt-new-favicon.png', width: 512, height: 512, alt: 'Spektt' }],
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: dict.meta.help.title,
      description: dict.meta.help.description,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

export default async function HelpPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const [dict, helpDict] = await Promise.all([getDictionary(locale), getHelpDictionary(locale)])

  return <HelpClient dict={dict.help} categories={helpDict.categories} locale={locale} />
}
