import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/theme-provider";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animated } from "@/lib/utils";

interface NavThemeProps {
  handleNavClick: (name: string) => void;
}

const NavTheme = ({ handleNavClick }: NavThemeProps) => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleChangeTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    setTheme(newIsDarkMode ? "dark" : "light");
    handleNavClick("theme");
  };

  useEffect(() => {
    const newIsDarkMode = theme === "dark";
    setIsDarkMode(newIsDarkMode);
  }, []);

  const animateMotion = {
    initial: {
      opacity: 0,
      x: -40,
    },
    whileHover: { scale: 1.1, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95, transition: { duration: 0.2 } },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <div className="w-full">
      <motion.div
        {...animateMotion}
        animate={animated(8, "left")}
        layout
        className="bg-primary text-background flex items-center  gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-opacity-50 mt-2"
        onClick={handleChangeTheme}
      >
        {isDarkMode ? (
          <Sun size={20} color="hsl(var(--background))" />
        ) : (
          <Moon size={20} color="hsl(var(--background))" />
        )}
        <span className="font-semibold">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </motion.div>
    </div>
  );
};

export default NavTheme;
