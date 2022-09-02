import React from 'react';

type Props = React.ComponentProps<'button'>;

export const Button = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <button
      {...rest}
      className="h-14 rounded-full bg-[#1A2024] px-8 text-white duration-150 hover:scale-95 active:scale-100"
    >
      {children}
    </button>
  );
};
