"use client";

import { useState } from "react";
import { IconCheck } from "./icons";
import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-sm border border-line bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-faint focus:border-gold";
const labelBase =
  "mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy";

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelBase}>
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {children}
    </label>
  );
}

export function ApplyForm() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.consent = consent as unknown as string;

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, consent }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setState("done");
      setMessage(data?.message || "Application received.");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-xl border border-line bg-ivory p-10 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/50 text-gold">
          <IconCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl text-navy">
          Thank you for applying
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-line bg-ivory p-8 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input name="fullName" required className={fieldBase} placeholder="Your name" />
        </Field>
        <Field label="Email address" required>
          <input
            type="email"
            name="email"
            required
            className={fieldBase}
            placeholder="you@agency.com"
          />
        </Field>
        <Field label="Phone">
          <input name="phone" className={fieldBase} placeholder="+00 000 000 0000" />
        </Field>
        <Field label="Company / agency">
          <input name="company" className={fieldBase} placeholder="Your brokerage" />
        </Field>
        <Field label="Country">
          <input name="country" className={fieldBase} placeholder="Country" />
        </Field>
        <Field label="City / market">
          <input name="city" className={fieldBase} placeholder="Primary market" />
        </Field>
        <Field label="Years of experience">
          <select name="experience" className={cn(fieldBase, "appearance-none")} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Less than 1 year</option>
            <option>1–3 years</option>
            <option>3–5 years</option>
            <option>5–10 years</option>
            <option>10+ years</option>
          </select>
        </Field>
        <Field label="Plan of interest">
          <select name="plan" className={cn(fieldBase, "appearance-none")} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Founder Member — $25/mo</option>
            <option>Certified Private Agent — $35/mo</option>
            <option>Elite Private Agent — $65/mo</option>
            <option>Undecided</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Specialisations / markets covered">
            <input
              name="specializations"
              className={fieldBase}
              placeholder="e.g. Luxury homes, off-market, international buyers"
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Website or social profile">
            <input name="website" className={fieldBase} placeholder="https://" />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="How did you hear about us?">
            <select name="referral" className={cn(fieldBase, "appearance-none")} defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option>Search engine</option>
              <option>Social media</option>
              <option>A colleague</option>
              <option>An existing member</option>
              <option>An event</option>
              <option>Other</option>
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Anything else?">
            <textarea
              name="message"
              rows={4}
              className={cn(fieldBase, "resize-y")}
              placeholder="Tell us a little about your business and the buyers you'd like to reach."
            />
          </Field>
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-[var(--color-gold)]"
        />
        <span>
          I agree to be contacted about my application and accept the Terms of
          Use and Privacy Policy. <span className="text-gold">*</span>
        </span>
      </label>

      {state === "error" && (
        <p className="mt-4 rounded-sm border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-7 w-full rounded-sm bg-gold px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {state === "loading" ? "Submitting…" : "Submit Application"}
      </button>
      <p className="mt-3 text-center text-xs text-faint">
        No payment required to apply. Certification &amp; KYC come later, during
        onboarding.
      </p>
    </form>
  );
}
