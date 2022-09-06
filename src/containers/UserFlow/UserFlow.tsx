import React from 'react';

import { FlowCard } from '@/components/Cards/FlowCard';
import { LinePattern } from '@/components/icons';

const data = [
  {
    title: 'Downalod',
    description: 'First you have to get the app with download.',
    link: '#',
  },
  {
    title: 'Create Account',
    description: 'Create you own account and make task easily.',
    link: '#',
  },
  {
    title: 'Invite Others',
    description: 'Invite your friends and family to use this app.',
    link: '#',
  },
  {
    title: 'Start Structruing',
    description: 'Start structruing and get you daily points.',
    link: '#',
  },
];

export const UserFlow = () => {
  return (
    <section className="mx-auto my-32 max-w-[1440px]">
      <div className="mb-20 flex flex-col items-center text-4xl">
        <h1 className="font-semibold">How it works</h1>
        <LinePattern />
      </div>
      <div className="flex flex-wrap justify-between gap-10 lg:flex-nowrap">
        {data.map((item, i) => (
          <FlowCard key={i} step={i + 1} {...item} />
        ))}
      </div>
    </section>
  );
};
