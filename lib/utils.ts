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

/**
 * Smart-split a project title for a two-line heading display.
 * - "gigmit Registration & Onboarding" → ["gigmit", "Registration & Onboarding"]
 * - All other titles              → roughly-half split on space count
 * - Single-word titles            → [title]
 */
export function splitTitle(title: string): string[] {
  const words = title.split(/\s+/);

  // Named split for gigmit
  if (title.startsWith("gigmit ")) {
    return ["gigmit", title.replace(/^gigmit\s+/, "")];
  }

  // Single word — nothing to split on
  if (words.length === 1) return [title];

  // Roughly-half word split
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}
