import React from 'react';
import { TbChevronRight } from 'react-icons/tb';

import { NextLink } from '../ui/NextLink';

type IFlowCard = {
  step: number;
  title: string;
  description: string;
  link: string;
};

export const FlowCard = ({ link, title, description, step }: IFlowCard) => {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center space-y-3 rounded-xl border border-[#EAEAEA] p-3 py-20 hover:shadow-shadow1">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF1E5]">
        {step}
      </div>
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="w-[80%] text-center text-lg">{description}</p>
      <NextLink href={link}>
        <span className="flex items-center font-normal text-orange-500">
          Read more <TbChevronRight />
        </span>
      </NextLink>
    </div>
  );
};
