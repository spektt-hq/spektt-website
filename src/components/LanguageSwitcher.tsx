'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { type Locale, locales } from '@/dictionaries/locales'

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  pt: 'PT',
  ar: 'AR',
}

const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  ar: 'العربية',
}

interface LanguageSwitcherProps {
  locale: Locale
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function switchLocale(next: Locale) {
    setOpen(false)
    // Replace current locale prefix with new one
    const segments = pathname.split('/')
    segments[1] = next
    router.push(segments.join('/') || `/${next}`)
  }

  return (
    <div ref={ref} className='relative'>
      <button
        onClick={() => setOpen((v) => !v)}
        className='flex items-center gap-1 text-white text-sm font-medium px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/40 transition-colors duration-200'
        aria-haspopup='listbox'
        aria-expanded={open}
      >
        <span>{localeLabels[locale]}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2.5}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {open && (
        <ul
          role='listbox'
          className='absolute right-0 top-full mt-2 w-36 bg-dark border border-white/20 rounded-lg shadow-lg overflow-hidden z-50'
        >
          {locales.map((l) => (
            <li key={l} role='option' aria-selected={l === locale}>
              <button
                onClick={() => switchLocale(l)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
                  l === locale
                    ? 'text-lightBlue font-medium bg-white/5'
                    : 'text-textLighter hover:text-white hover:bg-white/5'
                }`}
              >
                <span className='font-mono text-xs w-6'>{localeLabels[l]}</span>
                <span>{localeNames[l]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
