export function HeroLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <main className="basis-3/4 bg-slate-200">{children}</main>;
}

export default HeroLayout;
