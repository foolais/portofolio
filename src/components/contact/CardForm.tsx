import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const CardForm = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
      </div>
      <Textarea placeholder="Message" className="min-h-[100px] my-4" />
      <Button className="w-full">Send Message</Button>
    </form>
  );
};

export default CardForm;
