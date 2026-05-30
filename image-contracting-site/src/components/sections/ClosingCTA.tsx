import Link from "next/link";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

export function ClosingCTA() {
  return (
    <section className="px-5 md:px-16 mb-[120px]">
      <div className="bg-primary text-white rounded-3xl py-20 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Ready to transform your home?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Let&apos;s talk about your project. Get a free, no-obligation
              estimate and see why homeowners across Southern New Hampshire trust
              Image Contracting.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="white" size="lg">
                  Get a Free Estimate
                </Button>
              </Link>
              <Button
                as="a"
                href={siteConfig.phoneHref}
                variant="ghost"
                size="lg"
              >
                Call {siteConfig.phone}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
