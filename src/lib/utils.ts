import { type ClassValue, clsx } from "clsx";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMobileWidth() {
  return useMediaQuery({ query: "(max-width: 830px)" });
}
