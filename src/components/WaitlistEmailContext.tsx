"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type WaitlistEmailValue = {
  email: string;
  setEmail: (value: string) => void;
};

const WaitlistEmailContext = createContext<WaitlistEmailValue | null>(null);

/**
 * Shares one email value between the hero's quick-capture box and the full
 * Founding Member form further down the same page, so typing it once at the
 * top carries it down instead of asking twice.
 */
export function WaitlistEmailProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState("");
  return (
    <WaitlistEmailContext.Provider value={{ email, setEmail }}>
      {children}
    </WaitlistEmailContext.Provider>
  );
}

export function useWaitlistEmail(): WaitlistEmailValue {
  const ctx = useContext(WaitlistEmailContext);
  if (!ctx) {
    throw new Error(
      "useWaitlistEmail must be used within a WaitlistEmailProvider",
    );
  }
  return ctx;
}
