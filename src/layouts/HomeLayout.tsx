import { Career } from "@/components/career";
import CardContact from "@/components/contact/CardContact";
import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";

const HomeLayout = () => {
  return (
    <>
      <Profile isWithHero={true} />
      <Career />
      <TechStack />
      <CardContact isWithForm={false} />
    </>
  );
};

export default HomeLayout;
