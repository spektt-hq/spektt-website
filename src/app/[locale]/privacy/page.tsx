import type { Metadata } from 'next'
import { locales, type Locale } from '@/dictionaries/locales'
import { getDictionary } from '@/dictionaries/getDictionary'
import { getPrivacyDictionary } from '@/dictionaries/getPrivacyDictionary'
import PrivacyToC from './PrivacyToC'

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
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
    openGraph: {
      title: dict.meta.privacy.title,
      description: dict.meta.privacy.description,
      url: `https://spektt.com/${locale}/privacy`,
      siteName: 'Spektt',
      images: [{ url: '/spektt-new-favicon.png', width: 512, height: 512, alt: 'Spektt' }],
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: dict.meta.privacy.title,
      description: dict.meta.privacy.description,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

export default async function PrivacyPolicy({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const d = await getPrivacyDictionary(locale)

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

        <PrivacyToC items={tocItems} tocTitle={d.toc.title} />

        <div className='space-y-10'>

          {/* 1. Who We Are */}
          <section id='section-1'>
            <h2 className='privacy-policy-header text-2xl'>{d.s1.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s1.body}</p>
            <ul className='list-none mt-4 space-y-1'>
              <li className='privacy-policy-text'><strong className='text-white'>{d.s1.legalEntity}</strong></li>
              <li className='privacy-policy-text'><strong className='text-white'>{d.s1.registration}</strong></li>
            </ul>
            <p className='privacy-policy-text mt-4'><strong className='text-white'>{d.s1.contactLabel}</strong></p>
            <ul className='list-none mt-1 space-y-1'>
              {d.s1.contactItems.map((item, i) => (
                <li key={i} className='privacy-policy-text'>{item}</li>
              ))}
            </ul>
          </section>

          {/* 2. Information We Collect */}
          <section id='section-2'>
            <h2 className='privacy-policy-header text-2xl'>{d.s2.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s2.s2_1_heading}</h3>

            <p className='privacy-policy-text mt-3 font-medium text-white'>{d.s2.accountHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.accountItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <p className='privacy-policy-text mt-4 font-medium text-white'>{d.s2.contentHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.contentItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <p className='privacy-policy-text mt-4 font-medium text-white'>{d.s2.contestHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.contestItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <p className='privacy-policy-text mt-4 font-medium text-white'>{d.s2.clustersHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.clustersItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <p className='privacy-policy-text mt-4 font-medium text-white'>{d.s2.dmHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.dmItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <p className='privacy-policy-text mt-4 font-medium text-white'>{d.s2.subsHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.subsItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <h3 className='privacy-policy-header text-xl mt-6'>{d.s2.s2_2_heading}</h3>

            <p className='privacy-policy-text mt-3 font-medium text-white'>{d.s2.locationHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.locationItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <p className='privacy-policy-text mt-4 font-medium text-white'>{d.s2.deviceHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.deviceItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <p className='privacy-policy-text mt-4 font-medium text-white'>{d.s2.gamificationHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.gamificationItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <p className='privacy-policy-text mt-4 font-medium text-white'>{d.s2.notifHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.notifItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <p className='privacy-policy-text mt-4 font-medium text-white'>{d.s2.crashHeading}</p>
            <ul className='list-disc list-inside mt-1 space-y-1'>
              {d.s2.crashItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section id='section-3'>
            <h2 className='privacy-policy-header text-2xl'>{d.s3.heading}</h2>
            <div className='mt-4 overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='border-b border-white/10'>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s3.tableHeadPurpose}</th>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s3.tableHeadData}</th>
                    <th className='privacy-policy-header text-left py-2'>{d.s3.tableHeadBasis}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/10'>
                  {d.s3.tableRows.map(([purpose, data, basis], i) => (
                    <tr key={i}>
                      <td className='privacy-policy-text py-2 pr-4'>{purpose}</td>
                      <td className='privacy-policy-text py-2 pr-4'>{data}</td>
                      <td className='privacy-policy-text py-2'>{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='privacy-policy-text mt-5 font-medium text-white'>{d.s3.notDoLabel}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s3.notDoItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
          </section>

          {/* 4. Sharing Your Information */}
          <section id='section-4'>
            <h2 className='privacy-policy-header text-2xl'>{d.s4.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s4.intro}</p>

            <h3 className='privacy-policy-header text-xl mt-5'>{d.s4.usersHeading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s4.usersItems.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>

            <h3 className='privacy-policy-header text-xl mt-5'>{d.s4.providersHeading}</h3>
            <div className='mt-3 overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='border-b border-white/10'>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s4.providerTableHeadProvider}</th>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s4.providerTableHeadPurpose}</th>
                    <th className='privacy-policy-header text-left py-2'>{d.s4.providerTableHeadData}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/10'>
                  {d.s4.providerRows.map(([provider, purpose, data], i) => (
                    <tr key={i}>
                      <td className='privacy-policy-text py-2 pr-4'>{provider}</td>
                      <td className='privacy-policy-text py-2 pr-4'>{purpose}</td>
                      <td className='privacy-policy-text py-2'>{data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className='privacy-policy-header text-xl mt-5'>{d.s4.lawHeading}</h3>
            <p className='privacy-policy-text mt-2'>{d.s4.lawBody}</p>

            <h3 className='privacy-policy-header text-xl mt-5'>{d.s4.transferHeading}</h3>
            <p className='privacy-policy-text mt-2'>{d.s4.transferBody}</p>
          </section>

          {/* 5. Direct Messaging */}
          <section id='section-5'>
            <h2 className='privacy-policy-header text-2xl'>{d.s5.heading}</h2>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.s5_1_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s5.s5_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.s5_2_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s5.s5_2_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.s5_3_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s5.s5_3_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.s5_4_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s5.s5_4_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.s5_5_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s5.s5_5_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.s5_6_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s5.s5_6_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s5.s5_7_heading}</h3>
            <p className='privacy-policy-text mt-3'>{d.s5.s5_7_body}</p>
          </section>

          {/* 6. Clusters */}
          <section id='section-6'>
            <h2 className='privacy-policy-header text-2xl'>{d.s6.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s6.p1}</p>
            <p className='privacy-policy-text mt-3'>{d.s6.p2}</p>
            <p className='privacy-policy-text mt-3'>{d.s6.p3}</p>
          </section>

          {/* 7. Showdowns and Prize Payments */}
          <section id='section-7'>
            <h2 className='privacy-policy-header text-2xl'>{d.s7.heading}</h2>
            <ul className='list-disc list-inside mt-3 space-y-2'>
              {d.s7.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
          </section>

          {/* 8. Children's Privacy */}
          <section id='section-8'>
            <h2 className='privacy-policy-header text-2xl'>{d.s8.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s8.p1}</p>
            <p className='privacy-policy-text mt-3'>{d.s8.p2}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s8.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s8.p3}</p>
          </section>

          {/* 9. Your Rights */}
          <section id='section-9'>
            <h2 className='privacy-policy-header text-2xl'>{d.s9.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s9.intro}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s9.s9_1_heading}</h3>
            <p className='privacy-policy-text mt-2'>{d.s9.s9_1_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s9.s9_2_heading}</h3>
            <p className='privacy-policy-text mt-2'>{d.s9.s9_2_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s9.s9_3_heading}</h3>
            <p className='privacy-policy-text mt-2'>{d.s9.s9_3_body}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s9.s9_3_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s9.s9_4_heading}</h3>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s9.s9_4_items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s9.s9_5_heading}</h3>
            <p className='privacy-policy-text mt-2'>{d.s9.s9_5_body}</p>
            <h3 className='privacy-policy-header text-xl mt-5'>{d.s9.s9_6_heading}</h3>
            <p className='privacy-policy-text mt-2'>{d.s9.s9_6_body}</p>
          </section>

          {/* 10. Data Retention */}
          <section id='section-10'>
            <h2 className='privacy-policy-header text-2xl'>{d.s10.heading}</h2>
            <div className='mt-4 overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='border-b border-white/10'>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s10.tableHeadType}</th>
                    <th className='privacy-policy-header text-left py-2'>{d.s10.tableHeadPeriod}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/10'>
                  {d.s10.tableRows.map(([type, period], i) => (
                    <tr key={i}>
                      <td className='privacy-policy-text py-2 pr-4'>{type}</td>
                      <td className='privacy-policy-text py-2'>{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 11. Data Security */}
          <section id='section-11'>
            <h2 className='privacy-policy-header text-2xl'>{d.s11.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s11.intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s11.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s11.caveat}</p>
          </section>

          {/* 12. International Data Transfers */}
          <section id='section-12'>
            <h2 className='privacy-policy-header text-2xl'>{d.s12.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s12.p1}</p>
            <p className='privacy-policy-text mt-3'>{d.s12.p2}</p>
          </section>

          {/* 13. Legal Basis for Processing */}
          <section id='section-13'>
            <h2 className='privacy-policy-header text-2xl'>{d.s13.heading}</h2>
            <div className='mt-4 overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='border-b border-white/10'>
                    <th className='privacy-policy-header text-left py-2 pr-4'>{d.s13.tableHeadActivity}</th>
                    <th className='privacy-policy-header text-left py-2'>{d.s13.tableHeadBasis}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-white/10'>
                  {d.s13.tableRows.map(([activity, basis], i) => (
                    <tr key={i}>
                      <td className='privacy-policy-text py-2 pr-4'>{activity}</td>
                      <td className='privacy-policy-text py-2'>{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 14. Third-Party Links */}
          <section id='section-14'>
            <h2 className='privacy-policy-header text-2xl'>{d.s14.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s14.body}</p>
          </section>

          {/* 15. Changes to This Privacy Policy */}
          <section id='section-15'>
            <h2 className='privacy-policy-header text-2xl'>{d.s15.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s15.intro}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              {d.s15.items.map((item, i) => <li key={i} className='privacy-policy-text'>{item}</li>)}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s15.closing}</p>
          </section>

          {/* 16. Contact Us */}
          <section id='section-16'>
            <h2 className='privacy-policy-header text-2xl'>{d.s16.heading}</h2>
            <p className='privacy-policy-text mt-3'>{d.s16.intro}</p>
            <ul className='list-none mt-3 space-y-2'>
              {d.s16.items.map((item, i) => (
                <li key={i} className='privacy-policy-text'>{item}</li>
              ))}
            </ul>
            <p className='privacy-policy-text mt-4'>{d.s16.ndpc}</p>
          </section>

        </div>
      </div>
    </div>
  )
}
