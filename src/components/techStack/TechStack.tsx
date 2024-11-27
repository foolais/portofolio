import { techStackData } from "@/data/data";
import { Title } from "../title";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { TechProps } from "@/types/types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { animated, animateMotion } from "@/lib/utils";
import { useNavigation } from "@/context/navigation-provider";

const TechStack = () => {
  const { currentNav } = useNavigation();

  return (
    <div className="w-full mt-6">
      <motion.div
        {...animateMotion}
        animate={animated(currentNav === "home" ? 4 : 6, "top")}
      >
        <Title text="Tech Stack" />
      </motion.div>
      <div className="flex flex-wrap items-center gap-3 my-4">
        {techStackData.map(({ name, image }: TechProps, index) => {
          return (
            <Tilt key={name}>
              <motion.div
                {...animateMotion}
                animate={animated(
                  currentNav === "home" ? 5 + index / 4 : 7 + index / 4,
                  "top"
                )}
              >
                <Card className="w-max">
                  <CardHeader className="py-2 px-4 flex-row justify-center items-center gap-2 space-y-0">
                    <img
                      src={image}
                      alt={name}
                      loading="lazy"
                      className="w-4 h-4 object-cover"
                    />
                    <CardTitle className="text-base">{name}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
