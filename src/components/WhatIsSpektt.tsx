interface WhatIsSpekttProps {
  heading: string
  body: string
}

function WhatIsSpektt({ heading, body }: WhatIsSpekttProps) {
  return (
    <section className='bg-dark py-20 px-4'>
      <div className='container'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
            {heading}
          </h2>
          <p className='text-textLighter text-lg md:text-xl font-regular leading-relaxed'>
            {body}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatIsSpektt
