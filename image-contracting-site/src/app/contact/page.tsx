import Image from "next/image";
import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.businessName} for a free estimate. General contracting and remodeling in Southern New Hampshire.`,
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: siteConfig.hours.weekday,
    subValue: siteConfig.hours.saturday,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: siteConfig.serviceArea,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface uppercase max-w-4xl">
              STRATEGIC PLANNING FOR SUPERIOR CRAFTSMANSHIP.
            </h1>
            <p className="text-on-surface-variant text-lg mt-6 max-w-2xl">
              Tell us about your project and get a detailed estimate. Our team
              responds within 24 hours to schedule your free consultation.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Form + Info Grid */}
      <Section bg="bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left - Contact Form */}
            <FadeIn className="lg:col-span-7">
              <ContactForm />
            </FadeIn>

            {/* Right - Contact Info */}
            <FadeIn delay={0.2} className="lg:col-span-5">
              <div className="bg-white border border-outline-variant rounded-xl p-8 mb-6">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-6 uppercase tracking-wider">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-on-surface font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-on-surface font-medium">
                            {item.value}
                          </p>
                        )}
                        {item.subValue && (
                          <p className="text-on-surface-variant text-sm mt-0.5">
                            {item.subValue}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="relative border border-outline-variant rounded-xl h-64 overflow-hidden">
                <Image src="/images/contact-map.jpg" alt="Bedford New Hampshire service area map" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA Band */}
      <Section bg="bg-on-surface">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
              Integrity in Every Inch.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href={siteConfig.phoneHref} variant="white" size="lg">
                Call {siteConfig.phone}
              </Button>
              <Button as="a" href="#" variant="ghost" size="lg">
                View Our Projects
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
