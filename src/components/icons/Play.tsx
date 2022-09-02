import type { SVGProps } from 'react';

export const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={55}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={27.5} cy={27.5} r={27.5} fill="#FF8D3B" />
    <path d="m34.851 25.866-10.21 5.896v-11.79l10.21 5.894Z" fill="#fff" />
  </svg>
);
