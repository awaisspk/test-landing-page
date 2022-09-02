import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type INextLink = {
  href: string;
  children: React.ReactNode;
};

export const NextLink = ({ href, children }: INextLink) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={cx('text-lg font-medium', {
          'text-blue-500': router.pathname === href,
        })}
      >
        {children}
      </a>
    </Link>
  );
};
