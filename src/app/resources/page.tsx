import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { ApplyCTA, NewsletterSection } from "@/components/marketing-sections";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, insights and answers for property professionals — certification, profile-building, compliance, growth and market trends.",
};

const resources: { category: string; title: string; excerpt: string }[] = [
  {
    category: "Certification",
    title: "The Buyers Agent Certification Guide",
    excerpt:
      "What certification involves, why it matters, and how to earn your badge step by step.",
  },
  {
    category: "Profiles",
    title: "How to build a magnetic agent profile",
    excerpt:
      "From your intro video to showcase properties — the elements that turn browsers into appointments.",
  },
  {
    category: "Compliance",
    title: "KYC & AML for property professionals, explained",
    excerpt:
      "A plain-English guide to identity verification and staying compliant across borders.",
  },
  {
    category: "Growth",
    title: "Using referrals & boosts to climb the list",
    excerpt:
      "How Boost Dollars and Boost Bids work, and how top agents rise to the front.",
  },
  {
    category: "Market",
    title: "Global buyer trends to watch",
    excerpt:
      "Where discerning buyers are looking now — and what it means for your market focus.",
  },
  {
    category: "Playbook",
    title: "Running a transaction end-to-end",
    excerpt:
      "Agreements, tours, documents and chat — managing the whole deal inside the app.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Guides, insights &amp; <em className="text-gold">answers.</em>
          </>
        }
        description="Everything you need to get the most from Private Agent — for professionals who take their craft seriously."
      />

      {/* Resource cards */}
      <Section tone="cream">
        <Container>
          <SectionHeader eyebrow="Library" title="Learn &amp; grow" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 60}
                className="group flex flex-col rounded-lg border border-line bg-ivory p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                    {r.category}
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-faint">
                    Coming soon
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug text-navy">
                  {r.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                  {r.excerpt}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Full FAQ */}
      <Section tone="sand" id="faq">
        <Container>
          <SectionHeader
            eyebrow="Frequently asked questions"
            title="Answers for property professionals"
          />
          <div className="mt-14">
            <FAQ items={faqs} />
          </div>
        </Container>
      </Section>

      <ApplyCTA />
      <NewsletterSection />
    </>
  );
}
