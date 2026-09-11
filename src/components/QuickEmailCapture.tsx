"use client";

import { useWaitlistEmail } from "./WaitlistEmailContext";

/**
 * Hero-level "just type your email" entry point. It doesn't submit
 * anything itself — it carries the typed email down to the full Founding
 * Member form (both live on the same page, sharing state via
 * WaitlistEmailContext) and scrolls it into view, so nobody has to type
 * their email twice and every signup ends up as one complete record.
 */
export function QuickEmailCapture() {
  const { email, setEmail } = useWaitlistEmail();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    document
      .getElementById("founding-member")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full rounded-sm border border-line bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-faint focus:border-gold sm:flex-1"
        />
        <button
          type="submit"
          className="rounded-sm bg-gold px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-light"
        >
          Join Waitlist
        </button>
      </div>
    </form>
  );
}
