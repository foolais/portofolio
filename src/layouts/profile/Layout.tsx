import MainLayout from "../MainLayout";
import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";
import { Career } from "@/components/career";

const Layout = () => {
  return (
    <MainLayout>
      <Profile />
      <Career isShowDetails={true} />
      <TechStack />
    </MainLayout>
  );
};

export default Layout;
