import type { ValidatedRoastInput } from "@/lib/moderation/validateIdea";

export const SYSTEM_PROMPT = `You are RoastMyStartup, an AI startup mentor for Indian students, indie hackers, and first-time founders.

Your job is to give brutally honest but constructive feedback on startup ideas.

Tone rules:
- Be funny, sharp, and memorable.
- Roast the idea, never the person.
- Use Indian startup and student context when relevant (Indian cities, colleges, market dynamics, cultural references).
- Avoid generic advice like "do market research" — be specific.
- Always give practical next actions.
- Be direct about monetization, distribution, and customer clarity.
- Do not encourage illegal, unsafe, hateful, or exploitative businesses.
- Do not fabricate market data or statistics.

Scoring framework (each out of 20, total 100):
1. Problem clarity — Is the problem real, specific, and worth solving?
2. Target customer specificity — Is there a clear, reachable buyer?
3. Monetization realism — Can this make money in a realistic way?
4. Differentiation — What makes this different from existing solutions?
5. MVP feasibility — Can a solo founder or small team build a testable version quickly?

Score interpretation:
- 0-20: Meme idea
- 21-40: Needs serious narrowing
- 41-60: Potential, but unfocused
- 61-80: Promising if validated
- 81-100: Strong, but still needs execution

Output only valid JSON matching the requested schema. No markdown, no code fences, just raw JSON.`;

export function buildUserPrompt(input: ValidatedRoastInput): string {
  const lines = [
    "Roast and evaluate this startup idea.",
    "",
    `Startup idea: ${input.idea}`,
    `Target customer: ${input.targetCustomer}`,
    `Current stage: ${input.stage}`,
  ];

  if (input.monetizationPlan) lines.push(`Monetization plan: ${input.monetizationPlan}`);
  if (input.founderType) lines.push(`Founder type: ${input.founderType}`);
  if (input.city) lines.push(`City: ${input.city}`);
  if (input.collegeOrCompany) lines.push(`College/company: ${input.collegeOrCompany}`);
  if (input.industry) lines.push(`Industry: ${input.industry}`);
  if (input.hasMvp !== undefined) lines.push(`Has MVP: ${input.hasMvp ? "Yes" : "No"}`);
  if (input.hasUsers !== undefined) lines.push(`Has users: ${input.hasUsers ? "Yes" : "No"}`);
  if (input.hasRevenue !== undefined) lines.push(`Has revenue: ${input.hasRevenue ? "Yes" : "No"}`);
  if (input.biggestConfusion) lines.push(`Biggest confusion: ${input.biggestConfusion}`);

  lines.push("");
  lines.push("Return a JSON object with these exact keys:");
  lines.push("- score: integer 0-100");
  lines.push("- verdict: one memorable sentence");
  lines.push("- roast: 2-4 sentence funny but constructive roast");
  lines.push("- whatIsGood: array of 2-4 positive signals");
  lines.push("- biggestProblems: array of 2-4 biggest issues");
  lines.push("- betterPositioning: one paragraph suggesting a sharper niche");
  lines.push("- targetUser: specific rewritten target user description");
  lines.push("- monetizationFeedback: specific monetization advice");
  lines.push("- first7DayPlan: array of exactly 5 concrete action items for the first week");
  lines.push("- firstCustomers: array of 3-5 specific channels to find first customers");
  lines.push("- shareText: short tweet-friendly roast summary");
  lines.push("- shareCardTitle: 4-6 word card title");
  lines.push("- shareCardSubtitle: score and key insight in one line");

  return lines.join("\n");
}