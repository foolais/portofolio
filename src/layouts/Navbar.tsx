import { Button } from "../components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../components/ui/separator";
import { navbarData } from "@/data/data";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "fixed bottom-6 w-full md:static")}>
      <div className="w-max sm:w-3/5 mx-auto md:mx-0 md:w-full">
        <div className="w-full h-5 bg-primary-foreground/10 rounded-t-2xl md:hidden" />
        <div
          className={cn(
            "bg-secondary shadow gap-3 sm:gap-6 flex items-center justify-center rounded-b-2xl px-6 pt-2 pb-1",
            "md:flex-col md:rounded-lg md:gap-0 md:justify-start md:py-6 md:px2 md:items-start"
          )}
        >
          {navbarData.map(({ icon: Icon, name }, index) => (
            <React.Fragment key={index}>
              <Button
                id={name}
                variant="ghost"
                size={"iconText"}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 icon-wrapper",
                  "md:flex-row md:gap-4 md:w-full md:justify-start",
                  name === "Contact" ? "md:hidden" : ""
                )}
              >
                <Icon className="icon-size" />
                <p className="text-xs sm:text-sm md:text-lg">{name}</p>
              </Button>
              <Separator
                className={cn(
                  "mb-2.5 hidden md:block",
                  name === "Contact" ? "md:hidden" : ""
                )}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
