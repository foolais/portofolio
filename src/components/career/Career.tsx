import { Title } from "../title";
import CareerCard from "./CareerCard";
import { jobData } from "@/data/data";

const Career = () => {
  return (
    <div className="mt-6">
      <Title text="Career" />
      <div className="flex flex-col gap-4 mt-4">
        {jobData.map((job) => (
          <CareerCard key={job.company} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Career;
