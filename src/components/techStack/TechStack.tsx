import { techStackData } from "@/data/data";
import { Title } from "../title";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { TechProps } from "@/types/types";

const TechStack = () => {
  return (
    <div className="w-full px-6 mt-6">
      <Title text="Technologies that I use" />
      <div className="flex flex-wrap items-center gap-3 my-4">
        {techStackData.map(({ name, image }: TechProps) => {
          return (
            <Card key={name} className="w-max">
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
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
