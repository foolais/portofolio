import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { ProfileHero } from "./ProfileHero";

const Profile = () => {
  return (
    <div className="max-h-screen">
      <ProfileHero />
      <div className="w-11/12 md:w-5/6 font-semibold mt-4 px-4">
        <p className="text-sm md:text-base 2xl:text-lg leading-5 tracking-wide">
          A dedicated{" "}
          <span className="text-primary font-bold">frontend developer </span>{" "}
          based in <span className="text-primary font-bold"> Yogyakarta</span>,
          Indonesia, with{" "}
          <span className="text-primary font-bold">1 year of experience </span>{" "}
          . Passionate about crafting intuitive web applications, I specialize
          in React and Vue.js. I'm skilled at problem-solving and always eager
          to learn new technologies.
        </p>
      </div>
      {/* Contact buttons only for MD breakpoint and below */}
      <div className="mt-4 px-4">
        <Button className="flex items-center justify-center text-secondary gap-2 px-4">
          <span className="text-base font-bold">Download CV</span>
          <Download color="hsl(var(--background))" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Profile;
