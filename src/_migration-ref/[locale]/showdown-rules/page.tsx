import type { Metadata } from 'next'
import { getDictionary, locales, type Locale } from '@/dictionaries/getDictionary'
import { getShowdownRulesDictionary } from '@/dictionaries/getShowdownRulesDictionary'
import { buildAlternates } from '@/lib/seo'

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
    title: dict.meta.showdownRules.title,
    description: dict.meta.showdownRules.description,
    alternates: buildAlternates(locale, '/showdown-rules'),
    openGraph: {
      title: dict.meta.showdownRules.title,
      description: dict.meta.showdownRules.description,
      url: `https://spektt.com/${locale}/showdown-rules`,
      siteName: 'Spektt',
      images: [{ url: '/spektt-new-favicon.png', width: 512, height: 512, alt: 'Spektt' }],
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: dict.meta.showdownRules.title,
      description: dict.meta.showdownRules.description,
      images: ['/spektt-new-favicon.png'],
    },
  }
}

export default async function ShowdownRulesPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const d = await getShowdownRulesDictionary(locale)
  const isRtl = locale === 'ar'

  return (
    <div className='min-h-screen bg-warmBlue pt-24 pb-16' dir={isRtl ? 'rtl' : 'ltr'}>
      <div className='container'>
        <h1 className='text-white font-bold text-3xl md:text-4xl'>{d.title}</h1>
        <p className='privacy-policy-text mt-3'>{d.lastUpdated}</p>

        <p className='privacy-policy-text mt-5'>{d.intro1}</p>
        <p className='privacy-policy-text mt-3'>{d.intro2}</p>
        <p className='privacy-policy-text mt-5 font-medium uppercase tracking-wide text-white'>
          {d.noPurchase}
        </p>

        <div className='my-10 space-y-10'>

          {/* 1 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s1.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s1.p1}</p>
            <p className='privacy-policy-text mt-3'>
              <span className='text-white font-medium'>{d.s1.pulseLabel}</span> — {d.s1.pulseText}
            </p>
            <p className='privacy-policy-text mt-3'>
              <span className='text-white font-medium'>{d.s1.premiumLabel}</span> — {d.s1.premiumText}
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s2.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s2.p1}</p>
            <p className='privacy-policy-text mt-3'>{d.s2.a}</p>
            <p className='privacy-policy-text mt-3'>{d.s2.b}</p>
            <p className='privacy-policy-text mt-3'>{d.s2.c}</p>
            <ul className='mt-2 space-y-1 pl-4'>
              {d.s2.restricted.map((item: string) => (
                <li key={item} className='privacy-policy-text'>• {item}</li>
              ))}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s2.d}</p>
            <p className='privacy-policy-text mt-3'>{d.s2.e}</p>
            <p className='privacy-policy-text mt-3'>{d.s2.f}</p>
            <p className='privacy-policy-text mt-3'>{d.s2.void}</p>
          </section>

          {/* 3 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s3.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s3.p1}</p>
          </section>

          {/* 4 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s4.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s4.a}</p>
            <p className='privacy-policy-text mt-3'>{d.s4.b}</p>
            <p className='privacy-policy-text mt-3'>{d.s4.c}</p>
            <p className='privacy-policy-text mt-3'>{d.s4.d}</p>
            <p className='privacy-policy-text mt-5'>
              <span className='text-white font-medium'>{d.s4.limitLabel}</span> {d.s4.limitText}
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s5.heading}</h2>
            <p className='privacy-policy-text mt-5'>
              {d.s5.p1Before}{' '}
              <a href='mailto:support@spektt.com' className='text-lightBlue hover:underline'>
                support@spektt.com
              </a>{' '}
              {d.s5.p1After}
            </p>
            <p className='privacy-policy-text mt-3'>{d.s5.p2}</p>
            <p className='privacy-policy-text mt-3'>{d.s5.p3}</p>
          </section>

          {/* 6 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s6.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s6.p1}</p>
            <p className='privacy-policy-text mt-3'>{d.s6.a}</p>
            <p className='privacy-policy-text mt-3'>{d.s6.b}</p>
            <p className='privacy-policy-text mt-3'>{d.s6.c}</p>
            <p className='privacy-policy-text mt-3'>{d.s6.d}</p>
            <p className='privacy-policy-text mt-3'>{d.s6.e}</p>
            <p className='privacy-policy-text mt-3'>{d.s6.reserve}</p>
          </section>

          {/* 7 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s7.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s7.p1}</p>
            <p className='privacy-policy-text mt-3'>
              <span className='text-white font-medium'>{d.s7.communityLabel}</span> — {d.s7.communityText}
            </p>
            <p className='privacy-policy-text mt-3'>
              <span className='text-white font-medium'>{d.s7.judgeLabel}</span> — {d.s7.judgeText}
            </p>
            <p className='privacy-policy-text mt-3'>
              <span className='text-white font-medium'>{d.s7.combinedLabel}</span> — {d.s7.combinedText}
            </p>
            <p className='privacy-policy-text mt-3'>
              <span className='text-white font-medium'>{d.s7.twoStageLabel}</span> — {d.s7.twoStageText}
            </p>
            <p className='privacy-policy-text mt-3'>{d.s7.tie}</p>
            <p className='privacy-policy-text mt-3'>{d.s7.odds}</p>
          </section>

          {/* 8 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s8.heading}</h2>
            <p className='privacy-policy-text mt-5'>
              <span className='text-white font-medium'>{d.s8.pulseLabel}</span> {d.s8.pulseText}
            </p>
            <p className='privacy-policy-text mt-3'>
              <span className='text-white font-medium'>{d.s8.premiumLabel}</span> {d.s8.premiumText}
            </p>
            <ul className='mt-2 space-y-1 pl-4'>
              {d.s8.prizes.map((item: string) => (
                <li key={item} className='privacy-policy-text'>• {item}</li>
              ))}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s8.nonTransfer}</p>
          </section>

          {/* 9 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s9.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s9.a}</p>
            <p className='privacy-policy-text mt-3'>
              {d.s9.bBefore}{' '}
              <span className='text-white font-medium'>{d.s9.bDays}</span>{' '}
              {d.s9.bAfter}
            </p>
            <p className='privacy-policy-text mt-3'>{d.s9.c}</p>
            <p className='privacy-policy-text mt-3'>{d.s9.d}</p>
          </section>

          {/* 10 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s10.heading}</h2>
            <p className='privacy-policy-text mt-5'>
              <span className='text-white font-medium'>{d.s10.nigeriaLabel}</span> {d.s10.nigeriaText}
            </p>
            <p className='privacy-policy-text mt-3'>
              <span className='text-white font-medium'>{d.s10.intlLabel}</span> {d.s10.intlText}
            </p>
            <p className='privacy-policy-text mt-3'>{d.s10.request}</p>
          </section>

          {/* 11 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s11.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s11.p1}</p>
          </section>

          {/* 12 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s12.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s12.p1}</p>
            <ul className='mt-2 space-y-2 pl-4'>
              {d.s12.items.map((item: string) => (
                <li key={item} className='privacy-policy-text'>• {item}</li>
              ))}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s12.final}</p>
          </section>

          {/* 13 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s13.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s13.p1}</p>
          </section>

          {/* 14 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s14.heading}</h2>
            <p className='privacy-policy-text mt-5'>
              {d.s14.p1Before}{' '}
              <a href='mailto:showdowns@spektt.com' className='text-lightBlue hover:underline'>
                showdowns@spektt.com
              </a>{' '}
              {d.s14.p1After}
            </p>
            <ul className='mt-2 space-y-2 pl-4'>
              {d.s14.items.map((item: string) => (
                <li key={item} className='privacy-policy-text'>• {item}</li>
              ))}
            </ul>
            <p className='privacy-policy-text mt-3'>{d.s14.response}</p>
          </section>

          {/* 15 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s15.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s15.p1}</p>
          </section>

          {/* 16 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s16.heading}</h2>
            <p className='privacy-policy-text mt-5'>
              {d.s16.p1Before}{' '}
              <a href={`/${locale}/privacy`} className='text-lightBlue hover:underline'>
                {d.s16.p1Link}
              </a>
              {d.s16.p1After}
            </p>
          </section>

          {/* 17 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s17.heading}</h2>
            <p className='privacy-policy-text mt-5 font-medium text-white'>{d.s17.p1}</p>
          </section>

          {/* 18 */}
          <section>
            <h2 className='privacy-policy-header text-2xl'>{d.s18.heading}</h2>
            <p className='privacy-policy-text mt-5'>{d.s18.p1}</p>
            <div className='mt-4 space-y-1'>
              <p className='privacy-policy-text'>
                <span className='text-white font-medium'>{d.s18.companyLabel}</span> {d.s18.company}
              </p>
              <p className='privacy-policy-text'>
                <span className='text-white font-medium'>{d.s18.emailLabel}</span>{' '}
                <a href='mailto:showdowns@spektt.com' className='text-lightBlue hover:underline'>
                  showdowns@spektt.com
                </a>
              </p>
              <p className='privacy-policy-text'>
                <span className='text-white font-medium'>{d.s18.websiteLabel}</span>{' '}
                <a href='https://spektt.com' className='text-lightBlue hover:underline'>
                  spektt.com
                </a>
              </p>
            </div>

            <p className='privacy-policy-text mt-10 italic'>{d.s18.copyright}</p>
            <p className='privacy-policy-text mt-2 italic'>{d.s18.updated}</p>
          </section>

        </div>
      </div>
    </div>
  )
}
