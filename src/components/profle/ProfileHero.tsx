import Typewriter from "typewriter-effect";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ProfilePicturue, Waves } from "@/assets/images/images";

export const ProfileHero = () => {
  return (
    <div className="w-full relative pt-10">
      <div className="w-full h-[70%] absolute top-0 z-0 shadow">
        <img
          src={Waves}
          alt="Waves"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="w-full h-full absolute top-0 z-10 gradient"></div>
      </div>
      <div className="px-4 flex items-end gap-4 z-20">
        <Avatar className="border-b-4 border-primary sm:w-40 sm:h-40">
          <AvatarImage src={ProfilePicturue} alt="WSYN" />
          <AvatarFallback>WSYN</AvatarFallback>
        </Avatar>
        <div className="w-full z-10 mb-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold sm:tracking-wider">
            Hi, I'm <span className="text-primary">Wahyu</span> 👋
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl font-bold md:mt-1 sm:tracking-wide">
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
      </div>
    </div>
  );
};
