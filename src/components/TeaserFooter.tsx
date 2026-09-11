import { Wordmark } from "./Wordmark";
import { socials, site } from "@/lib/site";
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

/** Minimal footer for the teaser page — brand and contact only, no page links. */
export function TeaserFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Wordmark tone="light" href={null} />
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">
            The private platform for buyer&rsquo;s agents. Launching soon.
          </p>
          <div className="flex gap-3">
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
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-cream/60 hover:text-cream"
          >
            {site.email}
          </a>
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} {site.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
