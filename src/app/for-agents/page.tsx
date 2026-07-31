import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PhoneShot, ScreenGallery } from "@/components/PhoneShot";
import { IconCheck, IconBadge } from "@/components/icons";
import {
  ApplyCTA,
  NewsletterSection,
  ContactSection,
} from "@/components/marketing-sections";
import { agentValue, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Agents",
  description:
    "Why buyer's agents join Private Agent: qualified buyer introductions, certification, network referrals, visibility boosts and a full transaction workspace.",
};

const certificationPoints = [
  "Upload your real estate license and proof of registration",
  "Complete an EU-standard KYC verification",
  "Earn the Buyers Agent Certified badge on your profile",
  "Get listed in the exclusive certified directory",
  "Use the Private Agent & Certification logos on your marketing",
];

export default function ForAgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Agents"
        title={
          <>
            Everything you need to win &amp; serve{" "}
            <em className="text-gold">clients.</em>
          </>
        }
        description="Private Agent is both a lead-generation engine and a communication hub — designed to make your day more productive and more rewarding."
        primary={{ label: "Apply for Membership", href: "/apply" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      {/* Value grid */}
      <Section tone="ivory">
        <Container>
          <SectionHeader
            eyebrow="The advantages"
            title="Six reasons to join the network"
          />
          <FeatureGrid items={agentValue} columns={3} className="mt-16" />
        </Container>
      </Section>

      {/* Certification */}
      <Section tone="cream" id="certification">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-4">Certification</p>
              <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
                Become a Certified{" "}
                <em className="text-gold">Global Buyers Agent.</em>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Certification builds trust with the high-value buyers you want to
                work with — and sets you apart from the competition. We verify
                your credentials and certify your profile.
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
                Certified members maintain their standing through client ratings
                and an annual certification review.
              </p>
              <Button href="/apply" variant="primary" className="mt-8">
                Start Certification
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
                    <p className="font-display text-base text-navy">Certified</p>
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

      {/* Workspace gallery */}
      <Section tone="ivory">
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

      {/* Boost / referrals detail */}
      <Section tone="ink">
        <Container>
          <SectionHeader
            tone="light"
            eyebrow="It's always best to be first"
            title="Boost yourself to the top of the list"
            description="Ranked primarily by client rating — but there's more than one way to climb."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Boost via referrals",
                body: "Invite clients, agents or suppliers and earn Boost Dollars for premium positions. Each qualifying referral pushes you up the pack — a few can put you at the front.",
              },
              {
                title: "Boost via Boost Bids",
                body: "Jump to the top by placing Boost Bids in monthly increments to secure your spot at the front of the list and get noticed by more buyers.",
              },
            ].map((b, i) => (
              <Reveal
                key={b.title}
                delay={i * 80}
                className="rounded-xl border border-cream/15 bg-navy-700/30 p-8"
              >
                <h3 className="font-display text-2xl text-cream">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-cream/70">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="From our members"
            title="Professionals are already winning"
          />
          <div className="mt-14">
            <Testimonials items={testimonials} tone="dark" />
          </div>
        </Container>
      </Section>

      <ApplyCTA />
      <NewsletterSection />
      <ContactSection />
    </>
  );
}
