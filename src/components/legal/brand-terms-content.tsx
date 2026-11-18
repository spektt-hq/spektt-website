import type { BrandTermsDictionary } from '@/dictionaries/getBrandTermsDictionary'
import type { Locale } from '@/dictionaries/locales'

// Brand Terms (app spec 50 §12; copy owned by the app repo's site-content/brand-terms-blueprint.md).
// Data-driven: each section is a heading, paragraphs and a list, so a wording change after counsel's
// review is a JSON edit only.
export default function BrandTermsContent({ d, locale }: { d: BrandTermsDictionary; locale: Locale }) {
  const isRtl = locale === 'ar'

  return (
    <div className='min-h-screen bg-warmBlue pt-24 pb-16' dir={isRtl ? 'rtl' : 'ltr'}>
      <div className='container'>
        <h1 className='text-white font-bold text-3xl md:text-4xl'>{d.title}</h1>
        <p className='privacy-policy-text mt-3'>{d.lastUpdated}</p>
        {d.intro.map((p, i) => (
          <p key={i} className={`privacy-policy-text ${i === 0 ? 'mt-5' : 'mt-3'}`}>{p}</p>
        ))}

        <div className='my-10 space-y-10'>
          {d.sections.map((section) => (
            <section key={section.heading}>
              <h2 className='privacy-policy-header text-2xl'>{section.heading}</h2>
              {section.paras.map((p, i) => (
                <p key={i} className={`privacy-policy-text ${i === 0 ? 'mt-5' : 'mt-3'}`}>{p}</p>
              ))}
              {section.items.length > 0 && (
                <ul className={`list-disc list-inside space-y-2 ${section.paras.length ? 'mt-3' : 'mt-5'}`}>
                  {section.items.map((item, i) => (
                    <li key={i} className='privacy-policy-text'>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
