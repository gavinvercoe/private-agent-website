import type { Metadata } from "next";
import { TeaserNav } from "@/components/TeaserNav";
import { TeaserFooter } from "@/components/TeaserFooter";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { FeatureGrid, FeatureList } from "@/components/FeatureGrid";
import { PhoneWall } from "@/components/PhoneWall";
import { PhoneShot, ScreenGallery } from "@/components/PhoneShot";
import { QuickEmailCapture } from "@/components/QuickEmailCapture";
import { FoundingMemberForm } from "@/components/FoundingMemberForm";
import { WaitlistEmailProvider } from "@/components/WaitlistEmailContext";
import { IconLock, IconCheck, IconBadge } from "@/components/icons";
import { agentValue, heroWallShots, trustPoints } from "@/lib/content";

export const metadata: Metadata = {
  title: "Coming Soon",
  description:
    "Private Agent is launching soon — the private platform for buyer's agents. Join the mailing list now for preferential Founding Member pricing.",
};

const lockedAreas = [
  { label: "For Buyers", caption: "Unlocking soon" },
  { label: "How It Works", caption: "Unlocking soon" },
  { label: "Full Pricing", caption: "Unlocking soon" },
  { label: "Resources", caption: "Unlocking soon" },
  { label: "About Us", caption: "Unlocking soon" },
];

const certificationPoints = [
  "Upload your real estate license and proof of registration",
  "Complete an EU-standard KYC verification",
  "Earn the Buyers Agent Certified badge on your profile",
  "Get listed in the exclusive certified directory",
  "Use the Private Agent & Certification logos on your marketing",
];

export default function ComingSoonPage() {
  return (
    <WaitlistEmailProvider>
      <TeaserNav />
      <main className="flex-1">
        {/* ---------------------------------------------------------- HERO */}
        <section className="relative overflow-hidden bg-cream pt-16 pb-16 sm:pt-20 sm:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] opacity-70"
            style={{
              background:
                "radial-gradient(45% 60% at 78% 8%, rgba(176,137,79,0.16), transparent 70%)",
            }}
          />
          <Container className="relative">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-5">
                Coming Soon &mdash; For Buyer&rsquo;s Agents
              </p>
              <h1 className="font-display text-[2.5rem] leading-[1.08] text-navy sm:text-6xl">
                Win better buyers.{" "}
                <em className="text-gold">Run better deals.</em>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Private Agent is a new platform built to help buyer&rsquo;s
                agents get discovered by serious buyers, cut the admin, and
                close more deals &mdash; all in one place. We&rsquo;re opening
                the doors to a limited group of Founding Members first.
              </p>

              <div className="mx-auto mt-9 max-w-md">
                <QuickEmailCapture />
                <p className="mt-4 text-sm text-faint">
                  Founding Members get preferential pricing and exclusive
                  launch benefits. No spam &mdash; unsubscribe anytime.
                </p>
              </div>
            </Reveal>
          </Container>

          <Container size="wide" className="relative mt-14 sm:mt-16">
            <PhoneWall
              shots={heroWallShots.slice(0, 3)}
              backdropSrc="/img/hero-property.jpg"
              backdropAlt="A luxury contemporary property at dusk"
            />
          </Container>
        </section>

        {/* ------------------------------------------------ VALUE TEASER -- */}
        <Section tone="ivory">
          <Container>
            <SectionHeader
              eyebrow="What's coming"
              title={
                <>
                  Built for agents who want{" "}
                  <em className="text-gold">more clients</em> and less admin
                </>
              }
              description="A first look at what Founding Members will get access to at launch."
            />
            <FeatureGrid items={agentValue} columns={3} className="mt-16" />
          </Container>
        </Section>

        {/* --------------------------------------------- WORKSPACE GALLERY */}
        <Section tone="cream">
          <Container size="wide">
            <SectionHeader
              eyebrow="Your workspace"
              title="Run every deal from one place"
              description="Appointments, agreements, deal tracking and documents — a complete transaction workspace built for buyer's agents."
            />
            <ScreenGallery
              className="mt-16"
              items={[
                { src: "/screens/appointment-and-deal-flow/01-appoint-agent.png", alt: "Appoint agent", caption: "Appointments" },
                { src: "/screens/appointment-and-deal-flow/07-active-agent-workspace.png", alt: "Active agent overview", caption: "Active clients" },
                { src: "/screens/appointment-and-deal-flow/09-deal-status-tracker.png", alt: "Deal status tracker", caption: "Deal tracking" },
                { src: "/screens/appointment-and-deal-flow/10-documents-library.png", alt: "Documents library", caption: "Documents" },
              ]}
            />
          </Container>
        </Section>

        {/* ---------------------------------------------------- CERTIFICATION */}
        <Section tone="ivory">
          <Container>
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow mb-4">Certification</p>
                <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
                  Become a Certified{" "}
                  <em className="text-gold">Global Buyers Agent.</em>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  Certification builds trust with the high-value buyers you
                  want to work with &mdash; and sets you apart from the
                  competition. We&rsquo;ll verify your credentials and
                  certify your profile.
                </p>
                <ul className="mt-7 space-y-3">
                  {certificationPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-charcoal/85">
                      <IconCheck className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-faint">
                  Certified members maintain their standing through client
                  ratings and an annual certification review.
                </p>
                <Button href="#founding-member" variant="primary" className="mt-8">
                  Join the Waitlist
                </Button>
              </Reveal>
              <Reveal delay={100} className="flex justify-center">
                <div className="relative w-full max-w-[300px]">
                  <PhoneShot
                    src="/screens/appointment-and-deal-flow/04-identity-verification.png"
                    alt="Private Agent app — identity verification and KYC for certification"
                  />
                  <div className="absolute -bottom-4 -right-2 flex items-center gap-3 rounded-xl border border-line bg-ivory p-4 shadow-[0_30px_60px_-30px_rgba(20,32,58,0.5)] sm:-right-6">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold">
                      <IconBadge className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="font-display text-base text-navy">
                        Certified
                      </p>
                      <p className="text-[0.68rem] uppercase tracking-[0.14em] text-gold">
                        Buyers Agent
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        {/* -------------------------------------------------- TRUST BAND -- */}
        <Section tone="ink">
          <Container>
            <SectionHeader
              tone="light"
              eyebrow="Confidence, built in"
              title="Secure, verified and professional at every step"
            />
            <FeatureList
              items={trustPoints}
              tone="light"
              columns={3}
              className="mt-16"
            />
          </Container>
        </Section>

        {/* -------------------------------------------- PRICING TEASER --- */}
        <Section tone="navy" className="relative overflow-hidden">
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
              <p className="eyebrow mb-4">Pricing</p>
              <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-cream sm:text-5xl">
                Pricing coming soon.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-cream/70">
                We&rsquo;re finalising membership pricing ahead of launch.
                Join the mailing list now and Founding Members will receive
                preferential pricing and exclusive founder benefits when we
                open the doors.
              </p>
              <div className="mt-9">
                <Button href="#founding-member" variant="onDark" size="lg">
                  Join the Waitlist
                </Button>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* ------------------------------------------------ COMING SOON --- */}
        <Section tone="sand" id="coming-soon">
          <Container>
            <SectionHeader
              eyebrow="Just the beginning"
              title="Many more features are coming soon to those who enrol."
              description="Our full walkthrough for buyers, complete pricing, resources and more will unlock as we get closer to launch — Founding Members get access first."
            />
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {lockedAreas.map((area, i) => (
                <Reveal
                  key={area.label}
                  delay={i * 70}
                  className="flex flex-col items-center gap-3 rounded-lg border border-line/70 bg-ivory/60 px-4 py-8 text-center"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/15 text-charcoal/35">
                    <IconLock className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base text-charcoal/50">
                    {area.label}
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold/70">
                    {area.caption}
                  </span>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* --------------------------------------- FINAL CTA / FULL FORM -- */}
        <Section tone="cream" id="founding-member" className="scroll-mt-16">
          <Container size="narrow">
            <Reveal className="text-center">
              <p className="eyebrow mb-4">Founding Members</p>
              <h2 className="font-display text-3xl leading-tight text-navy sm:text-5xl">
                Be first through the door.
              </h2>
              <p className="mx-auto mt-6 max-w-md text-muted">
                Tell us a little about yourself to join the Founding Member
                waitlist &mdash; we&rsquo;ll be in touch as launch approaches
                with your preferential pricing and benefits.
              </p>
            </Reveal>
            <div className="mx-auto mt-10 max-w-2xl">
              <FoundingMemberForm />
            </div>
          </Container>
        </Section>
      </main>
      <TeaserFooter />
    </WaitlistEmailProvider>
  );
}
