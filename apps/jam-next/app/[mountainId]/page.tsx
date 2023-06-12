import Mountain from './components/mountain';

export default async function MountainPage({
  params,
}: {
  params: { mountainId: string };
}) {
  const { mountainId } = params;

  return <Mountain mountainId={mountainId} />;
}

export async function generateStaticParams() {
  const entries = await fetch('http://localhost:3000/mountains').then((res) =>
    res.json()
  );

  return entries.map((entry: { id: string }) => ({
    mountainId: entry.id,
  }));
}
