import { Section } from "./Section";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";
import { NewsletterForm } from "./NewsletterForm";
import { Reveal } from "./Reveal";
import { IconMail, IconPhone, IconCalendar } from "./icons";
import { site } from "@/lib/site";

/** Dark conversion band — the primary apply CTA, reused site-wide. */
export function ApplyCTA({
  eyebrow = "Ready to begin?",
  title = "Join the global network of certified buyer's agents.",
  body = "Applications are reviewed on a rolling basis. Secure your Founding Member pricing before public launch.",
  primaryLabel = "Apply for Membership",
  primaryHref = "/apply",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Section tone="navy" className="relative overflow-hidden">
      {/* soft radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 120% at 50% -10%, rgba(176,137,79,0.22), transparent 60%)",
        }}
      />
      <Container className="relative text-center">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight text-cream sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/70">{body}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} variant="onDark" size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="outlineGold" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/**
 * Compact Founding Member panel — placed high on the homepage (not buried
 * near pricing) to create urgency without overstating unconfirmed specifics.
 */
export function FoundingMemberBand() {
  return (
    <Section tone="ivory" size="tight">
      <Container>
        <Reveal className="relative overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-br from-navy to-navy-700 px-6 py-10 sm:px-12 sm:py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(45% 90% at 85% 0%, rgba(201,169,106,0.25), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <span className="label-caps inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[0.65rem] text-gold-light">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                Founding Member
              </span>
              <h2 className="mt-4 font-display text-2xl leading-tight text-cream sm:text-[1.9rem]">
                Founding Members get first access.
              </h2>
              <p className="mt-3 leading-relaxed text-cream/75">
                Join the first wave of Private Agents, secure special founding
                offers, receive priority onboarding, and be among the first
                professionals visible on the platform.
              </p>
              <p className="mt-3 text-sm text-cream/50">
                Founding Member benefits and offers will be confirmed before
                launch.
              </p>
            </div>
            <Button
              href="/apply"
              variant="onDark"
              size="lg"
              className="w-full shrink-0 sm:w-auto"
            >
              Become a Founding Member
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/** Newsletter capture band. */
export function NewsletterSection() {
  return (
    <Section tone="sand" size="tight">
      <Container size="narrow">
        <div className="rounded-xl border border-line bg-ivory p-10 text-center sm:p-14">
          <p className="eyebrow mb-3">Stay informed</p>
          <h2 className="font-display text-2xl text-navy sm:text-3xl">
            Premium insights &amp; early access
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Join our list for platform updates, market insights and early
            access to new tools for property professionals.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <NewsletterForm tone="dark" />
          </div>
          <p className="mt-4 text-xs text-faint">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </Section>
  );
}

/** Concierge contact band. */
export function ContactSection() {
  const items = [
    {
      icon: <IconMail className="h-6 w-6" />,
      label: "Email us",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: <IconPhone className="h-6 w-6" />,
      label: "Call us",
      value: site.phone,
      href: `tel:${site.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: <IconCalendar className="h-6 w-6" />,
      label: "Schedule a call",
      value: "Book a time that suits you",
      href: "/apply",
    },
  ];
  return (
    <Section id="contact" tone="cream">
      <Container>
        <SectionHeader
          eyebrow="Need personal help?"
          title="Speak with our concierge team"
          description="Our team is here to help you join, build your profile, or answer any questions before you apply."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 70} className="flex">
              <a
                href={item.href}
                className="group flex w-full flex-col items-center rounded-lg border border-line bg-ivory p-8 text-center transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(20,32,58,0.35)]"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold">
                  {item.icon}
                </span>
                <span className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {item.label}
                </span>
                <span className="mt-2 font-display text-lg text-navy">
                  {item.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
