import { useNavigation } from "@/context/navigation-provider";
import { Title } from "../title";
import CareerCard from "./CareerCard";
import { jobData } from "@/data/data";
import { useMemo } from "react";

const Career = () => {
  const { currentNav } = useNavigation();

  const isProfilePage = useMemo(() => currentNav === "profile", [currentNav]);

  return (
    <div className="mt-8">
      <Title text="Career" />
      <div
        className={
          isProfilePage
            ? "flex flex-col gap-4 mt-4"
            : "flex flex-col sm:flex-row md:flex-col sm:gap-3 md:gap-4 mt-4"
        }
      >
        {jobData.map((job, index) => (
          <CareerCard
            key={job.company}
            job={job}
            isShowDetails={isProfilePage}
            isWithIcons={isProfilePage}
            className={
              isProfilePage && index % 2 === 0
                ? "place-self-start"
                : "place-self-end"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Career;
