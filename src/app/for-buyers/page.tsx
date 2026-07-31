import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Steps } from "@/components/Steps";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ScreenGallery } from "@/components/PhoneShot";
import { ApplyCTA, NewsletterSection } from "@/components/marketing-sections";
import { buyerJourney, buyerReassurance } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Buyers",
  description:
    "How buyers use Private Agent to find and appoint a certified buyer's agent — and why that means better, pre-qualified clients for you.",
};

export default function ForBuyersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Buyers"
        title={
          <>
            The buyers you&rsquo;ll meet are{" "}
            <em className="text-gold">ready to move.</em>
          </>
        }
        description="Buyers come to Private Agent to find a trusted professional and secure their ideal property. By the time they reach you, the groundwork is already done."
        primary={{ label: "Apply as an Agent", href: "/apply" }}
        secondary={{ label: "How It Works", href: "/how-it-works" }}
      />

      {/* Buyer journey */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="The buyer journey"
            title="Three steps before they meet you"
            description="Every buyer completes a guided journey that qualifies them long before an introduction is made."
          />
          <div className="mt-16">
            <Steps steps={buyerJourney} columns={3} />
          </div>
          <ScreenGallery
            className="mt-20"
            items={[
              { src: "/screens/agent-discovery/09-agent-discovery-swipe.png", alt: "Buyer discovers agents", caption: "Discover" },
              { src: "/screens/agent-discovery/03-agent-match.png", alt: "Buyer matches with an agent", caption: "Match" },
              { src: "/screens/appointment-and-deal-flow/01-appoint-agent.png", alt: "Buyer appoints their agent", caption: "Appoint" },
              { src: "/screens/property-import-and-sharing/05-my-showcase.png", alt: "Curated property showcase", caption: "Shortlist" },
            ]}
          />
        </Container>
      </Section>

      {/* Why it matters for agents */}
      <Section tone="sand">
        <Container>
          <SectionHeader
            eyebrow="Why it matters for you"
            title="Better buyers make better business"
          />
          <FeatureGrid items={buyerReassurance} columns={3} className="mt-16" />
        </Container>
      </Section>

      {/* Callout */}
      <Section tone="navy" size="tight">
        <Container size="narrow">
          <Reveal className="text-center">
            <p className="eyebrow mb-4">The bottom line</p>
            <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl">
              You spend your time on real, credible clients &mdash; not
              tyre-kickers.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-cream/70">
              Optional buyer KYC, defined briefs and verified identities mean
              every introduction is worth your attention.
            </p>
            <div className="mt-9">
              <Button href="/apply" variant="onDark" size="lg">
                Apply for Membership
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <ApplyCTA />
      <NewsletterSection />
    </>
  );
}
