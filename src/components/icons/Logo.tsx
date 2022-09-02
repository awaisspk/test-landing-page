import type { SVGProps } from 'react';
import * as React from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={34}
    height={39}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.267 1.602 2.027 14.693c-2.757 2.094-2.693 5.44.143 7.476 2.836 2.035 7.37 1.987 10.127-.106L29.536 8.97c2.757-2.093 2.693-5.44-.143-7.475-2.836-2.035-7.37-1.988-10.127.106ZM21.678 16.345 4.437 29.437c-2.757 2.093-2.693 5.44.143 7.475 2.836 2.035 7.37 1.988 10.127-.105l17.24-13.092c2.758-2.094 2.694-5.44-.142-7.476-2.837-2.035-7.37-1.987-10.127.106Z"
      fill="#0E6FC8"
    />
  </svg>
);
