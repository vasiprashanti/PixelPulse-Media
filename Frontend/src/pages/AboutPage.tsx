import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = ["Creative Visuals", "Strategic Thinking", "Data Insights", "Audience Behavior"];

const AboutPage = () => {
  const { isDark, toggle } = useTheme();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title
      gsap.from(".about-hero-title", { opacity: 0, y: 60, duration: 1, delay: 0.3 });
      gsap.from(".about-scroll-indicator", { opacity: 0, duration: 1, delay: 0.8 });

      // All reveal sections
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%", end: "top 50%", scrub: false },
          opacity: 0,
          y: 50,
          duration: 0.8,
        });
      });

      // Staggered lines
      gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((group) => {
        const lines = group.querySelectorAll(".stagger-line");
        gsap.from(lines, {
          scrollTrigger: { trigger: group, start: "top 80%" },
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.6,
        });
      });

      // Curiosity section heading
      gsap.from(".curiosity-heading", {
        scrollTrigger: { trigger: ".curiosity-section", start: "top 60%" },
        opacity: 0,
        y: 40,
        duration: 0.8,
      });
      gsap.from(".curiosity-sub", {
        scrollTrigger: { trigger: ".curiosity-section", start: "top 55%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
      });

      // Floating chat bubbles — staggered pop-in
      gsap.set(".floating-bubble", { opacity: 0, y: 80, scale: 0.8 });
      ScrollTrigger.create({
        trigger: ".curiosity-section",
        start: "top 40%",
        onEnter: () => {
          gsap.to(".floating-bubble", {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.35,
            duration: 0.6,
            ease: "back.out(1.4)",
          });
        },
        once: true,
      });

      // Big insight text
      gsap.from(".insight-text", {
        scrollTrigger: { trigger: ".insight-text", start: "top 80%", end: "top 40%", scrub: true },
        opacity: 0,
        scale: 0.85,
      });

      // Pillar cards — falling from above with bounce
      gsap.set(".pillar-card", { opacity: 0, y: -80 });
      ScrollTrigger.create({
        trigger: ".pillars-grid",
        start: "top 90%",
        onEnter: () => {
          gsap.to(".pillar-card", {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.9,
            ease: "bounce.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(".pillar-card", {
            opacity: 0,
            y: -80,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.in",
          });
        },
      });

      // Ending vision
      gsap.from(".vision-line", {
        scrollTrigger: { trigger: ".vision-section", start: "top 75%" },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.7,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative flex flex-col justify-center items-center min-h-screen px-[5vw] grid-bg">
        <div className="about-hero-title text-center">
          <p className="font-sans text-base text-muted-foreground mb-2">Welcome to</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.15]">
            Pixl<span className="text-primary">Pulse</span> Media
          </h1>
        </div>
        <div className="about-scroll-indicator absolute bottom-[6vh] animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* ── Story Begins ── */}
      <section className="py-[12vh] px-[5vw]">
        <div className="max-w-[700px] mx-auto text-center reveal-section">
          <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-6">
            Hi There!
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            We're a group of curious creators, marketers, and visual storytellers who noticed something interesting about brands online…
          </p>
        </div>
      </section>

      {/* ── Curiosity Section ── */}
      <section className="curiosity-section relative min-h-screen flex items-center justify-center px-[5vw] grid-bg overflow-hidden">
        <div className="text-center z-10">
          <h2 className="curiosity-heading font-display text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.15]">
            Everyone is Creating Content
          </h2>
          <p className="curiosity-sub text-muted-foreground text-lg sm:text-xl mt-4">
            But we were curious…
          </p>
        </div>

        {/* Floating bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-bubble absolute top-[15%] left-[6%] sm:left-[10%] max-w-[220px] sm:max-w-[260px] bg-card border-2 border-foreground dark:border-[#333] rounded-2xl px-5 py-4 shadow-[4px_4px_0_rgba(0,0,0,0.08)] dark:shadow-[4px_4px_0_rgba(0,0,0,0.4)]">
            <p className="text-muted-foreground text-sm sm:text-base">But we were curious…</p>
          </div>
          <div className="floating-bubble absolute bottom-[20%] left-[8%] sm:left-[18%] max-w-[220px] sm:max-w-[260px] bg-card border-2 border-foreground dark:border-[#333] rounded-2xl px-5 py-4 shadow-[4px_4px_0_rgba(0,0,0,0.08)] dark:shadow-[4px_4px_0_rgba(0,0,0,0.4)]">
            <p className="text-foreground text-sm sm:text-base font-medium">What makes people stop scrolling?</p>
          </div>
          <div className="floating-bubble absolute top-[22%] right-[6%] sm:right-[12%] max-w-[220px] sm:max-w-[260px] bg-card border-2 border-foreground dark:border-[#333] rounded-2xl px-5 py-4 shadow-[4px_4px_0_rgba(0,0,0,0.08)] dark:shadow-[4px_4px_0_rgba(0,0,0,0.4)]">
            <p className="text-foreground text-sm sm:text-base font-medium">What makes them remember a brand?</p>
          </div>
          <div className="floating-bubble absolute bottom-[12%] right-[8%] sm:right-[10%] max-w-[220px] sm:max-w-[260px] gradient-purple border-2 border-foreground dark:border-[#333] rounded-2xl px-5 py-4 shadow-[6px_6px_0_rgba(0,0,0,0.12)] dark:shadow-[6px_6px_0_rgba(0,0,0,0.6)]">
            <p className="text-primary-foreground text-sm sm:text-base font-bold">What makes attention turn into growth?</p>
          </div>
        </div>
      </section>

      {/* ── Story Continues ── */}
      <section className="py-[12vh] px-[5vw] bg-section">
        <div className="max-w-[700px] mx-auto reveal-section space-y-6">
          <h2 className="font-display text-[2rem] sm:text-[3rem] font-bold text-primary leading-[1.15]">
            That curiosity led to PixlPulse Media
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg italic">
            Fueled by creativity and constant learning
          </p>
          <p className="text-foreground text-base sm:text-lg leading-relaxed">
            We started building—not just campaigns, not just posts, but <span className="font-semibold">visual identity</span>, <span className="font-semibold">digital presence</span>, and <span className="font-semibold">brand momentum</span>. We explored industries, studied markets, observed audience behavior, and understood one powerful thing:
          </p>
        </div>
      </section>

      {/* ── Insight Moment + We Combine ── */}
      <section className="py-[12vh] px-[5vw] grid-bg">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="insight-text font-display text-[clamp(1.8rem,5vw,4rem)] font-bold text-primary leading-[1.1]">
            Attention drives everything.
          </h2>

          <div className="reveal-section mt-6">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              But how can your brand drive the attention it deserves? We don't just market brands — we understand the psychology behind why customers choose one brand or service over others.
            </p>
          </div>

          <h2 className="text-primary text-[2.5rem] lg:text-[3.5rem] font-bold font-display mt-10">
            We combine
          </h2>
        </div>

        <div className="pillars-grid max-w-[900px] mx-auto flex flex-col sm:flex-row gap-6 lg:gap-8 mt-12">
          {pillars.map((title) => (
            <div
              key={title}
              className="pillar-card flex-1 flex items-center justify-center bg-card p-8 border-2 border-foreground dark:border-[#333] shadow-[8px_8px_0_rgba(0,0,0,0.12)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[12px_12px_0_rgba(0,0,0,0.15)] dark:hover:shadow-[12px_12px_0_rgba(0,0,0,0.8)]"
            >
              <h3 className="text-primary text-[1.2rem] sm:text-[1.3rem] font-display font-bold text-center">
                {title}
              </h3>
            </div>
          ))}
        </div>

        <div className="max-w-[700px] mx-auto mt-12 reveal-section">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center">
            to help brands stand out in a crowded digital world.
          </p>
        </div>
      </section>

      {/* ── Why We Exist ── */}
      <section className="py-[12vh] px-[5vw] bg-section">
        <div className="max-w-[700px] mx-auto space-y-12">
          <div className="reveal-section">
            <p className="text-foreground text-2xl sm:text-3xl font-display font-bold">
              Because every brand has a story.
            </p>
            <p className="text-muted-foreground text-lg mt-3">
              But not every brand knows how to show it.
            </p>
          </div>

          <div className="reveal-section border-l-2 border-primary pl-6">
            <p className="text-foreground text-base sm:text-lg leading-relaxed">
              That's where we come in. PixlPulse helps businesses transform ideas into digital presence — the kind people <span className="font-semibold">notice</span>, <span className="font-semibold">remember</span>, and <span className="font-semibold">trust</span>.
            </p>
          </div>

          <div className="reveal-stagger space-y-3">
            <p className="stagger-line text-muted-foreground text-lg">
              So whether you're starting from zero
            </p>
            <p className="stagger-line text-muted-foreground text-lg">
              Or ready to scale your brand further
            </p>
            <p className="stagger-line text-foreground text-xl font-display font-bold mt-2">
              We're here to help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* ── Ending Vision ── */}
      <section className="vision-section min-h-[50vh] flex flex-col items-center justify-center px-[5vw] grid-bg">
        <p className="vision-line font-display text-2xl sm:text-3xl font-bold text-center">
          Pixl<span className="text-primary">Pulse</span> Media
        </p>
        <div className="vision-line w-16 h-[2px] bg-primary my-6" />
        <p className="vision-line text-muted-foreground text-lg sm:text-xl text-center">
          Turning attention into growth.
        </p>
      </section>

      <Footer />
      <ThemeToggle isDark={isDark} toggle={toggle} />
    </div>
  );
};

export default AboutPage;