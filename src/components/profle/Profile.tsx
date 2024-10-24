import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { Separator } from "../ui/separator";
import { lazy, Suspense } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

const ProfileHero = lazy(() => import("./ProfileHero"));
const ProfileDescription = lazy(() => import("./ProfileDescription"));
const ProfileName = lazy(() => import("./ProfileName"));

interface ProfileProps {
  isWithHero?: boolean;
  isSidebar?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ isWithHero = false }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  console.log(`isWith hero rerender ${isWithHero}`);

  return (
    <div className="max-h-screen">
      <Suspense>
        {isWithHero && isMobile ? (
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
      </Suspense>
    </div>
  );
};

export default Profile;
