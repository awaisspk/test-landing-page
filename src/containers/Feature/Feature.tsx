import { LinePattern } from '@/components/icons'
import React from 'react'
import { TbCheck } from 'react-icons/tb'

const features = [
  'Prevent Arguments',
  'Save time',
  'Provide family Structure',
  'Gamify Work',
  'Cleaner House',
  'Less Stress',
  'Improve Family Communcation',
  'Improve kids responsibilty skills',
  'Imrove team feeling of family',
  'Helps reduce kids gaming time'
]

export const Feature = () => {
  return (
    <section className='max-w-[1440px] mx-auto mt-20'>
      <div className='flex flex-col items-center text-4xl mb-20'>
        <h1 className='font-semibold'>App Feature</h1>
        <LinePattern />
        <p className='text-lg text-center max-w-[60ch] mt-5 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quam suspendisse amet est pharetra ipsum.</p>
      </div>
      <div className='grid grid-cols-3 items-center'>
        <ul className='space-y-20 h-full justify-self-end'>
          {features.slice(0, 5).map(feature => (
            <li className='grid grid-cols-[1fr,max-content] items-center gap-3 text-end text-lg'>
              {feature}
              <div className='w-10 h-10 rounded-full bg-[#FFA217] flex items-center justify-center'>
                <TbCheck className='text-white' />
              </div>
            </li>
          ))}
        </ul>
        <div className='-mt-20 relative'>
          <img src='/assets/images/mobile.png' className='relative z-10' />
          <div className='absolute -mt-9 ml-3 top-1/2 -translate-y-1/2 translate-x-4  bg-[#BCEFED] w-[430px] h-[430px] rounded-full' />
        </div>
        <ul className='space-y-20 h-full justify-self-start'>
          {features.slice(5).map(feature => (
            <li className='grid grid-cols-[max-content,1fr] items-center gap-3 text-lg'>
              <div className='w-10 h-10 rounded-full bg-[#FFA217] flex items-center justify-center'>
                <TbCheck className='text-white' />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
