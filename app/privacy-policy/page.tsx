import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero tag="Legal" title="Privacy Policy" tone="teal" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-ink-soft">
          <p>
            Rajasthani Lok Sansthan (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
            respects your privacy. This policy explains what information we
            collect through this website and how we use it.
          </p>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Information we collect
            </h2>
            <p className="mt-2">
              We only collect information you choose to share with us —
              such as your name, phone number or email address when you
              contact us, enquire about donating, or write to us via email
              or phone.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              How we use it
            </h2>
            <p className="mt-2">
              We use your information only to respond to your enquiry,
              process a donation, issue an 80G receipt, or share updates
              about our work if you&rsquo;ve asked us to. We do not sell or
              rent your information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Contact
            </h2>
            <p className="mt-2">
              For any privacy-related questions, write to us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-maroon">
                {site.email}
              </a>{" "}
              or call {site.phone}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
