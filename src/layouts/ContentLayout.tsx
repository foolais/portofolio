import { Contact, Navbar } from "@/components";
import { Button } from "@/components/ui/button";

const ContentLayout = () => {
  return (
    <div className="max-h-screen w-full relative">
      <Navbar />
      <Button>Hello</Button>
      <Contact />
    </div>
  );
};

export default ContentLayout;
