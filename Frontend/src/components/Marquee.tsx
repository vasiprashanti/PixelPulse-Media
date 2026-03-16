const marqueeItems = ["Pixel Pulse", "Media", "Photography", "Paid Ads", "SEO", "Business Growth"];

const Marquee = () => {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full h-[10vh] overflow-hidden gradient-purple flex items-center">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marqueeSmooth 15s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-block mr-[15vw] lg:mr-[10vw] text-xl sm:text-2xl lg:text-[2.5rem] text-primary-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
