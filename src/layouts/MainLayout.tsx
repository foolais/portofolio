import { Navbar, Sidenav } from "@/components/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const topRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (name: string) => {
    const navigatePath = name === "Home" ? "/" : `/${name.toLowerCase()}`;
    const isMatchingPath = pathname.endsWith(navigatePath);

    if (isMatchingPath) {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(navigatePath);
    }
  };

  return (
    <div className="md:flex md:flex-row md:justify-between md:p-6 max-h-screen md:gap-4">
      <Sidenav handleNavClick={handleNavClick} />
      <ScrollArea className="md:w-[575px] md:max-h-[95vh] md:rounded-lg md:border-2 md:border-secondary">
        <div className={cn("w-full h-full", className)}>
          <div ref={topRef} />
          <Navbar handleNavClick={handleNavClick} />
          {children}
          <div className="p-12 md:p-4" />
        </div>
      </ScrollArea>
    </div>
  );
};

export default MainLayout;
