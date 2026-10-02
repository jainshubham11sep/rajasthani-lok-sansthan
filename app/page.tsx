import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTag from "@/components/SectionTag";
import StatItem from "@/components/StatItem";
import CTASection from "@/components/CTASection";
import {
  ArrowRightIcon,
  BookIcon,
  HeartIcon,
  PaletteIcon,
} from "@/components/Icons";
import { img } from "@/lib/images";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grain relative overflow-hidden border-b border-ink/10">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <SectionTag>Est. 2007 &middot; Nohar, Rajasthan</SectionTag>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Language, Culture{" "}
              <span className="italic text-maroon">&amp; Social</span>{" "}
              Empowerment
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
              Rajasthani Lok Sansthan is a people-driven organization
              preserving Rajasthani language, literature, culture and art
              &mdash; while giving children with special needs a path to an
              independent, dignified life through Ujaas Special Academy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/donate"
                className="rounded-full bg-maroon px-7 py-3.5 text-sm font-semibold text-paper shadow-sm shadow-maroon/20 transition hover:bg-maroon-dark"
              >
                Support Our Work
              </Link>
              <Link
                href="/ujaas"
                className="group flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-teal/40 hover:text-teal"
              >
                Meet Ujaas Academy
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              <div>
                <dt className="font-display text-2xl font-semibold text-maroon">
                  18+
                </dt>
                <dd className="mt-1 text-xs text-ink-soft">
                  Years of community work
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-semibold text-maroon">
                  32
                </dt>
                <dd className="mt-1 text-xs text-ink-soft">
                  Children at Ujaas Academy
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-semibold text-maroon">
                  8
                </dt>
                <dd className="mt-1 text-xs text-ink-soft">
                  Therapy &amp; life-skill services
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-full w-full rounded-[2rem] bg-saffron/25 sm:-right-8 sm:-top-8" />
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 shadow-xl shadow-ink/10">
              <Image
                src={img.classroomGroup.src}
                width={img.classroomGroup.width}
                height={img.classroomGroup.height}
                alt="Children and teachers at Ujaas Special Academy in a classroom session in Nohar"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Three pillars */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <SectionTag>What We Do</SectionTag>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
              Three commitments, one community
            </h2>
            <p className="mt-4 text-balance text-ink-soft">
              Since 2007, our work has grown around three pillars &mdash;
              keeping Rajasthani language and literature alive, celebrating
              folk art and culture, and building a center of care for
              children with special needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <PillarCard
              icon={<BookIcon />}
              title="Hathai Magazine"
              description="A quarterly Rajasthani literary magazine giving local writers and poets a platform since 2016."
              href="/hathai"
              tone="saffron"
            />
            <PillarCard
              icon={<PaletteIcon />}
              title="Art & Culture"
              description="Folk festivals, exhibitions and stage performances that keep Rajasthan's traditions vibrant."
              href="/sansthan"
              tone="maroon"
            />
            <PillarCard
              icon={<HeartIcon />}
              title="Ujaas Special Academy"
              description="Education, therapy and rehabilitation for children with special needs in Nohar."
              href="/ujaas"
              tone="teal"
            />
          </div>
        </Container>
      </section>

      {/* Ujaas spotlight */}
      <section className="border-y border-ink/10 bg-teal-dark py-20 text-paper sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-paper/15">
              <Image
                src={img.physiotherapySession.src}
                width={img.physiotherapySession.width}
                height={img.physiotherapySession.height}
                alt="A therapist guiding a child through a physiotherapy exercise at Ujaas Special Academy"
                className="h-full max-h-[480px] w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionTag tone="saffron">Ujaas Special Academy</SectionTag>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold text-balance sm:text-4xl">
              &ldquo;A home of courage, a center of compassion.&rdquo;
            </h2>
            <p className="mt-5 text-balance leading-relaxed text-paper/80">
              Formerly known as Horizon, Ujaas Special Academy provides
              speech therapy, physiotherapy, occupational therapy and
              life-skills training to children with special needs &mdash;
              helping each child become confident, independent and
              self-reliant.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-paper/80">
              {[
                "Speech Therapy",
                "Physiotherapy",
                "Occupational Therapy",
                "Life Skills Training",
                "Parent Counseling",
                "Vocational Training",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/ujaas"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-teal-dark transition hover:bg-saffron-light"
            >
              Explore Ujaas Academy
              <ArrowRightIcon />
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats + quote */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="rounded-3xl bg-ink p-10 text-paper">
            <div className="grid grid-cols-2 gap-8">
              <StatItem value="2007" label="Year founded" />
              <StatItem value="2025" label="Ujaas NITI Aayog registered" />
              <StatItem value="3" label="Trained special educators" />
              <StatItem value="8+" label="Themed Hathai issues published" />
            </div>
          </div>
          <div>
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              className="text-saffron"
              aria-hidden="true"
            >
              <path
                d="M0 32V19.4C0 8.4 6.4 1.6 16.8 0l2 5.6C11.6 7.2 8 11.2 8 16.4h8.8V32H0Zm22.4 0V19.4c0-11 6.4-17.8 16.8-19.4l2 5.6c-7.2 1.6-10.8 5.6-10.8 10.8h8.8V32H22.4Z"
                fill="currentColor"
              />
            </svg>
            <p className="mt-4 text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              &ldquo;Before, we were unsure about our child&rsquo;s future.
              Today we trust that with the right guidance, he will live a
              respected, independent life.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-ink-soft">
              &mdash; A parent, Ujaas Special Academy, Nohar
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery strip */}
      <section className="pb-4 sm:pb-8">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionTag tone="saffron">Moments</SectionTag>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Life at the academy
              </h2>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[img.birthday3, img.birthday5, img.birthday7, img.birthday1].map(
              (image, i) => (
                <div
                  key={image.src}
                  className={`overflow-hidden rounded-2xl border border-ink/10 ${
                    i === 3 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt="A celebration moment with children at Ujaas Special Academy"
                    className="h-full w-full object-cover aspect-square"
                  />
                </div>
              ),
            )}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

function PillarCard({
  icon,
  title,
  description,
  href,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  tone: "maroon" | "teal" | "saffron";
}) {
  const toneBg = {
    maroon: "bg-maroon/10 text-maroon group-hover:bg-maroon",
    teal: "bg-teal/10 text-teal group-hover:bg-teal",
    saffron: "bg-saffron/15 text-saffron-dark group-hover:bg-saffron",
  }[tone];

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:text-paper ${toneBg}`}
      >
        {icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
        {description}
      </p>
      <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink">
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
