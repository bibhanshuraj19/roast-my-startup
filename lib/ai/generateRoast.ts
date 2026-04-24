import { openai } from "./openai";
import { SYSTEM_PROMPT, buildUserPrompt } from "./roastPrompt";
import { roastReportSchema, type ValidatedRoastReport } from "./roastSchema";
import type { ValidatedRoastInput } from "@/lib/moderation/validateIdea";

export async function generateRoast(
  input: ValidatedRoastInput
): Promise<ValidatedRoastReport> {
  const userPrompt = buildUserPrompt(input);

  let completion;
  try {
    completion = await openai.chat.completions.create({
      model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.9,
      max_tokens: 3000,
      response_format: { type: "json_object" },
    });
  } catch (err: unknown) {
    const error = err as { status?: number; message?: string };
    if (error.status === 401) {
      console.error("Nebius API key is invalid or expired. Get a new key from https://studio.nebius.com/");
      throw new Error("AI service authentication failed. The API key may have expired — please contact the admin.");
    }
    throw new Error(`AI service error: ${error.message || "Unknown error"}`);
  }

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

