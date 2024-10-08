import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";
import { Card, CardContent, CardHeaderComponent } from "../ui/card";
import CareerDetails from "./CareerDetails";
import { TechIcon } from "../techStack";
import { JobProps } from "@/types/types";
import { cn } from "@/lib/utils";

interface CareerCardProps {
  job: JobProps;
  isShowDetails?: boolean;
  isWithIcons?: boolean;
  className?: string;
}

const CareerCard: React.FC<CareerCardProps> = ({
  job,
  isShowDetails = false,
  isWithIcons,
  className,
}) => {
  return (
    <Card
      className={cn("my-4 w-full sm:w-3/4 md:w-full cursor-default", className)}
    >
      <CardHeaderComponent
        title={job.position}
        description={[
          { text: job.company, Icon: Building2 },
          { text: job.location, Icon: MapPin },
          { text: job.date, Icon: CalendarDays },
        ]}
        icon={<Briefcase size={35} />}
        isShowDetails={isShowDetails}
        isWithIcons={isWithIcons}
      />
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
