"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const pricing = {
  base: {
    kitchen: 50000,
    bathroom: 25000,
    addition: 80000,
    roofing: 15000,
    deck: 20000,
    commercial: 100000,
  },
  sizeMultiplier: { small: 0.7, medium: 1.0, large: 1.5 },
  addOns: {
    cabinetry: 15000,
    fixtures: 8000,
    smartHome: 5000,
    structural: 20000,
  },
} as const;

type JobType = keyof typeof pricing.base;
type ScopeSize = keyof typeof pricing.sizeMultiplier;
type AddOnKey = keyof typeof pricing.addOns;

const jobTypes: { key: JobType; label: string }[] = [
  { key: "kitchen", label: "Kitchen Remodel" },
  { key: "bathroom", label: "Bathroom Remodel" },
  { key: "addition", label: "Home Addition" },
  { key: "roofing", label: "Roofing" },
  { key: "deck", label: "Deck/Outdoor" },
  { key: "commercial", label: "Commercial" },
];

const scopeSizes: { key: ScopeSize; label: string; description: string }[] = [
  { key: "small", label: "Small", description: "Under 200 sq ft" },
  { key: "medium", label: "Medium", description: "200 - 500 sq ft" },
  { key: "large", label: "Large", description: "500+ sq ft" },
];

const addOnOptions: { key: AddOnKey; label: string }[] = [
  { key: "cabinetry", label: "Custom Cabinetry" },
  { key: "fixtures", label: "Premium Fixtures" },
  { key: "smartHome", label: "Smart Home Integration" },
  { key: "structural", label: "Structural Changes" },
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function EstimateCalculator() {
  const [step, setStep] = useState(1);
  const [jobType, setJobType] = useState<JobType | null>(null);
  const [scope, setScope] = useState<ScopeSize | null>(null);
  const [addOns, setAddOns] = useState<AddOnKey[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function toggleAddOn(key: AddOnKey) {
    setAddOns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }

  function calculateEstimate() {
    if (!jobType || !scope) return { low: 0, high: 0 };
    const base = pricing.base[jobType] * pricing.sizeMultiplier[scope];
    const addOnTotal = addOns.reduce(
      (sum, key) => sum + pricing.addOns[key],
      0
    );
    const total = base + addOnTotal;
    return { low: Math.round(total * 0.85), high: Math.round(total * 1.15) };
  }

  const estimate = calculateEstimate();

  const estimatedRange = `${formatCurrency(estimate.low)} - ${formatCurrency(estimate.high)}`;

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
      jobType: jobTypes.find((j) => j.key === jobType)?.label || "",
      scope: scopeSizes.find((s) => s.key === scope)?.label || "",
      addOns: addOns.map(
        (key) => addOnOptions.find((a) => a.key === key)?.label || ""
      ),
      estimatedRange,
      website: data.get("website") as string,
    };

    try {
      const res = await fetch("/api/estimate", {
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
            Your estimate request has been sent!
          </p>
          <p className="text-green-700 text-sm mt-2">
            We&apos;ll follow up within 24 hours with a detailed quote.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-outline-variant rounded-xl p-10">
      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                s <= step
                  ? "bg-primary-container text-on-primary-container"
                  : "bg-surface-container-high text-on-surface-variant"
              }`}
            >
              {s}
            </div>
            {s < 4 && (
              <div
                className={`flex-1 h-0.5 transition-colors ${
                  s < step ? "bg-primary-container" : "bg-surface-container-high"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Job Type */}
      {step === 1 && (
        <div>
          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
            What type of project?
          </h3>
          <p className="text-on-surface-variant text-sm mb-6">
            Select the category that best describes your project.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {jobTypes.map((job) => (
              <button
                key={job.key}
                type="button"
                onClick={() => setJobType(job.key)}
                className={`p-4 rounded-lg border-2 text-left font-medium transition-colors cursor-pointer ${
                  jobType === job.key
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-outline-variant hover:border-primary/40 text-on-surface"
                }`}
              >
                {job.label}
              </button>
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <button
              type="button"
              onClick={() => jobType && setStep(2)}
              disabled={!jobType}
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-semibold px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Scope / Size */}
      {step === 2 && (
        <div>
          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
            What&apos;s the scope?
          </h3>
          <p className="text-on-surface-variant text-sm mb-6">
            Choose the approximate size of your project.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {scopeSizes.map((size) => (
              <button
                key={size.key}
                type="button"
                onClick={() => setScope(size.key)}
                className={`p-4 rounded-lg border-2 text-center transition-colors cursor-pointer ${
                  scope === size.key
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-outline-variant hover:border-primary/40 text-on-surface"
                }`}
              >
                <p className="font-semibold">{size.label}</p>
                <p className="text-xs text-on-surface-variant mt-1">
                  {size.description}
                </p>
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 text-on-surface-variant font-semibold px-6 py-3 rounded-xl hover:bg-surface-container transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              type="button"
              onClick={() => scope && setStep(3)}
              disabled={!scope}
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-semibold px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Add-Ons */}
      {step === 3 && (
        <div>
          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
            Any add-ons?
          </h3>
          <p className="text-on-surface-variant text-sm mb-6">
            Select any upgrades you&apos;re interested in. These are optional.
          </p>
          <div className="space-y-3">
            {addOnOptions.map((addon) => (
              <label
                key={addon.key}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  addOns.includes(addon.key)
                    ? "border-primary bg-primary/5"
                    : "border-outline-variant hover:border-primary/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={addOns.includes(addon.key)}
                  onChange={() => toggleAddOn(addon.key)}
                  className="w-5 h-5 accent-primary"
                />
                <span className="font-medium text-on-surface">
                  {addon.label}
                </span>
                <span className="ml-auto text-sm text-on-surface-variant">
                  +{formatCurrency(pricing.addOns[addon.key])}
                </span>
              </label>
            ))}
          </div>
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 text-on-surface-variant font-semibold px-6 py-3 rounded-xl hover:bg-surface-container transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-semibold px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              See Estimate <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Results + Lead Capture */}
      {step === 4 && (
        <div>
          <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
            Your Estimated Range
          </h3>
          <div className="bg-surface-container-low rounded-lg p-6 mb-6 text-center">
            <p className="font-headline text-3xl md:text-4xl font-extrabold text-primary">
              {estimatedRange}
            </p>
            <p className="text-on-surface-variant text-sm mt-2">
              This is an approximate range. We&apos;ll provide a detailed quote
              after reviewing your project.
            </p>
          </div>

          <p className="text-on-surface-variant text-sm mb-4">
            Enter your details to receive a personalized quote.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="est-website">Website</label>
              <input
                type="text"
                id="est-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label
                htmlFor="est-name"
                className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="est-name"
                name="name"
                required
                className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="est-phone"
                className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="est-phone"
                name="phone"
                required
                className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="est-email"
                className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="est-email"
                name="email"
                required
                className="w-full bg-surface-container-low border-b-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface outline-none transition-colors"
              />
            </div>

            {error && (
              <p className="text-error text-sm font-medium">{error}</p>
            )}

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 text-on-surface-variant font-semibold px-6 py-3 rounded-xl hover:bg-surface-container transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-primary-container text-on-primary-container font-semibold px-8 py-3 rounded-xl hover:-translate-y-0.5 shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? "Sending..." : "Get My Quote"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
