import { Reveal } from "./Reveal";
import { Photo } from "./Media";
import { FramedPhone } from "./FramedPhone";
import { cn } from "@/lib/cn";

export type WallShot = { src: string; alt: string };

/**
 * Hero product showcase: a restrained property photo banner, with a row of
 * real app screens — each in an actual iPhone bezel — sitting above it.
 * Mobile-first: a natural horizontal scroll strip at narrow widths, which
 * simply becomes a centred, non-scrolling row once the viewport is wide
 * enough to fit every phone — same markup, just reflowing.
 */
export function PhoneWall({
  shots,
  backdropSrc,
  backdropAlt,
  className,
}: {
  shots: WallShot[];
  backdropSrc: string;
  backdropAlt: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-2 sm:gap-6 lg:justify-center lg:gap-7 lg:overflow-visible lg:px-0">
        {shots.map((shot, i) => (
          <Reveal
            key={shot.src}
            delay={i * 110}
            className="w-[30vw] max-w-[150px] shrink-0 snap-center sm:w-[22vw] sm:max-w-[160px] lg:w-[170px]"
          >
            <FramedPhone
              src={shot.src}
              alt={shot.alt}
              priority={i === 0}
              sizes="170px"
              className="w-full"
            />
          </Reveal>
        ))}
      </div>

      <Photo
        src={backdropSrc}
        alt={backdropAlt}
        aspect="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
        className="mt-10 w-full sm:mt-12"
        sizes="(max-width: 1024px) 100vw, 1100px"
      />
    </div>
  );
}
