import Link from "next/link";
import Container from "./Container";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="bg-grain relative overflow-hidden rounded-3xl bg-maroon px-6 py-14 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-saffron/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-teal/30 blur-3xl"
          />
          <h2 className="relative font-display text-3xl font-semibold text-paper text-balance sm:text-4xl">
            Your support helps us reach one more child, one more story,
            one more tradition worth keeping alive.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-balance text-paper/85">
            Every contribution funds therapy sessions, learning materials
            and cultural programs in Nohar, Hanumangarh.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-saffron px-7 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-saffron-light"
            >
              Donate Now
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-paper/40 px-7 py-3 text-sm font-semibold text-paper transition hover:bg-paper/10"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
