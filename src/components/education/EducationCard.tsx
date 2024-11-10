import { CalendarDays, Globe, Landmark, MapPin, School } from "lucide-react";
import { Card, CardHeaderComponent } from "../ui/card";
import { EducationProps } from "@/types/types";
import { cn } from "@/lib/utils";

interface EducationCardProps {
  education: EducationProps;
  className?: string;
}

const EducationCard = ({ education, className }: EducationCardProps) => {
  const { name, location, date, major, degree } = education;

  return (
    <Card className={cn("w-full sm:w-3/4 md:w-full cursor-default", className)}>
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
  );
};

export default EducationCard;
