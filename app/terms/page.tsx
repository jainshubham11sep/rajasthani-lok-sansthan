import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <PageHero tag="Legal" title="Terms & Conditions" tone="teal" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-ink-soft">
          <p>
            By using this website, you agree to the following terms. Please
            read them carefully.
          </p>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Use of content
            </h2>
            <p className="mt-2">
              All text, photographs and publications on this site belong to
              Rajasthani Lok Sansthan unless stated otherwise. Please
              contact us before reproducing our content elsewhere.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Donations
            </h2>
            <p className="mt-2">
              Donations made to Rajasthani Lok Sansthan support our
              programs, including Ujaas Special Academy and the Hathai
              magazine. Donations are generally non-refundable; if you
              believe a donation was made in error, contact us and
              we&rsquo;ll do our best to help.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Accuracy of information
            </h2>
            <p className="mt-2">
              We take care to keep this website accurate and up to date,
              but details such as programs, events or registration numbers
              may change over time. For the latest information, please
              contact us directly.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Contact
            </h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-maroon">
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
