import Navigation from './navigation';
import React from 'react';

export function Home({ children }: { children: React.ReactNode }) {

  return (
    <section className="h-screen overflow-hidden bg-green-900">
      <header className="m-0.5 flex bg-slate-600">
        <h1 className="flex-auto p-5 text-left text-xl text-emerald-200">
          Mountain-o-Pedia
        </h1>
      </header>

      <div className="flex h-screen">
        <Navigation />
        <main className="basis-3/4 bg-slate-200">
          {children}
        </main>
      </div>
      <footer></footer>
    </section>
  );
}

export default Home;
