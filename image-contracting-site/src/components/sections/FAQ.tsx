"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import FadeIn from "@/components/motion/FadeIn";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <FadeIn key={i} delay={i * 0.08}>
          <div className="border border-outline-variant rounded-xl overflow-hidden bg-white">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
            >
              <span className="font-headline text-lg font-bold text-on-surface pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-on-surface-variant shrink-0 transition-transform duration-300",
                  openIndex === i && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
