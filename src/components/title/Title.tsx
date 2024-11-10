import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  text: string;
  href?: string;
  isBtnShow?: boolean;
}

const Title = ({ text, href = "", isBtnShow = false }: Props) => {
  return (
    <div className="w-max pr-4 border-b-4 border-primary pb-1 flex items-center gap-1">
      <h2 className="text-2xl font-bold leading-5 tracking-wider">{text}</h2>
      {isBtnShow && (
        <Button variant={"ghost"} size={"icon"} asChild>
          <a href={href}>
            <ArrowUpRight size={20} />
          </a>
        </Button>
      )}
    </div>
  );
};

export default Title;
