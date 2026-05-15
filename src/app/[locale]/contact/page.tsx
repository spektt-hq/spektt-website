import type { Metadata } from 'next'
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa6'
import { getDictionary, locales, type Locale } from '@/dictionaries/getDictionary'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const dict = await getDictionary(locale)

  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    openGraph: {
      title: dict.meta.contact.title,
      description: dict.meta.contact.description,
      url: `https://spektt.com/${locale}/contact`,
      siteName: 'Spektt',
      images: [{ url: '/spektt-new-favicon.png', width: 512, height: 512, alt: 'Spektt' }],
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: dict.meta.contact.title,
      description: dict.meta.contact.description,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

const channelEmails = [
  'hello@spektt.com',
  'support@spektt.com',
  'legal@spektt.com',
  'showdowns@spektt.com',
]

export default async function Contact({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const dict = await getDictionary(locale)
  const d = dict.contact

  return (
    <div className='min-h-screen bg-warmBlue pt-24 pb-16'>
      <div className='container max-w-3xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-5xl font-bold text-white mb-4'>
            {d.heading}
          </h1>
          <p className='text-textLighter font-regular text-lg'>{d.subtitle}</p>
        </div>

        <div className='bg-dark border border-lightBlue/30 rounded-xl px-6 py-4 mb-10 text-center'>
          <p className='text-textLighter font-regular'>
            {d.helpNote}{' '}
            <Link href={`/${locale}/help`} className='text-lightBlue hover:underline font-medium'>
              {d.helpNoteLink}
            </Link>{' '}
            {d.helpNoteEnd}
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          {d.channels.map((channel, index) => (
            <div
              key={channelEmails[index]}
              className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-dark border border-white/10 rounded-xl px-6 py-5 hover:border-lightBlue/40 transition-colors duration-300'
            >
              <div className='flex flex-col gap-1'>
                <span className='text-white font-bold text-lg'>{channel.label}</span>
                <span className='text-textLighter font-regular text-sm'>{channel.desc}</span>
              </div>
              <a
                href={`mailto:${channelEmails[index]}`}
                className='flex items-center gap-2 text-lightBlue font-medium hover:underline shrink-0'
              >
                <FaEnvelope />
                {channelEmails[index]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
