import { useLocation } from "react-router-dom";
import { Title } from "../title";
import CareerCard from "./CareerCard";
import { jobData } from "@/data/data";
import { useMemo } from "react";

const Career = () => {
  const { pathname } = useLocation();
  const isProfilePage = useMemo(() => pathname === "/profile", [pathname]);

  return (
    <div className="mt-8">
      <Title text="Career" />
      <div
        className={
          isProfilePage
            ? "flex flex-col"
            : "flex flex-col sm:flex-row md:flex-col sm:gap-3"
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
