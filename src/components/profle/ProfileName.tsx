import { CodeXml } from "lucide-react";
import Typewriter from "typewriter-effect";

const ProfileName: React.FC<{ isFullName: boolean }> = ({ isFullName }) => {
  return (
    <div className={"w-full z-10 mb-3"}>
      <p className="font-bold text-xl leading-5 mb-1">Hi there 👋</p>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold sm:tracking-wider leading-5">
        I'm <span className="text-primary">Wahyu</span>{" "}
        {isFullName ? "Esya Nasution" : ""}
      </h1>
      <div className="mt-2 text-sm md:text-xl lg:text-2xl font-bold md:mt-1 sm:tracking-wide leading-5 flex gap-2 items-center">
        <CodeXml size={20} color="hsl(var(--primary))" />
        <Typewriter
          options={{
            strings: ["Frontend Developer", "Yogyakarta"],
            autoStart: true,
            loop: true,
            delay: 80,
          }}
        />
      </div>
    </div>
  );
};

export default ProfileName;
