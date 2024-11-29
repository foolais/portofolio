import { memo } from "react";
import { motion } from "framer-motion";
import { animated } from "@/lib/utils";

const ProfileDescription = memo(() => {
  const animateMotion = {
    initial: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const coloredText = "bg-primary bg-clip-text text-transparent font-bold";

  return (
    <div className="w-full md:w-11/12 font-semibold mt-4">
      <motion.p
        {...animateMotion}
        animate={animated(3, "top")}
        className="text-sm md:text-base leading-5 tracking-wide mb-1.5"
      >
        A <span className={coloredText}>frontend developer </span> based in{" "}
        <span className={coloredText}> Yogyakarta</span>, Indonesia, with{" "}
        <span className={coloredText}>1 year of experience</span>.
      </motion.p>
      <motion.p {...animateMotion} animate={animated(4, "top")}>
        Passionate about crafting intuitive web applications, I specialize in
        <span className={coloredText}> React.js</span> and{" "}
        <span className={coloredText}>Vue.js</span>. I'm skilled at
        problem-solving and always eager to learn new technologies.
      </motion.p>
    </div>
  );
});

export default ProfileDescription;
