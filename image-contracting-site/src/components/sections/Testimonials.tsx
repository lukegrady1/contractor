"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/motion/FadeIn";

const testimonials = [
  {
    quote:
      "Image Contracting transformed our outdated kitchen into a space we actually love spending time in. The attention to detail was remarkable.",
    name: "Sarah & Tom M.",
    location: "Bedford, NH",
  },
  {
    quote:
      "From the first consultation to the final walkthrough, everything was professional and on schedule. They treated our home like it was their own.",
    name: "David L.",
    location: "Manchester, NH",
  },
  {
    quote:
      "We've worked with other contractors before, but Image is on another level. Clean, communicative, and the craftsmanship speaks for itself.",
    name: "Jennifer K.",
    location: "Amherst, NH",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <Quote className="w-12 h-12 text-primary mx-auto mb-8" />
        </FadeIn>

        <div className="relative min-h-[200px]">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`transition-opacity duration-500 ${
                i === current
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0"
              }`}
            >
              <blockquote className="font-headline text-2xl md:text-3xl font-medium italic text-on-surface leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                  {testimonial.name}
                </span>
                <p className="text-on-surface-variant text-sm mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-8"
                  : "bg-outline-variant hover:bg-on-surface-variant"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
