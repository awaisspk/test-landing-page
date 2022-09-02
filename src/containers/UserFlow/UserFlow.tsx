import { FlowCard } from '@/components/Cards/FlowCard'
import { LinePattern } from '@/components/icons'
import React from 'react'

const data = [
  {
    title: 'Downalod',
    description: 'First you have to get the app with download.',
    link: '#',
  },
  {
    title: 'Create Account',
    description: 'Create you own account and make task easily.',
    link: "#"
  },
  {
    title: 'Invite Others',
    description: "Invite your friends and family to use this app.",
    link: "#"
  },
  {
    title: 'Start Structruing',
    description: 'Start structruing and get you daily points.',
    link: "#"
  }
]

export const UserFlow = () => {
  return (
    <section className='max-w-[1440px] mx-auto my-32'>
      <div className='flex flex-col items-center text-4xl mb-20'>
        <h1 className='font-semibold'>How it works</h1>
        <LinePattern />
      </div>
      <div className='flex justify-between gap-10'>
        {data.map((item, i) => (
          <FlowCard step={i + 1} {...item} />
        ))}
      </div>
    </section>
  )
}
