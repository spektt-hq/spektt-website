import type { Metadata } from 'next'
import { getDictionary, locales, type Locale } from '@/dictionaries/getDictionary'
import {
  Hero,
  WhatIsSpektt,
  Features,
  HowItWorks,
  ShowdownsHighlight,
  CTA,
} from '@/components'

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
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  }
}

export default async function HomePage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <Hero sentences={dict.hero.sentences} />
      <WhatIsSpektt heading={dict.whatIs.heading} body={dict.whatIs.body} />
      <Features dict={dict.features} />
      <HowItWorks dict={dict.howItWorks} />
      <ShowdownsHighlight dict={dict.showdowns} />
      <CTA dict={dict.cta} />
    </>
  )
}
