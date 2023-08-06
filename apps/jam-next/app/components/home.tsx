import Link from 'next/link';

async function getData() {
  const res = await fetch(`http://localhost:3000/mountains`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  const mountains = await getData();

  return (
    <section className="h-screen overflow-hidden bg-green-900">
      <header className="m-0.5 flex bg-slate-600">
        <h1 className="flex-auto p-5 text-left text-xl text-emerald-200">
          Mountain-o-Pedia
        </h1>
      </header>
      <nav></nav>
      <div className="flex h-screen">
        <aside className="mx-0.5 flex basis-1/4 bg-slate-300 bg-gradient-to-t from-slate-400 to-slate-50">
          <ul>
            {mountains.map((m: { title: string; id: string }) => (
              <li className="p-5" key={m.id}>
                <Link
                  href={`/${m.id}`}
                  // FIXME: what would be Next.js way?
                  // className={({ isActive }) =>
                  //   `${isActive ? 'text-red-500' : 'text-blue-500'} underline
                  //   ${isActive ? '' : 'hover:text-blue-900'} `
                  // }
                >
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main className="basis-3/4 bg-slate-200">{children}</main>
      </div>
      <footer></footer>
    </section>
  );
}
