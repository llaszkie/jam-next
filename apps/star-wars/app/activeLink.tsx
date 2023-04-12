'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ActiveLink({
  heroId,
  heroName,
}: {
  heroId: number;
  heroName: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={`/${heroId}`}
      className={`${
        pathname == '/' + heroId ? 'text-red-500' : 'text-blue-500'
      } underline
    ${pathname == '/' + heroId ? '' : 'hover:text-blue-900'} `}
    >
      {heroName}
    </Link>
  );
}

export default ActiveLink;
