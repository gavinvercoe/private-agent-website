import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { TeamGrid } from "@/components/TeamGrid";
import { Stats } from "@/components/Stats";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Media";
import {
  ApplyCTA,
  NewsletterSection,
  ContactSection,
} from "@/components/marketing-sections";
import type { Feature } from "@/lib/content";
import { team, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Private Agent is on a mission to raise the standard of buyer representation — a global, certified network built on discretion, quality and trust.",
};

const values: Feature[] = [
  {
    icon: "lock",
    title: "Discretion",
    body: "We operate with the confidentiality and care expected of a private members' club.",
  },
  {
    icon: "shield",
    title: "Quality",
    body: "Every professional is vetted and every profile verified before it goes live.",
  },
  {
    icon: "globe",
    title: "Global reach",
    body: "Access to buyers and opportunities across the world's most desirable markets.",
  },
  {
    icon: "network",
    title: "Partnership",
    body: "We succeed when our agents succeed — and we build the platform around that.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Raising the standard of{" "}
            <em className="text-gold">buyer representation.</em>
          </>
        }
        description="Private Agent is a global network connecting discerning buyers with certified professionals and trusted property partners."
      />

      {/* Story */}
      <Section tone="cream">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-4">Our mission</p>
              <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
                The world&rsquo;s first bespoke buyer&rsquo;s agent network
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  Buying property in an unfamiliar market is hard. The best deals
                  are often off-market, and the right local expert can be
                  impossible to find. Private Agent changes that.
                </p>
                <p>
                  We give independent property professionals a premium, verified
                  presence — and connect them with pre-qualified buyers who value
                  discretion, expertise and exceptional service.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Photo
                src="/img/about-story.jpg"
                alt="Finding the right property and the right professional"
                aspect="aspect-[5/4]"
                className="w-full"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="sand">
        <Container>
          <SectionHeader eyebrow="What we stand for" title="Our values" />
          <FeatureGrid items={values} columns={4} className="mt-16" />
        </Container>
      </Section>

      {/* Stats */}
      <Section tone="navy" size="tight">
        <Container>
          <Stats items={stats} tone="light" />
        </Container>
      </Section>

      {/* Team */}
      <Section tone="cream">
        <Container>
          <SectionHeader
            eyebrow="The people behind the platform"
            title="A dedicated team"
            description="Property and technology professionals committed to an exceptional experience for every agent and buyer."
          />
          <div className="mt-16">
            <TeamGrid members={team} columns={4} />
          </div>
        </Container>
      </Section>

      {/* Brand Atlas / sister company */}
      <Section tone="ink" size="tight">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-4">In partnership</p>
              <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl">
                First access to Brand Atlas developments
              </h2>
              <p className="mt-5 leading-relaxed text-cream/70">
                Through our sister company, members gain exclusive first-viewing
                access to a curated world of off-plan and off-market branded
                residences — positioning you as a premium agent with
                opportunities others can&rsquo;t offer.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Photo
                src="/img/brand-atlas.jpg"
                alt="Brand Atlas — a world of branded residences"
                aspect="aspect-[16/10]"
                className="w-full"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <ApplyCTA />
      <NewsletterSection />
      <ContactSection />
    </>
  );
}
