import { animated, animateMotion } from "@/lib/utils";
import { Title } from "../title";
import CareerCard from "./CareerCard";
import { jobData } from "@/data/data";
import { motion } from "framer-motion";
import { useNavigation } from "@/context/navigation-provider";

const Career = () => {
  const { currentNav } = useNavigation();

  return (
    <div className="mt-6">
      <motion.div
        {...animateMotion}
        animate={animated(currentNav === "home" ? 8 : 10, "top")}
      >
        <Title text="Career" />
      </motion.div>
      <div className="flex flex-col gap-4 mt-4">
        {jobData.map((job, index) => (
          <CareerCard key={job.company} job={job} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Career;
