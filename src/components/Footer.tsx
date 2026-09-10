import { Link, useRouterState } from '@tanstack/react-router'
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
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  const helpLinks = [
    { hash: 'getting-started', label: dict.helpLinks.gettingStarted },
    { hash: 'showdowns', label: dict.helpLinks.showdowns },
    { hash: 'clusters', label: dict.helpLinks.clusters },
    { hash: 'subscriptions-pro', label: dict.helpLinks.proSubscription },
    { hash: 'milestones', label: dict.helpLinks.milestones },
  ]

  const companyLinks = [
    { to: '/$locale/terms', label: dict.companyLinks.terms },
    { to: '/$locale/community-guidelines', label: dict.companyLinks.guidelines },
    { to: '/$locale/privacy', label: dict.companyLinks.privacy },
    { to: '/$locale/contact', label: dict.companyLinks.contact },
    { to: '/$locale/download', label: dict.companyLinks.download },
  ] as const

  const resolve = (to: string) => `/${locale}${to.slice('/$locale'.length)}`

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
            <Link to='/$locale' params={{ locale }} className='w-32 cursor-pointer'>
              <img
                src='/icon.png'
                alt='Spektt Logo'
                width={128}
                height={20}
                className='object-contain'
              />
            </Link>

            {/* Download app links */}
            <div className='flex flex-wrap gap-2 items-center'>
              <a
                href='https://apps.apple.com/app/spektt/id6770248818'
                target='_blank'
                rel='noopener noreferrer'
                className='w-36 hover:opacity-80 transition-opacity'
              >
                <img
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
                <img
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
                  key={link.hash}
                  to='/$locale/help'
                  params={{ locale }}
                  hash={link.hash}
                  className='text-textLighter font-regular hover:text-white transition-colors'
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
                  key={link.to}
                  to={link.to}
                  params={{ locale }}
                  className={
                    pathname === resolve(link.to)
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
