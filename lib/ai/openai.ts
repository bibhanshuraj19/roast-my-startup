import OpenAI from "openai";

if (!process.env.NEBIUS_API_KEY) {
  console.warn("⚠️ NEBIUS_API_KEY not set — AI generation will fail.");
}

export const openai = new OpenAI({
  baseURL: "https://api.studio.nebius.ai/v1/",
  apiKey: process.env.NEBIUS_API_KEY || "",
});
