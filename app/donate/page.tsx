import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import SectionTag from "@/components/SectionTag";
import DonateWidget from "@/components/DonateWidget";
import {
  BookIcon,
  BuildingIcon,
  HeartIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UsersIcon,
} from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Rajasthani Lok Sansthan and Ujaas Special Academy. Donate by bank transfer — 80G tax-exempt.",
};

const ways = [
  {
    icon: <HeartIcon />,
    title: "Sponsor a Child",
    description:
      "Fund a month of therapy, education and learning materials for a child at Ujaas Special Academy.",
  },
  {
    icon: <UsersIcon />,
    title: "Volunteer",
    description:
      "Offer your time and skills — teaching, therapy support or event help in Nohar.",
  },
  {
    icon: <BookIcon />,
    title: "Support Hathai",
    description:
      "Help us print and distribute the Hathai magazine to readers and libraries.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        tag="Donate"
        title="Change starts with people like you"
        description="Your donation helps make a real impact, one action at a time — funding therapy for a child at Ujaas, printing the next issue of Hathai, or keeping a folk tradition alive. Together, we can do more."
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionTag>Give Online</SectionTag>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Choose an amount
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              We don&rsquo;t yet process card payments directly on this
              site. Select an amount below and we&rsquo;ll follow up with
              simple, secure steps to complete your donation.
            </p>
            <div className="mt-6">
              <DonateWidget />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-ink/10 bg-paper p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon/10 text-maroon">
                <BuildingIcon />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                Donate by Bank Transfer
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Transfer directly to our registered account. Write to us
                afterward so we can send your 80G donation receipt.
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <Row label="Account Name" value={site.bank.accountName} />
                <Row label="Bank" value={site.bank.name} />
                <Row label="Branch" value={site.bank.branch} />
                <Row label="Account Number" value={site.bank.accountNumber} />
                <Row label="IFSC Code" value={site.bank.ifsc} />
                <Row label="PAN (80G)" value={site.pan} />
              </dl>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-cream-dark/60 p-8">
              <h3 className="font-display text-lg font-semibold text-ink">
                Have questions about donating?
              </h3>
              <div className="mt-4 space-y-3 text-sm text-ink-soft">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 hover:text-ink"
                >
                  <MailIcon className="h-5 w-5 text-maroon" />
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-center gap-3 hover:text-ink"
                >
                  <PhoneIcon className="h-5 w-5 text-maroon" />
                  {site.phone}
                </a>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-maroon" />
                  {site.address}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream-dark/60 py-20 sm:py-24">
        <Container>
          <SectionTag tone="teal">Other Ways to Help</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Beyond donating
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {ways.map((way) => (
              <div
                key={way.title}
                className="rounded-2xl border border-ink/10 bg-paper p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  {way.icon}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {way.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {way.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-3">
      <dt className="text-ink-soft">{label}</dt>
      <dd className="font-semibold text-ink">{value}</dd>
    </div>
  );
}
