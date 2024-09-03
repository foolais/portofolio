import * as React from "react";

import { cn } from "@/lib/utils";
import { DescriptionProps } from "@/types/types";

interface CardHeaderComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: DescriptionProps[];
  icon: React.ReactNode;
  isShowDetails?: boolean;
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-border bg-background text-foreground shadow dark:border-border dark:bg-secondary/50 dark:text-foreground dark:hover:bg-secondary cursor-pointer",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardHeaderComponent = React.forwardRef<
  HTMLDivElement,
  CardHeaderComponentProps
>(
  (
    { title, description, icon, isShowDetails = false, className, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-row items-center gap-6 space-y-1.5 p-6",
        isShowDetails && "pb-4",
        className
      )}
      {...props}
    >
      <div className="p-4 md:p-6 bg-background w-max h-max rounded-xl shadow">
        {icon}
      </div>
      <div>
        <CardTitle>{title}</CardTitle>
        <div className="grid gap-2 pt-2">
          {description.map(({ text, Icon }, index) => (
            <CardDescriptionList key={index} text={text} Icon={Icon} />
          ))}
        </div>
      </div>
    </div>
  )
);

CardHeaderComponent.displayName = "CardHeaderComponent";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-5 tracking-wide", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardDescriptionList = React.forwardRef<
  HTMLParagraphElement,
  DescriptionProps
>(({ text, Icon, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "flex items-start gap-1.5 text-sm text-slate-500 dark:text-slate-400"
    )}
    {...props}
  >
    <Icon size={20} color="hsl(var(--primary))" />
    <span>{text}</span>
  </p>
));
CardDescriptionList.displayName = "CardDescriptionList";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardHeaderComponent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
