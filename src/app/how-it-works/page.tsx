import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { FeatureList } from "@/components/FeatureGrid";
import { PhoneShot } from "@/components/PhoneShot";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { ApplyCTA, NewsletterSection } from "@/components/marketing-sections";
import { appFlow, trustPoints } from "@/lib/content";

const flowScreens = [
  "/screens/agent-discovery/05-professional-profile.png",
  "/screens/appointment-and-deal-flow/04-identity-verification.png",
  "/screens/agent-discovery/09-agent-discovery-swipe.png",
  "/screens/agent-discovery/03-agent-match.png",
  "/screens/property-import-and-sharing/05-my-showcase.png",
  "/screens/appointment-and-deal-flow/01-appoint-agent.png",
  "/screens/appointment-and-deal-flow/09-deal-status-tracker.png",
];

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From building your profile to closing the deal — how Private Agent connects certified agents with qualified buyers and manages the whole transaction.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title={
          <>
            From profile to{" "}
            <em className="text-gold">closed deal.</em>
          </>
        }
        description="A guided, premium experience for independent property professionals — build your presence, get discovered, and manage every client in one place."
        primary={{ label: "Apply for Membership", href: "/apply" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      {/* Alternating step rows, each paired with an app screen */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="The journey"
            title="Seven steps to your next client"
            align="center"
          />
          <div className="mt-20 flex flex-col gap-20 sm:gap-24">
            {appFlow.map((step, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal
                  key={step.title}
                  className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Text */}
                  <div className={cn(flip && "lg:order-2")}>
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 font-display text-lg text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-6 font-display text-2xl text-navy sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                  {/* Screen */}
                  <div
                    className={cn(
                      "flex justify-center",
                      flip && "lg:order-1",
                    )}
                  >
                    <PhoneShot
                      src={flowScreens[i]}
                      alt={`Private Agent app — ${step.title}`}
                      className="w-full max-w-[280px]"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Trust reinforcement */}
      <Section tone="ink">
        <Container>
          <SectionHeader
            tone="light"
            eyebrow="Confidence, built in"
            title="Secure, verified and professional at every step"
          />
          <FeatureList items={trustPoints} tone="light" columns={3} className="mt-16" />
        </Container>
      </Section>

      <ApplyCTA
        title="Ready to build your profile?"
        body="Applications are reviewed on a rolling basis. It takes minutes to start."
      />
      <NewsletterSection />
    </>
  );
}
