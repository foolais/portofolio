import { Doodles1, Doodles2 } from "@/assets/doodles/doodles";
import { ProfilePicturue } from "@/assets/images/images";
import { cn } from "@/lib/utils";

const ProfileModal = () => {
  return (
    <div
      className={cn(
        "relative w-max h-max group cursor-pointer flex items-end justify-center",
        "xl:justify-between xl:w-1/2 mt-16 sm:mt-10 lg:mt-20 xl:mt-32"
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
            src={ProfilePicturue}
            alt="ProfilePicturue"
            className="absolute z-20 object-cover h-max bottom-0 right-5 scale-105 -rotate-6"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom- left-0 w-full h-full bg-primary rounded-lg z-10" />
        <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-lg z-0" />
      </div>
    </div>
  );
};

export default ProfileModal;
