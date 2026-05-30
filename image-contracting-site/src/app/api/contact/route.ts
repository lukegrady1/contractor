import { NextResponse } from "next/server";
import { postToGHL } from "@/lib/ghl";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, address, message, website } = body;

    // Honeypot check - if filled, silently accept
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    const result = await postToGHL(
      {
        name,
        phone,
        email,
        message: message || "",
        service,
        address,
        source: "contact-form",
      },
      "contact"
    );

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to submit." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
