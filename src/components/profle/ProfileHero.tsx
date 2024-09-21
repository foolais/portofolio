import { BlueSky, NightStar } from "@/assets/images/images";
import { cn } from "@/lib/utils";
import ProfileName from "./ProfileName";
import { useTheme } from "../theme-provider";
import ProfileAvatar from "./ProfileAvatar";

const ProfileHero: React.FC<{ isFullName?: boolean }> = ({
  isFullName = false,
}) => {
  const { theme } = useTheme();

  return (
    <div className="w-full relative pt-10">
      <div className="w-full h-full absolute top-0 z-0 shadow">
        <img
          src={theme === "dark" ? NightStar : BlueSky}
          alt="NightStar"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="w-full h-[105%] absolute top-0 z-10 gradient"></div>
      </div>
      <div className={cn("px-4 items-end flex gap-4 z-20")}>
        <ProfileAvatar />
        <ProfileName isFullName={isFullName} />
      </div>
    </div>
  );
};

export default ProfileHero;
