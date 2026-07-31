import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

/** Numbered journey steps with elegant serif numerals. */
export function Steps({
  steps,
  tone = "dark",
  columns = 3,
}: {
  steps: { title: string; body: string }[];
  tone?: "dark" | "light";
  columns?: 3 | 4;
}) {
  const title = tone === "light" ? "text-cream" : "text-navy";
  const body = tone === "light" ? "text-cream/70" : "text-muted";
  const numBorder = tone === "light" ? "border-cream/30" : "border-gold/40";
  return (
    <div
      className={cn(
        "grid gap-10",
        columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 80} className="flex flex-col">
          <span
            className={cn(
              "grid h-14 w-14 place-items-center rounded-full border font-display text-xl text-gold",
              numBorder,
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={cn("mt-6 font-display text-xl", title)}>{step.title}</h3>
          <p className={cn("mt-3 text-[0.95rem] leading-relaxed", body)}>
            {step.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
