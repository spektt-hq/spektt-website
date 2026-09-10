import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import DeepLinkFallback from '@/components/deep-link-fallback'

export const Route = createFileRoute('/$locale/c/$slug')({
  loader: async ({ params }) => {
    const dict = await getDictionary(params.locale as Locale)
    return { message: dict.fallback.clusterMessage }
  },
  head: ({ params }) =>
    pageHead({
      title: `${params.slug} Cluster — Spektt`,
      description: `Join the ${params.slug} Cluster on Spektt — the creative community platform.`,
      locale: params.locale as Locale,
      path: `/c/${params.slug}`,
    }),
  component: ClusterFallback,
})

function ClusterFallback() {
  const { slug } = Route.useParams()
  const { message } = Route.useLoaderData()
  return <DeepLinkFallback title={slug} message={message} />
}
