import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function cutStringAt(str: string, charNum: number) {
  return str.substring(0, charNum);
}