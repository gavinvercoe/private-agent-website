import { cn } from "@/lib/cn";

export function Divider({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "light";
}) {
  const line = tone === "light" ? "bg-cream/30" : "bg-gold/40";
  const diamond = tone === "light" ? "bg-cream/70" : "bg-gold";
  return (
    <span
      className={cn("flex items-center justify-center gap-3", className)}
      aria-hidden
    >
      <span className={cn("h-px w-10", line)} />
      <span className={cn("h-1.5 w-1.5 rotate-45", diamond)} />
      <span className={cn("h-px w-10", line)} />
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  divider = true,
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  divider?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  const titleColor = tone === "light" ? "text-cream" : "text-navy";
  const descColor = tone === "light" ? "text-cream/70" : "text-muted";
  return (
    <div
      className={cn(
        align === "center" ? "text-center items-center" : "text-left items-start",
        "flex flex-col",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2
        className={cn(
          "font-display text-balance text-[2rem] leading-[1.12] sm:text-[2.6rem]",
          titleColor,
          titleClassName,
        )}
      >
        {title}
      </h2>
      {divider && (
        <Divider
          tone={tone === "light" ? "light" : "gold"}
          className={cn("mt-6", align === "left" && "justify-start")}
        />
      )}
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-[1.02rem] leading-relaxed",
            descColor,
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
