import Mountain from './components/mountain';

export default function MountainPage({
  params,
}: {
  params: { mountainId: string };
}) {
  const { mountainId } = params;

  return <Mountain mountainId={mountainId} />;
}
