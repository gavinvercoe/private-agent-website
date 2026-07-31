import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { PricingCards } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { IconFor } from "@/components/IconFor";
import { IconBadge } from "@/components/icons";
import { ApplyCTA, NewsletterSection } from "@/components/marketing-sections";
import { plans, includedEverywhere, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Private Agent membership plans — Founder, Certified, Elite and Visibility Boosts. Lock in Founding Member pricing.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Private Agent Membership"
        description="Join a global network of certified property professionals serving high-net-worth buyers. Choose the plan that fits where you are today — and grow from there."
      />

      {/* Pricing cards */}
      <Section tone="cream" size="tight">
        <Container size="wide">
          <PricingCards plans={plans} />
          <p className="mt-10 text-center text-sm text-muted">
            All plans are billed monthly. Founder pricing is locked in for the
            life of your plan.
          </p>
        </Container>
      </Section>

      {/* Included with every membership */}
      <Section tone="sand">
        <Container>
          <SectionHeader
            eyebrow="Included with every membership"
            title="The complete platform, from day one"
            description="Everything you need to connect, manage and deliver an exceptional service — included in every plan."
          />
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {includedEverywhere.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 50}
                className="flex flex-col items-center text-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold">
                  <IconFor name={item.icon} className="h-5 w-5" />
                </span>
                <span className="mt-4 text-sm font-medium text-navy">
                  {item.label}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certification CTA */}
      <Section tone="cream" size="tight">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-xl border border-line bg-ivory p-10 text-center sm:flex-row sm:text-left">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
              <IconBadge className="h-8 w-8" />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-2xl text-navy">
                Stand out. Get Certified.
              </h3>
              <p className="mt-2 text-muted">
                Complete our certification process to earn the Buyers Agent
                Certified badge and unlock greater trust, visibility and
                opportunities.
              </p>
            </div>
            <Button href="/for-agents#certification" variant="outlineGold" size="lg">
              Learn About Certification
            </Button>
          </div>
        </Container>
      </Section>

      {/* Pricing FAQ */}
      <Section tone="sand">
        <Container>
          <SectionHeader
            eyebrow="Questions"
            title="Membership, billing &amp; certification"
          />
          <div className="mt-14">
            <FAQ items={faqs.slice(2, 8)} />
          </div>
        </Container>
      </Section>

      <ApplyCTA />
      <NewsletterSection />
    </>
  );
}
