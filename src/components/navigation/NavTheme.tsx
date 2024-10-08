import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";
import { useEffect, useState } from "react";

const NavTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleChangeTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    setTheme(newIsDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const newIsDarkMode = theme === "dark";
    setIsDarkMode(newIsDarkMode);
  }, []);

  return (
    <div className="w-full">
      <p className="tracking-widest mt-4 mb-2 text-sm">Theme</p>
      <div
        className="bg-primary text-background flex items-center  gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-primary/90"
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
      </div>
    </div>
  );
};

export default NavTheme;
