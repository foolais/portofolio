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
        <div className="w-11/12 mx-auto pt-8">
          <ProfileName isFullName={true} />
          <Separator />
        </div>
      )}
      <ProfileDescription />
      {/* Contact buttons only for MD breakpoint and below */}
      <div className="mt-4 px-4">
        <Button className="flex items-center justify-center text-secondary gap-2 px-4">
          <span className="text-base font-bold">Download CV</span>
          <Download color="hsl(var(--background))" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Profile;
