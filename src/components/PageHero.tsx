import { Container } from "./Container";
import { Divider } from "./SectionHeader";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

/** Compact centered hero for interior pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-cream pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-60"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(176,137,79,0.14), transparent 70%)",
        }}
      />
      <Container className="relative text-center">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="mx-auto max-w-4xl font-display text-4xl leading-[1.1] text-navy sm:text-6xl">
            {title}
          </h1>
          <Divider className="mt-7" />
          {description && (
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              {description}
            </p>
          )}
          {(primary || secondary) && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primary && (
                <Button href={primary.href} variant="primary" size="lg">
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button href={secondary.href} variant="outline" size="lg">
                  {secondary.label}
                </Button>
              )}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
