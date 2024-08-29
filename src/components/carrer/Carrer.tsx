import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";
import { Title } from "../title";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const jobData = [
  {
    company: "PT Widya Robotics",
    position: "Frontend Developer",
    date: "Feb 2022 - Aug 2022",
    location: "Yogyakarta",
  },
  {
    company: "Tamtech Internasional",
    position: "Frontend Developer",
    date: "Dec 2022 - Dec 2023",
    location: "Yogyakarta",
  },
];

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
      <Title text="Carrer" />
      {jobData.map((job) => {
        return (
          <Card key={job.company} className="my-4 flex items-center px-6">
            <div className="p-4 md:p-6 bg-background w-max h-max rounded-xl shadow">
              <Briefcase size={35} />
            </div>
            <CardHeader>
              <CardTitle>{job.position}</CardTitle>
              <CardDescription className="grid gap-2 pt-1">
                <Description text={job.company} Icon={Building2} />
                <Description text={job.location} Icon={MapPin} />
                <Description text={job.date} Icon={CalendarDays} />
              </CardDescription>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};

export default Carrer;
