import { Rocket } from "lucide-react";
import { Title } from "../title";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useNavigation } from "@/context/navigation-provider";
import SocialMedia from "./SocialMedia";

const CardContact = () => {
  const { currentNav, setCurrentNav } = useNavigation();

  return (
    <div className={`${currentNav === "home" ? "pt-6" : ""} w-11/12`}>
      <Title text="Contact" href="/contact" />
      <Card className="sm:w-3/4 md:w-full my-4 dark:hover:bg-secondary/50 hover:cursor-default">
        <CardHeader className={currentNav === "contact" ? "pb-0" : "pb-4"}>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <span>Get In Touch</span>
            <Rocket color="hsl(var(--foreground))" size={20} />
          </CardTitle>
          <CardDescription>
            Feel free to contact me for any work or suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentNav === "home" ? (
            <Button
              variant={"outline"}
              className="items-center justify-center gap-3 px-4"
              onClick={() => setCurrentNav("contact")}
            >
              <span className="text-base font-semibold">Contact Me</span>
              <Rocket color="hsl(var(--foreground))" size={20} />
            </Button>
          ) : (
            <SocialMedia />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardContact;
