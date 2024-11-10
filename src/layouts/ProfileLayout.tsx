import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";
import { Career } from "@/components/career";
import { Education } from "@/components/education";

const ProfileLayout = () => {
  return (
    <>
      <Profile />
      <TechStack />
      <Career />
      <Education />
    </>
  );
};

export default ProfileLayout;
