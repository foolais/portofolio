import { Title } from "../title";
import CareerCard from "./CareerCard";
import { jobData } from "@/data/data";

interface CarrerProps {
  isShowDetails?: boolean;
}

const Career = ({ isShowDetails }: CarrerProps) => {
  return (
    <div className="mt-8">
      <Title text="Career" />
      {jobData.map((job) => (
        <CareerCard key={job.company} job={job} isShowDetails={isShowDetails} />
      ))}
    </div>
  );
};

export default Career;
