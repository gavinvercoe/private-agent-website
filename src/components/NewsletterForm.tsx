"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function NewsletterForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setState("done");
      setMessage(data?.message || "You're on the list.");
      setEmail("");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputBase =
    "w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors focus:border-gold";
  const input =
    tone === "light"
      ? "bg-navy-700/40 border-cream/20 text-cream placeholder:text-cream/40"
      : "bg-white border-line text-charcoal placeholder:text-faint";

  if (state === "done") {
    return (
      <p
        className={cn(
          "rounded-sm border border-gold/40 bg-gold/10 px-4 py-3 text-sm",
          tone === "light" ? "text-cream" : "text-navy",
        )}
      >
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className={cn(inputBase, input, "sm:flex-1")}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="rounded-sm bg-gold px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-light disabled:opacity-60"
        >
          {state === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-2 text-sm text-red-500">{message}</p>
      )}
    </form>
  );
}
