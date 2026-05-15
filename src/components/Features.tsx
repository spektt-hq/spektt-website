import { FaTrophy, FaUsers, FaStar, FaChartLine, FaMessage } from 'react-icons/fa6'
import { BsImages } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface FeatureItem {
  header: string
  desc: string
}

interface FeaturesProps {
  dict: {
    heading: string
    items: FeatureItem[]
  }
}

interface FeatureCardProps {
  icon: IconType
  header: string
  desc: string
}

const featureIcons: IconType[] = [FaTrophy, FaUsers, BsImages, FaStar, FaChartLine, FaMessage]

function Features({ dict }: FeaturesProps) {
  return (
    <section className='bg-warmBlue py-20 px-4'>
      <div className='container'>
        <h2 className='text-4xl md:text-5xl font-bold text-white text-center mb-12'>
          {dict.heading}
        </h2>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {dict.items.map((item, index) => (
            <FeatureCard
              key={index}
              icon={featureIcons[index] ?? FaTrophy}
              header={item.header}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

function FeatureCard({ icon: Icon, header, desc }: FeatureCardProps) {
  return (
    <div className='flex flex-col gap-4 p-8 rounded-xl border border-white/10 bg-dark hover:border-lightBlue/40 transition-colors duration-300'>
      <div className='text-lightBlue text-4xl'>
        <Icon />
      </div>
      <h3 className='text-white font-bold text-xl'>{header}</h3>
      <p className='text-textLighter font-regular leading-relaxed'>{desc}</p>
    </div>
  )
}
