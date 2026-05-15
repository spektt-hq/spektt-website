import type { MetadataRoute } from 'next'
import { locales } from '@/dictionaries/locales'

const baseUrl = 'https://spektt.com'

const pages = [
  { path: '', changeFrequency: 'monthly' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/help', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/download', changeFrequency: 'yearly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/showdown-rules', changeFrequency: 'yearly' as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  )
}
