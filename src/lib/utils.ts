import { type ClassValue, clsx } from "clsx";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMobileWidth() {
  return useMediaQuery({ query: "(max-width: 830px)" });
}

/*
type sidenav when motion is use in sidenav or all
type mobile when motion is use in mobile or all
type all mean usage of motion didn't specify
*/
export const animated = (
  index: number,
  type: "sidenav" | "mobile" | "all",
  isInSideNav: boolean = false,
  isMobile: boolean = false
) => {
  let initial;

  if (type === "sidenav") {
    initial = isInSideNav
      ? {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: index * 0.2,
          },
        }
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: index * 0.2,
          },
        };
  } else if (type === "mobile") {
    initial = isMobile
      ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: index * 0.2,
          },
        }
      : {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: index * 0.2,
          },
        };
  } else {
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
