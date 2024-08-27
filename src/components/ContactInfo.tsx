import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Contact, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { contactData } from "@/data/data";

interface Props {
  className?: string;
}

const ContactInfo = ({ className }: Props) => {
  return (
    <div
      className={cn(
        className,
        "bg-secondary shadow rounded-lg p-6 border-[1px] border-primary"
      )}
    >
      <div className="flex items-center gap-3 p-1 icon-wrapper">
        <Contact className="icon-size" />
        <p className="text-sm font-semibold lg:text-base">Contact Me</p>
      </div>
      <Separator />
      <div className="grid gap-2 my-2 w-full">
        {contactData.map(({ text, icon: Icon, link }, index) => (
          <div key={index} className="flex items-center gap-2 px-2">
            <img src={Icon} alt={text} width={25} height={25} className="" />
            <p className="text-xs sm:text-sm lg:text-base ml-2">{text}</p>
            <a key={index} href={link} target="_blank">
              <Button
                variant="ghost"
                className="w-full flex items-center justify-start gap-4 px-1.5"
              >
                <ExternalLink size={20} />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
