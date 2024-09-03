import { educationData } from "@/data/data";
import { Title } from "../title";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="px-6 mt-8">
      <Title text="Education" />
      {educationData.map((education) => (
        <EducationCard key={education.name} education={education} />
      ))}
    </div>
  );
};

export default Education;
