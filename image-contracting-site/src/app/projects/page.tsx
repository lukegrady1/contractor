"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

const categories = [
  "All",
  "Kitchens",
  "Bathrooms",
  "Additions",
  "Roofing",
  "Exteriors",
  "Commercial",
] as const;

type Category = (typeof categories)[number];

const projects = [
  {
    title: "The Bedford Contemporary Kitchen",
    category: "Kitchens" as Category,
    description:
      "A complete gut renovation transforming a dated galley kitchen into an open-concept showpiece with a 10-foot waterfall island and custom walnut cabinetry.",
    colSpan: "md:col-span-8",
    imageAspect: "aspect-[16/10]",
    image: "/images/projects/bedford-kitchen.jpg",
    alt: "The Bedford Contemporary Kitchen renovation",
  },
  {
    title: "Apex Office Plaza",
    category: "Commercial" as Category,
    description:
      "Full interior build-out for a 12,000 sq ft Class A office space in Manchester.",
    colSpan: "md:col-span-4",
    imageAspect: "aspect-square",
    image: "/images/projects/apex-office.jpg",
    alt: "Apex Office Plaza commercial build-out",
  },
  {
    title: "Slate & Oak Master Spa",
    category: "Bathrooms" as Category,
    description:
      "A luxury primary bathroom with heated porcelain floors, frameless glass enclosure, and freestanding soaking tub.",
    colSpan: "md:col-span-4",
    imageAspect: "aspect-square",
    image: "/images/projects/slate-oak-spa.jpg",
    alt: "Slate and oak master spa bathroom",
  },
  {
    title: "Glass Sunroom Extension",
    category: "Additions" as Category,
    description:
      "A three-season sunroom addition with floor-to-ceiling glazing and a vaulted cedar ceiling.",
    colSpan: "md:col-span-4",
    imageAspect: "aspect-square",
    image: "/images/projects/glass-sunroom.jpg",
    alt: "Glass sunroom extension at dusk",
  },
  {
    title: "Charcoal Standing Seam",
    category: "Roofing" as Category,
    description:
      "Full standing seam metal roof installation in charcoal finish with integrated snow guards.",
    colSpan: "md:col-span-4",
    imageAspect: "aspect-square",
    image: "/images/projects/charcoal-roof.jpg",
    alt: "Charcoal standing seam metal roof",
  },
  {
    title: "The Granite Ridge Estate",
    category: "Exteriors" as Category,
    description:
      "Complete exterior transformation — fiber cement siding, architectural trim, new windows, and a redesigned front entry with stone veneer columns.",
    colSpan: "md:col-span-12",
    imageAspect: "aspect-[21/9]",
    image: "/images/projects/granite-ridge.jpg",
    alt: "The Granite Ridge Estate exterior renovation",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-16">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="text-primary text-sm uppercase tracking-widest font-semibold">
              Portfolio
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-on-surface uppercase mt-4">
              OUR WORK
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Every project tells a story of precision, collaboration, and
              craftsmanship. Browse our portfolio to see the Image Standard in
              action.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Filter Bar + Grid */}
      <Section className="pt-0">
        <div className="max-w-7xl mx-auto">
          {/* Filter Pills */}
          <FadeIn>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer",
                    activeCategory === cat
                      ? "bg-[#191c1e] text-white"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-12 gap-6">
            {filteredProjects.map((project, i) => (
              <FadeIn
                key={project.title}
                delay={i * 0.06}
                className={`${project.colSpan} col-span-12`}
              >
                <div className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div
                    className={cn(
                      "relative bg-surface-container",
                      project.imageAspect
                    )}
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes={
                        project.colSpan === "md:col-span-12"
                          ? "100vw"
                          : project.colSpan === "md:col-span-8"
                            ? "(max-width: 768px) 100vw, 66vw"
                            : "(max-width: 768px) 100vw, 33vw"
                      }
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                      {project.category}
                    </span>
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface mt-2 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <FadeIn>
              <div className="text-center py-20">
                <p className="text-on-surface-variant text-lg">
                  No projects found in this category yet. Check back soon.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="bg-primary-container rounded-xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-primary-container">
                  Ready to Build Your Vision?
                </h2>
                <p className="text-on-primary-container/80 mt-3 max-w-lg">
                  Your project could be next. Tell us what you have in mind and
                  get a detailed estimate within 48 hours.
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
