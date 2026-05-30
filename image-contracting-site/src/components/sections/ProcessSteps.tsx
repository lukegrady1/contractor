import Section from "@/components/ui/Section";
import FadeIn from "@/components/motion/FadeIn";

const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "We meet at your home to discuss your vision, walk the space, and understand your goals and budget.",
  },
  {
    number: "02",
    title: "Estimate",
    description:
      "You receive a detailed, transparent proposal with clear pricing, timelines, and material selections.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team executes with precision, keeping you updated daily and your home clean throughout.",
  },
  {
    number: "04",
    title: "Walkthrough",
    description:
      "We walk every detail together. The job isn't done until you're completely satisfied.",
  },
];

export function ProcessSteps() {
  return (
    <Section bg="bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm uppercase tracking-widest font-semibold">
              How It Works
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-surface mt-4 mb-4">
              Your path to a better home.
            </h2>
            <p className="text-on-surface-variant text-lg">
              A straightforward process designed to keep your project on track
              and stress-free.
            </p>
          </div>
        </FadeIn>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-outline-variant" />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="bg-white border border-outline-variant rounded-xl p-8 relative text-center">
                <span className="font-headline text-6xl font-extrabold text-primary/10 block mb-2">
                  {step.number}
                </span>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
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
    </Section>
  );
}
