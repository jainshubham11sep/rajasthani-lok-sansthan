import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { ArrowRightIcon, BookIcon, PaletteIcon, HeartIcon } from "@/components/Icons";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "The three initiatives of Rajasthani Lok Sansthan: the Hathai literary magazine, folk art & culture programs, and Ujaas Special Academy.",
};

export default function SansthanPage() {
  return (
    <>
      <PageHero
        tag="Our Work"
        title="Keeping language and culture alive, side by side with social care"
        description="Rajasthani Lok Sansthan is a people-driven, culturally-rooted organization. Our work spans three initiatives — each rooted in the belief that heritage and humanity grow stronger together."
      />

      {/* Language & Literature */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron/15 text-saffron-dark">
              <BookIcon />
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
              Language &amp; Literature Initiative
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We work toward the preservation, promotion and development of
              the Rajasthani language and literature. Through literary
              gatherings, poetry recitations and seminars, we give writers a
              stage and encourage younger generations to engage with their
              mother tongue.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Our quarterly magazine, <strong className="text-ink">Hathai</strong>,
              is the centerpiece of this effort &mdash; preserving folk
              literary traditions while publishing new voices.
            </p>
            <Link
              href="/hathai"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-maroon"
            >
              Explore Hathai Magazine
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-cream-dark/60 p-8 sm:p-10">
            <ul className="space-y-4">
              {[
                "Literary gatherings & poetry recitations",
                "Seminars and discussions for writers",
                "Quarterly Hathai magazine since 2016",
                "A platform for new and established voices",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-dark" />
                  <span className="text-sm text-ink-soft">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Art & Culture */}
      <section className="border-y border-ink/10 bg-cream-dark/60 py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-[2rem] border border-ink/10 lg:order-1">
            <Image
              src={img.birthday2.src}
              width={img.birthday2.width}
              height={img.birthday2.height}
              alt="Community members and children gathered for a Rajasthani Lok Sansthan event in Nohar"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon/10 text-maroon">
              <PaletteIcon />
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
              Art &amp; Culture Program
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Dedicated to safeguarding folk art, dance, music and cultural
              practice, we regularly organize cultural programs, folk
              festivals, exhibitions and stage performances.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              These events give local artists a platform to perform, while
              strengthening cultural identity and community bonds across
              Nohar and the surrounding villages.
            </p>
          </div>
        </Container>
      </section>

      {/* Ujaas */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
              <HeartIcon />
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
              Ujaas Special Academy
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Beyond cultural preservation, our deepest social commitment is
              Ujaas Special Academy &mdash; a center for the education,
              therapy and rehabilitation of children with special needs.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              What began as Horizon has grown into a dedicated academy
              offering speech therapy, physiotherapy, occupational therapy
              and life-skills training to 32 children and counting.
            </p>
            <Link
              href="/ujaas"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal"
            >
              Explore Ujaas Academy
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-ink/10">
            <Image
              src={img.speechTherapySession.src}
              width={img.speechTherapySession.width}
              height={img.speechTherapySession.height}
              alt="A speech therapy session for a student at Ujaas Special Academy"
              className="h-full max-h-[480px] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
