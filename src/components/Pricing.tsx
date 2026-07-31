import type { Plan } from "@/lib/content";
import { IconCheck } from "./icons";
import { IconFor } from "./IconFor";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

function PlanCard({ plan }: { plan: Plan }) {
  const featured = plan.featured;
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border p-8",
        featured
          ? "bg-navy border-navy text-cream shadow-[0_30px_80px_-30px_rgba(20,32,58,0.7)] lg:-my-4 lg:pb-12 lg:pt-12"
          : "bg-ivory border-line text-charcoal",
      )}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white">
          Most Popular
        </span>
      )}

      <span
        className={cn(
          "grid h-14 w-14 place-items-center rounded-full border",
          featured ? "border-gold/60 text-gold-light" : "border-gold/40 text-gold",
        )}
      >
        <IconFor name={plan.icon} className="h-6 w-6" />
      </span>

      <h3
        className={cn(
          "mt-6 text-[0.82rem] font-semibold uppercase tracking-[0.16em]",
          featured ? "text-cream" : "text-navy",
        )}
      >
        {plan.name}
      </h3>
      <p
        className={cn(
          "mt-3 min-h-[2.5rem] text-sm leading-relaxed",
          featured ? "text-cream/70" : "text-muted",
        )}
      >
        {plan.tagline}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-5xl">{plan.price}</span>
        {plan.cadence && (
          <span className={cn("text-sm", featured ? "text-cream/60" : "text-muted")}>
            {plan.cadence}
          </span>
        )}
      </div>

      <div
        className={cn(
          "my-6 h-px w-full",
          featured ? "bg-cream/15" : "bg-line",
        )}
      />

      {plan.inheritsFrom && (
        <p className="mb-4 text-[0.8rem] font-semibold text-gold">
          Everything in {plan.inheritsFrom}, plus
        </p>
      )}

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3 text-[0.9rem] leading-snug">
            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span className={featured ? "text-cream/85" : "text-charcoal/85"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="/apply"
        variant={featured ? "onDark" : "outlineGold"}
        className="mt-8 w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
}

export function PricingCards({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-4">
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 80} className="flex">
          <div className="w-full">
            <PlanCard plan={plan} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
