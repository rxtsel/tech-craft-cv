import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate initials from a name.
 *
 * @param {string} name Name.
 * @returns {string[]} Initials array.
 */
export const generateInitials = (name: string) => {
  if (!name) return "AN";

  if (name.split(" ").length === 1) return name.substring(0, 2).toUpperCase();

  const [first, last] = name.split(" ");
  const initials = first[0].toUpperCase() + last[0].toUpperCase();

  return initials;
};
