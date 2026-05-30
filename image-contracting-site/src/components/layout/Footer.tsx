import Link from "next/link";
import { Globe, Camera, Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-container border-t border-outline-variant">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo + Tagline */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="font-headline text-headline-sm uppercase tracking-tight text-on-surface"
            >
              Image Contracting
            </Link>
            <p className="mt-3 text-body-md text-on-surface-variant max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-body-sm text-on-surface-variant">
              {siteConfig.trade}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Website"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-headline text-title-sm uppercase tracking-wide text-on-surface mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {siteConfig.footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-headline text-title-sm uppercase tracking-wide text-on-surface mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {siteConfig.footerCompany.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location + Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-headline text-title-sm uppercase tracking-wide text-on-surface mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-on-surface-variant shrink-0" />
                <div>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-body-md text-on-surface hover:text-primary transition-colors font-medium"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-on-surface-variant shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-on-surface-variant shrink-0" />
                <div className="text-body-md text-on-surface-variant">
                  <p>{siteConfig.hours.weekday}</p>
                  <p>{siteConfig.hours.saturday}</p>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-body-sm text-on-surface-variant">
              Serving {siteConfig.serviceArea}
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-outline-variant">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-body-sm text-on-surface-variant">
          <p>&copy; {year} {siteConfig.businessName}. All rights reserved.</p>
          <p>{siteConfig.license} &middot; {siteConfig.insurance}</p>
        </div>
      </div>
    </footer>
  );
}
