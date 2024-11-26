import { TechProps } from "@/types/types";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const TechIcon = (data: TechProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out "
        >
          <Button variant={"outline"} size={"icon"}>
            <img
              src={data.image}
              alt={data.name}
              loading="lazy"
              className="w-4 h-4 object-cover"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="bg-primary bg-clip-text text-transparent">
            {data.name}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechIcon;
