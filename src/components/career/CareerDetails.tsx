import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCheck } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

const CareerDetails = ({ description }: { description: string[] }) => {
  return (
    <Accordion type="single" collapsible className="pt-0">
      <AccordionItem value="item-1">
        <AccordionTrigger className="pt-0">Job Description</AccordionTrigger>
        <AccordionContent>
          {description.map((text, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start gap-4">
                <CheckCheck size={20} color="hsl(var(--primary))" />
                <p className="text-sm w-5/6">{text}</p>
              </div>
              <Separator className="bg-accent my-2" />
            </React.Fragment>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CareerDetails;
