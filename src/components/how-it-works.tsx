interface Step {
  title: string
  desc: string
}

interface HowItWorksProps {
  dict: {
    heading: string
    steps: Step[]
  }
}

function HowItWorks({ dict }: HowItWorksProps) {
  return (
    <section className='bg-dark py-20 px-4'>
      <div className='container'>
        <h2 className='text-4xl md:text-5xl font-bold text-white text-center mb-16'>
          {dict.heading}
        </h2>
        <div className='flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-12 justify-center'>
          {dict.steps.map((step, index) => (
            <div key={index} className='flex flex-col items-center text-center flex-1 max-w-xs mx-auto md:mx-0'>
              <div className='w-16 h-16 rounded-full bg-lightBlue flex-center text-white font-bold text-xl mb-6 shrink-0'>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className='text-white font-bold text-xl mb-3'>{step.title}</h3>
              <p className='text-textLighter font-regular leading-relaxed'>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
