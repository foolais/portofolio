import { memo } from "react";

const ProfileDescription = memo(() => {
  return (
    <div className="w-11/12 md:w-5/6 font-semibold mt-4">
      <p className="text-sm md:text-base leading-5 tracking-wide">
        A dedicated{" "}
        <span className="text-primary font-bold">frontend developer </span>{" "}
        based in <span className="text-primary font-bold"> Yogyakarta</span>,
        Indonesia, with{" "}
        <span className="text-primary font-bold">1 year of experience</span>.
      </p>
      <p>
        Passionate about crafting intuitive web applications, I specialize in
        React and Vue.js. I'm skilled at problem-solving and always eager to
        learn new technologies.
      </p>
    </div>
  );
});

export default ProfileDescription;
