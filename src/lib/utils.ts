import { type ClassValue, clsx } from "clsx";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMobileWidth() {
  return useMediaQuery({ query: "(max-width: 830px)" });
}

export const animated = (index: number, type: "left" | "top") => {
  let initial;

  if (type === "left") {
    initial = {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: index * 0.2,
      },
    };
  } else if (type === "top") {
    initial = {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: index * 0.2,
      },
    };
  }
  return initial;
};
