export function Main({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="basis-3/4 bg-slate-200">
      <h3 className="p-5 text-center text-lg uppercase text-blue-900">
        Pick your Hero
      </h3>
    </main>
  );
}

export default Main;
