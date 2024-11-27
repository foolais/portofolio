import { socialMediaData } from "@/data/data";
import { Button } from "../ui/button";
import { ArrowUpRight, Copy } from "lucide-react";
import { SocialMediaProps } from "@/types/types";
import { toast, Toaster } from "sonner";
import { Title } from "../title";
import { animated, cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContactProps {
  isInSideNav?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isInSideNav = true }) => {
  const animateMotion = {
    initial: isInSideNav ? { opacity: 0, x: -40 } : { opacity: 0, y: -40 },
    whileHover: { scale: 1.1, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95, transition: { duration: 0.3 } },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  const onAction = (data: SocialMediaProps) => {
    const { type, url, text } = data;
    if (type === "Gmail") {
      navigator.clipboard.writeText(text || "");
      toast(
        <div>
          <p>Email copied to clipboard!</p>
          <p className="text-sm text-slate-500">Copied: {text}</p>
        </div>,
        {
          duration: 2500,
          position: "top-center",
        }
      );
    } else {
      window.open(url || "", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={isInSideNav ? "" : "mt-6"}>
      {!isInSideNav && <Title text="Contact" />}
      <div
        className={cn(
          "flex flex-wrap",
          isInSideNav ? "flex-col" : "mt-3 gap-4"
        )}
      >
        {socialMediaData.map(({ icon: Icon, ...data }, index) => (
          <motion.div
            {...animateMotion}
            animate={animated(
              isInSideNav ? 4 + index : 4,
              isInSideNav ? "left" : "top"
            )}
            key={index}
            className={cn(
              "bg-background flex items-center justify-between gap-3 px-3 py-1 hover:bg-secondary rounded-md cursor-pointer",
              !isInSideNav &&
                "dark:bg-secondary/50 hover:bg-secondary hover:opacity-80 rounded-xl border border-slate-300 dark:border-slate-800 space-y-1.5"
            )}
            onClick={() => onAction(data)}
          >
            <div className="flex items-center gap-3">
              <Icon size={18} color="hsl(var(--primary))" />
              <span>{data.type}</span>
            </div>
            <Button
              variant="ghost"
              className="flex items-center justify-start px-2"
            >
              {data.type === "Gmail" ? (
                <Copy size={18} />
              ) : (
                <ArrowUpRight size={18} />
              )}
            </Button>
          </motion.div>
        ))}
      </div>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--primary))",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Contact;
