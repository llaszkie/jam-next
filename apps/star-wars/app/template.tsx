'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Home({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [heros, setHeros] = useState([] as Array<{ name: string }>);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((data) => setHeros(data.results));
  }, []);

  const pathname = usePathname();

  return (
    <section className="h-screen overflow-hidden bg-green-900">
      <header className="m-0.5 flex bg-slate-600">
        <div className="flex-auto p-5 text-left text-xl text-emerald-200">
          StarWars-o-Pedia
        </div>
      </header>
      <nav></nav>
      <div className="flex h-screen">
        <aside className="mx-0.5 flex basis-1/4 bg-slate-300 bg-gradient-to-t from-slate-400 to-slate-50">
          <ul>
            {heros.map((h, index) => (
              <li className="p-5" key={index + 1}>
                <Link
                  href={`/${index + 1}`}
                  className={`${
                    pathname == '/' + (index + 1)
                      ? 'text-red-500'
                      : 'text-blue-500'
                  } underline
                    ${
                      pathname == '/' + (index + 1) ? '' : 'hover:text-blue-900'
                    } `}
                >
                  {h.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        {children}
      </div>
      <footer></footer>
    </section>
  );
}

export default Home;

// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js',
// };
