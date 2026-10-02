import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionTag from "@/components/SectionTag";
import CTASection from "@/components/CTASection";
import {
  BookIcon,
  PaletteIcon,
  UsersIcon,
  HeartIcon,
} from "@/components/Icons";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, mission and leadership behind Rajasthani Lok Sansthan — founded in 2007 in Nohar, Hanumangarh, Rajasthan.",
};

const focusAreas = [
  {
    icon: <BookIcon />,
    title: "Language",
    description:
      "Preserving Rajasthani language and literature for the next generation.",
  },
  {
    icon: <PaletteIcon />,
    title: "Art & Culture",
    description:
      "Celebrating folk art, music and traditions through public programs.",
  },
  {
    icon: <UsersIcon />,
    title: "Social Welfare",
    description:
      "Running awareness drives and community programs across Nohar.",
  },
  {
    icon: <HeartIcon />,
    title: "Special Education",
    description:
      "Educating and rehabilitating children with special needs at Ujaas.",
  },
];

const team = [
  {
    name: "Dr. Bharat Singh Ola",
    role: "Founder & Chairman",
  },
  {
    name: "Bhagmal Saini",
    role: "Secretary",
  },
  {
    name: "Lakhmi Narayan Kaswan",
    role: "Treasurer",
  },
];

const timeline = [
  {
    year: "2007",
    title: "Rajasthani Lok Sansthan founded",
    description:
      "Registered in Nohar under the Rajasthan Societies Registration Act, 1958, to protect Rajasthani language and culture.",
  },
  {
    year: "2016",
    title: "Hathai magazine launched",
    description:
      "A quarterly Rajasthani prose magazine began giving local writers and poets a dedicated platform.",
  },
  {
    year: "2025",
    title: "Ujaas Special Academy registered",
    description:
      "Formerly known as Horizon, the academy was formally registered with NITI Aayog for differently-abled children.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About Us"
        title="Protecting a language. Nurturing every child's potential."
        description="In the heart of Rajasthan, where traditions breathe through songs, stories and colors, Rajasthani Lok Sansthan was born as a bridge between generations — connecting the wisdom of the past with the dreams of the future."
      />

      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTag>Our Story</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
              A sentiment, grown into a Sansthan
            </h2>
            <div className="mt-5 space-y-4 text-ink-soft leading-relaxed">
              <p>
                Rajasthani Lok Sansthan was founded in {site.foundedYear} in
                Nohar as a sincere, people-powered effort to keep Rajasthani
                language, literature and folk culture alive for the next
                generation.
              </p>
              <p>
                What began with literary gatherings and cultural evenings
                has grown into a full-fledged community institution &mdash;
                one that now also carries a deep social commitment: the
                education and rehabilitation of children with special
                needs, through Ujaas Special Academy.
              </p>
              <p>
                We believe culture and compassion must grow side by side.
                That belief guides every program we run.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-ink/10 shadow-lg shadow-ink/5">
            <Image
              src={img.birthday4.src}
              width={img.birthday4.width}
              height={img.birthday4.height}
              alt="Community members and children celebrating together at a Rajasthani Lok Sansthan event"
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Focus areas */}
      <section className="border-y border-ink/10 bg-cream-dark/60 py-20 sm:py-24">
        <Container>
          <div className="max-w-xl">
            <SectionTag tone="teal">Mission</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Four commitments that shape our work
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-ink/10 bg-paper p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-maroon/10 text-maroon">
                  {area.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionTag>Our Journey</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Milestones since {site.foundedYear}
          </h2>
          <div className="mt-12 space-y-10 border-l border-ink/15 pl-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-4 border-cream bg-maroon" />
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-maroon">
                  {item.year}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="border-y border-ink/10 bg-ink py-20 text-paper sm:py-24">
        <Container>
          <SectionTag tone="saffron">Leadership</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            The people steering the Sansthan
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {team.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-paper/10 bg-paper/5 p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-saffron font-display text-lg font-semibold text-ink">
                  {person.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-paper/70">{person.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Transparency */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="rounded-3xl border border-ink/10 bg-paper p-8 sm:p-12">
            <SectionTag tone="teal">Transparency</SectionTag>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Registered, accountable and tax-exempt
            </h2>
            <div className="mt-8 grid gap-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="font-semibold text-ink">Registration</dt>
                <dd className="mt-1 text-ink-soft">
                  Rajasthan Societies Registration Act, 1958
                  <br />
                  Reg. No. {site.regNo}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Tax Exemption</dt>
                <dd className="mt-1 text-ink-soft">
                  80G exempt &middot; PAN {site.pan}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Ujaas Special Academy</dt>
                <dd className="mt-1 text-ink-soft">
                  NITI Aayog Reg. No. {site.ujaas.nitiAayogReg}
                </dd>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
