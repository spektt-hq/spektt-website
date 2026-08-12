import type { Metadata } from 'next'
import { locales, type Locale } from '@/dictionaries/locales'
import { getDictionary } from '@/dictionaries/getDictionary'
import { getGuidelinesDictionary } from '@/dictionaries/getGuidelinesDictionary'
import { buildAlternates } from '@/lib/seo'
import GuidelinesToC from './GuidelinesToC'

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const dict = await getDictionary(locale)

  return {
    title: dict.meta.communityGuidelines.title,
    description: dict.meta.communityGuidelines.description,
    alternates: buildAlternates(locale, '/community-guidelines'),
    openGraph: {
      title: dict.meta.communityGuidelines.title,
      description: dict.meta.communityGuidelines.description,
      url: `https://spektt.com/${locale}/community-guidelines`,
      siteName: 'Spektt',
      images: [{ url: '/spektt-new-favicon.png', width: 512, height: 512, alt: 'Spektt' }],
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: dict.meta.communityGuidelines.title,
      description: dict.meta.communityGuidelines.description,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

export default async function CommunityGuidelines({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const d = await getGuidelinesDictionary(locale)

  const tocItems = d.toc.items.map((label, i) => ({
    id: `section-${i + 1}`,
    label,
  }))

  return (
    <div className='min-h-screen bg-warmBlue pt-20 pb-16'>
      <div className='container max-w-4xl mx-auto px-4'>

        <h1 className='text-white font-bold text-3xl md:text-4xl mt-8 mb-2'>{d.pageTitle}</h1>
        <p className='privacy-policy-text mt-2'>{d.effectiveDate}</p>
        <p className='privacy-policy-text mt-1'>{d.lastUpdated}</p>
        <p className='privacy-policy-text mt-6'>{d.intro}</p>
        <p className='privacy-policy-text mt-3'>{d.appliesTo}</p>
        <p className='privacy-policy-text mt-3 font-medium text-white'>{d.ageNote}</p>

        <GuidelinesToC items={tocItems} tocTitle={d.toc.title} />

        <div className='space-y-10'>

          {/* 1. Post work that is yours */}
          <section id='section-1'>
            <h2 className='privacy-policy-header text-2xl'>{d.s1.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s1.body}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s1.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
          </section>

          {/* 2. Treat people as people */}
          <section id='section-2'>
            <h2 className='privacy-policy-header text-2xl'>{d.s2.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s2.body}</p>
            <p className='privacy-policy-text mt-3'>{d.s2.blocking}</p>
          </section>

          {/* 3. Keep it safe */}
          <section id='section-3'>
            <h2 className='privacy-policy-header text-2xl'>{d.s3.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s3.intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s3.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s3.priority}</p>
            <p className='privacy-policy-text mt-3'>{d.s3.support}</p>
          </section>

          {/* 4. Be who you say you are */}
          <section id='section-4'>
            <h2 className='privacy-policy-header text-2xl'>{d.s4.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s4.intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s4.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
          </section>

          {/* 5. Do not game the system */}
          <section id='section-5'>
            <h2 className='privacy-policy-header text-2xl'>{d.s5.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s5.intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s5.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s5.note}</p>
          </section>

          {/* 6. No spam */}
          <section id='section-6'>
            <h2 className='privacy-policy-header text-2xl'>{d.s6.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s6.body}</p>
          </section>

          {/* 7. Harmful false information */}
          <section id='section-7'>
            <h2 className='privacy-policy-header text-2xl'>{d.s7.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s7.body}</p>
          </section>

          {/* 8. Clusters */}
          <section id='section-8'>
            <h2 className='privacy-policy-header text-2xl'>{d.s8.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s8.intro}</p>
            <div className='mt-4 overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='border-b border-white/10'>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s8.tableHeadRule}</th>
                    <th className='privacy-policy-header text-left py-2'>{d.s8.tableHeadMeaning}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/10'>
                  {d.s8.tableRows.map(([rule, meaning], i) => (
                    <tr key={i}>
                      <td className='privacy-policy-text py-2 pr-4'>{rule}</td>
                      <td className='privacy-policy-text py-2'>{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='privacy-policy-text mt-4'>{d.s8.screening}</p>
            <p className='privacy-policy-text mt-3'>{d.s8.moderators}</p>
          </section>

          {/* 9. How reporting works */}
          <section id='section-9'>
            <h2 className='privacy-policy-header text-2xl'>{d.s9.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s9.intro}</p>
            <p className='privacy-policy-text mt-3'>{d.s9.tableIntro}</p>
            <div className='mt-4 overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='border-b border-white/10'>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s9.tableHeadSeverity}</th>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s9.tableHeadExamples}</th>
                    <th className='privacy-policy-header text-left py-2'>{d.s9.tableHeadTime}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/10'>
                  {d.s9.tableRows.map(([severity, examples, time], i) => (
                    <tr key={i}>
                      <td className='privacy-policy-text py-2 pr-4'>{severity}</td>
                      <td className='privacy-policy-text py-2 pr-4'>{examples}</td>
                      <td className='privacy-policy-text py-2 whitespace-nowrap'>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='privacy-policy-text mt-4'>{d.s9.note}</p>
          </section>

          {/* 10. Consequences */}
          <section id='section-10'>
            <h2 className='privacy-policy-header text-2xl'>{d.s10.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s10.intro}</p>
            <ol className='list-decimal list-inside mt-2 space-y-2'>
              {d.s10.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ol>
            <p className='privacy-policy-text mt-3'>{d.s10.clusterNote}</p>
          </section>

          {/* 11. Appealing */}
          <section id='section-11'>
            <h2 className='privacy-policy-header text-2xl'>{d.s11.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s11.intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s11.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s11.contact}</p>
          </section>

          {/* 12. Contact */}
          <section id='section-12'>
            <h2 className='privacy-policy-header text-2xl'>{d.s12.heading}</h2>
            <div className='mt-4 overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='border-b border-white/10'>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s12.tableHeadReason}</th>
                    <th className='privacy-policy-header text-left py-2'>{d.s12.tableHeadEmail}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/10'>
                  {d.s12.tableRows.map(([reason, email], i) => (
                    <tr key={i}>
                      <td className='privacy-policy-text py-2 pr-4'>{reason}</td>
                      <td className='privacy-policy-text py-2'>{email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='privacy-policy-text mt-6 italic'>{d.s12.closing}</p>
          </section>

        </div>
      </div>
    </div>
  )
}
