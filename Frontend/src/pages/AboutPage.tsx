import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";

const founders = [
  {
    name: "Surya",
    role: "Co-Founder",
    focus: "Strategy & Growth",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Dheeraj",
    role: "Co-Founder",
    focus: "Creative & Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

const AboutPage = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-[20vh] pb-[10vh] px-[5vw]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-primary text-[2.3rem] sm:text-[3rem] font-bold font-display mb-6">
            End-to-End Digital Marketing for the Modern Market
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            PixelPulse Media provides structured digital marketing solutions designed for modern digital markets consumed by millions.
            We combine strategy, performance advertising, SEO, creative production, and analytics to help brands grow online.
          </p>
        </div>
      </section>

      <section className="py-[8vh] px-[5vw] bg-section">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-primary text-[2rem] font-bold font-display mb-10 text-center">Our Team</h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {founders.map((f) => (
              <div
                key={f.name}
                className="flex-1 max-w-[350px] mx-auto bg-card rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="w-full h-[280px] overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{f.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-1">{f.role}</p>
                  <p className="text-muted-foreground text-sm">{f.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ThemeToggle isDark={isDark} toggle={toggle} />
    </div>
  );
};

export default AboutPage;
