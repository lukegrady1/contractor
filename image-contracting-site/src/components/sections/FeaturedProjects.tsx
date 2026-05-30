import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/motion/FadeIn";

const projects = [
  {
    title: "Minimalist Master Bath",
    location: "Bedford",
    image: "/images/home/project-bath.jpg",
    alt: "Minimalist master bathroom renovation",
  },
  {
    title: "Great Room Expansion",
    location: "Manchester",
    image: "/images/home/project-living.jpg",
    alt: "Great room expansion with vaulted ceilings",
  },
  {
    title: "Culinary Suite",
    location: "Amherst",
    image: "/images/home/project-kitchen.jpg",
    alt: "Chef's kitchen with custom cabinetry",
  },
  {
    title: "Modern Facade Reveal",
    location: "Nashua",
    image: "/images/home/project-exterior.jpg",
    alt: "Modern exterior home renovation",
  },
];

export function FeaturedProjects() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <FadeIn>
            <span className="text-primary text-sm uppercase tracking-widest font-semibold">
              Our Portfolio
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mt-4">
              Crafting excellence in every detail.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <Link href="/projects" className="group block">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                  {project.location}
                </span>
                <h3 className="font-headline text-lg font-bold text-on-surface mt-1">
                  {project.title}
                </h3>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
