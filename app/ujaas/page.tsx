import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionTag from "@/components/SectionTag";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import {
  SpeechIcon,
  ActivityIcon,
  HandIcon,
  ChecklistIcon,
  UsersIcon,
  SmileIcon,
  SignIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  BuildingIcon,
} from "@/components/Icons";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ujaas Special Academy",
  description:
    "Ujaas Special Academy (formerly Horizon) provides special education, therapy and rehabilitation for children with special needs in Nohar, Hanumangarh.",
};

const services = [
  {
    icon: <SpeechIcon />,
    title: "Speech Therapy",
    description:
      "Improves communication, pronunciation and language skills so children can express themselves confidently.",
  },
  {
    icon: <ActivityIcon />,
    title: "Physiotherapy",
    description:
      "Strengthens muscles and improves movement, balance and coordination for greater physical independence.",
  },
  {
    icon: <HandIcon />,
    title: "Occupational Therapy",
    description:
      "Builds daily-life skills like writing, eating, dressing and playing to encourage self-reliance.",
  },
  {
    icon: <ChecklistIcon />,
    title: "Life Skills Training",
    description:
      "Teaches hygiene, social behavior, time management and decision-making for everyday life.",
  },
  {
    icon: <UsersIcon />,
    title: "Parent Counseling",
    description:
      "Guides parents with emotional support, training and strategies to support their child's growth.",
  },
  {
    icon: <SmileIcon />,
    title: "Behavioral Therapy",
    description:
      "Helps children manage emotions, build focus and develop positive behavior patterns.",
  },
  {
    icon: <SignIcon />,
    title: "Sign Language & Communication",
    description:
      "Teaches sign language, lip-reading and alternative communication methods.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Vocational & Pre-Skill Training",
    description:
      "Prepares older children with basic work skills for future independence and livelihood.",
  },
];

const testimonials = [
  {
    quote:
      "The teachers here are patient and dedicated. They see every child's potential and guide them accordingly.",
    name: "Malaram Joshi",
    role: "Parent, Nohar",
  },
  {
    quote:
      "This academy hasn't just taught our child — it has taught us how to understand and support him too.",
    name: "Yusuf Ali",
    role: "Parent, Nohar",
  },
  {
    quote:
      "Earlier we worried about our child's future. Today we trust that with the right guidance, he will live an independent, respected life.",
    name: "Aslam Khan",
    role: "Parent, Nohar",
  },
];

const futurePlans = [
  "A dedicated academy building with expanded resource rooms",
  "More speech, physiotherapy and occupational therapy capacity",
  "Digital and smart-class learning tools",
  "Stronger vocational training for self-employment",
  "Mainstream education pathways for children who are ready",
];

export default function UjaasPage() {
  return (
    <>
      <PageHero
        tag={`${site.ujaas.name} · Nohar`}
        title={site.ujaas.tagline}
        description="Ujaas Special Academy — formerly Horizon (Disabled Awareness, Education and Rehabilitation Institute) — provides education, therapy and rehabilitation for children with special needs, helping every child build a confident, independent life."
        tone="teal"
      >
        <div className="mt-8 grid max-w-2xl grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
          <div>
            <div className="font-display text-2xl font-semibold text-teal">
              {site.ujaas.studentsEnrolled}
            </div>
            <div className="mt-1 text-xs text-ink-soft">Children enrolled</div>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-teal">
              {site.ujaas.educators}
            </div>
            <div className="mt-1 text-xs text-ink-soft">Special educators</div>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-teal">
              8
            </div>
            <div className="mt-1 text-xs text-ink-soft">Service areas</div>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-teal">
              2025
            </div>
            <div className="mt-1 text-xs text-ink-soft">
              NITI Aayog registered
            </div>
          </div>
        </div>
      </PageHero>

      {/* Approach */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTag tone="teal">Our Approach</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Every child gets a plan built around them
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We believe every child carries unique capabilities — they
              simply need the right direction, opportunity and
              encouragement. Each student at Ujaas is assessed and given an
              Individualized Education Plan (IEP) that shapes their therapy,
              schooling and life-skills training around their own pace of
              progress.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Our work reaches beyond the academy walls, too — into homes
              and villages around Nohar, through parent training and
              community awareness programs.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-ink/10">
            <Image
              src={img.studentWriting.src}
              width={img.studentWriting.width}
              height={img.studentWriting.height}
              alt="A student practicing handwriting at Ujaas Special Academy"
              className="h-full max-h-[520px] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="border-y border-ink/10 bg-cream-dark/60 py-20 sm:py-24">
        <Container>
          <div className="max-w-xl">
            <SectionTag tone="teal">Services</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Eight services, one goal: independence
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionTag>Day to Day</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Inside the academy
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { img: img.physiotherapyStretch, alt: "A physiotherapist guiding a student through a leg-stretching exercise" },
              { img: img.balanceBallTherapy, alt: "A therapist supporting a student's balance using a therapy ball" },
              { img: img.standingBalanceExercise, alt: "A therapist leading students through a standing balance exercise" },
              { img: img.fineMotorActivity, alt: "A teacher guiding a young student through a fine motor skills activity" },
              { img: img.speechTherapyFlashcards, alt: "A speech therapy session using picture flashcards" },
              { img: img.classroomGroup, alt: "Students seated together in a classroom session at Ujaas Special Academy" },
            ].map((item) => (
              <div
                key={item.img.src}
                className="overflow-hidden rounded-2xl border border-ink/10"
              >
                <Image
                  src={item.img.src}
                  width={item.img.width}
                  height={item.img.height}
                  alt={item.alt}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vocational highlight */}
      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="grid items-center gap-10 rounded-3xl bg-saffron/10 p-8 sm:p-12 lg:grid-cols-[1fr_1.3fr]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron text-ink">
              <BriefcaseIcon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">
                Learning skills that lead to livelihoods
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Through our vocational training center, older students learn
                practical skills such as making paper plates, carry bags and
                envelopes &mdash; building the confidence and capability to
                pursue self-employment or work in the future.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-y border-ink/10 bg-ink py-20 text-paper sm:py-24">
        <Container>
          <SectionTag tone="saffron">In Their Words</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            What parents tell us
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-paper/10 bg-paper/5 p-7"
              >
                <blockquote className="text-balance leading-relaxed text-paper/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-paper">{t.name}</span>
                  <span className="text-paper/60"> &middot; {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Future plans */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
              <BuildingIcon />
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
              What&rsquo;s next for Ujaas
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Our goal is to give even more children in Nohar access to
              modern, well-resourced therapy and education. With your
              support, here&rsquo;s what we&rsquo;re working toward:
            </p>
            <Link
              href="/donate"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-paper transition hover:bg-teal-dark"
            >
              Help Us Get There
              <ArrowRightIcon />
            </Link>
          </div>
          <ul className="space-y-4">
            {futurePlans.map((plan) => (
              <li
                key={plan}
                className="flex items-start gap-3 rounded-xl border border-ink/10 bg-paper p-4"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span className="text-sm text-ink-soft">{plan}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
