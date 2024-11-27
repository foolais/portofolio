import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { Separator } from "../ui/separator";
import { lazy, Suspense } from "react";
import { useNavigation } from "@/context/navigation-provider";
import { motion } from "framer-motion";
import { animated, getMobileWidth } from "@/lib/utils";

const ProfileHero = lazy(() => import("./ProfileHero"));
const ProfileDescription = lazy(() => import("./ProfileDescription"));
const ProfileName = lazy(() => import("./ProfileName"));

interface ProfileProps {
  isWithHero?: boolean;
  isSidebar?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ isWithHero = false }) => {
  const isMobile = getMobileWidth();
  const { currentNav } = useNavigation();

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
            <Button className="flex items-center justify-center gap-2 px-4">
              <span className="text-base font-bold">Resume</span>
              <Download color="hsl(var(--background))" size={20} />
            </Button>
          </motion.div>
        </div>
      </Suspense>
    </div>
  );
};

export default Profile;
