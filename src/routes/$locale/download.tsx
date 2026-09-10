import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'

export const Route = createFileRoute('/$locale/download')({
  loader: async ({ params }) => {
    const dict = await getDictionary(params.locale as Locale)
    return { d: dict.download, meta: dict.meta.download }
  },
  head: ({ params, loaderData }) =>
    pageHead({
      title: loaderData?.meta.title,
      description: loaderData?.meta.description,
      locale: params.locale as Locale,
      path: '/download',
    }),
  component: DownloadRoute,
})

function DownloadRoute() {
  const { d } = Route.useLoaderData()

  return (
    <div className='min-h-screen bg-warmBlue flex flex-col items-center justify-center px-4 gap-8'>
      <img
        src='/icon.png'
        alt='Spektt Logo'
        width={128}
        height={40}
        className='object-contain'
      />

      <p className='text-textLighter font-regular text-lg text-center'>
        {d.description}
      </p>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        <a
          href='https://apps.apple.com/app/spektt/id6770248818'
          target='_blank'
          rel='noopener noreferrer'
          className='w-40 hover:opacity-80 transition-opacity'
        >
          <img
            src='/appstore.png'
            alt='Download on App Store'
            width={160}
            height={53}
          />
        </a>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='w-44 hover:opacity-80 transition-opacity'
        >
          <img
            src='/playstore.png'
            alt='Get it on Google Play'
            width={176}
            height={53}
          />
        </a>
      </div>
    </div>
  )
}
