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
import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { TechProps } from "@/types/types";

interface ProjectProps {
  title: string;
  description: string;
  images: string;
  technologies: TechProps[];
  github: string;
  demo: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="w-11/12 cursor-default">
      <ProjectCardHeader
        images={project.images}
        description={project.description}
      />
      <ProjectCardContent
        title={project.title}
        description={project.description}
      />
      <ProjectCardFooter
        technologies={project.technologies}
        github={project.github}
        demo={project.demo}
      />
    </Card>
  );
};

const ProjectCardHeader = ({
  images,
  description,
}: {
  images: string;
  description: string;
}) => {
  return (
    <CardHeader>
      <img
        src={images}
        alt={description}
        loading="lazy"
        className="rounded-xl object-cover object-center max-h-[400px]"
      />
    </CardHeader>
  );
};

const ProjectCardContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <CardContent className="py-0">
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  );
};

const ProjectCardFooter = ({
  technologies,
  github,
  demo,
}: {
  technologies: TechProps[];
  github: string;
  demo: string;
}) => {
  return (
    <CardFooter className="w-full flex items-center justify-between pt-4">
      <div className="flex flex-wrap items-center gap-3 mt-2">
        {technologies.map((tech, index) => (
          <TechIcon key={index} {...tech} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-3">
        <Link to={github} target="_blank" rel="noopener noreferrer">
          <Button
            size={"sm"}
            variant={"accent"}
            className="flex items-center gap-1"
          >
            <Github size={15} />
            <p>Github</p>
          </Button>
        </Link>
        <Link to={demo} target="_blank" rel="noopener noreferrer">
          <Button
            size={"sm"}
            variant={"outline"}
            className="flex items-center gap-1"
          >
            <p>Demo</p>
            <ArrowUpRight size={15} />
          </Button>
        </Link>
      </div>
    </CardFooter>
  );
};

const Project = () => {
  return (
    <div>
      <Title text="Projects" />
      <div className="grid grid-cols-1 gap-6 mt-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
