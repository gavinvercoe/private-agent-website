import { NextResponse } from "next/server";
import { appendLead, isValidEmail } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = (body as { email?: unknown })?.email;
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  try {
    await appendLead("newsletter", { email: email.trim().toLowerCase() });
  } catch {
    return NextResponse.json(
      { error: "Could not save your subscription. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message: "You're on the list — welcome to Private Agent.",
  });
}
