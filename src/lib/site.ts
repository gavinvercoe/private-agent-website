export const site = {
  name: "Private Agent",
  tagline: "The Global Buyers Agent Network",
  email: "concierge@privateagent.example",
  phone: "+64 21 123 4567",
};

export const navLinks: { label: string; href: string }[] = [
  { label: "For Agents", href: "/for-agents" },
  { label: "For Buyers", href: "/for-buyers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

export const footerColumns: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Platform",
    links: [
      { label: "For Agents", href: "/for-agents" },
      { label: "For Buyers", href: "/for-buyers" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "Apply", href: "/apply" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/resources#faq" },
      { label: "Certification", href: "/for-agents#certification" },
      { label: "Concierge Onboarding", href: "/#contact" },
      { label: "Privacy", href: "/resources" },
    ],
  },
];

export const socials: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
];
