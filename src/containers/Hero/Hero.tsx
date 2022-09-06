import cx from 'classnames';
import React from 'react';

import { PlayIcon } from '@/components/icons';

export const Hero = () => {
  return (
    <section
      className={cx(
        'max-w-[1440px] mx-auto mt-20 px-6',
        'flex flex-col lg:flex-row justify-between relative gap-10'
      )}
    >
      <div className="mx-auto mt-10 w-max space-y-6 lg:mt-20">
        <h5 className="ml-12 text-xl font-medium text-orange-500">
          My Simple Family App
        </h5>
        <div className="relative w-max ">
          <h1 className="relative z-10 text-5xl font-medium leading-[1.1] lg:text-[72px]">
            Get Points
            <br />
            for Compliting
            <br />
            Your Task.
          </h1>
          <div className="absolute h-40 w-40 rounded-full lg:-bottom-20 lg:right-0 lg:h-52 lg:w-52 lg:bg-[#F5DAFF99]" />
        </div>
        <p className="relative z-10 text-base lg:text-xl">
          The points per task and rewards are set by
          <br />
          the parents. Which can be redeemed for awards.
        </p>

        <button className="flex items-center gap-3">
          <PlayIcon />
          <span className="text-sm">watch Video</span>
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

      <div className="relative mx-auto w-[90%]">
        <img
          src="/assets/images/mobile.png"
          className="relative z-10 mx-auto h-max object-contain"
        />
        <div className="absolute top-1/2 left-1/2 -mt-9 aspect-square w-[600px] max-w-full -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#BCEFED]  lg:ml-3" />
        <div className="absolute top-32 -left-10 hidden h-8 w-8 rounded-full bg-[#A0DDFF] lg:block" />
        <div className="absolute top-52 -left-28 hidden h-4 w-4 rounded-full bg-[#FD661F] lg:block" />
        <div className="absolute bottom-1/2 -right-28 hidden h-8 w-8 rounded-full bg-[#1664FA] lg:block" />
      </div>

      <div className="absolute bottom-40 left-1/2 hidden lg:block">
        <img src="/assets/images/person.png" className="h-24 w-28" />
      </div>
    </section>
  );
};
