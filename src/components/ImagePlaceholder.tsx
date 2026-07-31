import { cn } from "@/lib/cn";

/**
 * Elegant placeholder standing in for finished photography.
 * Swap these for real <Image> assets when brand photos are supplied.
 */
export function ImagePlaceholder({
  className,
  label = "Photography",
  variant = "cream",
  rounded = "rounded-xl",
}: {
  className?: string;
  label?: string;
  variant?: "cream" | "navy" | "sand";
  rounded?: string;
}) {
  const bg =
    variant === "navy"
      ? "from-navy via-navy-700 to-ink text-cream/70"
      : variant === "sand"
        ? "from-sand via-ivory to-cream text-navy/50"
        : "from-[#efe7d8] via-[#f4eee2] to-[#e7dcc8] text-navy/45";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        bg,
        rounded,
        className,
      )}
      role="img"
      aria-label={`${label} placeholder`}
    >
      {/* subtle horizon / architecture motif */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.5]"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 235 L70 235 L70 150 L150 150 L150 200 L240 200 L240 120 L330 120 L330 235 L400 235"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.55"
        />
        <path d="M0 265 H400" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="320" cy="70" r="20" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      </svg>
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] opacity-80">
          {label}
        </span>
      </div>
    </div>
  );
}
