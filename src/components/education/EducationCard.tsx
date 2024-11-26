import { CalendarDays, Globe, Landmark, MapPin, School } from "lucide-react";
import { Card, CardHeaderComponent } from "../ui/card";
import { EducationProps } from "@/types/types";
import { cn } from "@/lib/utils";
import { Tilt } from "react-tilt";

interface EducationCardProps {
  education: EducationProps;
  className?: string;
}

const EducationCard = ({ education, className }: EducationCardProps) => {
  const { name, location, date, major, degree } = education;

  return (
    <Tilt options={{ max: 5, scale: 1, perspective: 4000, axis: "Y" }}>
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
    </Tilt>
  );
};

export default EducationCard;
