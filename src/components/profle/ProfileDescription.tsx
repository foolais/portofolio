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
        <span className={coloredText}>Fresh Graduate in Computer Science </span>{" "}
        with{" "}
        <span className={coloredText}>
          {" "}
          over 1 years of professional experience
        </span>
        , as a Frontend Developer{" "}
        <span className={coloredText}>1 year of experience</span>.
      </motion.p>
      <motion.p {...animateMotion} animate={animated(4, "top")}>
        Proficient in building high-performance web applications using React.js,
        Vue.js, and Next.js.
        <span className={coloredText}>
          {" "}
          React.js, Vue.js, and Next.js.{" "}
        </span>{" "}
        Skilled in developing real-time systems and complex business logic, with
        a strong focus on clean code and intuitive user experiences
      </motion.p>
    </div>
  );
});

export default ProfileDescription;
