import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CareerDetails from "./CareerDetails";
import { JobProps } from "@/types/types";
import { cn } from "@/lib/utils";
import { TechIcon } from "../techStack";

interface DescriptionProps {
  text: string;
  Icon: any;
}

interface CareerCardProps {
  job: JobProps;
  isShowDetails?: boolean;
}

const Description = ({ text, Icon }: DescriptionProps) => {
  return (
    <CardDescription className="flex items-start gap-1.5">
      <Icon size={20} color="hsl(var(--primary))" />
      <span>{text}</span>
    </CardDescription>
  );
};

const CareerCard: React.FC<CareerCardProps> = ({
  job,
  isShowDetails = false,
}) => {
  return (
    <Card key={job.company} className="my-4 w-full sm:w-11/12">
      <CardHeader
        className={cn(
          "flex flex-row items-center gap-6",
          isShowDetails ? "pb-4" : "pb-6"
        )}
      >
        <div className="p-4 md:p-6 bg-background w-max h-max rounded-xl shadow">
          <Briefcase size={35} />
        </div>
        <div>
          <CardTitle>{job.position}</CardTitle>
          <div className="grid gap-2 pt-2">
            <Description text={job.company} Icon={Building2} />
            <Description text={job.location} Icon={MapPin} />
            <Description text={job.date} Icon={CalendarDays} />
          </div>
        </div>
      </CardHeader>
      {isShowDetails && job.description && job.technologies && (
        <CardContent>
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Techologies</p>
            <div className="flex gap-1">
              {job.technologies.map((tech, index) => (
                <TechIcon key={index} {...tech} />
              ))}
            </div>
          </div>
          <CareerDetails description={job.description} />
        </CardContent>
      )}
    </Card>
  );
};

export default CareerCard;
