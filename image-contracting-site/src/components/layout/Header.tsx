"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <Link href="/" className="font-headline text-headline-md tracking-tight uppercase text-on-surface">
            Image Contracting
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-body-md transition-colors",
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-on-surface-variant hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Phone - desktop only */}
            <a
              href={siteConfig.phoneHref}
              className="hidden lg:flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-primary-container text-on-primary-container px-5 py-2.5 rounded-xl text-label-lg font-medium transition-colors hover:opacity-90"
            >
              Get a Free Estimate
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
