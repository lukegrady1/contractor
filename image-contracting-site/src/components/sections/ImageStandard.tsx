import Section from "@/components/ui/Section";
import FadeIn from "@/components/motion/FadeIn";

const values = [
  {
    title: "On-Time",
    description:
      "We set realistic timelines and stick to them. You'll always know where your project stands.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Detailed estimates up front with no hidden fees. Change orders are documented and approved before work begins.",
  },
  {
    title: "Clean Job Sites",
    description:
      "Daily cleanup is non-negotiable. Your home stays livable throughout the entire project.",
  },
  {
    title: "Warrantied Work",
    description:
      "Every project is backed by our craftsmanship warranty. We stand behind what we build.",
  },
];

export function ImageStandard() {
  return (
    <Section bg="bg-[#191c1e]" className="text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-16">
        {/* Left column */}
        <FadeIn direction="up" className="md:col-span-1">
          <span className="text-primary text-sm uppercase tracking-widest font-semibold">
            Our Promise
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mt-4 mb-6">
            The Image Standard
          </h2>
          <p className="text-white/60 leading-relaxed">
            We hold ourselves to a higher standard on every job. These are the
            commitments that set Image Contracting apart.
          </p>
        </FadeIn>

        {/* Right grid */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="border-t-4 border-primary pt-6">
                <h3 className="font-headline text-lg font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
