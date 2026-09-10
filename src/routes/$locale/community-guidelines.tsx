import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { getGuidelinesDictionary } from '@/dictionaries/getGuidelinesDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import GuidelinesContent from '@/components/legal/GuidelinesContent'

export const Route = createFileRoute('/$locale/community-guidelines')({
  loader: async ({ params }) => {
    const locale = params.locale as Locale
    const [base, d] = await Promise.all([
      getDictionary(locale),
      getGuidelinesDictionary(locale),
    ])
    return { meta: base.meta.communityGuidelines, d }
  },
  head: ({ params, loaderData }) =>
    pageHead({
      title: loaderData?.meta.title,
      description: loaderData?.meta.description,
      locale: params.locale as Locale,
      path: '/community-guidelines',
    }),
  component: GuidelinesRoute,
})

function GuidelinesRoute() {
  const { d } = Route.useLoaderData()
  return <GuidelinesContent d={d} />
}
