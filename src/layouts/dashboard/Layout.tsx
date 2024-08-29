import { Carrer } from "@/components/carrer";
import { Navbar } from "@/components/navigation";
import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = () => {
  return (
    <ScrollArea className="mx-auto md:flex md:11/12 h-screen">
      <Navbar />
      <Profile />
      <Carrer />
      <TechStack />
      <div className="p-12" />
    </ScrollArea>
  );
};

export default Layout;
