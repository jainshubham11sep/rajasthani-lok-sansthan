import type { ReactNode } from "react";

export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-ink/10 bg-paper p-6 transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-paper">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {description}
      </p>
    </div>
  );
}
