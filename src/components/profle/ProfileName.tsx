import { CodeXml } from "lucide-react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const ProfileName: React.FC<{ isFullName: boolean }> = ({ isFullName }) => {
  const animateMotion = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className={"w-full z-10 mb-3"}>
      <motion.p
        {...animateMotion}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="font-bold text-xl leading-5 mb-1"
      >
        Hi there 👋
      </motion.p>
      <motion.h1
        {...animateMotion}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold sm:tracking-wider leading-5"
      >
        I'm{" "}
        <span className="bg-primary bg-clip-text text-transparent">Wahyu</span>{" "}
        {isFullName ? "Esya Nasution" : ""}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className="text-sm sm:text-xl lg:text-2xl font-bold md:mt-1 sm:tracking-wide leading-5 flex gap-2 items-center"
      >
        <CodeXml size={20} color="hsl(var(--primary))" />
        <Typewriter
          options={{
            strings: ["Frontend Developer", "Yogyakarta"],
            autoStart: true,
            loop: true,
            delay: 80,
          }}
        />
      </motion.div>
    </div>
  );
};

export default ProfileName;
