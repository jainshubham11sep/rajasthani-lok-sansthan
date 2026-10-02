import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero tag="Legal" title="Accessibility Statement" tone="teal" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-ink-soft">
          <p>
            Rajasthani Lok Sansthan is committed to making this website
            usable by as many people as possible, including people with
            disabilities — a commitment that reflects the very work we do
            through Ujaas Special Academy.
          </p>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              What we aim for
            </h2>
            <p className="mt-2">
              We aim to keep this site readable with clear color contrast,
              scalable text, descriptive image text, and layouts that work
              well with keyboards and screen readers.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Ongoing work
            </h2>
            <p className="mt-2">
              Accessibility is an ongoing effort. If any part of this site
              is difficult to use, please let us know so we can fix it.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Contact
            </h2>
            <p className="mt-2">
              Reach us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-maroon">
                {site.email}
              </a>{" "}
              or {site.phone} with any accessibility feedback.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
