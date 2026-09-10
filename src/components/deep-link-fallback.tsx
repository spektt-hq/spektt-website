// Shown when the Spektt app is NOT installed and a user opens a shared link. When the
// app IS installed, iOS Universal Links / Android App Links open it directly and this
// never renders. The Next site had four near-identical copies (c/col/s/profile).
export default function DeepLinkFallback({
  title,
  message,
}: {
  title: string
  message: string
}) {
  return (
    <div className='min-h-screen bg-warmBlue flex flex-col items-center justify-center px-4 gap-8'>
      <img
        src='/icon.png'
        alt='Spektt Logo'
        width={128}
        height={40}
        className='object-contain'
      />

      <div className='flex flex-col items-center gap-2 text-center'>
        <p className='text-white font-bold text-2xl'>{title}</p>
        <p className='text-textLighter font-regular text-lg'>{message}</p>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        <a
          href='https://apps.apple.com/app/spektt/id6770248818'
          target='_blank'
          rel='noopener noreferrer'
          className='w-40 hover:opacity-80 transition-opacity'
        >
          <img
            src='/appstore.png'
            alt='Download on App Store'
            width={160}
            height={53}
          />
        </a>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='w-44 hover:opacity-80 transition-opacity'
        >
          <img
            src='/playstore.png'
            alt='Get it on Google Play'
            width={176}
            height={53}
          />
        </a>
      </div>
    </div>
  )
}
