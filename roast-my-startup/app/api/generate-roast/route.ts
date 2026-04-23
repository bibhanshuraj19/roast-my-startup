import { NextRequest, NextResponse } from "next/server";
import { roastInputSchema, validateIdeaContent } from "@/lib/moderation/validateIdea";
import { generateRoast } from "@/lib/ai/generateRoast";
import { generateSlug } from "@/lib/sharing/slug";
import { createRoast } from "@/lib/db/roasts";

// Simple in-memory rate limiter (replace with Upstash in production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 24 * 60 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 3) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limit
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. You can roast 3 ideas per day. Come back tomorrow!" },
        { status: 429 }
      );
    }

    // Parse and validate input
    const body = await req.json();
    const parsed = roastInputSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return NextResponse.json(
        { error: firstError.message },
        { status: 400 }
      );
    }

    // Content validation
    const contentCheck = validateIdeaContent(parsed.data.idea);
    if (!contentCheck.valid) {
      return NextResponse.json(
        { error: contentCheck.reason },
        { status: 400 }
      );
    }

    // Generate roast via AI
    const report = await generateRoast(parsed.data);

    // Generate slug
    const slug = generateSlug(parsed.data.idea);

    // Save to database
    let savedData;
    try {
      savedData = await createRoast({
        slug,
        input: parsed.data,
        report,
      });
    } catch (dbError) {
      // If DB save fails (e.g., no Supabase configured), still return the roast
      console.warn("Failed to save to database:", dbError);
      savedData = { id: "local", slug, score: report.score };
    }

    return NextResponse.json(savedData);
  } catch (error) {
    console.error("Generate roast error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate roast" },
      { status: 500 }
    );
  }
}
