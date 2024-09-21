import { useTheme } from "@/components/theme-provider";
import { BackgroundBeams } from "@/components/ui/background-beams";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <>
      {children}
      {theme === "dark" && <BackgroundBeams className="-z-10" />}
    </>
  );
};

export default ContentLayout;
