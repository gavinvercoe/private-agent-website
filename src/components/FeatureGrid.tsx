import type { Feature } from "@/lib/content";
import { IconFor, IconCircle } from "./IconFor";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

/** Card style — bordered card with a circular icon, title, body. */
export function FeatureGrid({
  items,
  columns = 3,
  className,
}: {
  items: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 70}
          className="group flex flex-col rounded-lg border border-line bg-ivory p-8 transition-shadow duration-300 hover:shadow-[0_18px_50px_-24px_rgba(20,32,58,0.35)]"
        >
          <IconCircle name={item.icon} className="mb-6" />
          <h3 className="font-display text-xl text-navy">{item.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
            {item.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

/** Inline style — icon beside text, no card. Good on dark bands. */
export function FeatureList({
  items,
  tone = "dark",
  columns = 3,
  className,
}: {
  items: Feature[];
  tone?: "dark" | "light";
  columns?: 1 | 2 | 3;
  className?: string;
}) {
  const title = tone === "light" ? "text-cream" : "text-navy";
  const body = tone === "light" ? "text-cream/70" : "text-muted";
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-10 gap-y-10",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-3",
        className,
      )}
    >
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 70} className="flex gap-4">
          <span
            className={cn(
              "mt-1 shrink-0",
              tone === "light" ? "text-gold-light" : "text-gold",
            )}
          >
            <IconFor name={item.icon} className="h-6 w-6" />
          </span>
          <div>
            <h3 className={cn("font-display text-lg", title)}>{item.title}</h3>
            <p className={cn("mt-2 text-[0.92rem] leading-relaxed", body)}>
              {item.body}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
