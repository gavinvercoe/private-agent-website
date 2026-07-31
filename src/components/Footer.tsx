import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { footerColumns, socials, site } from "@/lib/site";
import {
  IconInstagram,
  IconLinkedin,
  IconFacebook,
  IconYoutube,
} from "./icons";

const socialIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: IconInstagram,
  LinkedIn: IconLinkedin,
  Facebook: IconFacebook,
  YouTube: IconYoutube,
};

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Wordmark tone="light" />
            <p className="mt-6 text-sm leading-relaxed text-cream/60">
              A global network connecting certified buyer&rsquo;s agents with
              discerning buyers and trusted property professionals.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = socialIcon[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    {Icon ? <Icon className="h-[18px] w-[18px]" /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-cream/40">
            Placeholder marketing site &middot; content &amp; imagery to be finalised.
          </p>
        </div>
      </div>
    </footer>
  );
}
