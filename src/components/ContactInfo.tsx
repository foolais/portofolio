import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Contact } from "lucide-react";
import { Button } from "./ui/button";
import { contactData } from "@/data/data";

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className }: ContactInfoProps) => {
  return (
    <div className={cn(className, "bg-secondary shadow rounded-lg p-6")}>
      <div className="flex items-center gap-4 p-2 icon-wrapper">
        <Contact className="icon-size" />
        <p className="text-sm font-semibold md:text-lg">Contact Me</p>
      </div>
      <Separator />
      <div className="grid gap-2 my-2 w-full">
        {contactData.map(({ text, icon: Icon, link }, index) => (
          <a key={index} href={link} target="_blank">
            <Button
              variant="ghost"
              className="w-full flex items-center justify-start gap-4 px-1.5"
            >
              <img src={Icon} alt={text} width={25} height={25} className="" />
              <p className="text-xs sm:text-sm md:text-lg">{text}</p>
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
