import { openai } from "./openai";
import { SYSTEM_PROMPT, buildUserPrompt } from "./roastPrompt";
import { roastReportSchema, type ValidatedRoastReport } from "./roastSchema";
import type { ValidatedRoastInput } from "@/lib/moderation/validateIdea";

export async function generateRoast(
  input: ValidatedRoastInput
): Promise<ValidatedRoastReport> {
  const userPrompt = buildUserPrompt(input);

  const completion = await openai.chat.completions.create({
    model: "openai/gpt-oss-120b",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt },
    ],
    temperature: 0.9,
    max_tokens: 2000,
  });

  const content = completion.choices[0]?.message?.content;
  if (!content) {
    throw new Error("Empty response from AI");
  }

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error("AI returned invalid JSON");
  }

  // Validate against schema
  const result = roastReportSchema.safeParse(parsed);
  if (!result.success) {
    console.error("AI response validation failed:", result.error.issues);
    throw new Error("AI response did not match expected format");
  }

  return result.data;
}
