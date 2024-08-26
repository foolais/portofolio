import { ContactInfo } from "@/components";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

const ContentLayout = () => {
  return (
    <div
      className={cn(
        "max-h-screen h-screen w-full relative bg-slate-50",
        "md:flex md:gap-6 md:p-8"
      )}
    >
      <div className="md:flex md:flex-col md:gap-24 md:w-[275px] lg:w-[300px]">
        <Navbar />
        <ContactInfo className="hidden md:block" />
      </div>
      <div className="md:w-auto">
        <Button>Hello</Button>
      </div>
    </div>
  );
};

export default ContentLayout;
