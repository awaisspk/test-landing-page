import Link from 'next/link';
import React from 'react';

import { Button } from '../Button/Button';
import { Logo } from '../icons';
import { Navigation } from '../Navigation';

export const Header = () => {
  return (
    <header className="mx-auto  w-full max-w-[1440px] h-24">
      <div className="mx-auto flex h-full items-center justify-between">
        <Link href="/">
          <a className="bg-transparent text-purple-50">
            <Logo />
          </a>
        </Link>
        <Navigation />
        <Button>Trail for 7 days</Button>
      </div>
    </header>
  );
};
