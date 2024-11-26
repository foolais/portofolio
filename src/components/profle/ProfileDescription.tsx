import { memo } from "react";

const ProfileDescription = memo(() => {
  return (
    <div className="w-full md:w-11/12 font-semibold mt-4">
      <p className="text-sm md:text-base leading-5 tracking-wide mb-1.5">
        A{" "}
        <span className="bg-primary bg-clip-text text-transparent font-bold">
          frontend developer{" "}
        </span>{" "}
        based in{" "}
        <span className="bg-primary bg-clip-text text-transparent font-bold">
          {" "}
          Yogyakarta
        </span>
        , Indonesia, with{" "}
        <span className="bg-primary bg-clip-text text-transparent font-bold">
          1 year of experience
        </span>
        .
      </p>
      <p>
        Passionate about crafting intuitive web applications, I specialize in
        React.js and Vue.js. I'm skilled at problem-solving and always eager to
        learn new technologies.
      </p>
    </div>
  );
});

export default ProfileDescription;
