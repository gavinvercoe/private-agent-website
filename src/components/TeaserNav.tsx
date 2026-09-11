import { Wordmark } from "./Wordmark";
import { Button } from "./Button";
import { IconLock } from "./icons";

/**
 * Minimal nav for the teaser landing page. The other site pages are
 * deliberately not linked to directly — each label scrolls down to the
 * "coming soon" section instead, so the full site stays parked for a later
 * campaign phase without being discoverable from here.
 */
const TEASED_LABELS = [
  "For Agents",
  "For Buyers",
  "How It Works",
  "Pricing",
  "Resources",
  "About Us",
];

export function TeaserNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        <Wordmark href="/" />

        <nav
          aria-label="Coming soon"
          className="hidden items-center gap-6 lg:flex"
        >
          {TEASED_LABELS.map((label) => (
            <a
              key={label}
              href="#coming-soon"
              className="group inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-charcoal/35 transition-colors hover:text-gold"
            >
              <IconLock className="h-3.5 w-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
              {label}
            </a>
          ))}
        </nav>

        <Button href="#join" variant="primary" size="sm">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
}
