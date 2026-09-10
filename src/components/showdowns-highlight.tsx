import { FaUsers, FaGavel, FaTrophy, FaStar } from 'react-icons/fa6'

interface ShowdownCard {
  name: string
  body: string
  prize: string
}

interface ShowdownsHighlightProps {
  dict: {
    heading: string
    subtitle: string
    pulse: ShowdownCard
    premium: ShowdownCard
  }
}

function ShowdownsHighlight({ dict }: ShowdownsHighlightProps) {
  return (
    <section className='bg-warmBlue py-20 px-4'>
      <div className='container'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            {dict.heading}
          </h2>
          <p className='text-textLighter text-lg font-regular max-w-2xl mx-auto'>
            {dict.subtitle}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          {/* Pulse */}
          <div className='flex flex-col gap-5 p-8 rounded-xl border border-white/10 bg-dark'>
            <div className='flex items-center gap-3'>
              <div className='text-lightBlue text-2xl'>
                <FaUsers />
              </div>
              <h3 className='text-white font-bold text-2xl'>{dict.pulse.name}</h3>
            </div>
            <p className='text-textLighter font-regular leading-relaxed'>
              {dict.pulse.body}
            </p>
            <div className='flex items-center gap-2 text-lightBlue font-medium'>
              <FaStar />
              <span>{dict.pulse.prize}</span>
            </div>
          </div>

          {/* Premium */}
          <div className='flex flex-col gap-5 p-8 rounded-xl border border-lightBlue/40 bg-dark'>
            <div className='flex items-center gap-3'>
              <div className='text-lightBlue text-2xl'>
                <FaGavel />
              </div>
              <h3 className='text-white font-bold text-2xl'>{dict.premium.name}</h3>
            </div>
            <p className='text-textLighter font-regular leading-relaxed'>
              {dict.premium.body}
            </p>
            <div className='flex items-center gap-2 text-lightBlue font-medium'>
              <FaTrophy />
              <span>{dict.premium.prize}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowdownsHighlight
