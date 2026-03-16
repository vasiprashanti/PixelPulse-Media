import { plans } from "@/data/plans";

const PlansSection = () => {
  const handleGetStarted = (planName: string) => {
    const message = encodeURIComponent(
      `Hi, I wanted to know about your ${planName} plan.`
    );
    window.open(`https://wa.me/919849151536?text=${message}`, "_blank");
  };

  return (
    <section id="plans" className="bg-section py-[120px] px-[5vw]">
      <h2 className="text-primary text-[2.5rem] lg:text-[3.5rem] font-bold font-display text-left mb-[60px]">
        Plans
      </h2>
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex-1 flex flex-col justify-between bg-card p-9 border-2 border-foreground dark:border-[#333] shadow-[8px_8px_0_rgba(0,0,0,0.12)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[12px_12px_0_rgba(0,0,0,0.15)] dark:hover:shadow-[12px_12px_0_rgba(0,0,0,0.8)]"
          >
            <div>
              <h3 className="text-primary text-[1.9rem] font-display font-bold mb-3.5 pb-2.5 border-b border-foreground/10 dark:border-[#333]">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-[18px] leading-relaxed">{plan.description}</p>
              <ul className="mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="py-2 text-muted-foreground dark:text-[#bbb] text-[15px] border-b border-foreground/5 dark:border-[#333]">
                    <span className="text-primary mr-2">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => handleGetStarted(plan.name)}
              className="self-start py-2.5 px-[18px] bg-primary text-primary-foreground font-semibold text-[15px] transition-all hover:brightness-110 border-2 border-foreground dark:border-[#333] cursor-pointer"
            >
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
