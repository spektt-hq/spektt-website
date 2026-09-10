import type { Metadata } from 'next'
import { locales, type Locale } from '@/dictionaries/locales'
import { getDictionary } from '@/dictionaries/getDictionary'
import { getTermsDictionary } from '@/dictionaries/getTermsDictionary'
import { buildAlternates } from '@/lib/seo'
import TermsToC from './TermsToC'

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
    title: dict.meta.terms.title,
    description: dict.meta.terms.description,
    alternates: buildAlternates(locale, '/terms'),
    openGraph: {
      title: dict.meta.terms.title,
      description: dict.meta.terms.description,
      url: `https://spektt.com/${locale}/terms`,
      siteName: 'Spektt',
      images: [{ url: '/spektt-new-favicon.png', width: 512, height: 512, alt: 'Spektt' }],
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: dict.meta.terms.title,
      description: dict.meta.terms.description,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

export default async function Terms({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const d = await getTermsDictionary(locale)

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

        <TermsToC items={tocItems} tocTitle={d.toc.title} />

        <div className='space-y-10'>

          {/* 1. Service Overview */}
          <section id='section-1'>
            <h2 className='privacy-policy-header text-2xl'>{d.s1.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s1.s1_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s1.s1_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s1.s1_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s1.s1_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s1.s1_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s1.s1_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s1.s1_4_heading}</h3>
            <ul className='list-disc list-inside mt-3 space-y-2'>
              <li className='privacy-policy-text'>{d.s1.s1_4_visual}</li>
              <li className='privacy-policy-text'>{d.s1.s1_4_public}</li>
              <li className='privacy-policy-text'>{d.s1.s1_4_private}</li>
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s1.s1_5_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s1.s1_5_body}</p>
          </section>

          {/* 2. Eligibility and Age Restrictions */}
          <section id='section-2'>
            <h2 className='privacy-policy-header text-2xl'>{d.s2.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s2.s2_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s2.s2_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s2.s2_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s2.s2_2_body}</p>
            <div className='mt-4 overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='border-b border-white/10'>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s2.tableHeadFeature}</th>
                    <th className='privacy-policy-header text-left py-2'>{d.s2.tableHeadAge}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/10'>
                  {d.s2.tableRows.map(([feature, age], i) => (
                    <tr key={i}>
                      <td className='privacy-policy-text py-2 pr-4'>{feature}</td>
                      <td className='privacy-policy-text py-2'>{age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s2.s2_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s2.s2_3_body}</p>
          </section>

          {/* 3. Account Registration and Security */}
          <section id='section-3'>
            <h2 className='privacy-policy-header text-2xl'>{d.s3.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s3.s3_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s3.s3_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s3.s3_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s3.s3_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s3.s3_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s3.s3_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s3.s3_4_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s3.s3_4_body}</p>
          </section>

          {/* 4. Content You Upload */}
          <section id='section-4'>
            <h2 className='privacy-policy-header text-2xl'>{d.s4.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s4.s4_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s4.s4_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s4.s4_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s4.s4_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s4.s4_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s4.s4_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s4.s4_4_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s4.s4_4_intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s4.s4_4_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s4.s4_5_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s4.s4_5_body}</p>
          </section>

          {/* 5. Prohibited Conduct */}
          <section id='section-5'>
            <h2 className='privacy-policy-header text-2xl'>{d.s5.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s5.intro}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.content_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s5.content_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.platform_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s5.platform_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.messaging_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s5.messaging_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.general_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s5.general_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
          </section>

          {/* 6. Showdowns */}
          <section id='section-6'>
            <h2 className='privacy-policy-header text-2xl'>{d.s6.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_3_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s6.s6_3_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_4_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_4_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_5_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s6.s6_5_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_6_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_6_pulse}</p>
            <p className='privacy-policy-text mt-2'>{d.s6.s6_6_premium}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_7_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_7_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_7a_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_7a_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_8_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_8_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_9_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_9_intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s6.s6_9_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_10_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_10_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s6.s6_11_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s6.s6_11_body}</p>
          </section>

          {/* 7. Content Licenses and Private Messages */}
          <section id='section-7'>
            <h2 className='privacy-policy-header text-2xl'>{d.s7.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s7.s7_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s7.s7_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s7.s7_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s7.s7_2_body}</p>
            <p className='privacy-policy-text mt-3 font-medium text-white'>{d.s7.s7_2_important_label}</p>
            <p className='privacy-policy-text mt-1'>{d.s7.s7_2_important_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s7.s7_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s7.s7_3_body}</p>
          </section>

          {/* 8. Direct Messaging */}
          <section id='section-8'>
            <h2 className='privacy-policy-header text-2xl'>{d.s8.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s8.s8_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s8.s8_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s8.s8_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s8.s8_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s8.s8_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s8.s8_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s8.s8_4_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s8.s8_4_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s8.s8_5_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s8.s8_5_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s8.s8_6_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s8.s8_6_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s8.s8_7_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s8.s8_7_body}</p>
          </section>

          {/* 9. Child Protection and CSAM */}
          <section id='section-9'>
            <h2 className='privacy-policy-header text-2xl'>{d.s9.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s9.p1}</p>
            <p className='privacy-policy-text mt-3'>{d.s9.p2}</p>
            <p className='privacy-policy-text mt-3'>{d.s9.p3}</p>
          </section>

          {/* 10. Clusters */}
          <section id='section-10'>
            <h2 className='privacy-policy-header text-2xl'>{d.s10.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s10.s10_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s10.s10_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s10.s10_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s10.s10_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s10.s10_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s10.s10_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s10.s10_4_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s10.s10_4_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s10.s10_5_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s10.s10_5_body}</p>
          </section>

          {/* 11. Block and Safety Controls */}
          <section id='section-11'>
            <h2 className='privacy-policy-header text-2xl'>{d.s11.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s11.p1}</p>
            <p className='privacy-policy-text mt-3'>{d.s11.p2}</p>
          </section>

          {/* 12. Gamification */}
          <section id='section-12'>
            <h2 className='privacy-policy-header text-2xl'>{d.s12.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s12.s12_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s12.s12_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s12.s12_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s12.s12_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s12.s12_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s12.s12_3_body}</p>
          </section>

          {/* 13. Spektt Pro Subscription */}
          <section id='section-13'>
            <h2 className='privacy-policy-header text-2xl'>{d.s13.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s13.s13_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s13.s13_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s13.s13_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s13.s13_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s13.s13_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s13.s13_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s13.s13_4_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s13.s13_4_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s13.s13_5_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s13.s13_5_body}</p>
          </section>

          {/* 14. Intellectual Property and Trademarks */}
          <section id='section-14'>
            <h2 className='privacy-policy-header text-2xl'>{d.s14.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s14.s14_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s14.s14_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s14.s14_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s14.s14_2_body}</p>
          </section>

          {/* 15. Copyright Infringement */}
          <section id='section-15'>
            <h2 className='privacy-policy-header text-2xl'>{d.s15.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s15.s15_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s15.s15_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s15.s15_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s15.s15_2_intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s15.s15_2_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s15.s15_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s15.s15_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s15.s15_4_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s15.s15_4_body}</p>
          </section>

          {/* 16. Limitation of Liability */}
          <section id='section-16'>
            <h2 className='privacy-policy-header text-2xl'>{d.s16.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s16.s16_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s16.s16_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s16.s16_2_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s16.s16_2_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s16.s16_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s16.s16_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s16.s16_4_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s16.s16_4_body}</p>
          </section>

          {/* 17. Release of Liability and Indemnity */}
          <section id='section-17'>
            <h2 className='privacy-policy-header text-2xl'>{d.s17.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s17.s17_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s17.s17_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s17.s17_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s17.s17_2_intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s17.s17_2_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s17.s17_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s17.s17_3_body}</p>
          </section>

          {/* 18. Account Termination */}
          <section id='section-18'>
            <h2 className='privacy-policy-header text-2xl'>{d.s18.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s18.s18_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s18.s18_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s18.s18_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s18.s18_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s18.s18_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s18.s18_3_body}</p>
          </section>

          {/* 19. General Terms */}
          <section id='section-19'>
            <h2 className='privacy-policy-header text-2xl'>{d.s19.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_2_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_4_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_4_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_5_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_5_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_6_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_6_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_7_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_7_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_8_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_8_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_9_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_9_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s19.s19_10_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s19.s19_10_body}</p>
          </section>

          {/* 20. Contact */}
          <section id='section-20'>
            <h2 className='privacy-policy-header text-2xl'>{d.s20.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s20.intro}</p>
            <ul className='list-none mt-3 space-y-2'>
              <li className='privacy-policy-text'>{d.s20.legal}</li>
              <li className='privacy-policy-text'>{d.s20.support}</li>
              <li className='privacy-policy-text'>{d.s20.showdowns}</li>
              <li className='privacy-policy-text'>{d.s20.website}</li>
              <li className='privacy-policy-text'>{d.s20.company}</li>
            </ul>
            <p className='privacy-policy-text mt-6 italic'>{d.s20.closing}</p>
          </section>

        </div>
      </div>
    </div>
  )
}
