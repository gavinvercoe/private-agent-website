import { NextResponse } from "next/server";
import { saveLead, isValidEmail, clean } from "@/lib/leads";

export const runtime = "nodejs";

const REQUIRED_STRING_FIELDS = [
  "title",
  "firstName",
  "lastName",
  "country",
  "city",
  "company",
  "position",
  "yearsExperience",
  "dealsTransacted",
] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record: Record<string, string> = {};
  for (const field of REQUIRED_STRING_FIELDS) {
    const value = clean(body[field], 200);
    if (!value) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 422 },
      );
    }
    record[field] = value;
  }

  const email = body.email;
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 },
    );
  }
  record.email = (email as string).trim().toLowerCase();
  record.cellPhone = clean(body.cellPhone, 40);

  try {
    await saveLead("founding-member", record, {
      email: record.email,
      firstName: record.firstName,
      lastName: record.lastName,
      source: "Website - Founding Member Form",
      userGroup: "Founding Member",
      subscribed: true,
      // Custom properties — must be created in Loops (Settings > Contact
      // Properties, type "String") before this will sync without error.
      title: record.title,
      country: record.country,
      city: record.city,
      company: record.company,
      position: record.position,
      yearsExperience: record.yearsExperience,
      dealsTransacted: record.dealsTransacted,
      ...(record.cellPhone ? { cellPhone: record.cellPhone } : {}),
    });
  } catch {
    return NextResponse.json(
      { error: "Could not submit your details. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message:
      "Thanks for joining the Founding Member waitlist — we'll be in touch as launch approaches with your preferential pricing details.",
  });
}
