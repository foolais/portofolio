import ProfilePicture from "../../assets/images/profilePicture.png";
import { Avatar, AvatarImage } from "../ui/avatar";
import { memo } from "react";
import { KeepAlive } from "keepalive-for-react";

const ProfileAvatar = memo(() => {
  return (
    <Avatar className="border-b-4 border-primary sm:w-40 sm:h-40 md:w-32 md:h-32">
      <KeepAlive activeCacheKey="profile-avatar-cache">
        <AvatarImage src={ProfilePicture} alt="WSYN" />
      </KeepAlive>
    </Avatar>
  );
});

export default ProfileAvatar;
