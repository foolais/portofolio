import ProfilePicture from "../../assets/images/profilePicture.png";
import { Avatar, AvatarImage } from "../ui/avatar";
import { memo } from "react";
import { KeepAlive } from "keepalive-for-react";
import { motion } from "framer-motion";
import { animated, getMobileWidth } from "@/lib/utils";

const ProfileAvatar = memo(() => {
  const isMobile = getMobileWidth();
  console.log({ isMobile });
  const animateMotion = {
    initial: isMobile ? { opacity: 0, y: -40 } : { opacity: 0, x: -40 },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.div
      {...animateMotion}
      animate={animated(0, "mobile", false, isMobile)}
      className="relative"
    >
      <Avatar className="border-b-4 border-primary w-24 h-24 sm:w-40 sm:h-40 md:w-32 md:h-32">
        <KeepAlive activeCacheKey="profile-avatar-cache">
          <AvatarImage src={ProfilePicture} alt="WSYN" />
        </KeepAlive>
      </Avatar>
    </motion.div>
  );
});

export default ProfileAvatar;
