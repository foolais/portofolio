import { useTheme } from "@/context/theme-provider";
import { lazy, Suspense } from "react";

const BackgroundBeams = lazy(() => import("@/components/ui/background-beams"));

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div className="lg:max-w-[85%] xl:max-w-[55%] mx-auto relative">
      {children}
      {theme === "dark" && (
        <Suspense>
          <BackgroundBeams className="-z-10" />
        </Suspense>
      )}
    </div>
  );
};

export default ContentLayout;
