import { educationData } from "@/data/data";
import { Title } from "../title";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";
import { animated, animateMotion } from "@/lib/utils";

const Education = () => {
  return (
    <div className="mt-6">
      <motion.div {...animateMotion} animate={animated(13, "top")}>
        <Title text="Education" />
      </motion.div>
      <div className="flex flex-col gap-4 mt-4">
        {educationData.map((education, index) => (
          <EducationCard
            key={education.name}
            education={education}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
