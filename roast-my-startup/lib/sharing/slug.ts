import { nanoid } from "nanoid";

/**
 * Generate a URL-safe slug from the idea text.
 * Format: first-few-words-randomsuffix
 * Example: "ai-app-for-students-42xk"
 */
export function generateSlug(idea: string): string {
  const words = idea
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 5)
    .join("-");

  const suffix = nanoid(4);
  
  const slug = words ? `${words}-${suffix}` : suffix;
  
  // Ensure slug isn't too long
  return slug.slice(0, 80);
}
