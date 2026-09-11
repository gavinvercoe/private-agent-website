import { promises as fs } from "fs";
import os from "os";
import path from "path";
import { isLoopsConfigured, upsertLoopsContact } from "./loops";

/**
 * Placeholder lead store: appends submissions to a local JSON file.
 * Swap this module for a real integration (Resend, Airtable, HubSpot, a
 * database) without touching the route handlers.
 *
 * Vercel's serverless filesystem is read-only except /tmp, and /tmp is
 * ephemeral (wiped between invocations, not shared across instances) — so
 * on Vercel this only prevents form submissions from erroring; it does not
 * durably capture leads. Wire a real integration before relying on this.
 */
const dataDir = process.env.VERCEL
  ? path.join(os.tmpdir(), "private-agent-leads")
  : path.join(process.cwd(), "data");

async function readJson(file: string): Promise<unknown[]> {
  try {
    const raw = await fs.readFile(file, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function appendLead(
  kind: "apply" | "newsletter" | "founding-member",
  record: Record<string, unknown>,
): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true });
  const file = path.join(dataDir, `${kind}.json`);
  const existing = await readJson(file);
  existing.push({ ...record, receivedAt: new Date().toISOString() });
  await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf8");
}

/**
 * Primary entry point for API routes: syncs to Loops.so when configured
 * (`LOOPS_API_KEY` set), otherwise falls back to the local placeholder
 * store. A local record is also kept as a lightweight backup whenever
 * Loops is the primary destination, best-effort (its failure doesn't
 * affect the response).
 */
export async function saveLead(
  kind: "apply" | "newsletter" | "founding-member",
  record: Record<string, unknown>,
  loopsFields: Record<string, unknown>,
): Promise<void> {
  if (isLoopsConfigured()) {
    await upsertLoopsContact(loopsFields);
    appendLead(kind, record).catch(() => {});
    return;
  }
  await appendLead(kind, record);
}

export function isValidEmail(email: unknown): email is string {
  return (
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    email.length <= 254
  );
}

export function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}
