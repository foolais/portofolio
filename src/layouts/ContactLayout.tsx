import CardContact from "@/components/contact/CardContact";
import { SocialMedia } from "@/components/contact";
import { memo } from "react";

const ContactLayout = memo(() => {
  return (
    <>
      <SocialMedia />
      <CardContact />
    </>
  );
});

export default ContactLayout;
