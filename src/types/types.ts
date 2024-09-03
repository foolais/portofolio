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
