import { NextResponse } from "next/server";
import { appendLead, isValidEmail, clean } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fullName = clean(body.fullName, 120);
  const email = body.email;
  const consent = body.consent === true;

  if (!fullName) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 422 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 },
    );
  }
  if (!consent) {
    return NextResponse.json(
      { error: "Please accept the terms to continue." },
      { status: 422 },
    );
  }

  const record = {
    fullName,
    email: (email as string).trim().toLowerCase(),
    phone: clean(body.phone, 40),
    country: clean(body.country, 80),
    city: clean(body.city, 80),
    company: clean(body.company, 120),
    experience: clean(body.experience, 40),
    specializations: clean(body.specializations, 200),
    website: clean(body.website, 200),
    referral: clean(body.referral, 80),
    message: clean(body.message, 2000),
    consent,
  };

  try {
    await appendLead("apply", record);
  } catch {
    return NextResponse.json(
      { error: "Could not submit your application. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message:
      "Application received. Our concierge team will be in touch shortly to guide you through onboarding.",
  });
}
