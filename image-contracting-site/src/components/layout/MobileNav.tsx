"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw] bg-surface shadow-xl transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-outline-variant">
          <span className="font-headline text-title-md uppercase tracking-tight text-on-surface">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="px-6 py-6 flex flex-col gap-1">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block py-3 px-4 rounded-lg text-body-lg transition-colors",
                  isActive
                    ? "text-primary bg-primary/8 font-medium"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-outline-variant space-y-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-3 text-body-lg text-on-surface-variant hover:text-primary transition-colors"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phone}
          </a>

          <Link
            href="/contact"
            className="block w-full text-center bg-primary-container text-on-primary-container px-5 py-3 rounded-xl text-label-lg font-medium transition-colors hover:opacity-90"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </>
  );
}
