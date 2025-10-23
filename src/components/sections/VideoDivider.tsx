import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const VideoDivider = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current) return;

    gsap.to(videoRef.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div ref={videoRef} className="absolute inset-0 parallax-layer">
        {/* Video placeholder - in production, replace with actual video */}
        <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--deep-navy))] to-[hsl(var(--near-black))]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-[hsl(var(--deep-navy))/50]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10">
          <h3 className="text-6xl lg:text-8xl font-bold text-[hsl(var(--warm-white))] mb-6">
            Tworzymy oprogramowanie
          </h3>
          <h3 className="text-6xl lg:text-8xl font-bold text-[hsl(var(--electric-cyan))]">
            dla ludzi. Z ludźmi.
          </h3>
        </div>
      </div>
    </section>
  );
};
