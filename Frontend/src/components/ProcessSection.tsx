import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/data/processSteps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".step-card-el");

      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 70%",
          onEnter: () => setActiveStep(i),
          onLeaveBack: () => setActiveStep(Math.max(0, i - 1)),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const fillPercent = ((activeStep + 1) / processSteps.length) * 100;

  return (
    <section id="process" ref={sectionRef} className="py-[8vh] px-[5vw] bg-section relative">
      <h2 className="text-primary text-[2.5rem] font-bold font-display mb-6">Process</h2>
      <p className="text-muted-foreground max-w-[600px] mb-12">
        A structured approach to building effective marketing systems.
      </p>

      <div className="relative w-full">
        {/* Lines - desktop only */}
        <div className="hidden sm:block absolute top-1/2 w-full h-1 rounded bg-border -translate-y-1/2 z-0" />
        <div
          className="hidden sm:block absolute top-1/2 h-1 rounded bg-primary -translate-y-1/2 z-0 transition-all duration-300"
          style={{ width: `${fillPercent}%` }}
        />

        <div className="flex flex-col sm:flex-row justify-between gap-8 relative z-10">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`step-card-el flex-1 bg-card p-8 border-2 border-foreground dark:border-[#333] shadow-[8px_8px_0_rgba(0,0,0,0.12)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.6)] text-left transition-all duration-300 ${
                i <= activeStep
                  ? "opacity-100 sm:-translate-y-[6px] shadow-[12px_12px_0_rgba(0,0,0,0.15)] dark:shadow-[12px_12px_0_rgba(0,0,0,0.8)]"
                  : "opacity-40 grayscale-[80%]"
              }`}
            >
              <div className="text-primary text-[2.5rem] font-bold font-display mb-3">{step.number}</div>
              <div className="text-lg font-semibold font-display mb-2 dark:text-primary">{step.title}</div>
              <div className="text-muted-foreground text-[0.95rem] leading-relaxed">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
