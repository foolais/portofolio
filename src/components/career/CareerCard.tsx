import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";
import { Card, CardContent, CardHeaderComponent } from "../ui/card";
import CareerDetails from "./CareerDetails";
import { TechIcon } from "../techStack";
import { JobProps } from "@/types/types";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/context/navigation-provider";

interface CareerCardProps {
  job: JobProps;
  isWithIcons?: boolean;
  className?: string;
}

const CareerCard: React.FC<CareerCardProps> = ({
  job,
  isWithIcons,
  className,
}) => {
  const { currentNav } = useNavigation();

  return (
    <Card
      className={cn("w-full sm:w-3/4 md:w-11/12 cursor-default", className)}
    >
      <CardHeaderComponent
        title={job.position}
        description={[
          { text: job.company, Icon: Building2 },
          { text: job.location, Icon: MapPin },
          { text: job.date, Icon: CalendarDays },
        ]}
        icon={<Briefcase size={35} />}
        isWithIcons={isWithIcons}
      />
      {job.description && job.technologies && (
        <CardContent>
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Techologies</p>
            <div className="flex gap-1">
              {job.technologies.map((tech, index) => (
                <TechIcon key={index} {...tech} />
              ))}
            </div>
          </div>
          {currentNav === "profile" && (
            <CareerDetails description={job.description} />
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default CareerCard;
