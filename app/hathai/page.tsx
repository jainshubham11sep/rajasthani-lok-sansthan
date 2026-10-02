import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionTag from "@/components/SectionTag";
import CTASection from "@/components/CTASection";
import { MailIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hathai Magazine",
  description:
    "Hathai is a quarterly Rajasthani prose magazine published by Rajasthani Lok Sansthan since 2016, featuring short stories, poetry and essays.",
};

const issues = [
  {
    period: "Apr – Jun 2016",
    title: "Inaugural Issue",
    description:
      "Fiction from established writers alongside poetry exploring contemporary sensibilities and folk consciousness.",
  },
  {
    period: "Jan – Mar 2017",
    title: "Kahani Goth Special",
    description:
      "A literary gathering in print — storytellers read their work live while critics reviewed contemporary Rajasthani short fiction.",
  },
  {
    period: "Oct – Dec 2017",
    title: "Dalit Literature",
    description:
      "Guest-edited by Shiv Bodhi, exploring caste discrimination, social exclusion and the struggle for dignity and equality.",
  },
  {
    period: "Jan – Jun 2018",
    title: "Women's Literature",
    description:
      "A dedicated issue on women's creativity and feminist consciousness in Rajasthani writing.",
  },
  {
    period: "Oct – Dec 2019",
    title: "Gandhi Commemorative",
    description:
      "Published for Gandhi's 150th birth anniversary, exploring Gandhian philosophy across genres.",
  },
  {
    period: "Apr – Sep 2020",
    title: "Manto Translations",
    description:
      "Rajasthani translations of celebrated stories by Urdu writer Saadat Hasan Manto.",
  },
  {
    period: "Jul – Dec 2022",
    title: "Kinnar (Transgender) Issue",
    description:
      "Writing on the pain, struggle, identity and social marginalization of the transgender community.",
  },
  {
    period: "Oct – Dec 2023",
    title: "Sir Chhotu Ram",
    description:
      "Rajasthani translations of the peasant-movement leader's writing on farmers and social justice.",
  },
];

export default function HathaiPage() {
  return (
    <>
      <PageHero
        tag="Hathai Magazine"
        title="A quarterly home for Rajasthani prose"
        description="Hathai is a distinctive quarterly magazine published by Rajasthani Lok Sansthan since 2016, dedicated to Rajasthani prose — short stories, memoirs, essays and research writing."
        tone="saffron"
      />

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="leading-relaxed text-ink-soft">
            Each issue of Hathai highlights one selected poet, letting
            readers explore their work in depth, alongside short prose and
            research-based writing. It is our effort to preserve, promote
            and modernize Rajasthani prose &mdash; and to keep giving space
            to new and established voices across the region.
          </p>
        </Container>
      </section>

      <section className="border-y border-ink/10 bg-cream-dark/60 py-20 sm:py-24">
        <Container>
          <SectionTag tone="saffron">Themed Issues</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Issues that took a stand
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue) => (
              <div
                key={issue.title}
                className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-saffron-dark">
                  {issue.period}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {issue.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {issue.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-ink/10 bg-paper p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-maroon/10 text-maroon">
              <MailIcon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Writer, poet or researcher? Contribute to Hathai.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                We welcome Rajasthani short stories, poetry, essays and
                research writing for upcoming issues. Reach out to us at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-maroon"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
