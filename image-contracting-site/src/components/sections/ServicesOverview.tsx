import Link from "next/link";
import { Home, ChefHat, Bath, PlusSquare, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";

const services = [
  {
    icon: Home,
    title: "Whole Home Remodeling",
    description:
      "Complete interior and exterior transformations that reimagine your living spaces from the ground up.",
    colSpan: "md:col-span-8",
  },
  {
    icon: ChefHat,
    title: "Kitchens",
    description:
      "Custom cabinetry, countertops, and layouts designed for how you actually cook and gather.",
    colSpan: "md:col-span-4",
  },
  {
    icon: Bath,
    title: "Bathrooms",
    description:
      "Spa-worthy retreats with premium tile, fixtures, and thoughtful storage solutions.",
    colSpan: "md:col-span-4",
  },
  {
    icon: PlusSquare,
    title: "Additions",
    description:
      "Seamless expansions that feel like they were always part of the original home.",
    colSpan: "md:col-span-4",
  },
];

export function ServicesOverview() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-primary text-sm uppercase tracking-widest font-semibold">
            Our Expertise
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mt-4 mb-12">
            Comprehensive Contracting Services
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-6">
          {services.map((service, i) => (
            <FadeIn
              key={service.title}
              delay={i * 0.1}
              className={`${service.colSpan} col-span-12`}
            >
              <div className="bg-white border border-outline-variant rounded-xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant">{service.description}</p>
              </div>
            </FadeIn>
          ))}

          {/* CTA tile */}
          <FadeIn delay={0.4} className="md:col-span-4 col-span-12">
            <div className="bg-primary text-white rounded-xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-xl font-bold mb-2">
                  Ready to start?
                </h3>
                <p className="text-white/80 mb-6">
                  Browse our full range of services and find the right fit for
                  your project.
                </p>
              </div>
              <Link href="/services" className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all">
                See all services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
