import type { IconName } from "@/lib/content";
import {
  IconSwipe,
  IconShieldCheck,
  IconUser,
  IconNetwork,
  IconRocket,
  IconDiamond,
  IconLeaf,
  IconDocument,
  IconCalendar,
  IconChat,
  IconStar,
  IconGlobe,
  IconLock,
  IconBriefcase,
  IconSearch,
  IconBadge,
} from "./icons";
import { cn } from "@/lib/cn";

const map: Record<IconName, React.ComponentType<{ className?: string }>> = {
  swipe: IconSwipe,
  shield: IconShieldCheck,
  user: IconUser,
  network: IconNetwork,
  rocket: IconRocket,
  diamond: IconDiamond,
  leaf: IconLeaf,
  document: IconDocument,
  calendar: IconCalendar,
  chat: IconChat,
  star: IconStar,
  globe: IconGlobe,
  lock: IconLock,
  briefcase: IconBriefcase,
  search: IconSearch,
  badge: IconBadge,
};

export function IconFor({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Cmp = map[name];
  return <Cmp className={className} />;
}

/** Circular thin-outline icon holder used throughout the reference art. */
export function IconCircle({
  name,
  tone = "gold",
  className,
}: {
  name: IconName;
  tone?: "gold" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid h-14 w-14 place-items-center rounded-full border",
        tone === "gold" ? "border-gold/40 text-gold" : "border-cream/40 text-gold-light",
        className,
      )}
    >
      <IconFor name={name} className="h-6 w-6" />
    </span>
  );
}
