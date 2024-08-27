import { Doodles1, Doodles2 } from "@/assets/doodles/doodles";
import { Profile } from "@/assets/images/images";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen xl:min-h-full relative mx-auto",
        "xl:flex-row-reverse xl:items-center xl:justify-between xl:gap-8 xl:w-11/12 "
      )}
    >
      <div
        className={cn(
          "relative w-max h-max group cursor-pointer flex items-end justify-center",
          "xl:justify-between xl:w-1/2 mt-16 sm:mt-10 xl:mt-32"
        )}
      >
        <div
          className={cn(
            "relative mx-auto rotate-6 group-hover:rotate-12 transition duration-300 ease-in-out  w-40 h-40 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-96 2xl:h-96"
          )}
        >
          <img
            src={Doodles1}
            alt="doodles"
            className="w-10 h-10 rotate-6 absolute -top-10 -right-10 group-hover:-rotate-6 transition duration-300 ease-in-out"
            loading="lazy"
          />
          <img
            src={Doodles2}
            alt="doodles"
            className="w-10 h-10 -rotate-6 absolute -bottom-10 -left-10 group-hover:rotate-6 transition duration-300 ease-in-out"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-2 w-full min-h-[125%] overflow-clip">
            <img
              src={Profile}
              alt="profile"
              className="absolute z-20 object-cover h-max bottom-0 right-5 scale-105 -rotate-6"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom- left-0 w-full h-full bg-primary rounded-lg z-10" />
          <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-lg z-0" />
        </div>
      </div>
      <div
        className={cn(
          "mt-14 flex flex-col items-center md:leading-6 gap-1",
          "xl:-mt-4 xl:items-start xl:w-1/2"
        )}
      >
        <p className="text-xl md:text-2xl font-bold md:mb-2">Hello, I'm</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold sm:tracking-wider">
          <span className="text-primary">Wahyu </span> Esya Nasution
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
        <div className="w-11/12 sm:w-3/4 mt-4 md:mt-6">
          <p className="text-sm md:text-base text-center xl:text-justify">
            An enthusiastic frontend developer from Yogyakarta, Indonesia. With
            a passion for creating intuitive web experiences, I specialize in
            React and Vue.js.
          </p>
        </div>
        {/* Contact buttons only for MD breakpoint and below */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button className="w-full icon-wrapper flex items-center justify-center text-secondary gap-2 px-4">
            <span className="text-base font-semibold">Download CV</span>
            <Download color="white" size={20} />
          </Button>
          <Button className="w-full md:hidden text-secondary">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
