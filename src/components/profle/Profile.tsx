import { Button } from "../ui/button";
import { Download } from "lucide-react";
import ProfileHero from "./ProfileHero";
import ProfileDescription from "./ProfileDescription";
import ProfileName from "./ProfileName";
import { Separator } from "../ui/separator";

const Profile: React.FC<{ isWithHero?: boolean }> = ({
  isWithHero = false,
}) => {
  return (
    <div className="max-h-screen">
      {isWithHero ? (
        <ProfileHero />
      ) : (
        <div className="w-11/12">
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
