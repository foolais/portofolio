import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  href?: string;
}

const Title = ({ text, href = "" }: Props) => {
  return (
    <div className="w-max border-b-4 border-primary pb-1 flex items-center gap-1">
      <h2 className="text-2xl font-bold leading-6 tracking-wider">{text}</h2>
      <Button variant={"ghost"} size={"icon"} asChild>
        <Link to={href}>
          <ArrowUpRight size={20} />
        </Link>
      </Button>
    </div>
  );
};

export default Title;
