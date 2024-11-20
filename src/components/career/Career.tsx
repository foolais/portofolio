import { useNavigation } from "@/context/navigation-provider";
import { Title } from "../title";
import CareerCard from "./CareerCard";
import { jobData } from "@/data/data";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

const Career = () => {
  const { currentNav } = useNavigation();

  const isProfilePage = useMemo(() => currentNav === "profile", [currentNav]);

  return (
    <div className="mt-8">
      <Title text="Career" />
      <div
        className={cn(
          !isProfilePage && "sm:flex-row md:flex-col",
          "flex flex-col gap-4 mt-4"
        )}
      >
        {jobData.map((job) => (
          <CareerCard key={job.company} job={job} isWithIcons={isProfilePage} />
        ))}
      </div>
    </div>
  );
};

export default Career;
