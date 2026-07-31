import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Typographic recreation of the Private Agent wordmark:
 * a thin "PA" monogram emblem + "PRIVATE AGENT" serif lockup
 * with the "PRIVATE PROPERTY CONCIERGE" descriptor.
 * (Swap for a supplied logo SVG when available.)
 */
export function Wordmark({
  tone = "dark",
  showTagline = true,
  className,
  href = "/",
}: {
  tone?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
  href?: string | null;
}) {
  const text = tone === "light" ? "text-cream" : "text-navy";
  const border = tone === "light" ? "border-cream/40" : "border-navy/30";

  const inner = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid h-10 w-10 place-items-center rounded-full border",
          border,
        )}
        aria-hidden
      >
        <span className={cn("font-display text-[0.95rem] leading-none", text)}>
          PA
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.15rem] tracking-[0.16em] leading-none",
            text,
          )}
        >
          PRIVATE AGENT
        </span>
        {showTagline && (
          <span className="mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Private Property Concierge
          </span>
        )}
      </span>
    </span>
  );

  if (href === null) return inner;

  return (
    <Link href={href} aria-label="Private Agent — home" className="inline-flex">
      {inner}
    </Link>
  );
}
