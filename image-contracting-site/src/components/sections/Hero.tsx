import Image from "next/image";
import Link from "next/link";
import { Shield } from "lucide-react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <Section className="min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center max-w-7xl mx-auto w-full">
        {/* Left content */}
        <div className="md:col-span-5 flex flex-col gap-8">
          <FadeIn direction="up">
            <h1 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tight text-on-surface">
              Built right.
              <br />
              Finished clean.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <p className="text-lg text-on-surface-variant max-w-md">
              Full-service remodeling and contracting for homes across Bedford,
              New Hampshire and the surrounding area.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get a Free Estimate
                </Button>
              </Link>
              <Button as="a" href={siteConfig.phoneHref} variant="secondary" size="lg">
                Call {siteConfig.phone}
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                Licensed and insured. {siteConfig.stats.years} years.
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right image */}
        <div className="md:col-span-7 relative">
          <FadeIn direction="left" delay={0.2}>
            <div className="md:rotate-2 rounded-2xl shadow-xl overflow-hidden relative w-full h-[400px] md:h-[600px]">
              <Image
                src="/images/home/hero-kitchen.jpg"
                alt="Luxury kitchen renovation by Image Contracting"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>

            {/* Floating card */}
            <div className="absolute bottom-6 left-0 md:-left-6 bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3">
              <span className="text-3xl font-headline font-extrabold text-primary">
                {siteConfig.stats.satisfaction}
              </span>
              <span className="text-sm text-on-surface-variant font-semibold leading-tight">
                Satisfaction
                <br />
                Guarantee
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
