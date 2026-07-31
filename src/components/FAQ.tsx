"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content";
import { IconChevronDown } from "./icons";
import { cn } from "@/lib/cn";

export function FAQ({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span
                className={cn(
                  "font-display text-lg transition-colors sm:text-xl",
                  isOpen ? "text-gold" : "text-navy",
                )}
              >
                {item.q}
              </span>
              <IconChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-[0.95rem] leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
