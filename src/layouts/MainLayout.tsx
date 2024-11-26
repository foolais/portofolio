import { Navbar, NavTheme, Sidenav } from "@/components/navigation";
import ProfileAvatar from "@/components/profle/ProfileAvatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { memo, useCallback, useMemo, useRef } from "react";
import { HomeLayout, ProfileLayout, ProjectLayout } from "./index";
import { useNavigation } from "@/context/navigation-provider";
import { Nav } from "@/types/types";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useTheme } from "@/context/theme-provider";
import { Separator } from "@/components/ui/separator";

const Layout = memo(() => {
  const { currentNav } = useNavigation();
  return (
    <div className="p-6 pb-28 md:pb-6">
      {currentNav === "home" ? (
        <HomeLayout />
      ) : currentNav === "profile" ? (
        <ProfileLayout />
      ) : currentNav === "projects" ? (
        <ProjectLayout />
      ) : (
        <></>
      )}
    </div>
  );
});

const MainLayout = memo(() => {
  const { currentNav, setCurrentNav } = useNavigation();
  const { theme } = useTheme();

  const topRef = useRef<HTMLDivElement>(null);

  const handleNavClick = useCallback(
    (name: string) => {
      const navigatePath = name.toLocaleLowerCase() as Nav;
      topRef.current?.scrollIntoView({ behavior: "smooth" });

      if (navigatePath !== currentNav) {
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
    <div className="md:flex md:flex-row md:justify-between md:p-8 max-h-screen md:gap-4 lg:max-w-[85%] xl:max-w-[55%] mx-auto relative">
      <div className="flex-col hidden md:flex md:items-center md:max-w-[200px]">
        {memoizedProfileAvatar}
        <span className="font-semibold mt-1 mb-6 bg-primary bg-clip-text text-transparent">
          @wahyu_esya
        </span>
        {memoizedSidenav}
        <Separator className="my-2" />
        {memoizedNavTheme}
      </div>
      <ScrollArea className="md:w-auto md:min-w-[575px] lg:min-w-[700px] md:max-h-[95vh] md:rounded-lg md:border-primary">
        <div className="w-full h-auto">
          <div ref={topRef} />
          {memoizedNavbar}
          {theme === "dark" ? (
            <BackgroundBeamsWithCollision>
              <Layout />
            </BackgroundBeamsWithCollision>
          ) : (
            <Layout />
          )}
        </div>
      </ScrollArea>
    </div>
  );
});

export default MainLayout;
