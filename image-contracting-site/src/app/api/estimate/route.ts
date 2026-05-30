import { NextResponse } from "next/server";
import { postToGHL } from "@/lib/ghl";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      jobType,
      scope,
      addOns,
      estimatedRange,
      website,
    } = body;

    // Honeypot check - if filled, silently accept
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !phone || !email || !jobType) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, phone, email, and job type are required.",
        },
        { status: 400 }
      );
    }

    const result = await postToGHL(
      {
        name,
        phone,
        email,
        jobType,
        scope: scope || "",
        addOns: addOns || [],
        estimatedRange: estimatedRange || "",
        source: "estimate-calculator",
      },
      "estimate"
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
