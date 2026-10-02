import Link from "next/link";
import { footerLegalLinks, navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron text-ink">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2c2.5 2.8 4 5.6 4 8.2A4 4 0 1 1 8 10.2C8 7.6 9.5 4.8 12 2Z"
                    fill="currentColor"
                  />
                  <circle cx="12" cy="19.5" r="2.2" fill="currentColor" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold text-paper">
                Rajasthani Lok Sansthan
              </span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              A people-driven organization preserving Rajasthani language,
              literature, culture and art &mdash; and empowering children
              with special needs through Ujaas Special Academy.
            </p>
            <p className="mt-4 text-xs text-cream/50">
              Registered under the Rajasthan Societies Registration Act,
              1958 &middot; Reg. No. {site.regNo} &middot; 80G tax-exempt
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-saffron-light">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/donate" className="hover:text-paper">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-saffron-light">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li>{site.address}</li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="hover:text-paper">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-paper break-all">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Rajasthani Lok Sansthan. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-cream/80">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
