import { educationData } from "@/data/data";
import { Title } from "../title";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="mt-6">
      <Title text="Education" />
      <div className="flex flex-col gap-4 mt-4">
        {educationData.map((education) => (
          <EducationCard key={education.name} education={education} />
        ))}
      </div>
    </div>
  );
};

export default Education;
