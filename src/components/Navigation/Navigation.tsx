import React from 'react';

import { NextLink } from '../ui/NextLink';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Our Story',
    href: '/our-story',
  },
  {
    label: 'Download App',
    href: '/download-app',
  },
];

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        {links.map((link, i) => (
          <li key={i}>
            <NextLink href={link.href}>{link.label}</NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
