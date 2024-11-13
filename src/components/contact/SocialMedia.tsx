import { socialMediaData } from "@/data/data";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { TechIcon } from "../techStack";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { memo, useMemo } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const SocialMedia = memo(() => {
  const SocialMediaLinks = useMemo(() => {
    const handleRedirect = (link: string) => {
      window.open(link, "_blank");
    };

    return socialMediaData.map((data) => (
      <AlertDialog key={data.text}>
        <Card className="w-max">
          <AlertDialogTrigger asChild>
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
          </AlertDialogTrigger>
        </Card>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Redirect to this URL?</AlertDialogTitle>
            <AlertDialogDescription>{data.link}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleRedirect(data.link)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ));
  }, [socialMediaData]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap my-4 gap-3">{SocialMediaLinks}</div>
    </div>
  );
});

export default SocialMedia;
