import { Navbar } from "@/components/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const topRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (name: string) => {
    const navigatePath = name === "Home" ? "/" : `/${name.toLowerCase()}`;
    const isMatchingPath = location.pathname.endsWith(navigatePath);

    if (isMatchingPath) {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(navigatePath);
    }
  };

  return (
    <ScrollArea>
      <div className="w-[100vw] h-screen">
        <div ref={topRef} />
        <Navbar handleNavClick={handleNavClick} />
        {children}
        <div className="p-12" />
      </div>
    </ScrollArea>
  );
};

export default MainLayout;
