import { Link } from '@tanstack/react-router'
import { RiFingerprintFill } from 'react-icons/ri'

// Ported from the old Next.js `[locale]/not-found.tsx`. Used by both the root route
// (invalid locale) and the `/$locale` route (unknown sub-path under a valid locale).
export default function NotFound() {
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center pt-16'>
      <div className='flex flex-col gap-1 md:gap-2 flex-wrap'>
        <p className='text-7xl font-medium text-center'>404</p>
        <p className='text-xl font-regular text-center'>
          It seems you got a bit lost
        </p>
      </div>
      <Link
        to='/$locale'
        params={{ locale: 'en' }}
        className='flex flex-col justify-center items-center gap-1 mt-10 cursor-pointer hover:text-[#ff6600] transition-colors'
      >
        <RiFingerprintFill className='size-10' />
        <p>Go back to homepage</p>
      </Link>
    </div>
  )
}
