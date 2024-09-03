import MainLayout from "../MainLayout";
import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";
import { Career } from "@/components/career";
import { Education } from "@/components/education";

const Layout = () => {
  return (
    <MainLayout>
      <Profile />
      <TechStack />
      <Career isShowDetails={true} />
      <Education />
    </MainLayout>
  );
};

export default Layout;
