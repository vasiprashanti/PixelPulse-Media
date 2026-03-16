import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  onScrollTo?: (id: string) => void;
}

const Navbar = ({ onScrollTo }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = useCallback(
    (id: string) => {
      if (onScrollTo) {
        onScrollTo(id);
      }
      setMobileOpen(false);
    },
    [onScrollTo]
  );

  const handleAbout = () => {
    navigate("/about");
    setMobileOpen(false);
  };

  const handleServices = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      handleNav("services");
    }
  };

  return (
    <>
      <nav className="fixed top-[1.5vh] left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] flex justify-between items-center py-[1.5vh] px-[2vw] rounded-2xl bg-[hsl(var(--nav-bg))] backdrop-blur-[10px] shadow-[0_6px_20px_rgba(0,0,0,0.08)] z-[1000]">
        <a href="/" className="font-bold text-[1.6rem] font-display">
          Pixel<span className="text-primary">Pulse</span>
        </a>

        <div className="hidden md:flex gap-8 font-normal">
          <button onClick={handleServices} className="hover:text-primary transition-colors">
            Services
          </button>
          <button onClick={handleAbout} className="hover:text-primary transition-colors">
            About Us
          </button>
        </div>

        <a
          href="https://wa.me/919849151536?text=Hi%2C%20I%20wanted%20to%20know%20about%20your%20Marketing%20Services."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block py-3 px-6 gradient-purple text-primary-foreground font-semibold transition-all hover:brightness-110 border-2 border-foreground dark:border-[#333]"
        >
          Get Started
        </a>

        <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>

        {mobileOpen && (
          <div className="absolute top-[8vh] right-[2vw] bg-card p-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex flex-col gap-3 md:hidden z-50">
            <button onClick={handleServices} className="text-left hover:text-primary">
              Services
            </button>
            <button onClick={handleAbout} className="text-left hover:text-primary">
              About Us
            </button>
            <a
              href="https://wa.me/919849151536?text=Hi%2C%20I%20wanted%20to%20know%20about%20your%20Marketing%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 gradient-purple text-primary-foreground font-semibold text-center transition-all hover:brightness-110 border-2 border-foreground dark:border-[#333]"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

    </>
  );
};

export default Navbar;
