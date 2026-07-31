import Image from "next/image";
import { cn } from "@/lib/cn";

/** Full-bleed photograph in a rounded frame (object-cover). */
export function Photo({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl", aspect, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

/** App screenshot presented as a framed UI card. */
export function AppScreen({
  src,
  alt,
  aspect = "aspect-[3/4]",
  className,
  sizes = "(max-width: 1024px) 100vw, 45vw",
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_-30px_rgba(20,32,58,0.45)]",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}
