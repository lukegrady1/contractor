import { Shield, Clock, CheckCircle, Star, Gavel } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

const items = [
  { icon: Gavel, label: "Licensed" },
  { icon: Shield, label: "Insured" },
  { icon: Clock, label: "15+ Years" },
  { icon: CheckCircle, label: "500+ Projects" },
  { icon: Star, label: "5-Star Rated", showStars: true },
];

export function TrustStrip() {
  return (
    <section className="bg-surface-container py-12 px-5 md:px-16">
      <FadeIn>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              {item.showStars ? (
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                    />
                  ))}
                </div>
              ) : (
                <item.icon className="w-7 h-7 text-on-surface" />
              )}
              <span className="text-xs uppercase tracking-widest font-semibold text-on-surface">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
