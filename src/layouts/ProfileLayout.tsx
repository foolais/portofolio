import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";
import { Career } from "@/components/career";
import { Education } from "@/components/education";
import Contact from "@/components/contact/Contact";

const ProfileLayout = () => {
  return (
    <>
      <Profile />
      <TechStack />
      <Career />
      <Education />
      <Contact isInSideNav={false} />
    </>
  );
};

export default ProfileLayout;
