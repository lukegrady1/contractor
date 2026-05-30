import Image from "next/image";
import { Phone, ShieldCheck, MessageSquare, Sparkles, Award, FileCheck, Shield, MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Image Contracting — 15+ years of trusted home remodeling and general contracting in Southern New Hampshire.",
};

const values = [
  {
    icon: Award,
    title: "QUALITY",
    description:
      "Every cut, joint, and finish is held to a standard most contractors never reach. We don't chase speed — we chase precision.",
  },
  {
    icon: MessageSquare,
    title: "COMMUNICATION",
    description:
      "Weekly updates, real-time photo documentation, and a dedicated project manager who answers the phone when you call.",
  },
  {
    icon: Sparkles,
    title: "CLEANLINESS",
    description:
      "Daily cleanup, dust barriers on every job, and a final deep clean that leaves your home better than we found it.",
  },
  {
    icon: ShieldCheck,
    title: "WARRANTY",
    description:
      "Every project is backed by a comprehensive 2-year workmanship warranty. If something isn't right, we make it right — period.",
  },
];

const credentials = [
  {
    icon: FileCheck,
    label: siteConfig.license,
  },
  {
    icon: Shield,
    label: siteConfig.insurance,
  },
  {
    icon: Award,
    label: siteConfig.bbb,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <FadeIn>
                <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface">
                  Built on
                  <br />
                  <span className="text-primary">Trust</span>
                </h1>
                <p className="mt-6 text-lg text-on-surface-variant max-w-lg leading-relaxed">
                  For over 15 years, Image Contracting has been the builder
                  Southern New Hampshire homeowners trust with their most
                  important investment — their home. We combine old-school
                  craftsmanship with modern project management to deliver
                  results that speak for themselves.
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-5">
              <FadeIn delay={0.2}>
                <div className="relative">
                  <div className="relative rounded-xl aspect-[4/5] w-full overflow-hidden">
                    <Image src="/images/about/founder.jpg" alt="Image Contracting founder on construction site" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-primary-container rounded-xl px-6 py-4 shadow-lg">
                    <span className="font-headline text-2xl font-extrabold text-on-primary-container">
                      {siteConfig.stats.years}
                    </span>
                    <p className="text-sm text-on-primary-container/80 font-medium">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Company Story */}
      <Section bg="bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="text-primary text-sm uppercase tracking-widest font-semibold">
              Our Story
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mt-4 mb-12">
              The Image Standard
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={0.1}>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Image Contracting was founded in {siteConfig.founded} with a
                simple premise: homeowners deserve a contractor who shows up on
                time, communicates clearly, and builds things right the first
                time. What started as a two-person crew handling kitchen
                renovations in Bedford has grown into one of Southern New
                Hampshire&apos;s most respected general contracting firms.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Today we employ a full-time team of carpenters, project
                managers, and design consultants — backed by a curated network
                of licensed trade partners. We&apos;ve completed over{" "}
                {siteConfig.stats.projects} projects across the region, and our{" "}
                {siteConfig.stats.rating} rating reflects the standard we hold
                ourselves to on every single one.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm uppercase tracking-widest font-semibold">
                What We Stand For
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mt-4">
                Core Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-outline-variant p-8 h-full hover:-translate-y-1 transition-all duration-300 text-center">
                  <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-3 uppercase tracking-wider">
                    {value.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section bg="bg-[#2e3133]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-primary-container text-sm uppercase tracking-widest font-semibold">
                  Licensed & Insured
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-8">
                  Verified Authority
                </h2>

                <div className="space-y-6">
                  {credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <cred.icon className="w-6 h-6 text-primary-container" />
                      </div>
                      <span className="text-white font-medium text-lg">
                        {cred.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary-container" />
                  <h3 className="font-headline text-xl font-bold text-white">
                    Service Area
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-8">
                  {siteConfig.serviceAreaExtended}
                </p>
                <div className="relative rounded-xl aspect-[16/10] overflow-hidden">
                  <Image src="/images/about/service-area-map.jpg" alt="Service area map of Southern New Hampshire" fill className="object-cover" sizes="(max-width: 768px) 100vw, 58vw" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface">
                Ready to build something permanent?
              </h2>
              <p className="text-on-surface-variant mt-4 max-w-xl mx-auto text-lg">
                Let&apos;s talk about your project. No pressure, no obligation —
                just an honest conversation about what&apos;s possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
