import { navbarData } from "@/data/data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
  handleNavClick: (name: string) => void;
  currentNav: string;
}

const Sidenav = ({ handleNavClick, currentNav }: Props) => {
  return (
    <div className="flex-col w-[200px] gap-1 hidden md:flex">
      {navbarData.map(({ icon: Icon, name }, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center justify-between w-full py-1 px-3 hover:bg-secondary rounded-md cursor-pointer",
            currentNav === name.toLocaleLowerCase()
              ? "bg-primary text-background hover:bg-primary/90"
              : ""
          )}
          onClick={() => handleNavClick(name)}
        >
          <div className="flex items-center gap-3">
            <Icon
              size={18}
              color={
                currentNav === name.toLocaleLowerCase()
                  ? "hsl(var(--background))"
                  : "hsl(var(--primary))"
              }
            />
            <span className="font-semibold text-sm">{name}</span>
          </div>
          <Button
            variant="ghost"
            className="flex items-center justify-start px-2"
            disabled
          >
            <ArrowRight size={18} />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Sidenav;
