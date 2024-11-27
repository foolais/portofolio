import { CalendarDays, Globe, Landmark, MapPin, School } from "lucide-react";
import { Card, CardHeaderComponent } from "../ui/card";
import { EducationProps } from "@/types/types";
import { animated, animateMotion, cn } from "@/lib/utils";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

interface EducationCardProps {
  education: EducationProps;
  className?: string;
  index: number;
}

const EducationCard = ({ education, className, index }: EducationCardProps) => {
  const { name, location, date, major, degree } = education;

  return (
    <Tilt options={{ max: 5, scale: 1, perspective: 4000, axis: "Y" }}>
      <motion.div {...animateMotion} animate={animated(14 + index, "top")}>
        <Card className={cn("w-full cursor-default", className)}>
          <CardHeaderComponent
            title={name}
            description={[
              { text: major, Icon: Globe },
              { text: degree, Icon: Landmark },
              { text: location, Icon: MapPin },
              { text: date, Icon: CalendarDays },
            ]}
            icon={<School size={35} />}
          />
        </Card>
      </motion.div>
    </Tilt>
  );
};

export default EducationCard;
