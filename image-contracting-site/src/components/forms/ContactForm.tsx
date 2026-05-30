"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "Residential Construction",
  "Commercial Remodeling",
  "Structural Renovation",
  "Kitchen & Bath",
  "Exterior Finishing",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      email: data.get("email") as string,
      service: data.get("service") as string,
      address: data.get("address") as string,
      message: data.get("message") as string,
      website: data.get("website") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.success) {
        setSuccess(true);
      } else {
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-white border border-outline-variant rounded-xl p-10">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <p className="text-green-800 font-semibold text-lg">
            Your request has been sent successfully!
          </p>
          <p className="text-green-700 text-sm mt-2">
            We&apos;ll be in touch within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-outline-variant rounded-xl p-10">
      <h2 className="font-headline text-2xl font-bold text-on-surface mb-8">
        Get a Free Estimate
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2"
          >
            Project Service
          </label>
          <select
            id="service"
            name="service"
            className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface outline-none transition-colors"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2"
          >
            Project Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface outline-none transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2"
          >
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface outline-none transition-colors resize-none"
          />
        </div>

        {error && (
          <p className="text-error text-sm font-medium">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-container text-on-primary-container font-semibold py-4 rounded-xl hover:-translate-y-0.5 shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? "Sending..." : "Get a Free Estimate"}
        </button>
      </form>
    </div>
  );
}
