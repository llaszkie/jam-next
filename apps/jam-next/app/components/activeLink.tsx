'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

export default function ActiveLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  const isActive = usePathname()?.includes(href);
  return (
    <Link
      href={href}
      className={`${isActive ? 'text-red-700' : 'text-cyan-800'} underline
        ${isActive ? '' : 'hover:text-blue-900'} `}
    >
      {text}
    </Link>
  );
}
