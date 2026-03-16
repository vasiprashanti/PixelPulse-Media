const Footer = () => {
  return (
    <footer className="border-t border-border pt-20 bg-[#050505] text-[#999] font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3 text-[#fff]">
              Pixel<span className="gradient-text">Pulse</span>
            </div>
            <p className="text-sm text-[#888]">Digital marketing and creative production.</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#ccc]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#fff] transition-colors">About</a></li>
              <li><a href="#process" className="hover:text-[#fff] transition-colors">Process</a></li>
              <li><a href="#lead-capture" className="hover:text-[#fff] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#ccc]">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-[#fff] transition-colors">SEO</a></li>
              <li><a href="#services" className="hover:text-[#fff] transition-colors">Paid Media</a></li>
              <li><a href="#services" className="hover:text-[#fff] transition-colors">Content Marketing</a></li>
              <li><a href="#services" className="hover:text-[#fff] transition-colors">Creative Production</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#ccc]">Contact</h4>
            <a href="tel:+919849151536" className="block text-sm mb-2 hover:text-[#fff] transition-colors">
              📞 +91 98491 51536
            </a>
            <a href="mailto:pixelpulsemedia202@gmail.com" className="block text-sm mb-3 hover:text-[#fff] transition-colors">
              ✉ pixelpulsemedia202@gmail.com
            </a>
            <div className="flex gap-3 mt-3">
              {["X", "Li", "IG"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center border border-[#444] rounded-md text-xs hover:border-primary hover:text-primary transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#333] pt-5 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>© PixelPulse Media. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#fff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#fff] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
