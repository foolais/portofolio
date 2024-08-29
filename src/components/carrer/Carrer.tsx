import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";
import { Title } from "../title";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { jobData } from "@/data/data";

interface DescriptionProps {
  text: string;
  Icon: any;
}

const Description = ({ text, Icon }: DescriptionProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <Icon size={20} color="hsl(var(--primary))" />
      <span>{text}</span>
    </div>
  );
};

const Carrer = () => {
  return (
    <div className="w-full px-6 mt-8">
      <Title text="Carrer" isBtnShow={true} />
      <div></div>
      {jobData.map((job) => {
        return (
          <Card key={job.company} className="my-4 w-full sm:w-5/6">
            <CardHeader className="flex flex-row items-center gap-6">
              <div className="p-4 md:p-6 bg-background w-max h-max rounded-xl shadow">
                <Briefcase size={35} />
              </div>
              <div>
                <CardTitle>{job.position}</CardTitle>
                <CardDescription className="grid gap-2 pt-1">
                  <Description text={job.company} Icon={Building2} />
                  <Description text={job.location} Icon={MapPin} />
                  <Description text={job.date} Icon={CalendarDays} />
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};

export default Carrer;
