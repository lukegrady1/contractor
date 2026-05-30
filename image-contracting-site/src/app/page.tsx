import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ImageStandard } from "@/components/sections/ImageStandard";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <ImageStandard />
      <FeaturedProjects />
      <ProcessSteps />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
