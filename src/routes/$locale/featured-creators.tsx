import { createFileRoute, Link } from '@tanstack/react-router'
import { Fragment, type ReactNode } from 'react'
import { getDictionary } from '@/dictionaries/getDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'

// "How Spektt features creators" (app spec 53 §5): live before the first "Chosen by the Spektt team"
// article. Text owned by the app repo's spektt-context/site-content/featured-creators-blueprint.md;
// every rule matches the admin dashboard's publish checks — change them together.

const SUPPORT_EMAIL = 'support@spektt.com'

export const Route = createFileRoute('/$locale/featured-creators')({
  loader: async ({ params }) => {
    const dict = await getDictionary(params.locale as Locale)
    return { d: dict.featured, meta: dict.meta.featured }
  },
  head: ({ params, loaderData }) =>
    pageHead({
      title: loaderData?.meta.title,
      description: loaderData?.meta.description,
      locale: params.locale as Locale,
      path: '/featured-creators',
    }),
  component: FeaturedCreatorsRoute,
})

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className='space-y-4'>
    <h2 className='text-xl md:text-2xl font-bold text-white'>{title}</h2>
    {children}
  </section>
)

const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className='list-disc ps-6 space-y-2'>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)

/** A translated line with {contact} / {email} placeholders, filled with links. */
const Fill = ({ text, slots }: { text: string; slots: Record<string, ReactNode> }) => (
  <>
    {text.split(/(\{\w+\})/g).map((part, i) => {
      const slot = /^\{(\w+)\}$/.exec(part)?.[1]
      return <Fragment key={i}>{slot && slot in slots ? slots[slot] : part}</Fragment>
    })}
  </>
)

function FeaturedCreatorsRoute() {
  const { d } = Route.useLoaderData()
  const { locale } = Route.useParams()

  const email = (
    <a href={`mailto:${SUPPORT_EMAIL}`} className='text-lightBlue hover:underline'>
      {SUPPORT_EMAIL}
    </a>
  )
  const contact = (
    <Link to='/$locale/contact' params={{ locale }} className='text-lightBlue hover:underline'>
      {d.contactLink}
    </Link>
  )

  return (
    <div className='min-h-screen bg-warmBlue pt-24 pb-16'>
      <div className='container max-w-3xl mx-auto px-4'>
        <h1 className='text-3xl md:text-5xl font-bold text-white mb-8'>{d.title}</h1>

        <div className='space-y-10 text-textLighter font-regular text-base md:text-lg leading-relaxed'>
          <p>{d.intro}</p>

          <Section title={d.whyTitle}>
            <p>{d.whyIntro}</p>
            <Bullets
              items={d.reasons.map((r) => (
                <>
                  <span className='font-bold text-white'>{r.name}</span> — {r.text}
                </>
              ))}
            />
          </Section>

          <Section title={d.whoTitle}>
            <Bullets items={d.who} />
          </Section>

          <Section title={d.notTitle}>
            <Bullets items={d.not} />
          </Section>

          <Section title={d.consentTitle}>
            <p>{d.consentIntro}</p>
            <Bullets items={d.consent} />
            <p>{d.consentAfter}</p>
            <p>{d.disclosure}</p>
          </Section>

          <Section title={d.liveTitle}>
            <p>{d.live}</p>
          </Section>

          <Section title={d.nominateTitle}>
            <p>
              <Fill text={d.nominate} slots={{ contact, email }} />
            </p>
          </Section>

          <Section title={d.withdrawTitle}>
            <p>
              <Fill text={d.withdraw} slots={{ email }} />
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
