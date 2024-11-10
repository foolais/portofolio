export interface JobProps {
  company: string;
  position: string;
  location: string;
  date: string;
  description?: string[];
  technologies?: TechProps[];
}

export interface TechProps {
  name: string;
  image: string;
}

export interface DescriptionProps {
  text: string;
  Icon: any;
}

export interface EducationProps {
  name: string;
  location: string;
  date: string;
  major: string;
  degree: string;
}

export type Nav = "home" | "profile" | "projects" | "contact";
