import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TechIcon } from "../techStack";
import { Button } from "../ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { TechProps } from "@/types/types";
import { memo, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  images: string;
  technologies: TechProps[];
  github: string;
  demo: string | null;
  type: "web" | "mobile";
}

const ProjectCardHeader = memo(
  ({
    images,
    description,
    type,
  }: {
    images: string;
    description: string;
    type: "web" | "mobile";
  }) => {
    return (
      <CardHeader>
        <img
          src={images}
          alt={description}
          loading="lazy"
          className={cn(
            "rounded-xl min-h-[200px] max-h-[200px] min-w-[200px]",
            type === "web" ? "object-cover" : "object-contain"
          )}
        />
      </CardHeader>
    );
  }
);

const ProjectCardContent = memo(
  ({
    title,
    description,
    technologies,
  }: {
    title: string;
    description: string;
    technologies: TechProps[];
  }) => {
    return (
      <CardContent className="py-0">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-1 mb-2 min-h-24">
          {description}
        </CardDescription>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          {technologies.map((tech, index) => (
            <TechIcon key={index} {...tech} />
          ))}
        </div>
      </CardContent>
    );
  }
);

const ProjectCardFooter = memo(
  ({ github, demo }: { github: string; demo: string }) => {
    return (
      <CardFooter className="w-full flex justify-end pt-4">
        <div className="flex items-center justify-center gap-3">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button
              size={"sm"}
              variant={"accent"}
              className="flex items-center gap-1"
            >
              <Github size={15} color="hsl(var(--primary))" />
              <p className="text-primary">Github</p>
            </Button>
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <Button size={"sm"} className="flex items-center gap-1">
                <p>Demo</p>
                <ArrowUpRight size={15} />
              </Button>
            </a>
          )}
        </div>
      </CardFooter>
    );
  }
);

const ProjectCard = memo(({ project }: { project: ProjectProps }) => {
  const {
    images,
    description,
    title,
    technologies,
    github,
    demo,
    type = "web",
  } = project;

  const memoizedHeader = useMemo(
    () => (
      <ProjectCardHeader
        images={images}
        description={description}
        type={type}
      />
    ),
    [images, description, type]
  );

  const memoizedContent = useMemo(
    () => (
      <ProjectCardContent
        title={title}
        description={description}
        technologies={technologies}
      />
    ),
    [title, description, technologies]
  );

  const memoizedFooter = useMemo(
    () => <ProjectCardFooter github={github} demo={demo ?? ""} />,
    [github, demo]
  );

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Tilt options={{ max: 10, scale: 1.05, perspective: 1600, axis: "Y" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.9,
          y: isInView ? 0 : -20,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Card className="w-full cursor-default flex flex-col justify-between">
          {memoizedHeader}
          {memoizedContent}
          {memoizedFooter}
        </Card>
      </motion.div>
    </Tilt>
  );
});

export default ProjectCard;
