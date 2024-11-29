import { Button } from "../ui/button";
import { Download, LoaderCircle } from "lucide-react";
import { Separator } from "../ui/separator";
import { lazy, Suspense, useState } from "react";
import { useNavigation } from "@/context/navigation-provider";
import { motion } from "framer-motion";
import { animated, getMobileWidth } from "@/lib/utils";
import Resume from "../../assets/Resume_Wahyu Esya Nasution.pdf";

const ProfileHero = lazy(() => import("./ProfileHero"));
const ProfileDescription = lazy(() => import("./ProfileDescription"));
const ProfileName = lazy(() => import("./ProfileName"));

interface ProfileProps {
  isWithHero?: boolean;
  isSidebar?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ isWithHero = false }) => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const isMobile = getMobileWidth();
  const { currentNav } = useNavigation();

  const onResumeDownload = () => {
    if (isDownloading) return;
    try {
      setIsDownloading(true);
      const link = document.createElement("a");
      link.href = Resume;
      link.download = "Resume_Wahyu Esya Nasution.pdf";
      link.click();
    } catch (error) {
      console.log({ error });
      setIsDownloading(false);
    } finally {
      setTimeout(() => setIsDownloading(false), 1500);
    }
  };

  const animateMotion = {
    initial: { opacity: 0, y: -20 },
    whileHover: { scale: 1.1, transition: { durantion: 0.3 } },
    whileTap: { scale: 0.95, transition: { duration: 0.3 } },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div className="max-h-screen">
      <Suspense>
        {isWithHero && isMobile ? (
          <ProfileHero />
        ) : (
          <div className="w-full">
            <ProfileName isFullName={true} />
            <motion.span
              {...animateMotion}
              animate={animated(2, "top")}
              className="w-full h-full"
            >
              <Separator />
            </motion.span>
          </div>
        )}
        <div>
          {currentNav === "profile" && <ProfileDescription />}
          <motion.div
            {...animateMotion}
            initial={{ opacity: 0, y: -20 }}
            animate={animated(currentNav === "home" ? 3 : 5, "top")}
            className={`${isWithHero && "ml-0 sm:ml-11 md:ml-0"} mt-4 w-max`}
          >
            <Button
              className="flex items-center justify-center gap-2 px-4"
              onClick={onResumeDownload}
            >
              {isDownloading ? (
                <>
                  <span className="text-base font-bold">Downloading</span>
                  <LoaderCircle
                    className="animate-spin"
                    color="hsl(var(--background))"
                    size={20}
                  />
                </>
              ) : (
                <>
                  <span className="text-base font-bold">Resume</span>
                  <Download color="hsl(var(--background))" size={20} />
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </Suspense>
    </div>
  );
};

export default Profile;
