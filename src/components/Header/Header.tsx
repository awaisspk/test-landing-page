import Link from 'next/link';
import React from 'react';

import { Button } from '../Button/Button';
import { Logo } from '../icons';
import { MobileNavigation, Navigation } from '../Navigation';

export const Header = () => {
  return (
    <header className="mx-auto h-24  w-full max-w-[1440px] px-6">
      <div className="mx-auto flex h-full items-center justify-between">
        <Link href="/">
          <a className="bg-transparent text-purple-50">
            <Logo />
          </a>
        </Link>
        <div className="hidden lg:block">
          <Navigation />
        </div>
        <div className="flex items-center gap-2">
          <Button>Trail for 7 days</Button>
          <div className="lg:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};
