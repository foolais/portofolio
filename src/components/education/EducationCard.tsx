import { CalendarDays, Globe, Landmark, MapPin, School } from "lucide-react";
import { Card, CardHeaderComponent } from "../ui/card";
import { EducationProps } from "@/types/types";

interface EducationCardProps {
  education: EducationProps;
}

const EducationCard = ({ education }: EducationCardProps) => {
  const { name, location, date, major, degree } = education;

  return (
    <Card className="my-4 w-full sm:w-11/12">
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
