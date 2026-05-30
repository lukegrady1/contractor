import Link from "next/link";
import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ReviewCTA() {
  return (
    <Link
      href={siteConfig.googleReviewLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
    >
      <Star className="w-4 h-4 text-primary fill-primary" />
      Leave us a Review
    </Link>
  );
}
