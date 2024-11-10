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
import CardForm from "./CardForm";
// import { useNavigate } from "react-router-dom";

const CardContact: React.FC<{ isWithForm?: boolean }> = ({
  isWithForm = true,
}) => {
  // const navigate = useNavigate();

  return (
    <div className="w-full">
      <Title text="Contact" isBtnShow={!isWithForm} href="/contact" />
      <Card className="sm:w-3/4 md:w-full my-4 dark:hover:bg-secondary/50 hover:cursor-default">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <span>Get In Touch</span>
            {isWithForm && <Rocket color="hsl(var(--foreground))" size={20} />}
          </CardTitle>
          <CardDescription>
            Feel free to contact me for any work or suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isWithForm ? (
            <CardForm />
          ) : (
            <Button
              variant={"outline"}
              className="items-center justify-center gap-3 px-4"
              // onClick={() => navigate("/contact")}
            >
              <span className="text-base font-semibold">Contact Me</span>
              <Rocket color="hsl(var(--foreground))" size={20} />
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardContact;
