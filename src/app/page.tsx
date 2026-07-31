import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CyclingPhone, MiniPhone } from "@/components/PhoneShot";
import { PhoneWall } from "@/components/PhoneWall";
import {
  ApplyCTA,
  NewsletterSection,
  ContactSection,
  FoundingMemberBand,
} from "@/components/marketing-sections";
import { IconCheck } from "@/components/icons";
import { cn } from "@/lib/cn";
import {
  heroWallShots,
  proofOfValue,
  agentAdvantageJourney,
  workspaceStories,
  credibilityPoints,
  buyerOnboardingShots,
} from "@/lib/content";

const heroChips = [
  "Get found by serious buyers",
  "Run every client in one place",
  "Keep more deals moving to close",
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden bg-cream pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] opacity-70"
          style={{
            background:
              "radial-gradient(45% 60% at 78% 8%, rgba(176,137,79,0.16), transparent 70%)",
          }}
        />
        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
            <p className="eyebrow mb-5">
              The Private Platform for Buyer&rsquo;s Agents
            </p>
            <h1 className="font-display text-[2.5rem] leading-[1.08] text-navy sm:text-6xl">
              Win better buyers.{" "}
              <em className="text-gold">Run better deals.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
              Private Agent helps you get discovered by serious buyers,
              manage every moving part of the relationship, and guide more
              clients from first conversation to completed purchase.
            </p>

            <ul className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {heroChips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-ivory px-4 py-2 text-sm text-charcoal/85"
                >
                  <IconCheck className="h-4 w-4 shrink-0 text-gold" />
                  {chip}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="/apply" variant="primary" size="lg">
                Become a Founding Member
              </Button>
              <Button href="#agent-advantage" variant="outline" size="lg">
                See how it helps you win more deals
              </Button>
            </div>
          </Reveal>
        </Container>

        {/* Hero visual: real app screens, grounded on a restrained property
           photo — one horizontal "shelf" that scrolls on mobile and lines
           up in a single row once the viewport is wide enough. */}
        <Container size="wide" className="relative mt-14 sm:mt-16">
          <PhoneWall
            shots={heroWallShots}
            backdropSrc="/img/hero-property.jpg"
            backdropAlt="A luxury contemporary property at dusk"
          />
        </Container>
      </section>

      {/* ------------------------------------------------ FOUNDING MEMBER */}
      <FoundingMemberBand />

      {/* ------------------------------------------- IMMEDIATE PROOF ----- */}
      <Section tone="ivory" size="tight">
        <Container>
          <FeatureGrid items={proofOfValue} columns={3} />
        </Container>
      </Section>

      {/* ------------------------------------------ AGENT ADVANTAGE ----- */}
      <Section tone="cream" id="agent-advantage">
        <Container size="wide">
          <SectionHeader
            eyebrow="The agent advantage"
            title="How you win more deals"
            description="A clear path from first discovery to a completed transaction — every stage designed to move your client forward."
          />
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {agentAdvantageJourney.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 90}>
                <Link
                  href="/how-it-works"
                  className="group flex flex-col items-center text-center"
                >
                  <MiniPhone src={stage.image.src} alt={stage.image.alt} />
                  <span className="mt-4 grid h-8 w-8 place-items-center rounded-full border border-gold/40 font-display text-xs text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-navy transition-colors group-hover:text-gold">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-muted">
                    {stage.outcome}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------- ONE WORKSPACE -- */}
      <Section tone="ivory" id="workspace">
        <Container>
          <SectionHeader
            eyebrow="One workspace"
            title="Everything that keeps a buyer moving—finally in one place."
            description="No more chasing links, emails, WhatsApp threads, calendars, documents, and third parties. Private Agent gives you one professional home for every client relationship."
          />
        </Container>
        <Container size="wide">
          <div className="mt-20 flex flex-col gap-24 sm:gap-28">
            {workspaceStories.map((story, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal
                  key={story.title}
                  className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={cn(flip && "lg:order-2")}>
                    <p className="eyebrow mb-3">{story.eyebrow}</p>
                    <h3 className="font-display text-2xl text-navy sm:text-3xl">
                      {story.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted">
                      {story.body}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "flex flex-col items-center gap-8",
                      flip && "lg:order-1",
                    )}
                  >
                    {story.staticShots && (
                      <div
                        className={cn(
                          "grid w-full max-w-sm gap-4",
                          story.staticShots.length === 3
                            ? "grid-cols-3"
                            : "grid-cols-2",
                        )}
                      >
                        {story.staticShots.map((s) => (
                          <MiniPhone
                            key={s.src}
                            src={s.src}
                            alt={s.alt}
                            className="max-w-[150px]"
                          />
                        ))}
                      </div>
                    )}
                    <CyclingPhone
                      images={story.cyclingShots}
                      className="w-full max-w-[220px]"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------- CREDIBILITY */}
      <Section tone="sand">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-4">Why agents trust the platform</p>
              <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
                Built for professionals who take their craft seriously.
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {credibilityPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-charcoal/85">
                    <IconCheck className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} className="flex flex-col items-center">
              <CyclingPhone
                images={buyerOnboardingShots}
                intervalMs={2600}
                className="w-full max-w-[260px]"
              />
              <p className="mt-6 max-w-xs text-center text-sm text-muted">
                See how thoroughly every buyer is qualified before you ever
                hear from them.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------- FINAL CTA ---- */}
      <ApplyCTA
        eyebrow="Founding Member"
        title="Get in early. Be seen first. Build your advantage."
        body="Apply now to become a Founding Member and secure first access, priority onboarding, and special founding offers before public launch."
        primaryLabel="Apply as a Founding Member"
        secondaryLabel="Explore membership benefits"
        secondaryHref="/pricing"
      />
      <NewsletterSection />
      <ContactSection />
    </>
  );
}
