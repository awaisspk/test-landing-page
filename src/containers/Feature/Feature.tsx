import cx from 'classnames';
import React from 'react';
import { TbCheck, TbChevronDown } from 'react-icons/tb';

import { LinePattern } from '@/components/icons';

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
  'Helps reduce kids gaming time',
];

export const Feature = () => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <section className="mx-auto mt-20 max-w-[1440px] px-10">
      <div className="mb-20 flex flex-col items-center text-4xl">
        <h1 className="font-semibold">App Feature</h1>
        <LinePattern />
        <p className="mt-5 mb-10 max-w-[60ch] text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quam
          suspendisse amet est pharetra ipsum.
        </p>
      </div>
      <div className="grid justify-items-center gap-10 lg:grid-cols-3 lg:items-center">
        <ul className="order-1 hidden h-full space-y-8 lg:ml-0 lg:block lg:space-y-20 lg:justify-self-end">
          {features.slice(0, 5).map((feature, i) => (
            <li
              key={i}
              className="flex flex-row-reverse items-center gap-3 text-lg lg:flex-row lg:text-end"
            >
              <span className="grow">{feature}</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFA217]">
                <TbCheck className="text-white" />
              </div>
            </li>
          ))}
        </ul>
        <ul className="order-1 h-full space-y-8 lg:ml-0 lg:hidden lg:space-y-20 lg:justify-self-end">
          {features
            .slice(0, showMore ? features.length : 5)
            .map((feature, i) => (
              <li
                key={i}
                className="flex flex-row-reverse items-center gap-3 text-lg lg:flex-row lg:text-end"
              >
                <span className="grow">{feature}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFA217]">
                  <TbCheck className="text-white" />
                </div>
              </li>
            ))}
        </ul>
        <button
          className="order-4 flex h-14  w-40 items-center justify-between rounded-full bg-[#42A4FF] px-6 font-semibold text-white hover:bg-[#42A4FF96] active:bg-[#42A4FF] lg:hidden"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'See More'}
          <TbChevronDown className="h-6 w-6" />
        </button>
        <div className="relative order-4 mx-auto w-[80%] lg:order-2 lg:-translate-y-10">
          <img
            src="/assets/images/mobile.png"
            className="relative z-10 mx-auto h-max object-contain "
          />
          <div className="absolute top-1/2 left-1/2 -mt-9 aspect-square w-[600px] max-w-full -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#BCEFED]  lg:ml-3" />
        </div>
        <ul
          className={cx(
            'hidden lg:block overflow-hidden order-3 space-y-8 lg:space-y-20 lg:h-full justify-self-start',
            {
              'h-0': !showMore,
              'h-full': showMore,
            }
          )}
        >
          {features.slice(5).map((feature, i) => (
            <li key={i} className="flex flex-row items-center gap-3 text-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFA217]">
                <TbCheck className="text-white" />
              </div>
              <span className="grow">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
