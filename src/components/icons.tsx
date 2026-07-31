import type { SVGProps } from "react";

/**
 * Line-style icon set (24×24, currentColor stroke) matching the
 * refined, editorial feel of the reference designs.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconSwipe(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="7" y="4" width="12" height="16" rx="2" transform="rotate(6 13 12)" />
      <rect x="4" y="5" width="11" height="15" rx="2" fill="var(--color-cream)" />
      <circle cx="9.5" cy="10" r="2" />
      <path d="M6 17c.8-1.6 2-2.4 3.5-2.4S12.2 15.4 13 17" />
    </svg>
  );
}

export function IconShieldCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function IconUser(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.7-3.4 3.3-5.2 6.5-5.2s5.8 1.8 6.5 5.2" />
    </svg>
  );
}

export function IconNetwork(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M10.5 6.6 6.4 16M13.5 6.6 17.6 16M7 18h10" />
    </svg>
  );
}

export function IconRocket(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 15c-1 2-1 4-1 4s2 0 4-1M14.5 5.5C17 3 20 3 20 3s0 3-2.5 5.5L12 14l-3-3 5.5-5.5z" />
      <path d="M9 11l-3 .5L4 14M13 15l-.5 3L10 20" />
      <circle cx="15" cy="8" r="1" />
    </svg>
  );
}

export function IconDiamond(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 4h12l3 5-9 11L3 9l3-5z" />
      <path d="M3 9h18M9 4l-3 5 6 11 6-11-3-5" />
    </svg>
  );
}

export function IconLeaf(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 4S9 3 6 9c-2.5 5 1 9 1 9s4-1 7-4c2.5-2.5 6-10 6-10z" />
      <path d="M7 18C9 13 13 9 18 6" />
    </svg>
  );
}

export function IconDocument(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 3h7l4 4v14H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </svg>
  );
}

export function IconCalendar(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
      <circle cx="12" cy="14" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconChat(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}

export function IconStar(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5l2.5 5.2 5.5.7-4 3.9 1 5.6-5-2.8-5 2.8 1-5.6-4-3.9 5.5-.7L12 3.5z" />
    </svg>
  );
}

export function IconStarFilled(p: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M12 3.5l2.5 5.2 5.5.7-4 3.9 1 5.6-5-2.8-5 2.8 1-5.6-4-3.9 5.5-.7L12 3.5z" />
    </svg>
  );
}

export function IconGlobe(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" />
    </svg>
  );
}

export function IconLock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" />
    </svg>
  );
}

export function IconBriefcase(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="7" width="17" height="12" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12h17" />
    </svg>
  );
}

export function IconSearch(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4" />
    </svg>
  );
}

export function IconBadge(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l2.2 1.4 2.6-.2 1 2.4 2.1 1.6-.7 2.5.7 2.5-2.1 1.6-1 2.4-2.6-.2L12 21l-2.2-1.4-2.6.2-1-2.4L4.1 16l.7-2.5L4.1 11l2.1-1.6 1-2.4 2.6.2L12 3z" />
      <path d="M9.5 12l2 2 3.5-3.5" />
    </svg>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconChevronDown(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconPlay(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 3z" />
    </svg>
  );
}

export function IconMapPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconMenu(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconQuote(p: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M9 6c-3 1-5 3.5-5 7v5h6v-6H7c0-2 .8-3.5 2.8-4.3L9 6zm10 0c-3 1-5 3.5-5 7v5h6v-6h-3c0-2 .8-3.5 2.8-4.3L19 6z" />
    </svg>
  );
}

/* Brand / social */
export function IconInstagram(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLinkedin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 10.5V17M8 7.6v.01M12 17v-3.4c0-1.4.9-2.1 1.9-2.1s1.9.7 1.9 2.3V17" />
    </svg>
  );
}

export function IconFacebook(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M14 8h2V5h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V8.5c0-.3.2-.5.5-.5H14z" />
    </svg>
  );
}

export function IconYoutube(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10.5 9.5l4.5 2.5-4.5 2.5v-5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
