import { Career } from "@/components/career";
import CardContact from "@/components/contact/CardContact";
import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";
import MainLayout from "../MainLayout";

const Layout = () => {
  return (
    <MainLayout>
      <Profile isWithHero={true} />
      <div className="px-4">
        <Career />
        <TechStack />
        <CardContact isWithForm={false} />
      </div>
    </MainLayout>
  );
};

export default Layout;
