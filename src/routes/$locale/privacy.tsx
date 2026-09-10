import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { getPrivacyDictionary } from '@/dictionaries/getPrivacyDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import PrivacyContent from '@/components/legal/PrivacyContent'

export const Route = createFileRoute('/$locale/privacy')({
  loader: async ({ params }) => {
    const locale = params.locale as Locale
    const [base, d] = await Promise.all([
      getDictionary(locale),
      getPrivacyDictionary(locale),
    ])
    return { meta: base.meta.privacy, d }
  },
  head: ({ params, loaderData }) =>
    pageHead({
      title: loaderData?.meta.title,
      description: loaderData?.meta.description,
      locale: params.locale as Locale,
      path: '/privacy',
    }),
  component: PrivacyRoute,
})

function PrivacyRoute() {
  const { d } = Route.useLoaderData()
  return <PrivacyContent d={d} />
}
