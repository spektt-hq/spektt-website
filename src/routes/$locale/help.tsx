import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { getHelpDictionary } from '@/dictionaries/getHelpDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import HelpClient from '@/components/help-client'

export const Route = createFileRoute('/$locale/help')({
  loader: async ({ params }) => {
    const locale = params.locale as Locale
    const [dict, helpDict] = await Promise.all([
      getDictionary(locale),
      getHelpDictionary(locale),
    ])
    return { d: dict.help, meta: dict.meta.help, categories: helpDict.categories }
  },
  head: ({ params, loaderData }) =>
    pageHead({
      title: loaderData?.meta.title,
      description: loaderData?.meta.description,
      locale: params.locale as Locale,
      path: '/help',
    }),
  component: HelpRoute,
})

function HelpRoute() {
  const { locale } = Route.useParams()
  const { d, categories } = Route.useLoaderData()
  return <HelpClient dict={d} categories={categories} locale={locale as Locale} />
}
