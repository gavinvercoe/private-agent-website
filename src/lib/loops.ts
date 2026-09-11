/**
 * Loops.so contact sync (https://loops.so/docs/api-reference/update-contact).
 * Uses the "update contact" endpoint, which upserts — it creates the
 * contact if no match on email/userId exists yet, so this one call handles
 * both new signups and repeat submissions.
 *
 * Requires a `LOOPS_API_KEY` environment variable (Loops dashboard →
 * Settings → API). Custom fields below (title, country, city, company,
 * position, yearsExperience, dealsTransacted, cellPhone) must be created
 * as Contact Properties in Loops first — the API only accepts custom
 * properties that already exist there.
 */
const LOOPS_UPDATE_URL = "https://app.loops.so/api/v1/contacts/update";

export function isLoopsConfigured(): boolean {
  return Boolean(process.env.LOOPS_API_KEY);
}

export async function upsertLoopsContact(
  fields: Record<string, unknown>,
): Promise<void> {
  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    throw new Error("LOOPS_API_KEY is not configured");
  }

  const res = await fetch(LOOPS_UPDATE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(fields),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Loops request failed (${res.status}): ${detail}`);
  }
}
