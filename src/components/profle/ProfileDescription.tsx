import { memo } from "react";
import { motion } from "framer-motion";
import { animated } from "@/lib/utils";

const ProfileDescription = memo(() => {
  const animateMotion = {
    initial: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div className="w-full md:w-11/12 font-semibold mt-4">
      <motion.p
        {...animateMotion}
        animate={animated(3, "top")}
        className="text-sm md:text-base leading-5 tracking-wide mb-1.5"
      >
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
      </motion.p>
      <motion.p {...animateMotion} animate={animated(4, "top")}>
        Passionate about crafting intuitive web applications, I specialize in
        React.js and Vue.js. I'm skilled at problem-solving and always eager to
        learn new technologies.
      </motion.p>
    </div>
  );
});

export default ProfileDescription;
