type HeroType = {
  name: string;
};

async function getHero(heroId: string) {
  console.log('Fetching hero!', heroId);
  const res = await fetch(`https://swapi.dev/api/people/${heroId}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch hero data ${heroId}`);
  }

  return res.json();
}

async function Hero({ params }: { params: { heroId: string } }) {
  const { heroId } = params;
  const hero: HeroType = await getHero(heroId);

  return (
    <article>
      <h3 className="p-5 text-center text-lg uppercase text-blue-900">
        {hero.name}
      </h3>
      <pre className="p-5 text-sm">{JSON.stringify(hero, null, 2)}</pre>
    </article>
  );
}

export default Hero;
