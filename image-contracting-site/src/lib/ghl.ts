const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;
const GHL_ESTIMATE_WEBHOOK_URL = process.env.GHL_ESTIMATE_WEBHOOK_URL;

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
  service?: string;
  address?: string;
  source?: string;
}

export interface EstimatePayload {
  name: string;
  phone: string;
  email: string;
  jobType: string;
  scope: string;
  addOns: string[];
  estimatedRange: string;
  source?: string;
}

export async function postToGHL(
  payload: ContactPayload | EstimatePayload,
  type: "contact" | "estimate" = "contact"
): Promise<{ success: boolean; error?: string }> {
  const url =
    type === "estimate" && GHL_ESTIMATE_WEBHOOK_URL
      ? GHL_ESTIMATE_WEBHOOK_URL
      : GHL_WEBHOOK_URL;

  if (!url) {
    console.error(`GHL webhook URL not configured for type: ${type}`);
    return { success: false, error: "Webhook not configured" };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return { success: false, error: `Webhook returned ${res.status}` };
    }

    return { success: true };
  } catch (err) {
    console.error("GHL webhook error:", err);
    return { success: false, error: "Failed to submit" };
  }
}
