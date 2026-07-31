/**
 * Marketing content for the Private Agent recruitment site.
 * Copy is adapted from the broker sales deck + app sitemaps, written to
 * convince buyer's agents to join. Names, testimonials and metrics are
 * illustrative placeholders to be finalised.
 */

export type IconName =
  | "swipe"
  | "shield"
  | "user"
  | "network"
  | "rocket"
  | "diamond"
  | "leaf"
  | "document"
  | "calendar"
  | "chat"
  | "star"
  | "globe"
  | "lock"
  | "briefcase"
  | "search"
  | "badge";

export type Feature = {
  icon: IconName;
  title: string;
  body: string;
};

/* --- Home: core platform highlights ------------------------------- */
export const platformHighlights: Feature[] = [
  {
    icon: "swipe",
    title: "Swipe-card discovery",
    body: "Buyers browse and swipe through agent profiles in their target market — your presence works for you around the clock.",
  },
  {
    icon: "user",
    title: "Private client matching",
    body: "Get matched with buyers who have already qualified their budget, location, languages and property type.",
  },
  {
    icon: "shield",
    title: "Certified & verified",
    body: "License verification and EU-standard KYC build trust with high-net-worth buyers before the first conversation.",
  },
  {
    icon: "briefcase",
    title: "One workspace",
    body: "Profiles, agreements, tours, documents and messaging — everything a deal needs, in a single place.",
  },
];

/* --- Home / For Agents: the three core privileges of joining ------ */
export const coreBenefits: Feature[] = [
  {
    icon: "diamond",
    title: "A premium public profile",
    body: "Showcase your style, expertise, video introduction and past sales with a bespoke profile that sets you apart.",
  },
  {
    icon: "search",
    title: "Be discovered by qualified clients",
    body: "Appear in buyer searches and discovery feeds, matched to your markets, languages and price points.",
  },
  {
    icon: "briefcase",
    title: "Manage every relationship in one place",
    body: "Client dashboards, shortlists, tours, documents and chat keep every transaction organised end to end.",
  },
];

/* --- For Agents: the full value story ----------------------------- */
export const agentValue: Feature[] = [
  {
    icon: "search",
    title: "Win more clients",
    body: "Stop chasing cold leads. Get introduced to pre-qualified buyers who already fit your market focus and price range.",
  },
  {
    icon: "star",
    title: "Stand out and get rated",
    body: "Build a bespoke swipe profile with an intro video, showcase properties and client ratings that build your reputation.",
  },
  {
    icon: "badge",
    title: "Become certified",
    body: "Earn the Certified Private Agent badge through verification and KYC — plus a directory listing and logo usage.",
  },
  {
    icon: "network",
    title: "Grow your network",
    body: "Build a trusted network of partners and suppliers, recommend them to clients, and track your referrals.",
  },
  {
    icon: "rocket",
    title: "Boost your visibility",
    body: "Climb the list through client ratings, referral Boost Dollars, or Boost Bids that put you at the front.",
  },
  {
    icon: "document",
    title: "Run the whole deal",
    body: "In-app agreements and digital signing, tour scheduling, secure chat, and under-contract tracking — start to finish.",
  },
];

/* --- Trust band items --------------------------------------------- */
export const trustPoints: Feature[] = [
  {
    icon: "shield",
    title: "Professionally vetted",
    body: "Every agent provides a real estate license and proof of registration. We verify credentials before certification.",
  },
  {
    icon: "lock",
    title: "Secure & private",
    body: "Enterprise-grade security, GDPR & eIDAS compliant and EU-hosted, so client data is protected at every step.",
  },
  {
    icon: "globe",
    title: "Global standards",
    body: "EU-standard KYC through a network connected to 10,000+ data sources keeps the platform trusted worldwide.",
  },
];

/* --- How to join: the 3-step journey ------------------------------ */
export const joinSteps: { title: string; body: string }[] = [
  {
    title: "Create your profile",
    body: "Build a magnetic public profile — display name, bio, intro video, markets covered, languages and past sales.",
  },
  {
    title: "Get verified & certified",
    body: "Upload your license and complete KYC. We verify your credentials and award your Certified Private Agent badge.",
  },
  {
    title: "Get matched with buyers",
    body: "Appear in buyer discovery, receive appointment requests, and manage every client from your dashboard.",
  },
];

/* --- Longer app flow for the How It Works page -------------------- */
export const appFlow: { title: string; body: string }[] = [
  {
    title: "Build your profile",
    body: "Add your bio, photos, a 30-second intro video, the markets and property types you cover, and your languages.",
  },
  {
    title: "Verify your credentials",
    body: "Provide your real estate license and complete an EU-standard KYC check to earn your verification badge.",
  },
  {
    title: "Get discovered",
    body: "Buyers swipe through agents in their target market and send an appointment request when they find their match.",
  },
  {
    title: "Match & connect",
    body: "Accept requests from buyers who fit your focus. Chat in-app, with alerts by WhatsApp or email so nothing is missed.",
  },
  {
    title: "Build the shortlist",
    body: "Recommend properties, let clients thumbs-up or down, and import listings by URL to shape a shared prospect list.",
  },
  {
    title: "Plan tours & sign",
    body: "Schedule property tours with calendar sync, and have clients review and sign agreements directly in the app.",
  },
  {
    title: "Close & get rated",
    body: "Track deals through to close, then collect a client rating that builds your score and helps you win the next client.",
  },
];

/* --- Buyer-side (framed to reassure agents) ----------------------- */
export const buyerJourney: { title: string; body: string }[] = [
  {
    title: "Create an account",
    body: "Buyers sign up and verify their identity, so you always connect with genuine, serious prospects.",
  },
  {
    title: "Define preferences",
    body: "They pre-qualify budget, location, property type, must-haves and timeframe before you ever speak.",
  },
  {
    title: "Discover professionals",
    body: "They swipe through certified agents in their target market and request the one who fits their style.",
  },
];

export const buyerReassurance: Feature[] = [
  {
    icon: "user",
    title: "Pre-qualified, ready to act",
    body: "Buyers arrive with a defined budget, location and brief — the groundwork is already done.",
  },
  {
    icon: "globe",
    title: "Global & high-value",
    body: "From residential to luxury, commercial and holiday homes across the world's most desirable markets.",
  },
  {
    icon: "shield",
    title: "Verified identities",
    body: "Optional KYC on buyers means you spend your time on real, credible clients — not tyre-kickers.",
  },
];

/* --- Pricing plans (from the reference membership design) ---------- */
export type Plan = {
  name: string;
  price: string;
  cadence?: string;
  tagline: string;
  icon: IconName;
  featured?: boolean;
  inheritsFrom?: string;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Founder Member",
    price: "$25",
    cadence: "/month",
    tagline: "For early adopters building their profile and network presence.",
    icon: "leaf",
    features: [
      "Private Agent profile",
      "Showcase up to 20 properties",
      "AI property extraction from listing URLs",
      "Personal introduction video",
      "Buyer reviews and ratings",
      "Client messaging & shortlists",
      "Supplier recommendations",
      "Tour planning tools",
      "Transaction workspace access",
      "Early-adopter Founder badge",
      "Lock-in Founder pricing",
    ],
    cta: "Become a Founder",
  },
  {
    name: "Certified Private Agent",
    price: "$35",
    cadence: "/month",
    tagline: "Everything in Founder, plus certification and trust tools.",
    icon: "badge",
    featured: true,
    inheritsFrom: "Founder",
    features: [
      "Certified Private Agent status",
      "Verification badge on profile",
      "Appointment & engagement agreements",
      "Digital signing tools",
      "4 KYC verification credits (per month)",
      "Certified profile placement",
      "Priority in buyer search results",
      "Exclusive certification directory",
      "Professional certification logo usage",
      "Annual certification review",
    ],
    cta: "Become Certified",
  },
  {
    name: "Elite Private Agent",
    price: "$65",
    cadence: "/month",
    tagline: "For professionals handling international and high-value clients.",
    icon: "diamond",
    inheritsFrom: "Certified",
    features: [
      "Additional monthly KYC credits",
      "Priority buyer introductions",
      "Featured placement throughout platform",
      "Premium profile exposure",
      "Elite Member badge",
      "Early access to new tools",
      "Advanced reporting and analytics",
      "Priority support",
      "Concierge onboarding support",
      "Invitation-only Elite networking events",
    ],
    cta: "Apply for Elite Membership",
  },
  {
    name: "Visibility Boosts",
    price: "From $25",
    tagline: "Promote selected opportunities and rise to the top.",
    icon: "rocket",
    features: [
      "Push a property to the top of showcase results",
      "Feature inside buyer discovery feeds",
      "Enhanced visibility in newsletters",
      "Featured opportunity placement",
      "Performance reporting",
    ],
    cta: "Boost a Property",
  },
];

export const includedEverywhere: { icon: IconName; label: string }[] = [
  { icon: "user", label: "Agent Discovery & Appointment" },
  { icon: "briefcase", label: "Buyer Workspaces" },
  { icon: "star", label: "Property Shortlists" },
  { icon: "calendar", label: "Tour Planning" },
  { icon: "document", label: "Document Management" },
  { icon: "search", label: "Under-Contract Tracking" },
  { icon: "network", label: "Professional Network Referrals" },
  { icon: "globe", label: "AI-Powered Property Imports" },
  { icon: "chat", label: "Secure Messaging" },
  { icon: "shield", label: "Buyer & Agent Verification" },
];

/* --- Testimonials (illustrative) ---------------------------------- */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Within weeks I was matched with buyers who already knew their budget and location. No more chasing cold leads.",
    name: "Sofia M.",
    role: "Buyer's Agent",
    location: "Lisbon",
  },
  {
    quote:
      "Certification set me apart. The badge and directory listing give me credibility I can point clients straight to.",
    name: "Daniel R.",
    role: "Luxury Specialist",
    location: "Dubai",
  },
  {
    quote:
      "Referral boosts finally make my network work for me. Inviting a few partners pushed me up the list fast.",
    name: "Harper G.",
    role: "Home Specialist",
    location: "Auckland",
  },
  {
    quote:
      "Running the whole deal — agreements, tours, documents — in one place saves me hours every single week.",
    name: "James T.",
    role: "Apartment Specialist",
    location: "London",
  },
];

/* --- Founding team (illustrative; headshots are placeholders) ------ */
export const team: { name: string; role: string; bio: string; image?: string }[] =
  [
    {
      name: "Anna Maxwell",
      role: "Founder & Buyer Concierge",
      bio: "20+ years in luxury real estate and client advisory.",
      image: "/img/team-1.jpg",
    },
    {
      name: "Sophie Clarke",
      role: "Client Success Director",
      bio: "Ensuring every agent and buyer has a seamless experience.",
      image: "/img/team-2.jpg",
    },
    {
      name: "Ben Grint",
      role: "Head of Partnerships",
      bio: "Building relationships with world-class property experts.",
      image: "/img/team-3.jpg",
    },
    {
      name: "James Wilson",
      role: "Head of Technology",
      bio: "Leading our platform and security innovation.",
      image: "/img/team-4.jpg",
    },
  ];

/* --- Stats (illustrative unless noted) ---------------------------- */
export const stats: { value: string; label: string }[] = [
  { value: "10,000+", label: "KYC data sources" },
  { value: "4B+", label: "Verifiable identities" },
  { value: "Global", label: "Markets served" },
  { value: "$25", label: "Founding member pricing" },
];

/* --- FAQs --------------------------------------------------------- */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do I need to be a licensed agent to join?",
    a: "Yes. When you build your profile you provide your real estate license and proof of registration. We verify your credentials and certify your profile so buyers can trust it is genuine.",
  },
  {
    q: "How does the matching process work?",
    a: "Buyers pre-qualify what they're looking for — budget, preferred location, property type and languages. You're then matched with buyers who fit your market focus and price points, so introductions are relevant.",
  },
  {
    q: "What does certification involve?",
    a: "An EU-standard KYC process plus license verification. Once certified you receive a verification badge, a listing in the certified directory, and the right to use the Private Agent and Certified logos on your marketing.",
  },
  {
    q: "How do referrals and boosts work?",
    a: "Invite clients, agents or suppliers to earn Boost Dollars towards premium positioning — or place Boost Bids to jump to the top of the list. Client ratings also lift your ranking.",
  },
  {
    q: "Can I manage the whole transaction in the app?",
    a: "Yes. Client dashboards, in-app agreements and digital signing, tour scheduling with calendar sync, secure chat (with WhatsApp and email alerts), document management and under-contract tracking are all built in.",
  },
  {
    q: "Is my clients' data secure?",
    a: "The platform is built with enterprise-grade security, is GDPR and eIDAS compliant and EU-hosted. KYC runs through a network connected to more than 10,000 data sources.",
  },
  {
    q: "What is the Founding Member offer?",
    a: "Early adopters lock in Founder pricing for the life of the plan and receive an early-adopter Founder badge that signals you were among the first certified professionals on the network.",
  },
  {
    q: "Which markets is Private Agent in?",
    a: "Private Agent is global — spanning residential, commercial, new developments and holiday homes across the world's most desirable markets.",
  },
];

/* ==================================================================== *
 * Homepage v2 — agent-first conversion redesign
 * Sourced from the extracted-app-screens asset library (real product UI,
 * not decorative stock). Copy is written to the buyer's-agent audience:
 * winning serious buyers, cutting admin, and completing more deals.
 * ==================================================================== */

const SCREENS = "/screens";

/** Hero visual — a staggered wall of the agent-discovery journey. */
export const heroWallShots: { src: string; alt: string }[] = [
  {
    src: `${SCREENS}/agent-discovery/01-find-your-buyers-agent.png`,
    alt: "Private Agent app — buyers browse trusted buyer's agents",
  },
  {
    src: `${SCREENS}/agent-discovery/02-agent-profile-card.png`,
    alt: "Private Agent app — an agent's public profile card",
  },
  {
    src: `${SCREENS}/agent-discovery/03-agent-match.png`,
    alt: "Private Agent app — a buyer matches with their agent",
  },
  {
    src: `${SCREENS}/agent-discovery/04-agent-video.png`,
    alt: "Private Agent app — an agent's video introduction",
  },
  {
    src: `${SCREENS}/agent-discovery/11-appointment-request.png`,
    alt: "Private Agent app — a client sends an appointment request",
  },
];

/** Immediate proof-of-value — three fast, scannable benefits. */
export const proofOfValue: Feature[] = [
  {
    icon: "search",
    title: "Find serious buyers",
    body: "Be discovered by buyers who already know what they want.",
  },
  {
    icon: "briefcase",
    title: "Cut the admin",
    body: "Bring listings, conversations, documents, appointments, and next steps into one shared workspace.",
  },
  {
    icon: "shield",
    title: "Close with confidence",
    body: "Keep clients, properties, tours, agreements, and trusted specialists aligned from first match to completed purchase.",
  },
];

/** The agent-advantage journey — six stages from discovery to close. */
export const agentAdvantageJourney: {
  title: string;
  outcome: string;
  image: { src: string; alt: string };
}[] = [
  {
    title: "Get discovered",
    outcome: "Get discovered by qualified buyers",
    image: {
      src: `${SCREENS}/agent-discovery/09-agent-discovery-swipe.png`,
      alt: "Buyers discover agents by swiping through profiles",
    },
  },
  {
    title: "Appoint",
    outcome: "Convert interest into an official appointment",
    image: {
      src: `${SCREENS}/appointment-and-deal-flow/01-appoint-agent.png`,
      alt: "A buyer appoints their agent",
    },
  },
  {
    title: "Shortlist",
    outcome: "Share and shortlist listings in minutes",
    image: {
      src: `${SCREENS}/property-import-and-sharing/05-my-showcase.png`,
      alt: "An agent's property showcase and shortlist",
    },
  },
  {
    title: "Tour",
    outcome: "Coordinate tours without the back-and-forth",
    image: {
      src: `${SCREENS}/property-import-and-sharing/07-share-with-client.png`,
      alt: "Sharing a property directly with a client",
    },
  },
  {
    title: "Progress",
    outcome: "Bring trusted experts into the right moment",
    image: {
      src: `${SCREENS}/buyer-agent-connection/05-connected-agents.png`,
      alt: "A network of connected professionals on a deal",
    },
  },
  {
    title: "Close",
    outcome: "Keep the client engaged through to completion",
    image: {
      src: `${SCREENS}/appointment-and-deal-flow/09-deal-status-tracker.png`,
      alt: "A deal status tracker showing progress toward completion",
    },
  },
];

/** "One workspace" mega-section — three sub-stories, each with real screens. */
export const workspaceStories: {
  eyebrow: string;
  title: string;
  body: string;
  cyclingShots: { src: string; alt: string }[];
  staticShots?: { src: string; alt: string }[];
}[] = [
  {
    eyebrow: "Property import & sharing",
    title: "Paste a link. We do the rest.",
    body: "Paste a listing URL from any site and Private Agent extracts the details, images and summary automatically — ready to review, shortlist and share with your client in a click.",
    cyclingShots: [
      {
        src: `${SCREENS}/property-import-and-sharing/02-add-property-url.png`,
        alt: "Paste a property listing URL to import it",
      },
      {
        src: `${SCREENS}/property-import-and-sharing/03-ai-property-extraction.png`,
        alt: "AI extracts property details from the listing",
      },
      {
        src: `${SCREENS}/property-import-and-sharing/04-review-property-details.png`,
        alt: "Review and edit the extracted property details",
      },
      {
        src: `${SCREENS}/property-import-and-sharing/07-share-with-client.png`,
        alt: "Share the property with a client",
      },
      {
        src: `${SCREENS}/property-import-and-sharing/10-client-collection.png`,
        alt: "A client's shared property collection",
      },
    ],
  },
  {
    eyebrow: "Buyer-agent connection",
    title: "Turn interest into a real relationship.",
    body: "See every buyer who has shortlisted you, review connection requests, and manage accepted, pending and declined clients from a single view.",
    staticShots: [
      {
        src: `${SCREENS}/buyer-agent-connection/01-my-shortlist.png`,
        alt: "A buyer's shortlist of saved agents",
      },
      {
        src: `${SCREENS}/buyer-agent-connection/03-connection-request-summary.png`,
        alt: "Summary of a connection request before sending",
      },
      {
        src: `${SCREENS}/buyer-agent-connection/05-connected-agents.png`,
        alt: "A list of connected, pending and accepted agents",
      },
    ],
    cyclingShots: [
      {
        src: `${SCREENS}/buyer-agent-connection/07-contact-message.png`,
        alt: "A client's first message to their agent",
      },
      {
        src: `${SCREENS}/buyer-agent-connection/10-agent-chat.png`,
        alt: "In-app chat between agent and client",
      },
    ],
  },
  {
    eyebrow: "Appointment & deal flow",
    title: "Run the whole deal, start to finish.",
    body: "From appointment to agreement, verification to settlement — track exactly where every client stands, and keep documents and next steps in one workspace.",
    staticShots: [
      {
        src: `${SCREENS}/appointment-and-deal-flow/07-active-agent-workspace.png`,
        alt: "An agent's active workspace for a client",
      },
      {
        src: `${SCREENS}/appointment-and-deal-flow/09-deal-status-tracker.png`,
        alt: "A deal status tracker showing offer, legal, finance and settlement stages",
      },
    ],
    cyclingShots: [
      {
        src: `${SCREENS}/appointment-and-deal-flow/01-appoint-agent.png`,
        alt: "A buyer appoints their agent",
      },
      {
        src: `${SCREENS}/appointment-and-deal-flow/03-agreement-review.png`,
        alt: "Reviewing the buyer's agent agreement",
      },
      {
        src: `${SCREENS}/appointment-and-deal-flow/05-appointment-submitted.png`,
        alt: "Appointment request submitted confirmation",
      },
      {
        src: `${SCREENS}/appointment-and-deal-flow/10-documents-library.png`,
        alt: "A shared library of transaction documents",
      },
    ],
  },
];

/** Credibility & differentiation — proof points, not the main story. */
export const credibilityPoints: string[] = [
  "Verified and certified professional profiles",
  "Pre-qualified buyers",
  "Secure, private, global platform",
  "Ratings and reputation",
  "Trusted professional network",
  "Founder pricing and early access",
];

/** Buyer-onboarding sequence — proof that buyers arrive pre-qualified. */
export const buyerOnboardingShots: { src: string; alt: string }[] = [
  {
    src: `${SCREENS}/onboarding-and-reference-pages/buyer-onboarding-01-welcome.png`,
    alt: "Buyer onboarding — welcome screen",
  },
  {
    src: `${SCREENS}/onboarding-and-reference-pages/buyer-onboarding-02-create-account.png`,
    alt: "Buyer onboarding — create account",
  },
  {
    src: `${SCREENS}/onboarding-and-reference-pages/buyer-onboarding-03-verify-identity.png`,
    alt: "Buyer onboarding — verify identity",
  },
  {
    src: `${SCREENS}/onboarding-and-reference-pages/buyer-onboarding-05-about-you-and-search.png`,
    alt: "Buyer onboarding — tell us about yourself and your search",
  },
  {
    src: `${SCREENS}/onboarding-and-reference-pages/buyer-onboarding-07-property-preferences.png`,
    alt: "Buyer onboarding — property preferences",
  },
  {
    src: `${SCREENS}/onboarding-and-reference-pages/buyer-onboarding-08-location-preferences.png`,
    alt: "Buyer onboarding — location preferences",
  },
  {
    src: `${SCREENS}/onboarding-and-reference-pages/buyer-onboarding-09-budget.png`,
    alt: "Buyer onboarding — budget",
  },
  {
    src: `${SCREENS}/onboarding-and-reference-pages/buyer-onboarding-10-onboarding-complete.png`,
    alt: "Buyer onboarding — complete and ready to be matched",
  },
];
