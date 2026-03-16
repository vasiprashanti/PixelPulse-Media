import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const Hero = ({ onScrollTo }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { opacity: 0, y: 40, duration: 0.8, delay: 0.2 });
      gsap.from(".hero-sub", { opacity: 0, y: 30, duration: 0.8, delay: 0.4 });
      gsap.from(".hero-cta", { opacity: 0, y: 20, duration: 0.8, delay: 0.6 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col justify-center items-start min-h-screen px-[5vw] pt-[10vh] pb-[5vh] grid-bg"
    >
      <h1 className="hero-title font-display text-[2.3rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.2] mb-[1.5vh]">
        Structured Strategies for{" "}
        <br className="hidden sm:block" />
        Modern Marketing.
      </h1>
      <p className="hero-sub text-muted-foreground text-base sm:text-lg lg:text-xl mb-[3vh] max-w-[90%]">
        PixelPulse Media builds structured digital marketing strategies combining SEO, paid ads, content marketing, and visual production.
      </p>
      <div className="hero-cta flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <button
          onClick={() => onScrollTo("plans")}
          className="py-3 px-6 gradient-purple text-primary-foreground font-semibold transition-all hover:brightness-110 text-center border-2 border-foreground dark:border-[#333]"
        >
          View Plans
        </button>
        <button
          onClick={() => onScrollTo("services")}
          className="py-3 px-6 border-2 border-foreground dark:border-[#333] font-semibold transition-all hover:bg-foreground hover:text-background text-center"
        >
          View Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
