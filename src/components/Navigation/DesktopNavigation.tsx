import { navigation } from '@/utils/AppConfig';

import { NextLink } from '../ui/NextLink';

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        {navigation.map((link, i) => (
          <li key={i}>
            <NextLink href={link.href}>{link.label}</NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
