import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'

export const Route = createFileRoute('/$locale/about')({
  loader: async ({ params }) => {
    const dict = await getDictionary(params.locale as Locale)
    return { d: dict.about, meta: dict.meta.about }
  },
  head: ({ params, loaderData }) =>
    pageHead({
      title: loaderData?.meta.title,
      description: loaderData?.meta.description,
      locale: params.locale as Locale,
      path: '/about',
    }),
  component: AboutRoute,
})

function AboutRoute() {
  const { d } = Route.useLoaderData()

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
