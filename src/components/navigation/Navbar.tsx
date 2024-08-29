import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { navbarData } from "@/data/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface Props {
  className?: string;
}

const Navbar = ({ className }: Props) => {
  return (
    <div
      className={cn(className, "fixed bottom-6 left-0 right-0 md:static z-30")}
    >
      <div className="w-max mx-auto md:mx-0 md:w-full">
        <div
          className={cn(
            "relative bg-secondary shadow gap-4 flex items-center justify-center rounded-3xl px-6 py-2",
            "md:bg-background md:gap-0 md:px-0 md:py-0 md:flex-col md:mt-10",
            ""
          )}
        >
          {navbarData.map(({ icon: Icon, name }, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    id={name}
                    variant="accent"
                    size={"iconText"}
                    className={cn(
                      "flex flex-col items-center justify-center gap-1 icon-wrapper rounded-full p-3",
                      "hover:scale-150 transition duration-300 ease-in-out",
                      "md:flex-row md:gap-3 md:w-full md:justify-start md:bg-transparent md:p-0 md:rounded-lg md:hover:bg-secondary md:hover:scale-100",
                      name === "Contact" ? "md:hidden" : ""
                    )}
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;