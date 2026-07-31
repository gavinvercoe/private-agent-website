# Private Agent — Marketing Website Plan

_Planning document. No site code written yet. Awaiting sign-off._

## 1. Goal & audience

**Single job of this site:** convince **real-estate buyer's agents / brokers to join the Private Agent platform.**
Everything is written from the agent's perspective (win clients, get discovered, grow, earn). Buyers are
mentioned only as the demand the agent gains access to.

**Conversion goals**
1. Primary — **Apply / Join** (agent submits an application → lead captured).
2. Secondary — **Newsletter** signup (stay-informed email capture).

Reference basis: **Broker sales deck** (core narrative), the app **sitemaps** (to describe features accurately),
and the four **BEST** screens (definitive look & feel). The Agent-Onboarding sitemap contains an explicit
"Home" page spec that this plan follows.

## 2. Design system (locked from the BEST screens)

**Palette**
- Background: ivory / warm cream `#F7F3EC`
- Dark sections & footer: near-black charcoal `#141414` / deep navy `#14203A` (navy for the "Most Popular" card)
- Accent: gold / bronze `#B0894F` (lighter `#C9A96A` for hovers/lines)
- Text: charcoal `#1E1E1E`, muted `#5A5A5A`

**Typography**
- Headings: high-contrast display **serif** (Playfair Display)
- Body: clean humanist **sans** (Inter)
- Eyebrows / nav / buttons / labels: **uppercase, letter-spaced sans**

**Components (reused across the site)**
- Eyebrow (gold caps) + serif headline + gold diamond/rule divider — the section header pattern
- Icon + text feature lists; soft-bordered cards with subtle shadow
- Pricing cards (one navy "Most Popular")
- Accordion FAQ; testimonial quote cards; team cards
- Dark "trust" / CTA bands; newsletter capture; contact block; footer with columns + socials
- Buttons: primary = gold-filled uppercase; secondary = dark/navy outline; on dark bg = gold or white
- Feel: luxury, editorial, generous whitespace, restrained motion

**Wordmark:** recreate in type — `PRIVATE AGENT` / `PRIVATE PROPERTY CONCIERGE` + `PA` monogram — unless a logo SVG is provided.

## 3. Tech stack

- **Next.js (App Router) + TypeScript + Tailwind CSS**
- Fonts via `next/font` (Playfair Display + Inter)
- Section-based reusable React components
- Fully responsive (desktop + mobile), accessible, deploy-ready (Vercel)
- Design is a fixed light theme with dark bands (no dark-mode toggle)

**Forms / data (placeholder, no real backend yet)**
- `Apply` and `Newsletter` post to a Next.js **API route** that validates input and appends to a local
  file (`website/data/*.json`, git-ignored). Returns a success state.
- Clearly a stub to later wire to email/CRM (Resend / Airtable / HubSpot). **No payment, no ID/KYC here** —
  that lives in the app's onboarding later.

## 4. Sitemap & page structure

Nav (from the BEST Pricing page): **For Buyers · For Agents · How It Works · Resources · About Us · Pricing · [JOIN NOW]**

### Phase 1 (build now)
1. **Home `/`** — the agent-recruitment landing, following the Agent-Onboarding "Home" spec:
   1. Nav
   2. **Hero — "Agent Welcome"**: refined headline + subtext + dual CTA (Apply / How it works), luxury visual
   3. **Features** — exclusive network, swipe-card discovery, private client matching, elegant profiles; first-mover / Founding-member note
   4. **Swipe-card showcase** — how agents get discovered by qualified buyers
   5. **Benefits of joining** — premium public profile · get discovered by qualified clients · manage relationships in one place
   6. **How it works** — 3-step join (Create profile → Get verified/certified → Get matched with buyers)
   7. **Trust / Verification band** (dark) — certification, KYC, "vetted professionals, exceptional standards"
   8. **Network & referrals** — build your trusted network, recommend partners, earn referral boosts
   9. **Testimonials** — from property professionals
   10. **Pricing preview** — plan summary + CTA to full Pricing
   11. **About & team** — mission, values, founding team
   12. **FAQ** — platform / membership / profile / onboarding
   13. **Apply CTA** — "Invite to apply" conversion band
   14. **Newsletter** + **Contact** (concierge onboarding)
   15. Footer
2. **Pricing `/pricing`** — full page per the BEST membership design:
   - Founder Member **$25** · Certified Private Agent **$35** (Most Popular, navy) · Elite Private Agent **$65** · Visibility Boosts **from $25**
   - "Included with every membership" icon grid · "Stand out. Get Certified." CTA band
3. **Apply / Join `/apply`** — the conversion form (agent application / waitlist).

### Phase 2 (later, if wanted)
Dedicated pages for **For Buyers, For Agents, How It Works, Resources, About Us**. In Phase 1 these nav items
scroll to the relevant Home sections (anchors) so the nav is complete without half-built pages.

## 5. Content strategy (broker deck → agent recruitment copy)

- **Win more clients:** get discovered by pre-qualified, ready-to-act buyers.
- **Stand out:** bespoke swipe profile with video, showcase properties, ratings.
- **Get certified:** Certified Global Buyers Agent — verification + KYC builds trust and visibility.
- **Grow & earn:** build a trusted partner network, recommend service providers, earn referral boosts; bid Boosts to the top.
- **Run the deal:** client dashboards, in-app agreements, tours, chat, documents — one place.
- **First-mover advantage:** Founding-member pricing, lock-in.

## 6. Apply form fields (light — no sensitive data)

Full name · Email · Phone (optional) · Country · City / market · Company / agency · Years' experience ·
Specializations · Website or social · "How did you hear about us" · short message · consent checkbox.
(License #, ID/KYC and payment are intentionally deferred to app onboarding.)

## 7. Open questions before building

1. **Page scope** — Phase 1 = Home + Pricing + Apply (other nav items as on-page anchors)? Or build dedicated pages for every nav item now?
2. **Brand assets** — do you have a logo SVG, brand fonts, and photography? Or recreate the wordmark in type + use tasteful placeholder imagery with clearly-marked slots?
3. **Form destination** — local file placeholder for now (recommended), or wire straight to a service (Resend / Airtable / HubSpot) if you provide access?
4. **Conversion framing** — open "Join now," or an **application / waitlist** ("Apply for membership", "Become a Founding Member")? (Early-stage suggests application/waitlist.)
