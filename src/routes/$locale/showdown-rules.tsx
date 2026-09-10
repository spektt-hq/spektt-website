import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { getShowdownRulesDictionary } from '@/dictionaries/getShowdownRulesDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import ShowdownRulesContent from '@/components/legal/ShowdownRulesContent'

export const Route = createFileRoute('/$locale/showdown-rules')({
  loader: async ({ params }) => {
    const locale = params.locale as Locale
    const [base, d] = await Promise.all([
      getDictionary(locale),
      getShowdownRulesDictionary(locale),
    ])
    return { meta: base.meta.showdownRules, d }
  },
  head: ({ params, loaderData }) =>
    pageHead({
      title: loaderData?.meta.title,
      description: loaderData?.meta.description,
      locale: params.locale as Locale,
      path: '/showdown-rules',
    }),
  component: ShowdownRulesRoute,
})

function ShowdownRulesRoute() {
  const { locale } = Route.useParams()
  const { d } = Route.useLoaderData()
  return <ShowdownRulesContent d={d} locale={locale as Locale} />
}
