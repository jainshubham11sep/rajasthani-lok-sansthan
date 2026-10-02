export default function StatItem({
  value,
  label,
  tone = "paper",
}: {
  value: string;
  label: string;
  tone?: "paper" | "ink";
}) {
  return (
    <div>
      <div
        className={`font-display text-3xl font-semibold sm:text-4xl ${
          tone === "paper" ? "text-paper" : "text-ink"
        }`}
      >
        {value}
      </div>
      <div
        className={`mt-1 text-sm ${
          tone === "paper" ? "text-paper/70" : "text-ink-soft"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
