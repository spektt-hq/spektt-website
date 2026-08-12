'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FaXTwitter, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6'
import { type Locale } from '@/dictionaries/locales'

interface FooterDict {
  helpHeading: string
  companyHeading: string
  helpLinks: {
    gettingStarted: string
    showdowns: string
    clusters: string
    proSubscription: string
    milestones: string
  }
  companyLinks: {
    terms: string
    guidelines: string
    privacy: string
    contact: string
    download: string
  }
  copyright: string
}

interface FooterProps {
  dict: FooterDict
  locale: Locale
}

function Footer({ dict, locale }: FooterProps) {
  const router = useRouter()
  const pathname = usePathname()

  const helpLinks = [
    {
      href: `/${locale}/help#getting-started`,
      label: dict.helpLinks.gettingStarted,
    },
    { href: `/${locale}/help#showdowns`, label: dict.helpLinks.showdowns },
    { href: `/${locale}/help#clusters`, label: dict.helpLinks.clusters },
    {
      href: `/${locale}/help#subscriptions-pro`,
      label: dict.helpLinks.proSubscription,
    },
    { href: `/${locale}/help#milestones`, label: dict.helpLinks.milestones },
  ]

  const companyLinks = [
    { href: `/${locale}/terms`, label: dict.companyLinks.terms },
    { href: `/${locale}/community-guidelines`, label: dict.companyLinks.guidelines },
    { href: `/${locale}/privacy`, label: dict.companyLinks.privacy },
    { href: `/${locale}/contact`, label: dict.companyLinks.contact },
    { href: `/${locale}/download`, label: dict.companyLinks.download },
  ]

  const socialLinks = [
    { href: 'https://x.com/spektt', icon: FaXTwitter },
    { href: 'https://facebook.com/spektt', icon: FaFacebook },
    { href: 'https://instagram.com/spektt', icon: FaInstagram },
    { href: 'https://tiktok.com/@spektt', icon: FaTiktok },
  ]

  return (
    <div className='bg-dark p-4'>
      <div className='container'>
        <div className='flex flex-col gap-8 flex-wrap md:justify-around md:flex-row lg:justify-between'>
          {/* App Logo */}
          <div className='flex flex-col gap-8'>
            <div
              className='w-32 cursor-pointer'
              onClick={() => router.push(`/${locale}`)}
            >
              <Image
                src='/icon.png'
                alt='Spektt Logo'
                width={128}
                height={20}
                className='object-contain'
              />
            </div>

            {/* Download app links */}
            <div className='flex flex-wrap gap-2 items-center'>
              <a
                href='https://apps.apple.com/app/spektt/id6770248818'
                target='_blank'
                rel='noopener noreferrer'
                className='w-36 hover:opacity-80 transition-opacity'
              >
                <Image
                  src='/appstore.png'
                  alt='Download on App Store'
                  width={144}
                  height={48}
                />
              </a>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='w-40 hover:opacity-80 transition-opacity'
              >
                <Image
                  src='/playstore.png'
                  alt='Get it on Google Play'
                  width={160}
                  height={48}
                />
              </a>
            </div>

            {/* Social Media Links */}
            <div className='flex gap-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white text-2xl hover:text-lightBlue transition-colors'
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Help Links */}
          <div className='flex flex-col gap-5'>
            <h3 className='text-white font-medium text-3xl'>
              {dict.helpHeading}
            </h3>
            <div className='flex flex-col gap-3'>
              {helpLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    pathname === link.href
                      ? 'text-lightBlue font-bold'
                      : 'text-textLighter font-regular hover:text-white transition-colors'
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className='flex flex-col gap-5'>
            <h3 className='text-white font-medium text-3xl'>
              {dict.companyHeading}
            </h3>
            <div className='flex flex-col gap-3'>
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    pathname === link.href
                      ? 'text-lightBlue font-bold'
                      : 'text-textLighter font-regular hover:text-white transition-colors'
                  }
                >
                  {link.label}
                </Link>
              ))}

              <p className='text-textLighter font-regular mt-4'>
                &copy; {new Date().getFullYear()} {dict.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
