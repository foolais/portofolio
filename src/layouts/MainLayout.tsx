import { Navbar, NavTheme, Sidenav } from "@/components/navigation";
import ProfileAvatar from "@/components/profle/ProfileAvatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { memo, useCallback, useMemo, useRef } from "react";
import {
  HomeLayout,
  ProfileLayout,
  ProjectLayout,
  ContactLayout,
} from "./index";
import { useNavigation } from "@/context/navigation-provider";
import { Nav } from "@/types/types";

const MainLayout = memo(() => {
  const { currentNav, setCurrentNav } = useNavigation();

  const topRef = useRef<HTMLDivElement>(null);

  const handleNavClick = useCallback(
    (name: string) => {
      const navigatePath = name.toLocaleLowerCase() as Nav;

      console.log({ navigatePath });

      if (navigatePath === currentNav) {
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        setCurrentNav(navigatePath);
      }
    },
    [currentNav]
  );

  const memoizedSidenav = useMemo(
    () => <Sidenav handleNavClick={handleNavClick} currentNav={currentNav} />,
    [handleNavClick, currentNav]
  );
  const memoizedNavbar = useMemo(
    () => <Navbar handleNavClick={handleNavClick} />,
    [handleNavClick]
  );
  const memoizedProfileAvatar = useMemo(() => <ProfileAvatar />, []);
  const memoizedNavTheme = useMemo(() => <NavTheme />, []);

  return (
    <div className="md:flex md:flex-row md:justify-between md:p-8 max-h-screen md:gap-4">
      <div className="flex-col hidden md:flex md:items-center md:max-w-[200px]">
        {memoizedProfileAvatar}
        <span className="font-light mt-1 mb-6">@wahyu_esya</span>
        {memoizedSidenav}
        <Separator className="w-full h-0.5 bg-primary mt-4" />
        {memoizedNavTheme}
      </div>
      <ScrollArea className="md:w-auto md:min-w-[575px] lg:min-w-[700px] md:max-h-[95vh] md:rounded-lg md:border-2 md:border-secondary">
        <div className="w-full h-screen">
          <div ref={topRef} />
          {memoizedNavbar}
          <div className="p-6 pb-28 md:pb-6">
            {currentNav === "home" ? (
              <HomeLayout />
            ) : currentNav === "profile" ? (
              <ProfileLayout />
            ) : currentNav === "projects" ? (
              <ProjectLayout />
            ) : currentNav === "contact" ? (
              <ContactLayout />
            ) : (
              <></>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
});

export default MainLayout;
