import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Our Services",
  description:
    "From kitchen remodeling to commercial build-outs, Image Contracting delivers precision craftsmanship across every project type in Southern New Hampshire.",
};

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Custom cabinetry, premium countertops, and layouts engineered for how you actually cook and gather. We handle every detail from demolition to final trim.",
    href: "/services/kitchen-remodeling",
    cta: "EXPLORE KITCHENS",
    colSpan: "md:col-span-7",
    imageAspect: "aspect-[4/3]",
    image: "/images/services/kitchen.jpg",
    alt: "Modern luxury kitchen remodel",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Spa-worthy retreats with premium tile, frameless glass, and thoughtful storage solutions that transform your daily routine.",
    href: "/services",
    cta: "EXPLORE BATHROOMS",
    colSpan: "md:col-span-5",
    imageAspect: "aspect-square",
    image: "/images/services/bathroom.jpg",
    alt: "Spa-like master bathroom renovation",
  },
  {
    title: "Home Additions",
    description:
      "Seamless expansions that feel like they were always part of the original home. From sunrooms to full second stories.",
    href: "/services",
    cta: "EXPLORE ADDITIONS",
    colSpan: "md:col-span-4",
    imageAspect: "aspect-[4/3]",
    image: "/images/services/additions.jpg",
    alt: "Modern home addition with glass panels",
  },
  {
    title: "Roofing & Exteriors",
    description:
      "Architectural shingles, standing seam metal, fiber cement siding, and complete exterior envelope solutions built to endure New England weather.",
    href: "/services",
    cta: "EXPLORE ROOFING",
    colSpan: "md:col-span-8",
    imageAspect: "aspect-[16/9]",
    horizontal: true,
    image: "/images/services/roofing.jpg",
    alt: "Architectural roofing and siding",
  },
  {
    title: "Decks & Outdoor Living",
    description:
      "Composite and hardwood decks, covered patios, outdoor kitchens, and three-season rooms that extend your living space into the landscape.",
    href: "/services",
    cta: "EXPLORE OUTDOOR",
    colSpan: "md:col-span-6",
    imageAspect: "aspect-[4/3]",
    image: "/images/services/decks.jpg",
    alt: "Custom composite deck with cable railing",
  },
  {
    title: "Commercial Build-Outs",
    description:
      "Office renovations, retail fit-outs, and tenant improvements delivered on schedule and on budget. Fully licensed for commercial work in New Hampshire.",
    href: "/services",
    cta: "EXPLORE COMMERCIAL",
    colSpan: "md:col-span-6",
    imageAspect: "aspect-[4/3]",
    image: "/images/services/commercial.jpg",
    alt: "Modern commercial office interior",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-on-surface uppercase">
              OUR SERVICES
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Precision engineering meets refined craftsmanship. Every project we
              take on is built to the Image Standard — no shortcuts, no
              compromise.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Bento Grid */}
      <Section className="pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-6">
            {services.map((service, i) => (
              <FadeIn
                key={service.title}
                delay={i * 0.08}
                className={`${service.colSpan} col-span-12`}
              >
                <div className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full group">
                  {service.horizontal ? (
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="relative aspect-[4/3] md:aspect-auto">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                            {service.title}
                          </h3>
                          <p className="text-on-surface-variant">
                            {service.description}
                          </p>
                        </div>
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-primary font-semibold mt-6 group-hover:gap-3 transition-all text-sm uppercase tracking-wider"
                        >
                          {service.cta}{" "}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        className={`relative overflow-hidden ${service.imageAspect}`}
                      >
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                          {service.title}
                        </h3>
                        <p className="text-on-surface-variant mb-6">
                          {service.description}
                        </p>
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all text-sm uppercase tracking-wider"
                        >
                          {service.cta}{" "}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Band */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="bg-primary-container rounded-xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-primary-container">
                  Ready to Build Your Vision?
                </h2>
                <p className="text-on-primary-container/80 mt-3 max-w-lg">
                  Tell us about your project and get a detailed estimate within
                  48 hours. No pressure, no obligation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Button as="a" href="/contact" variant="secondary">
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
