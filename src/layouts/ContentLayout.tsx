import { Contact, Navbar } from "@/components";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ContentLayout = () => {
  return (
    <div
      className={cn(
        "max-h-screen h-screen w-full relative bg-slate-50",
        "md:static md:grid md:grid-cols-3 md:p-8 md:gap-4",
        "lg:grid-cols-4 xl:grid-cols-5"
      )}
    >
      <div className="md:flex md:flex-col md:gap-24">
        <Navbar />
        <Contact className="hidden md:block" />
      </div>
      <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
        <Button>Hello</Button>
      </div>
    </div>
  );
};

export default ContentLayout;
