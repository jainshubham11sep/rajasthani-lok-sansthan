import type { ReactNode } from "react";
import Container from "./Container";
import SectionTag from "./SectionTag";

export default function PageHero({
  tag,
  title,
  description,
  tone = "maroon",
  children,
}: {
  tag: string;
  title: string;
  description?: string;
  tone?: "maroon" | "teal" | "saffron";
  children?: ReactNode;
}) {
  return (
    <section className="bg-grain border-b border-ink/10 bg-cream-dark/60 py-16 sm:py-20">
      <Container>
        <SectionTag tone={tone}>{tag}</SectionTag>
        <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
