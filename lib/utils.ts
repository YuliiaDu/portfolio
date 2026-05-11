import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as a zero-padded string (01, 02…)
 */
export function pad(n: number, digits = 2) {
  return String(n).padStart(digits, "0");
}
