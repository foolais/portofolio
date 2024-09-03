import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { navbarData } from "@/data/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

interface Props {
  className?: string;
  handleNavClick: (name: string) => void;
}

const Navbar = ({ className, handleNavClick }: Props) => {
  const location = useLocation();
  const { setTheme } = useTheme();

  const [currentNav, setCurrentNav] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const navName = currentPath === "/" ? "Home" : currentPath.split("/")[1];
    setCurrentNav(navName.toLocaleLowerCase());
  }, []);

  const btnIconClassName = cn(
    "flex flex-col items-center justify-center gap-1 icon-wrapper rounded-full p-2.5",
    "hover:scale-150 transition duration-300 ease-in-out",
    "md:flex-row md:gap-3 md:w-full md:justify-start md:bg-transparent md:p-0 md:rounded-lg md:hover:bg-secondary md:hover:scale-100"
  );

  return (
    <div
      className={cn(className, "fixed bottom-0 left-0 right-0 md:static z-30")}
    >
      <div className="w-max mx-auto md:mx-0 md:w-full">
        <div
          className={cn(
            "relative bg-secondary shadow gap-4 flex items-center justify-center rounded-t-2xl p-4",
            "md:bg-background md:gap-0 md:px-0 md:py-0 md:flex-col md:mt-10"
          )}
        >
          {navbarData.map(({ icon: Icon, name }, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    id={name}
                    variant={
                      currentNav === name.toLocaleLowerCase()
                        ? "default"
                        : "accent"
                    }
                    size={"iconText"}
                    className={btnIconClassName}
                    onClick={() => handleNavClick(name)}
                  >
                    <Icon className="icon-size" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={8}>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          <Separator orientation="vertical" className="h-10" />
          <Button
            className={`${btnIconClassName} hover:scale-100`}
            onClick={handleChangeTheme}
          >
            {isDarkMode ? (
              <Moon className="icon-size" />
            ) : (
              <Sun className="icon-size" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
