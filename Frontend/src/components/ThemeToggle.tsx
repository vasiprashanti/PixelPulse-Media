import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle = ({ isDark, toggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 w-[50px] h-[50px] rounded-full bg-card flex items-center justify-center text-primary text-lg cursor-pointer shadow-[0_6px_15px_rgba(0,0,0,0.1)] z-[1000] transition-all hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
