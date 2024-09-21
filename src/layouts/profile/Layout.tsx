import MainLayout from "../MainLayout";
import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";
import { Career } from "@/components/career";
import { Education } from "@/components/education";

const Layout = () => {
  return (
    <MainLayout className="px-4 pt-8">
      <Profile />
      <TechStack />
      <Career />
      <Education />
    </MainLayout>
  );
};

export default Layout;
