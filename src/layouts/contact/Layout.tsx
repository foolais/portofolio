import CardContact from "@/components/contact/CardContact";
import MainLayout from "../MainLayout";
import { SocialMedia } from "@/components/contact";

const LayoutContact = () => {
  return (
    <MainLayout className="px-4 pt-8">
      <SocialMedia />
      <CardContact />
    </MainLayout>
  );
};

export default LayoutContact;
