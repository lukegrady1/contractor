import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  LayoutGrid,
  DoorOpen,
  Lightbulb,
  Paintbrush,
  Droplets,
  CheckCircle2,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import FAQ from "@/components/sections/FAQ";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Kitchen Remodeling",
  description:
    "Premium kitchen remodeling in Southern New Hampshire. Custom cabinetry, luxury countertops, and expert craftsmanship from Image Contracting.",
};

const includedItems = [
  {
    icon: LayoutGrid,
    title: "Layout Design",
    description:
      "Space planning and architectural drawings that optimize flow, storage, and sight lines for your household.",
  },
  {
    icon: DoorOpen,
    title: "Custom Cabinetry",
    description:
      "Handcrafted or semi-custom cabinets with soft-close hardware, built to your exact specifications and finish preferences.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Electrical",
    description:
      "Recessed, pendant, and under-cabinet lighting plans with dedicated circuits for modern appliance loads.",
  },
  {
    icon: Paintbrush,
    title: "Surface Finishes",
    description:
      "Quartz, granite, marble, and butcher block countertops paired with designer tile backsplashes.",
  },
  {
    icon: Droplets,
    title: "Luxury Fixtures",
    description:
      "Premium faucets, sinks, and hardware from brands like Kohler, Delta, and Brizo — installed to perfection.",
  },
  {
    icon: CheckCircle2,
    title: "Final Commissioning",
    description:
      "Comprehensive walkthrough, punch-list completion, and a 2-year workmanship warranty on every installation.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "On-site consultation, measurements, and design inspiration session to understand your vision and budget.",
    weeks: "Week 1-2",
  },
  {
    number: "02",
    title: "Design & Selection",
    description:
      "3D renderings, material selections, and detailed scope of work. You see exactly what you're getting before we start.",
    weeks: "Week 3-5",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Demo, rough-in, cabinetry, countertops, tile, fixtures, and trim — executed in a controlled sequence.",
    weeks: "Week 6-12",
  },
  {
    number: "04",
    title: "Final Reveal",
    description:
      "Deep clean, final walkthrough, punch-list completion, and handover of your warranty documentation.",
    weeks: "Week 13-14",
  },
];

const faqItems = [
  {
    question: "How long does a typical kitchen remodel take?",
    answer:
      "Most full kitchen remodels take 10-14 weeks from demolition to final walkthrough. Smaller refreshes — like new countertops and a backsplash — can be completed in 3-4 weeks. We provide a detailed timeline during the design phase so you know exactly what to expect.",
  },
  {
    question: "What is the average cost of a high-end remodel?",
    answer:
      "High-end kitchen remodels in Southern New Hampshire typically range from $75,000 to $150,000 depending on scope, materials, and layout changes. We provide a transparent, line-item estimate so there are no surprises. Financing options are available.",
  },
  {
    question: "Do you handle all necessary permits?",
    answer:
      "Yes. We manage the entire permitting process including building, electrical, and plumbing permits. We work directly with local building departments in Bedford, Manchester, Nashua, and surrounding towns to ensure full code compliance.",
  },
  {
    question: "Can I live in my home during the renovation?",
    answer:
      "Absolutely. We set up dust barriers, maintain clean walkways, and work within defined hours to minimize disruption. Most homeowners set up a temporary kitchenette in another room. We'll help you plan for that during the design phase.",
  },
];

export default function KitchenRemodelingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <FadeIn>
                <span className="text-primary text-sm uppercase tracking-widest font-semibold">
                  Elite Residential Services
                </span>
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface mt-4">
                  Kitchen Remodeling
                </h1>
                <p className="mt-6 text-lg text-on-surface-variant max-w-lg leading-relaxed">
                  The kitchen is where your home comes alive. We design and build
                  kitchens that balance beauty with function — engineered for how
                  you actually live, cook, and gather.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button as="a" href="/contact">
                    Get Free Estimate
                  </Button>
                  <Button as="a" href={siteConfig.phoneHref} variant="secondary">
                    <span className="inline-flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {siteConfig.phone}
                    </span>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="relative rounded-xl aspect-[4/5] w-full overflow-hidden">
                  <Image src="/images/kitchen/hero.jpg" alt="Luxury kitchen with marble countertops" fill className="object-cover" priority sizes="50vw" />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-xl w-48 h-48 hidden md:block overflow-hidden">
                  <Image src="/images/kitchen/detail-hardware.jpg" alt="Custom brass cabinet hardware detail" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section bg="bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-widest font-semibold">
                Scope of Work
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mt-4">
                What&apos;s Included
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {includedItems.map((item, i) => (
              <FadeIn
                key={item.title}
                delay={i * 0.08}
                className={i >= 3 ? "md:translate-y-8" : ""}
              >
                <div className="bg-white rounded-xl border border-outline-variant p-8 h-full hover:-translate-y-1 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Timeline */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-widest font-semibold">
                How It Works
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mt-4">
                Our Proven Process
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-outline-variant" />

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <FadeIn key={step.number} delay={i * 0.12}>
                  <div className="relative text-center md:text-left">
                    <div className="relative z-10 w-24 h-24 rounded-full bg-primary-container flex items-center justify-center mx-auto md:mx-0 mb-6">
                      <span className="font-headline text-2xl font-extrabold text-on-primary-container">
                        {step.number}
                      </span>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                      {step.weeks}
                    </span>
                    <h3 className="font-headline text-xl font-bold text-on-surface mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section bg="bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="text-primary text-sm uppercase tracking-widest font-semibold">
              Portfolio
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mt-4 mb-12">
              Recent Transformation
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  This Bedford colonial received a complete kitchen overhaul —
                  from a dated galley layout to an open-concept showpiece with a
                  10-foot island, custom walnut cabinetry, and Calacatta quartz
                  surfaces throughout.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-xl aspect-square overflow-hidden">
                    <Image src="/images/kitchen/detail-marble.jpg" alt="Marble waterfall countertop edge detail" fill className="object-cover" sizes="25vw" />
                  </div>
                  <div className="bg-gradient-to-br from-surface-container to-surface-container-high rounded-xl aspect-square" />
                  <div className="bg-gradient-to-br from-surface-container to-surface-container-high rounded-xl aspect-square" />
                  <div className="bg-gradient-to-br from-surface-container to-surface-container-high rounded-xl aspect-square" />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative rounded-xl aspect-[3/4] h-full overflow-hidden">
                <Image src="/images/kitchen/completed.jpg" alt="Completed luxury kitchen remodel" fill className="object-cover" sizes="(max-width: 768px) 100vw, 58vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-primary text-sm uppercase tracking-widest font-semibold">
                Common Questions
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mt-4">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="bg-[#191c1e] rounded-xl p-10 md:p-16 text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Ready to Build the Heart of Your Home?
              </h2>
              <p className="text-white/70 mt-4 max-w-xl mx-auto">
                Schedule a free consultation and let us show you what a
                precision-built kitchen looks like.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button as="a" href="/contact" variant="white">
                  Get Free Estimate
                </Button>
                <Button as="a" href={siteConfig.phoneHref} variant="ghost">
                  <span className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {siteConfig.phone}
                  </span>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
