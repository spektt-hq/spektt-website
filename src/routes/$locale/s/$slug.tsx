import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import DeepLinkFallback from '@/components/deep-link-fallback'

export const Route = createFileRoute('/$locale/s/$slug')({
  loader: async ({ params }) => {
    const dict = await getDictionary(params.locale as Locale)
    return { message: dict.fallback.showdownMessage }
  },
  head: ({ params }) =>
    pageHead({
      title: `${params.slug} Showdown — Spektt`,
      description: `Watch the ${params.slug} Showdown on Spektt — creative competitions with real prizes.`,
      locale: params.locale as Locale,
      path: `/s/${params.slug}`,
    }),
  component: ShowdownFallback,
})

function ShowdownFallback() {
  const { slug } = Route.useParams()
  const { message } = Route.useLoaderData()
  return <DeepLinkFallback title={slug} message={message} />
}
