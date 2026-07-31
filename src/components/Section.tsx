import { cn } from "@/lib/cn";

type Tone = "cream" | "sand" | "ivory" | "ink" | "navy";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-charcoal",
  sand: "bg-sand text-charcoal",
  ivory: "bg-ivory text-charcoal",
  ink: "bg-ink text-cream",
  navy: "bg-navy text-cream",
};

export function Section({
  id,
  tone = "cream",
  className,
  children,
  size = "default",
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  size?: "default" | "tight" | "loose";
}) {
  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        size === "tight" && "py-14 sm:py-16",
        size === "default" && "py-20 sm:py-28",
        size === "loose" && "py-24 sm:py-36",
        // offset for the fixed header when jumping to an anchor
        id && "scroll-mt-24",
        className,
      )}
    >
      {children}
    </section>
  );
}
