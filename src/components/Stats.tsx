import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

export function Stats({
  items,
  tone = "dark",
}: {
  items: { value: string; label: string }[];
  tone?: "dark" | "light";
}) {
  const value = tone === "light" ? "text-cream" : "text-navy";
  const label = tone === "light" ? "text-cream/60" : "text-muted";
  const border = tone === "light" ? "divide-cream/15" : "divide-line";
  return (
    <div
      className={cn(
        "grid grid-cols-2 divide-y sm:grid-cols-4 sm:divide-y-0 sm:divide-x",
        border,
      )}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.label}
          delay={i * 70}
          className="px-4 py-6 text-center"
        >
          <div className={cn("font-display text-4xl sm:text-5xl", value)}>
            {item.value}
          </div>
          <div
            className={cn(
              "mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
              label,
            )}
          >
            {item.label}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
