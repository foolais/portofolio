import { navbarData } from "@/data/data";
import { animated, cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Separator } from "../ui/separator";
import Contact from "../contact/Contact";
import { motion } from "framer-motion";

interface Props {
  handleNavClick: (name: string) => void;
  currentNav: string;
}

const Sidenav = ({ handleNavClick, currentNav }: Props) => {
  const animateMotion = {
    initial: { opacity: 0, x: -40 },
    exit: { opacity: 0, x: -40 },
    whileHover: { scale: 1.1, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95, transition: { duration: 0.3 } },
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <div className="flex-col w-[200px] gap-1 hidden md:flex">
      {navbarData.map(({ icon: Icon, name }, index) => (
        <motion.div
          {...animateMotion}
          animate={animated(index + 1, "sidenav", true)}
          key={index}
          className={cn(
            "flex items-center justify-between w-full py-1 px-3 hover:bg-secondary rounded-md cursor-pointer",
            currentNav === name.toLocaleLowerCase()
              ? "bg-primary text-background hover:bg-primary hover:opacity-80"
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
        </motion.div>
      ))}
      <motion.div
        {...animateMotion}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 1 }}
        animate={animated(4, "sidenav", true)}
      >
        <Separator className="my-2" />
      </motion.div>
      <Contact />
    </div>
  );
};

export default Sidenav;
