import { z } from "zod";

export const roastInputSchema = z.object({
  idea: z
    .string()
    .min(20, "Your idea needs at least 20 characters — give us something to roast!")
    .max(1000, "Keep it under 1000 characters — we need to roast, not read a novel"),
  targetCustomer: z
    .string()
    .min(5, "Who is this for? Be specific!")
    .max(300, "Keep it concise"),
  stage: z.enum([
    "just_idea",
    "building_mvp",
    "launched_no_users",
    "has_users",
    "has_revenue",
  ]),
  monetizationPlan: z.string().max(500).optional().default(""),
  founderType: z.string().optional().default(""),
  city: z.string().max(100).optional().default(""),
  collegeOrCompany: z.string().max(200).optional().default(""),
  industry: z.string().optional().default(""),
  hasMvp: z.boolean().optional().default(false),
  hasUsers: z.boolean().optional().default(false),
  hasRevenue: z.boolean().optional().default(false),
  biggestConfusion: z.string().max(500).optional().default(""),
});

export type ValidatedRoastInput = z.infer<typeof roastInputSchema>;

const SPAM_PATTERNS = [
  /test\s*test\s*test/i,
  /asdf|jkl;|qwert/i,
  /(.)\1{10,}/,
  /buy\s+now|click\s+here|free\s+money/i,
];

export function validateIdeaContent(idea: string): {
  valid: boolean;
  reason?: string;
} {
  // Check for spam
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(idea)) {
      return { valid: false, reason: "This looks like spam. Try a real startup idea!" };
    }
  }

  // Check for potential PII
  const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
  const phoneRegex = /(\+91|0)?[6-9]\d{9}/;
  if (emailRegex.test(idea)) {
    return { valid: false, reason: "Please remove email addresses from your idea." };
  }
  if (phoneRegex.test(idea)) {
    return { valid: false, reason: "Please remove phone numbers from your idea." };
  }

  return { valid: true };
}
