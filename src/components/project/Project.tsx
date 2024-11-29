import { projectsData } from "@/data/data";
import { Title } from "../title";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { animated, animateMotion } from "@/lib/utils";

const Project = () => {
  return (
    <div>
      <motion.div {...animateMotion} animate={animated(1, "top")}>
        <Title text="Projects" />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
