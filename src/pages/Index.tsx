import { useEffect, useRef } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { CoreOfferings } from "@/components/sections/CoreOfferings";
import { RekordDifference } from "@/components/sections/RekordDifference";
import { BlogPreview } from "@/components/sections/BlogPreview";

import { DeepDiveERP } from "@/components/sections/DeepDiveERP";
import { DeepDiveRatusz } from "@/components/sections/DeepDiveRatusz";
import { OurHistory } from "@/components/sections/OurHistory";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { VideoDivider } from "@/components/sections/VideoDivider";
import { ValuesCSR } from "@/components/sections/ValuesCSR";
import { OurTeam } from "@/components/sections/OurTeam";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Lenis from "@studio-freight/lenis";

const Index = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <CoreOfferings />
      <BlogPreview />
      <RekordDifference />
      <DeepDiveERP />
      <DeepDiveRatusz />
      <OurHistory />
      <CaseStudies />
      <Testimonials />
      <VideoDivider />
      <ValuesCSR />
      <OurTeam />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;
