import cx from 'classnames';
import React from 'react';

import { PlayIcon } from '@/components/icons';

export const Hero = () => {
  return (
    <section className={cx(
      'max-w-[1440px] mx-auto mt-20',
      'flex justify-between relative'
    )}>
      <div className='mt-20 space-y-6'>
        <h5 className='text-orange-500 text-xl font-medium ml-12'>My Simple Family App</h5>
        <div className='relative'>
          <h1 className='text-[72px] leading-[1.1] font-medium relative z-10'>
            Get Points<br />
            for Compliting<br />
            Your Task.
          </h1>
          <div className='absolute  -bottom-20 right-0 w-52 h-52 rounded-full bg-[#F5DAFF99]' />
        </div>
        <p className='text-xl relative z-10'>
          The points per task and rewards are set by<br />
          the parents. Which can be redeemed for awards.
        </p>

        <button className='flex items-center gap-3'>
          <PlayIcon />
          <span>watch Video</span>
        </button>

        <div className="flex gap-3 pt-5">
          <a href="#">
            <img src="/assets/images/apple-store.png" alt="apply store" />
          </a>
          <a href="#">
            <img src="/assets/images/google-store.png" alt="google store" />
          </a>
        </div>
      </div>

      <div className='relative'>
        <img src="/assets/images/mobile.png" className='relative z-10 h-max object-contain' />
        <div className='absolute -mt-9 ml-3 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#BCEFED] w-[600px] h-[600px] rounded-full' />
        <div className='bg-[#A0DDFF] w-8 h-8 rounded-full absolute top-32 -left-10' />
        <div className='bg-[#FD661F] w-4 h-4 rounded-full absolute top-52 -left-28' />
        <div className='bg-[#1664FA] w-8 h-8 rounded-full absolute bottom-1/2 -right-28' />

      </div>

      <div className='absolute bottom-40 left-1/2'>
        <img src="/assets/images/person.png" className='w-28 h-24' />
      </div>
    </section>
  );
};
