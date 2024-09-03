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
        <TooltipTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <img
              src={data.image}
              alt={data.name}
              loading="lazy"
              className="w-4 h-4 object-cover"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{data.name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechIcon;
