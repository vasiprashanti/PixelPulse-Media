import { useEffect, useRef, useState, useCallback } from "react";
import { services } from "@/data/services";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const menuItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const menuRef = useRef<HTMLUListElement>(null);

  const scrollMenuToActive = useCallback((index: number) => {
    const menuEl = menuRef.current;
    const activeEl = menuItemRefs.current[index];
    if (menuEl && activeEl) {
      const menuRect = menuEl.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      const scrollLeft = menuEl.scrollLeft + (itemRect.left - menuRect.left) - (menuRect.width / 2) + (itemRect.width / 2);
      menuEl.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const items = itemRefs.current;
      const offset = window.innerHeight / 3;
      for (let i = items.length - 1; i >= 0; i--) {
        const el = items[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            if (i !== activeIndex) {
              setActiveIndex(i);
              scrollMenuToActive(i);
            }
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, scrollMenuToActive]);

  return (
    <section id="services" ref={sectionRef} className="py-[120px] px-[5vw] bg-muted dark:bg-background">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 lg:gap-20 items-start">
        {/* Left sidebar / Mobile sticky horizontal bar */}
        <div className="md:flex-shrink-0 md:w-[260px] md:sticky md:top-[120px] self-start w-full sticky top-[80px] z-50 bg-muted dark:bg-background pb-2 md:pb-0">
          <h2 className="text-primary text-[2.4rem] lg:text-[2.4rem] mb-5 lg:mb-10 font-display font-medium tracking-tight">
            Services
          </h2>
          <ul
            ref={menuRef}
            className="flex md:flex-col gap-[30px] md:gap-0 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((s, i) => (
              <li
                key={s.id}
                ref={(el) => { menuItemRefs.current[i] = el; }}
                className={`
                  cursor-pointer text-[15px] md:text-[15px] transition-all
                  flex-shrink-0 flex items-start gap-4
                  md:py-[14px] md:pl-[18px] md:border-b md:border-border
                  relative group
                `}
                onClick={() => itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
              >
                {/* Purple left indicator bar (desktop only) */}
                <span
                  className={`hidden md:block absolute left-0 top-[6px] w-[2px] bg-primary transition-all duration-300 ${
                    i === activeIndex ? "h-[70%]" : "h-0"
                  }`}
                />
                {/* Bottom hover underline (desktop) */}
                <span className="hidden md:block absolute bottom-[-1px] left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                {/* Number (desktop only) */}
                <span
                  className={`hidden md:inline font-display text-sm font-medium tracking-wider min-w-[24px] transition-colors duration-300 ${
                    i === activeIndex ? "text-primary" : "text-muted-foreground/50"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Service name */}
                <span
                  className={`transition-colors duration-300 font-normal leading-relaxed ${
                    i === activeIndex
                      ? "text-primary font-medium md:font-medium"
                      : "text-muted-foreground dark:text-[hsl(0,0%,66%)] group-hover:text-foreground dark:group-hover:text-white"
                  }`}
                >
                  {s.shortTitle}
                </span>
                {/* Mobile active underline */}
                {i === activeIndex && (
                  <span className="md:hidden absolute bottom-[-6px] left-0 w-full h-[2px] bg-primary" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right content */}
        <div className="flex-1 min-w-0">
          {services.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="min-h-[80vh] md:min-h-[80vh] flex flex-col justify-center mb-[100px] last:mb-0 service-item"
            >
              <div className="w-full h-[38vh] md:h-[60vh] rounded-2xl overflow-hidden mb-[30px] group">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-600 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl md:text-[28px] font-medium mb-[10px]">{s.title}</h3>
              <p className="text-muted-foreground dark:text-[#aaa] leading-relaxed text-base md:text-[17px]">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
