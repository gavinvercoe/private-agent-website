"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { FramedPhone, FRAME_SRC, FRAME_ASPECT, SCREEN_INSET } from "./FramedPhone";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/cn";

/** A full app screenshot, shown inside a real iPhone bezel. */
export { FramedPhone as PhoneShot };

export type Shot = { src: string; alt: string; caption?: string };

/** A row of app screenshots (each in a bezel) with optional captions. */
export function ScreenGallery({
  items,
  className,
}: {
  items: Shot[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((s, i) => (
        <Reveal key={s.src} delay={i * 70} className="flex flex-col items-center">
          <FramedPhone src={s.src} alt={s.alt} className="w-full max-w-[220px]" />
          {s.caption && (
            <p className="mt-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
              {s.caption}
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
}

/**
 * A single bezel frame that crossfades through a sequence of screenshots —
 * used to tell a short flow (e.g. "paste a URL → extract → review → share")
 * as one continuous phone rather than a static grid. The frame graphic stays
 * fixed on top; only the screenshot layer underneath it changes.
 *
 * Respects prefers-reduced-motion: cycling stops and the first frame holds.
 */
export function CyclingPhone({
  images,
  intervalMs = 3200,
  className,
  showDots = true,
}: {
  images: Shot[];
  intervalMs?: number;
  className?: string;
  showDots?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [reducedMotion, images.length, intervalMs]);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "relative w-full drop-shadow-[0_18px_36px_rgba(20,32,58,0.25)]",
          FRAME_ASPECT,
        )}
      >
        <div className="absolute overflow-hidden" style={SCREEN_INSET}>
          {images.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 55vw, 24vw"
              priority={i === 0}
              className={cn(
                "object-cover object-top transition-opacity duration-700 ease-out",
                i === index ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
        <Image
          src={FRAME_SRC}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 768px) 55vw, 24vw"
          className="pointer-events-none object-contain"
        />
      </div>
      {showDots && images.length > 1 && (
        <div className="mt-5 flex gap-1.5" aria-hidden>
          {images.map((img, i) => (
            <span
              key={img.src}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-5 bg-gold" : "w-1.5 bg-gold/25",
              )}
            />
          ))}
        </div>
      )}
      {/* Screen-reader-only description of the sequence, since visually only one frame shows at a time */}
      <span className="sr-only">
        {images.map((img) => img.alt).join(". ")}
      </span>
    </div>
  );
}

/** A small framed phone thumbnail for compact journey/stage cards. */
export function MiniPhone({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <FramedPhone
      src={src}
      alt={alt}
      sizes="120px"
      className={cn("w-full max-w-[120px]", className)}
    />
  );
}
