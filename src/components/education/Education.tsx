import { educationData } from "@/data/data";
import { Title } from "../title";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="mt-8">
      <Title text="Education" />
      <div className="flex flex-col">
        {educationData.map((education, index) => (
          <EducationCard
            key={education.name}
            education={education}
            className={index % 2 === 0 ? "place-self-start" : "place-self-end"}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
