'use client'

import { useState, useEffect } from 'react'
import {
  FaRocket,
  FaUser,
  FaGear,
  FaCloudArrowUp,
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaStar,
  FaEnvelope,
  FaMedal,
  FaShield,
  FaChevronDown,
  FaMagnifyingGlass,
} from 'react-icons/fa6'
import { helpCategories, type HelpCategory } from './helpData'

const categoryIcons: Record<string, React.ReactNode> = {
  'getting-started': <FaRocket />,
  'your-profile': <FaUser />,
  'account-settings': <FaGear />,
  'uploads-content': <FaCloudArrowUp />,
  showdowns: <FaTrophy />,
  clusters: <FaUsers />,
  'rankings-leaderboard': <FaChartLine />,
  'subscriptions-pro': <FaStar />,
  messages: <FaEnvelope />,
  milestones: <FaMedal />,
  'community-guidelines': <FaShield />,
}

interface HelpDict {
  title: string
  subtitle: string
  searchPlaceholder: string
  resultsCount: string
  resultsCountPlural: string
  resultsFor: string
  noResultsTitle: string
  noResultsSubtitle: string
  clearSearch: string
  relatedTopics: string
  stillNeedHelp: string
  stillNeedHelpBody: string
  stillNeedHelpContact: string
  englishOnlyNote: string
  categoryTitles: Record<string, string>
}

interface JsonCategory {
  id: string
  articles: { q: string; a: string }[]
}

interface HelpClientProps {
  dict: HelpDict
  categories: JsonCategory[]
  locale: string
}

function RenderAnswer({ text }: { text: string }) {
  const paragraphs = text.split('\n\n')
  return (
    <div className='space-y-3'>
      {paragraphs.map((para, pi) => {
        const lines = para.split('\n')
        const hasBullets = lines.some((l) => l.startsWith('• '))

        if (hasBullets) {
          return (
            <div key={pi} className='space-y-1.5'>
              {lines.map((line, li) =>
                line.startsWith('• ') ? (
                  <div key={li} className='flex gap-2'>
                    <span className='text-lightBlue shrink-0 mt-0.5'>•</span>
                    <span className='privacy-policy-text'>
                      {line.replace(/^• /, '')}
                    </span>
                  </div>
                ) : line.trim() ? (
                  <p key={li} className='privacy-policy-text'>
                    {line}
                  </p>
                ) : null,
              )}
            </div>
          )
        }
        return (
          <p key={pi} className='privacy-policy-text'>
            {para}
          </p>
        )
      })}
    </div>
  )
}

function RelatedArticles({ related, label, allCategories }: { related: string[]; label: string; allCategories: HelpCategory[] }) {
  const relatedCats = related
    .map((id) => allCategories.find((c) => c.id === id))
    .filter(Boolean) as HelpCategory[]

  if (relatedCats.length === 0) return null

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='mt-8 pt-6 border-t border-white/10'>
      <p className='text-white font-medium text-sm mb-3'>{label}</p>
      <div className='flex flex-wrap gap-2'>
        {relatedCats.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className='flex items-center gap-1.5 text-xs text-lightBlue border border-lightBlue/30 rounded-full px-3 py-1.5 hover:bg-lightBlue/10 transition-colors'
          >
            <span className='text-[10px]'>{categoryIcons[cat.id]}</span>
            {cat.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function HelpClient({ dict, categories: rawCategories, locale }: HelpClientProps) {
  const [search, setSearch] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [activeCategory, setActiveCategory] = useState('getting-started')

  const articlesByCategory = Object.fromEntries(rawCategories.map((c) => [c.id, c.articles]))

  const categories = helpCategories.map((cat) => ({
    ...cat,
    title: dict.categoryTitles[cat.id] ?? cat.title,
    articles: articlesByCategory[cat.id] ?? cat.articles,
  }))

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    categories.forEach((cat) => {
      const el = document.getElementById(cat.id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveCategory(cat.id)
        },
        { threshold: 0.15, rootMargin: '-80px 0px -55% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const scrollToCategory = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveCategory(id)
  }

  const searchResults =
    search.trim().length > 1
      ? categories.flatMap((cat) =>
          cat.articles
            .filter(
              (a) =>
                a.q.toLowerCase().includes(search.toLowerCase()) ||
                a.a.toLowerCase().includes(search.toLowerCase()),
            )
            .map((a) => ({
              ...a,
              categoryTitle: cat.title,
              categoryId: cat.id,
            })),
        )
      : null

  const resultCount = searchResults?.length ?? 0
  const resultLabel = resultCount === 1 ? dict.resultsCount : dict.resultsCountPlural

  return (
    <div className='min-h-screen bg-warmBlue pt-20 pb-16'>
      <div className='bg-dark border-b border-white/10'>
        <div className='container max-w-6xl mx-auto px-4 py-10'>
          <h1 className='text-white font-bold text-3xl md:text-4xl'>{dict.title}</h1>
          <p className='privacy-policy-text mt-2'>{dict.subtitle}</p>
<div className='mt-6 relative max-w-xl'>
            <FaMagnifyingGlass className='absolute left-4 top-1/2 -translate-y-1/2 text-textLighter text-sm pointer-events-none' />
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={dict.searchPlaceholder}
              className='w-full bg-warmBlue border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-textLighter focus:outline-none focus:border-lightBlue transition-colors'
            />
          </div>
        </div>
      </div>

      <div className='container max-w-6xl mx-auto px-4 py-8'>
        {searchResults !== null ? (
          <div>
            <p className='privacy-policy-text mb-6'>
              {resultCount} {resultLabel} {dict.resultsFor} &quot;{search}&quot;
            </p>
            {searchResults.length === 0 ? (
              <div className='text-center py-16'>
                <p className='text-white font-medium'>{dict.noResultsTitle}</p>
                <p className='privacy-policy-text mt-2'>{dict.noResultsSubtitle}</p>
                <button
                  onClick={() => setSearch('')}
                  className='mt-4 text-lightBlue text-sm hover:underline'
                >
                  {dict.clearSearch}
                </button>
              </div>
            ) : (
              <div className='space-y-3'>
                {searchResults.map((result, i) => {
                  const itemId = `search-${i}`
                  const isOpen = openItems.has(itemId)
                  return (
                    <div
                      key={i}
                      className='border border-white/10 rounded-xl overflow-hidden'
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className='w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-white/5 transition-colors'
                      >
                        <div>
                          <span className='text-xs text-lightBlue mb-1.5 block'>
                            {result.categoryTitle}
                          </span>
                          <span className='text-white text-sm font-medium'>
                            {result.q}
                          </span>
                        </div>
                        <FaChevronDown
                          className={`shrink-0 text-textLighter text-sm mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-300 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className='px-5 pb-5 pt-4 border-t border-white/10'>
                          <RenderAnswer text={result.a} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className='lg:hidden mb-6 -mx-4 px-4'>
              <div className='flex gap-2 overflow-x-auto pb-2'>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap border shrink-0 transition-colors ${
                      activeCategory === cat.id
                        ? 'border-lightBlue text-lightBlue bg-lightBlue/10'
                        : 'border-white/20 text-textLighter hover:border-white/40 hover:text-white'
                    }`}
                  >
                    <span className='text-[10px]'>{categoryIcons[cat.id]}</span>
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            <div className='flex gap-10'>
              <aside className='hidden lg:block w-52 shrink-0'>
                <div className='sticky top-24 space-y-0.5'>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => scrollToCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-lightBlue/10 text-lightBlue'
                          : 'text-textLighter hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className='text-xs shrink-0'>{categoryIcons[cat.id]}</span>
                      <span className='leading-tight'>{cat.title}</span>
                    </button>
                  ))}
                </div>
              </aside>

              <main className='flex-1 min-w-0 space-y-14'>
                {categories.map((cat) => (
                  <section
                    key={cat.id}
                    id={cat.id}
                    style={{ scrollMarginTop: '5rem' }}
                  >
                    <div className='flex items-center gap-3 mb-6'>
                      <span className='text-lightBlue text-lg'>
                        {categoryIcons[cat.id]}
                      </span>
                      <h2 className='text-white font-bold text-xl'>{cat.title}</h2>
                    </div>

                    <div className='space-y-2'>
                      {cat.articles.map((article, i) => {
                        const itemId = `${cat.id}-${i}`
                        const isOpen = openItems.has(itemId)
                        return (
                          <div
                            key={i}
                            className='border border-white/10 rounded-xl overflow-hidden'
                          >
                            <button
                              onClick={() => toggleItem(itemId)}
                              className='w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/5 transition-colors'
                            >
                              <span className='text-white text-sm font-medium'>
                                {article.q}
                              </span>
                              <FaChevronDown
                                className={`shrink-0 text-textLighter text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                              />
                            </button>
                            <div
                              className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-300 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                              <div className='px-5 pb-5 pt-4 border-t border-white/10'>
                                <RenderAnswer text={article.a} />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <RelatedArticles related={cat.related} label={dict.relatedTopics} allCategories={categories} />
                  </section>
                ))}

                <div className='border border-white/10 rounded-xl p-6 bg-dark text-center'>
                  <p className='text-white font-medium mb-1'>{dict.stillNeedHelp}</p>
                  <p className='privacy-policy-text'>
                    {dict.stillNeedHelpBody}{' '}
                    <a
                      href={`mailto:${dict.stillNeedHelpContact}`}
                      className='text-lightBlue hover:underline'
                    >
                      {dict.stillNeedHelpContact}
                    </a>
                  </p>
                </div>
              </main>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
