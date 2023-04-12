import type { Metadata } from 'next';
import ActiveLink from './activeLink';

async function getHeros() {
  console.log('Fetching heros!');
  const res = await fetch('https://swapi.dev/api/people');
  if (!res.ok) {
    throw new Error('Failed to fetch heros data');
  }

  return res.json();
}

export async function Home({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const heros = (await getHeros()).results;

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
                <ActiveLink heroId={index + 1} heroName={h.name} />
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
