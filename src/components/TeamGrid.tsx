import Image from "next/image";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function TeamGrid({
  members,
  columns = 4,
}: {
  members: { name: string; role: string; bio: string; image?: string }[];
  columns?: 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 4
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : "sm:grid-cols-3",
      )}
    >
      {members.map((m, i) => (
        <Reveal
          key={m.name}
          delay={i * 70}
          className="flex flex-col items-center rounded-lg border border-line bg-ivory p-8 text-center"
        >
          {m.image ? (
            <span className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-line">
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </span>
          ) : (
            <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-navy to-navy-700 font-display text-2xl text-cream">
              {initials(m.name)}
            </span>
          )}
          <h3 className="mt-5 font-display text-lg text-navy">{m.name}</h3>
          <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold">
            {m.role}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
        </Reveal>
      ))}
    </div>
  );
}
