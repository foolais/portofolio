import { ContactInfo } from "@/components";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import ContentLayout from "./ContentLayout";

const Layout = () => {
  return (
    <div
      className={cn(
        "max-h-screen h-screen w-full relative bg-slate-50",
        "md:flex md:gap-6 md:p-8"
      )}
    >
      <div className="md:flex md:flex-col md:gap-24 md:min-w-[275px] lg:min-w-[320px]">
        <Navbar />
        <ContactInfo className="hidden md:block" />
      </div>
      <ContentLayout className="md:w-full" />
    </div>
  );
};

export default Layout;
