import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";
import { Card, CardContent, CardHeaderComponent } from "../ui/card";
import CareerDetails from "./CareerDetails";
import { TechIcon } from "../techStack";
import { JobProps } from "@/types/types";
import { animated, animateMotion, cn } from "@/lib/utils";
import { useNavigation } from "@/context/navigation-provider";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

interface CareerCardProps {
  job: JobProps;
  className?: string;
  index: number;
}

const CareerCard: React.FC<CareerCardProps> = ({ job, className, index }) => {
  const { currentNav } = useNavigation();

  return (
    <Tilt options={{ max: 5, scale: 1, perspective: 4000, axis: "Y" }}>
      <motion.div
        {...animateMotion}
        animate={animated(
          currentNav === "home" ? 9 + index : 11 + index,
          "top"
        )}
      >
        <Card className={cn("w-full cursor-default", className)}>
          <CardHeaderComponent
            title={job.position}
            description={[
              { text: job.company, Icon: Building2 },
              { text: job.location, Icon: MapPin },
              { text: job.date, Icon: CalendarDays },
            ]}
            icon={<Briefcase size={35} />}
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
      </motion.div>
    </Tilt>
  );
};

export default CareerCard;
