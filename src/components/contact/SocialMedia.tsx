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
      <div className="flex flex-wrap my-4 gap-3">
        {socialMediaData.map((data) => {
          return (
            <a key={data.text} href={data.link} target="_blank">
              <Card className="w-max">
                <CardHeader className="py-1 px-2 flex-row items-center gap-2 space-y-0 rounded-lg">
                  <TechIcon name={data.imagesName} image={data.images} />
                  <CardTitle className="font-normal tracking-wider">
                    {data.text}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-start p-1"
                    disabled
                  >
                    <ArrowUpRight size={20} />
                  </Button>
                </CardHeader>
              </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
