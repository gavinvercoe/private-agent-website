import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant =
  | "primary" // gold filled
  | "dark" // ink filled
  | "outline" // charcoal outline on light
  | "outlineGold" // gold outline
  | "onDark"; // gold filled, for dark backgrounds

type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-white hover:bg-gold-light border border-gold hover:border-gold-light",
  dark: "bg-ink text-cream hover:bg-navy border border-ink hover:border-navy",
  outline:
    "bg-transparent text-charcoal border border-charcoal/25 hover:border-charcoal/60 hover:bg-charcoal/[0.03]",
  outlineGold:
    "bg-transparent text-gold border border-gold/50 hover:border-gold hover:bg-gold/[0.06]",
  onDark: "bg-gold text-white hover:bg-gold-light border border-gold hover:border-gold-light",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.7rem]",
  md: "px-6 py-3 text-[0.72rem]",
  lg: "px-8 py-4 text-[0.78rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  type,
  ...rest
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm label-caps",
    "transition-colors duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...rest}>
      {children}
    </button>
  );
}
