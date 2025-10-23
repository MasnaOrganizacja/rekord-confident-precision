import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VisualDividerProps {
  imageUrl: string;
}

export const VisualDivider = ({ imageUrl }: VisualDividerProps) => {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Multi-layer parallax with 3 different speeds
    if (layer1Ref.current) {
      gsap.to(layer1Ref.current, {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (layer2Ref.current) {
      gsap.to(layer2Ref.current, {
        y: -75,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (layer3Ref.current) {
      gsap.to(layer3Ref.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden">
      <div ref={layer1Ref} className="parallax-layer absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--deep-navy))/30] to-[hsl(var(--deep-navy))/50]" />
        <img 
          src={imageUrl}
          alt="Visual divider"
          className="w-full h-full object-cover"
        />
      </div>
      <div ref={layer2Ref} className="parallax-layer absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 border-4 border-[hsl(var(--electric-cyan))/30] rotate-45" />
      </div>
      <div ref={layer3Ref} className="parallax-layer absolute inset-0 flex items-center justify-center">
        <h3 className="text-6xl font-bold text-[hsl(var(--warm-white))] text-center">
          Dane. Technologia. Transformacja.
        </h3>
      </div>
    </div>
  );
};
