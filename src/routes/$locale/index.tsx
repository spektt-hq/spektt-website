import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { type Locale } from '@/dictionaries/locales'
import { buildAlternates } from '@/lib/seo'
import {
  Hero,
  WhatIsSpektt,
  Features,
  HowItWorks,
  ShowdownsHighlight,
  CTA,
} from '@/components'

export const Route = createFileRoute('/$locale/')({
  loader: async ({ params }) => {
    const dict = await getDictionary(params.locale as Locale)
    return { dict }
  },
  head: ({ params, loaderData }) => {
    const locale = params.locale as Locale
    const meta = loaderData?.dict.meta.home
    const alt = buildAlternates(locale, '')
    return {
      meta: [
        { title: meta?.title },
        { name: 'description', content: meta?.description },
      ],
      links: [
        { rel: 'canonical', href: alt.canonical },
        ...Object.entries(alt.languages).map(([hrefLang, href]) => ({
          rel: 'alternate',
          hrefLang,
          href,
        })),
      ],
    }
  },
  component: HomePage,
})

function HomePage() {
  const { dict } = Route.useLoaderData()

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
