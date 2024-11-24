import { Career } from "@/components/career";
import Contact from "@/components/contact/Contact";
import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";

const HomeLayout = () => {
  return (
    <>
      <Profile isWithHero={true} />
      <TechStack />
      <Career />
      <Contact isInSideNav={false} />
    </>
  );
};

export default HomeLayout;
