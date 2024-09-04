import { socialMediaData } from "@/data/data";
import { Title } from "../title";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { TechIcon } from "../techStack";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="w-full mb-6">
      <Title text="Social Media" />
      <div className="flex flex-wrap gap-3 my-4">
        {socialMediaData.map((data) => {
          return (
            <Card key={data.text}>
              <CardHeader className="py-1 px-2 flex-row items-center gap-3 space-y-0 rounded-lg">
                <TechIcon name={data.imagesName} image={data.images} />
                <CardTitle className="font-normal tracking-wider">
                  {data.text}
                </CardTitle>
                <a href={data.link} target="_blank">
                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-start gap-4 px-1.5"
                  >
                    <ArrowUpRight size={20} />
                  </Button>
                </a>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
