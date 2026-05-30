import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Read what our clients say about ${siteConfig.businessName}. 5-star rated general contracting and remodeling in Southern New Hampshire.`,
};

const reviews = [
  {
    name: "Robert Harrison",
    location: "Bedford, NH",
    quote:
      "The kitchen remodel exceeded all our expectations. The attention to detail in the custom cabinetry was truly exceptional.",
  },
  {
    name: "Sarah Jenkins",
    location: "Manchester, NH",
    quote:
      "Professional from start to finish. They handled our commercial office expansion with precision and finished ahead of schedule.",
  },
  {
    name: "David Miller",
    location: "Amherst, NH",
    quote:
      "Finding a contractor you can trust is hard. Image Contracting made the process easy and the results are structural perfection.",
  },
  {
    name: "Elena Rossi",
    location: "Nashua, NH",
    quote:
      "Transparent pricing and high-end craftsmanship. They turned our dated basement into the focal point of our home.",
  },
  {
    name: "Mark Stevens",
    location: "Bedford, NH",
    quote:
      "They respected our timeline and our budget. The site was kept clean and the crew was incredibly professional every day.",
  },
  {
    name: "Jessica Thorne",
    location: "Londonderry, NH",
    quote:
      "Incredible attention to detail on our custom home build. I would highly recommend Image Contracting for any large-scale project.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <Section>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="text-primary text-sm uppercase tracking-widest font-semibold">
              Client Testimonials
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface mt-4 uppercase">
              WHAT OUR CLIENTS SAY
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Our reputation is built on trust, transparency, and exceptional
              craftsmanship. Here&apos;s what homeowners and businesses across
              Southern New Hampshire have to say about working with{" "}
              {siteConfig.businessName}.
            </p>
            <Link
              href={siteConfig.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              VIEW OUR GOOGLE REVIEWS <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* Review Grid */}
      <Section bg="bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <FadeIn key={review.name} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-xl border border-outline-variant h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 text-primary fill-primary"
                      />
                    ))}
                  </div>
                  <blockquote className="italic text-on-surface-variant leading-relaxed flex-1">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-outline-variant mt-6 pt-6">
                    <p className="font-headline text-sm font-bold uppercase tracking-wider text-on-surface">
                      {review.name}
                    </p>
                    <p className="text-on-surface-variant text-sm">
                      {review.location}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="bg-primary-container">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-on-primary-container uppercase mb-8">
              READY TO START YOUR PROJECT?
            </h2>
            <div className="grid grid-cols-2 max-w-md mx-auto gap-8 mb-10">
              <div>
                <p className="font-headline text-4xl font-extrabold text-on-primary-container">
                  {siteConfig.stats.years}
                </p>
                <p className="text-on-primary-container/80 text-sm uppercase tracking-wider mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-headline text-4xl font-extrabold text-on-primary-container">
                  {siteConfig.stats.projects}
                </p>
                <p className="text-on-primary-container/80 text-sm uppercase tracking-wider mt-1">
                  Projects Completed
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="/contact" variant="white" size="lg">
                Get a Free Estimate
              </Button>
              <Button
                as="a"
                href={`tel:${siteConfig.phone}`}
                variant="ghost"
                size="lg"
              >
                Call {siteConfig.phone}
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
