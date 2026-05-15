'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const imgGallery = [
  { id: 1, src: '/girl-on-horse.webp' },
  { id: 2, src: '/black-gril.webp' },
]

interface HeroProps {
  sentences: string[]
}

function Hero({ sentences }: HeroProps) {
  const getRandomIdx = () => Math.floor(Math.random() * imgGallery.length)
  const [randomIdx, setRandomIdx] = useState(0)
  const [mounted, setMounted] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const sentence1Ref = useRef<HTMLParagraphElement>(null)
  const sentence2Ref = useRef<HTMLParagraphElement>(null)
  const sentence3Ref = useRef<HTMLParagraphElement>(null)
  const sentence4Ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    setRandomIdx(getRandomIdx())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const sentenceRefs = [
      sentence1Ref.current,
      sentence2Ref.current,
      sentence3Ref.current,
      sentence4Ref.current,
    ]

    const tl = gsap.timeline({ repeat: -1 })

    gsap.set(sentenceRefs, { autoAlpha: 0, y: 50 })

    sentenceRefs.forEach((ref) => {
      tl.to(ref, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }).to(ref, {
        autoAlpha: 0,
        y: -50,
        duration: 0.8,
        delay: 2,
        ease: 'power2.in',
      })
    })

    return () => {
      tl.kill()
    }
  }, [mounted])

  return (
    <div
      className='relative flex flex-col items-center justify-center w-full h-screen text-white transition-colors duration-500'
      ref={containerRef}
      style={{
        backgroundImage: mounted ? `url(${imgGallery[randomIdx].src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0e2439',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className='absolute inset-0 bg-black/55' />

      <div className='relative z-10 container text-center flex flex-col items-center gap-6'>
        {/* Rotating text */}
        <div className='relative flex items-center justify-center h-28 md:h-40 lg:h-52 w-full px-4'>
          <p
            ref={sentence1Ref}
            className='text-3xl md:text-5xl lg:text-7xl text-center font-fairPlay-Medium absolute'
          >
            {sentences[0]}
          </p>
          <p
            ref={sentence2Ref}
            className='text-3xl md:text-5xl lg:text-7xl text-center font-fairPlay-Medium absolute'
          >
            {sentences[1]}
          </p>
          <p
            ref={sentence3Ref}
            className='text-3xl md:text-5xl lg:text-7xl text-center font-fairPlay-Medium absolute'
          >
            {sentences[2]}
          </p>
          <p
            ref={sentence4Ref}
            className='text-3xl md:text-5xl lg:text-7xl text-center font-fairPlay-Medium absolute'
          >
            {sentences[3]}
          </p>
        </div>

        {/* Download buttons */}
        <div className='flex flex-wrap items-center justify-center gap-4'>
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
  )
}

export default Hero
