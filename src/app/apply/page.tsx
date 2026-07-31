import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Divider } from "@/components/SectionHeader";
import { ApplyForm } from "@/components/ApplyForm";
import { Reveal } from "@/components/Reveal";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Apply for Membership",
  description:
    "Apply to join Private Agent as a certified buyer's agent and lock in Founding Member pricing. No payment required to apply.",
};

const nextSteps = [
  {
    title: "Submit your application",
    body: "Tell us about you and the market you serve — it takes just a few minutes.",
  },
  {
    title: "Concierge review",
    body: "We review your details and reach out to guide you through the next steps.",
  },
  {
    title: "Build your profile",
    body: "Create your bespoke public profile, upload your license and complete KYC.",
  },
  {
    title: "Get matched",
    body: "Go live and start receiving appointment requests from qualified buyers.",
  },
];

export default function ApplyPage() {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-24 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-60"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(176,137,79,0.14), transparent 70%)",
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">Apply</p>
            <h1 className="font-display text-4xl leading-[1.1] text-navy sm:text-5xl">
              Become a <em className="text-gold">Founding Member.</em>
            </h1>
            <Divider className="mt-6" />
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Join a global network of certified buyer&rsquo;s agents. Applications
              are reviewed on a rolling basis — secure your Founder pricing before
              public launch.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* What happens next */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-2xl text-navy">What happens next</h2>
            <ol className="mt-8 space-y-8">
              {nextSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 font-display text-base text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-lg border border-line bg-ivory p-6">
              <ul className="space-y-3 text-sm text-charcoal/85">
                {[
                  "Founding Member pricing locked in for life",
                  "No payment required to apply",
                  "Reviewed on a rolling basis",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <ApplyForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
