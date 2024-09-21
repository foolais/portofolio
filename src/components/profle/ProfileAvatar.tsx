import { ProfilePicturue } from "@/assets/images/images";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProfileAvatar = () => {
  return (
    <Avatar className="border-b-4 border-primary sm:w-40 sm:h-40 md:w-32 md:h-32">
      <AvatarImage src={ProfilePicturue} alt="WSYN" />
      <AvatarFallback>WSYN</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
