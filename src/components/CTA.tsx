'use client'

import Image from 'next/image'

interface CTAProps {
  dict: {
    heading: string
    subtitle: string
  }
}

function CTA({ dict }: CTAProps) {
  return (
    <section className='bg-dark py-20 px-4'>
      <div className='container'>
        <div className='flex-col-center gap-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white max-w-xl leading-tight'>
            {dict.heading}
          </h2>
          <p className='text-textLighter font-regular text-lg max-w-md'>
            {dict.subtitle}
          </p>
          <div className='flex-wrap flex-center gap-4'>
            <a
              href='#'
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
        </div>
      </div>
    </section>
  )
}

export default CTA
