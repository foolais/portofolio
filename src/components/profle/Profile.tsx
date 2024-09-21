import { Button } from "../ui/button";
import { Download } from "lucide-react";
import ProfileHero from "./ProfileHero";
import ProfileDescription from "./ProfileDescription";
import ProfileName from "./ProfileName";
import { Separator } from "../ui/separator";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProfileProps {
  isWithHero?: boolean;
  isSidebar?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ isWithHero = false }) => {
  const [breakpointWidth, setBreakpointWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setBreakpointWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="max-h-screen">
      {isWithHero && breakpointWidth < 768 ? (
        <ProfileHero />
      ) : (
        <div className={cn("w-11/12", isWithHero && "px-4 pt-8")}>
          <ProfileName isFullName={true} />
          <Separator />
        </div>
      )}
      <div className={isWithHero ? "px-4" : ""}>
        <ProfileDescription />
        <div className="mt-4">
          <Button className="flex items-center justify-center text-secondary gap-2 px-4">
            <span className="text-base font-bold">Download CV</span>
            <Download color="hsl(var(--background))" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
