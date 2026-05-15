'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'
import { HiBars3 } from 'react-icons/hi2'
import LanguageSwitcher from './LanguageSwitcher'
import { type Locale } from '@/dictionaries/locales'

interface NavDict {
  home: string
  about: string
  help: string
  contact: string
  download: string
}

interface HeaderProps {
  view: boolean
  click: () => void
  dict: NavDict
  locale: Locale
}

function Header({ view, click, dict, locale }: HeaderProps) {
  const [show, setShow] = useState<boolean>(false)
  const pathname = usePathname()

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { href: `/${locale}`, label: dict.home },
    { href: `/${locale}/about`, label: dict.about },
    { href: `/${locale}/help`, label: dict.help },
    { href: `/${locale}/contact`, label: dict.contact },
    { href: `/${locale}/download`, label: dict.download },
  ]

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`

  return (
    <header
      className={`fixed z-14000 border-b border-white/20 transition-all duration-500 top-0 w-full left-0 ${
        show ? 'header-scroll' : ''
      } ${!isHome ? 'header-scroll' : ''}`}
    >
      <div className='container'>
        <nav className='relative flex items-center'>
          {/* Logo — left column */}
          <div className='flex-1'>
            <div className='w-24'>
              <Link href={`/${locale}`}>
                <Image
                  className='object-contain'
                  src='/spektt_text_icon.png'
                  alt='Spektt Logo'
                  width={96}
                  height={28}
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Desktop Links — true center */}
          <ul className='hidden lg:flex lg:flex-row lg:gap-4'>
            {navLinks.map((link) => (
              <li key={link.href} className='nav-item'>
                <Link
                  href={link.href}
                  className='group relative pb-1 text-base font-regular transition-all duration-300'
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
                      pathname === link.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher (desktop) + Mobile Toggle — right column */}
          <div className='flex-1 flex items-center justify-end gap-3'>
            <div className='hidden lg:block'>
              <LanguageSwitcher locale={locale} />
            </div>

            {/* Mobile Toggle Button */}
            <div className='text-white mt-1 text-3xl lg:hidden' onClick={click}>
              {view ? <AiOutlineClose /> : <HiBars3 />}
            </div>
          </div>

          {/* Mobile Nav-Links */}
          <div
            className={`navbar-links ${
              view ? 'translate-x-0' : 'translate-x-[-110%]'
            }`}
          >
            <ul className='flex flex-col gap-4 my-4'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      pathname === link.href
                        ? 'text-lightBlue font-bold'
                        : 'font-regular text-white'
                    }
                    onClick={click}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Switcher (mobile) */}
            <div className='px-2 pb-4'>
              <LanguageSwitcher locale={locale} />
            </div>

            <div className='flex py-5 px-2 items-center justify-center gap-5'>
              <button className='border rounded-4xl px-3 text-4xl border-white/30 text-white py-2'>
                <IoLogoGooglePlaystore />
              </button>
              <button className='border rounded-4xl px-3 text-4xl border-white/30 text-white py-2'>
                <IoLogoApple />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
