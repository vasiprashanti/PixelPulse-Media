import { useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServicesSection from "@/components/ServicesSection";
import PlansSection from "@/components/PlansSection";
import ProcessSection from "@/components/ProcessSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { isDark, toggle } = useTheme();

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onScrollTo={scrollTo} />
      <Hero onScrollTo={scrollTo} />
      <Marquee />
      <ServicesSection />
      <PlansSection />
      <ProcessSection />
      <LeadCaptureForm />
      <Footer />
      <ThemeToggle isDark={isDark} toggle={toggle} />
    </div>
  );
};

export default Index;
