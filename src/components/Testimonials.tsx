"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/content";
import { IconQuote, IconArrowRight } from "./icons";
import { cn } from "@/lib/cn";

export function Testimonials({
  items,
  tone = "dark",
}: {
  items: Testimonial[];
  tone?: "dark" | "light";
}) {
  const [i, setI] = useState(0);
  const t = items[i];
  const go = (d: number) => setI((prev) => (prev + d + items.length) % items.length);

  const card = tone === "light" ? "bg-navy-700/40 border-cream/15" : "bg-ivory border-line";
  const quote = tone === "light" ? "text-cream" : "text-charcoal";
  const meta = tone === "light" ? "text-cream/60" : "text-muted";
  const ctrl =
    tone === "light"
      ? "border-cream/25 text-cream/80 hover:border-gold hover:text-gold"
      : "border-line text-navy hover:border-gold hover:text-gold";

  return (
    <div className="mx-auto max-w-3xl">
      <div className={cn("rounded-xl border p-10 text-center sm:p-14", card)}>
        <IconQuote className="mx-auto h-9 w-9 text-gold" />
        <blockquote
          className={cn(
            "mt-6 font-display text-2xl leading-snug sm:text-[1.7rem]",
            quote,
          )}
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className={cn("mt-8 text-sm", meta)}>
          <span className="font-semibold text-gold">{t.name}</span>
          <span className="mx-2">&middot;</span>
          {t.role}, {t.location}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className={cn("grid h-11 w-11 place-items-center rounded-full border transition-colors", ctrl)}
        >
          <IconArrowRight className="h-5 w-5 rotate-180" />
        </button>
        <div className="flex gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                idx === i ? "w-6 bg-gold" : "w-1.5 bg-gold/30 hover:bg-gold/60",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className={cn("grid h-11 w-11 place-items-center rounded-full border transition-colors", ctrl)}
        >
          <IconArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
