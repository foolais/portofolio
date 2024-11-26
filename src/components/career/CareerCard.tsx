import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";
import { Card, CardContent, CardHeaderComponent } from "../ui/card";
import CareerDetails from "./CareerDetails";
import { TechIcon } from "../techStack";
import { JobProps } from "@/types/types";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/context/navigation-provider";
import { Tilt } from "react-tilt";

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
    <Tilt options={{ max: 5, scale: 1, perspective: 4000, axis: "Y" }}>
      <Card className={cn("w-full cursor-default", className)}>
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
            <div className="flex gap-1.5 mb-4">
              {job.technologies.map((tech, index) => (
                <TechIcon key={index} {...tech} />
              ))}
            </div>
            {currentNav === "profile" && (
              <CareerDetails description={job.description} />
            )}
          </CardContent>
        )}
      </Card>
    </Tilt>
  );
};

export default CareerCard;
