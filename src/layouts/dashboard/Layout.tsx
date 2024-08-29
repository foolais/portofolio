import { Carrer } from "@/components/carrer";
import CardContact from "@/components/contact/CardContact";
import { Navbar } from "@/components/navigation";
import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = () => {
  return (
    <ScrollArea className="mx-auto md:flex md:11/12">
      <div className="w-[100vw] h-screen">
        <Navbar />
        <Profile />
        <Carrer />
        <TechStack />
        <CardContact />
        <div className="p-12" />
      </div>
    </ScrollArea>
  );
};

export default Layout;
