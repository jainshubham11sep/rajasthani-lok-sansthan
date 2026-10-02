export default function SectionTag({
  children,
  tone = "maroon",
}: {
  children: string;
  tone?: "maroon" | "teal" | "saffron";
}) {
  const toneClasses = {
    maroon: "bg-maroon/10 text-maroon",
    teal: "bg-teal/10 text-teal",
    saffron: "bg-saffron/15 text-saffron-dark",
  }[tone];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${toneClasses}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
