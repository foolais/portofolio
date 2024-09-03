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

const CardContact = () => {
  return (
    <div className="w-full px-6 mt-6">
      <Title text="Contact" isBtnShow={true} />
      <Card className="sm:w-[450px] my-4 dark:hover:bg-secondary/50 hover:cursor-default">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Get In Touch</CardTitle>
          <CardDescription>
            Feel free to contact me for any work or suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant={"outline"}
            className="items-center justify-center gap-3 px-4"
          >
            <span className="text-base font-semibold">Contact Me</span>
            <Rocket color="hsl(var(--foreground))" size={20} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardContact;
