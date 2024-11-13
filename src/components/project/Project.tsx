import { projectsData } from "@/data/data";
import { Title } from "../title";
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
import { memo, useMemo } from "react";

interface ProjectProps {
  title: string;
  description: string;
  images: string;
  technologies: TechProps[];
  github: string;
  demo: string;
}

console.log("project render");

const ProjectCard = memo(({ project }: { project: ProjectProps }) => {
  const { images, description, title, technologies, github, demo } = project;

  const memoizedHeader = useMemo(
    () => <ProjectCardHeader images={images} description={description} />,
    [images, description]
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
    () => <ProjectCardFooter github={github} demo={demo} />,
    [github, demo]
  );

  return (
    <Card className="w-full cursor-default flex flex-col justify-between">
      {memoizedHeader}
      {memoizedContent}
      {memoizedFooter}
    </Card>
  );
});

const ProjectCardHeader = memo(
  ({ images, description }: { images: string; description: string }) => {
    return (
      <CardHeader>
        <img
          src={images}
          alt={description}
          loading="lazy"
          className="rounded-xl object-cover object-center min-h-[150px] min-w-[150px]"
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
        <CardDescription>{description}</CardDescription>
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
              <Github size={15} />
              <p>Github</p>
            </Button>
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <Button
              size={"sm"}
              variant={"outline"}
              className="flex items-center gap-1"
            >
              <p>Demo</p>
              <ArrowUpRight size={15} />
            </Button>
          </a>
        </div>
      </CardFooter>
    );
  }
);

const Project = () => {
  return (
    <div>
      <Title text="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
