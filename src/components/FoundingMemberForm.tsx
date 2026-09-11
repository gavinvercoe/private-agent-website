"use client";

import { useState } from "react";
import { IconCheck } from "./icons";
import { COUNTRIES } from "@/lib/countries";
import { useWaitlistEmail } from "./WaitlistEmailContext";
import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-sm border border-line bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-faint focus:border-gold";
const labelBase =
  "mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy";

function Field({
  label,
  children,
  required,
  span2,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  span2?: boolean;
}) {
  return (
    <label className={cn("block", span2 && "sm:col-span-2")}>
      <span className={labelBase}>
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {children}
    </label>
  );
}

const TITLES = ["Mr", "Mrs", "Ms", "Mx", "Dr", "Prof"];
const EXPERIENCE_RANGES = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
];
const DEAL_RANGES = [
  "0 — just starting out",
  "1–10",
  "11–30",
  "31–75",
  "75+",
];

export function FoundingMemberForm() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const { email, setEmail } = useWaitlistEmail();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/founding-member", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setState("done");
      setMessage(data?.message || "You're on the list.");
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
          You&rsquo;re on the list
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-line bg-ivory p-8 text-left sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Title" required>
          <select
            name="title"
            required
            defaultValue=""
            className={cn(fieldBase, "appearance-none")}
          >
            <option value="" disabled>
              Select…
            </option>
            {TITLES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Email address" required>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldBase}
            placeholder="you@agency.com"
          />
        </Field>

        <Field label="First name" required>
          <input name="firstName" required className={fieldBase} placeholder="First name" />
        </Field>
        <Field label="Last name" required>
          <input name="lastName" required className={fieldBase} placeholder="Last name" />
        </Field>

        <Field label="Country" required>
          <select
            name="country"
            required
            defaultValue=""
            className={cn(fieldBase, "appearance-none")}
          >
            <option value="" disabled>
              Select…
            </option>
            {COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="City" required>
          <input name="city" required className={fieldBase} placeholder="City" />
        </Field>

        <Field label="Company" required>
          <input name="company" required className={fieldBase} placeholder="Your brokerage" />
        </Field>
        <Field label="Position" required>
          <input name="position" required className={fieldBase} placeholder="e.g. Buyer's Agent" />
        </Field>

        <Field label="Years of experience" required>
          <select
            name="yearsExperience"
            required
            defaultValue=""
            className={cn(fieldBase, "appearance-none")}
          >
            <option value="" disabled>
              Select…
            </option>
            {EXPERIENCE_RANGES.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>
        <Field label="Deals transacted" required>
          <select
            name="dealsTransacted"
            required
            defaultValue=""
            className={cn(fieldBase, "appearance-none")}
          >
            <option value="" disabled>
              Select…
            </option>
            {DEAL_RANGES.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Cell phone (optional)">
            <input
              type="tel"
              name="cellPhone"
              className={fieldBase}
              placeholder="+00 000 000 0000"
            />
          </Field>
        </div>
      </div>

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
        {state === "loading" ? "Submitting…" : "Join as a Founding Member"}
      </button>
      <p className="mt-3 text-center text-xs text-faint">
        We respect your privacy and never share your details. Unsubscribe
        anytime.
      </p>
    </form>
  );
}
