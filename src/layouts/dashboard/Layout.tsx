import { Carrer } from "@/components/carrer";
import CardContact from "@/components/contact/CardContact";
import { Profile } from "@/components/profle";
import { TechStack } from "@/components/techStack";
import MainLayout from "../MainLayout";

const Layout = () => {
  return (
    <MainLayout>
      <Profile />
      <Carrer />
      <TechStack />
      <CardContact />
    </MainLayout>
  );
};

export default Layout;
