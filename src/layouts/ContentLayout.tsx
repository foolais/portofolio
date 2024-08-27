import { Hero } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const ContentLayout = ({ className }: Props) => {
  return (
    <ScrollArea
      className={cn(
        className,
        "bg-secondary shadow rounded-lg p-6 pb-32 min-h-[80vh] -mt-20 border-[1px] border-primary",
        "md:mt-0 md:p-6"
      )}
    >
      <Hero />
    </ScrollArea>
  );
};

export default ContentLayout;
