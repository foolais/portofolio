import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { NightStar, ProfilePicturue } from "@/assets/images/images";
import { cn } from "@/lib/utils";
import ProfileName from "./ProfileName";

const ProfileAvatar = () => {
  return (
    <Avatar className="border-b-4 border-primary sm:w-40 sm:h-40">
      <AvatarImage src={ProfilePicturue} alt="WSYN" />
      <AvatarFallback>WSYN</AvatarFallback>
    </Avatar>
  );
};

const ProfileHero: React.FC<{ isFullName?: boolean }> = ({
  isFullName = false,
}) => {
  return (
    <div className="w-full relative pt-10">
      <div className="w-full h-full absolute top-0 z-0 shadow">
        <img
          src={NightStar}
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
