import type { Metadata } from 'next'
import Image from 'next/image'
import { getDictionary, locales, type Locale } from '@/dictionaries/getDictionary'
import { buildAlternates } from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string; username: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, username } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale

  return {
    title: `@${username} — Spektt`,
    description: `View @${username}'s creative portfolio and profile on Spektt.`,
    alternates: buildAlternates(locale, `/profile/${username}`),
    openGraph: {
      title: `@${username} — Spektt`,
      description: `View @${username}'s creative portfolio and profile on Spektt.`,
      url: `https://spektt.com/profile/${username}`,
      siteName: 'Spektt',
      images: [{ url: '/spektt-new-favicon.png', width: 512, height: 512, alt: 'Spektt' }],
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title: `@${username} — Spektt`,
      description: `View @${username}'s creative portfolio and profile on Spektt.`,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

/**
 * Deep link fallback — shown when the Spektt app is not installed.
 * When the app IS installed, iOS Universal Links / Android App Links open the app directly.
 */
export default async function ProfileFallback({ params }: Props) {
  const { locale: rawLocale, username } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const dict = await getDictionary(locale)

  return (
    <div className='min-h-screen bg-warmBlue flex flex-col items-center justify-center px-4 gap-8'>
      <Image src='/icon.png' alt='Spektt Logo' width={128} height={40} className='object-contain' />

      <div className='flex flex-col items-center gap-2 text-center'>
        <p className='text-white font-bold text-2xl'>@{username}</p>
        <p className='text-textLighter font-regular text-lg'>{dict.fallback.profileMessage}</p>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        <a
          href='https://apps.apple.com/app/spektt/id6770248818'
          target='_blank'
          rel='noopener noreferrer'
          className='w-40 hover:opacity-80 transition-opacity'
        >
          <Image src='/appstore.png' alt='Download on App Store' width={160} height={53} />
        </a>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='w-44 hover:opacity-80 transition-opacity'
        >
          <Image src='/playstore.png' alt='Get it on Google Play' width={176} height={53} />
        </a>
      </div>
    </div>
  )
}
