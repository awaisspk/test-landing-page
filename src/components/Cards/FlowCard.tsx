import React from 'react'
import { NextLink } from '../ui/NextLink'
import { TbChevronRight } from 'react-icons/tb'

type IFlowCard = {
  step: number
  title: string
  description: string
  link: string
}

export const FlowCard = ({ link, title, description, step }: IFlowCard) => {
  return (
    <div className='flex flex-col items-center p-3 border border-[#EAEAEA] rounded-xl space-y-3 py-20 hover:shadow-shadow1'>
      <div className='bg-[#FDF1E5] w-12 h-12 rounded-full flex items-center justify-center'>
        {step}
      </div>
      <h2 className='text-2xl font-medium'>{title}</h2>
      <p className='text-lg text-center w-[80%]'>{description}</p>
      <NextLink href={link}>
        <span className='text-orange-500 font-normal flex items-center'>
          Read more <TbChevronRight />
        </span>
      </NextLink>
    </div>
  )
}
