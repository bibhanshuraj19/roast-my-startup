import { z } from "zod";

export const roastReportSchema = z.object({
  score: z.number().int().min(0).max(100),
  verdict: z.string().min(5).max(300),
  roast: z.string().min(20).max(1500),
  whatIsGood: z.array(z.string()).min(1).max(6),
  biggestProblems: z.array(z.string()).min(1).max(6),
  betterPositioning: z.string().min(10).max(1000),
  targetUser: z.string().optional().default(""),
  monetizationFeedback: z.string().optional().default(""),
  first7DayPlan: z.array(z.string()).min(3).max(7),
  firstCustomers: z.array(z.string()).min(2).max(7),
  shareText: z.string().min(5).max(280),
  shareCardTitle: z.string().min(3).max(80),
  shareCardSubtitle: z.string().min(3).max(120),
});

export type ValidatedRoastReport = z.infer<typeof roastReportSchema>;
