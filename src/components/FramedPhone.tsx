import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Real iPhone 17 Pro bezel PNG (transparent screen cutout). The screenshot
 * layer sits underneath, inset to exactly match the cutout, so the frame's
 * opaque rounded corners and body naturally mask any imperfect screenshot
 * edges — no crop artefacts are ever visible.
 *
 * Measured precisely from the source asset (1350×2760 canvas): the screen
 * cutout is a symmetric inset of 5.333% left/right and 2.5% top/bottom.
 */
export const FRAME_SRC = "/bezels/iphone-17-pro-silver-portrait.png";
export const FRAME_ASPECT = "aspect-[1350/2760]";
/** Exact aspect ratio of the visible screen cutout (width / height). */
export const FRAME_SCREEN_RATIO = 1206 / 2622;
export const SCREEN_INSET = {
  top: "2.5%",
  bottom: "2.5%",
  left: "5.333%",
  right: "5.333%",
};

export function FramedPhone({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 40vw, 200px",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative drop-shadow-[0_18px_36px_rgba(20,32,58,0.25)]",
        FRAME_ASPECT,
        className,
      )}
    >
      <div className="absolute overflow-hidden" style={SCREEN_INSET}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
      <Image
        src={FRAME_SRC}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        priority={priority}
        className="pointer-events-none object-contain"
      />
    </div>
  );
}
