import { supabaseServer } from "./supabaseServer";
import type { ValidatedRoastInput } from "@/lib/moderation/validateIdea";
import type { ValidatedRoastReport } from "@/lib/ai/roastSchema";

type RoastInsert = {
  slug: string;
  input: ValidatedRoastInput;
  report: ValidatedRoastReport;
};

export async function createRoast({ slug, input, report }: RoastInsert) {
  if (!supabaseServer) {
    console.warn("Supabase not configured — skipping DB save");
    return { id: "local-" + Date.now(), slug, score: report.score };
  }

  const { data, error } = await supabaseServer
    .from("roasts")
    .insert({
      slug,
      idea: input.idea,
      target_customer: input.targetCustomer,
      stage: input.stage,
      monetization_plan: input.monetizationPlan || null,
      founder_type: input.founderType || null,
      city: input.city || null,
      college_or_company: input.collegeOrCompany || null,
      industry: input.industry || null,
      has_mvp: input.hasMvp || false,
      has_users: input.hasUsers || false,
      has_revenue: input.hasRevenue || false,
      biggest_confusion: input.biggestConfusion || null,
      score: report.score,
      verdict: report.verdict,
      roast: report.roast,
      what_is_good: report.whatIsGood,
      biggest_problems: report.biggestProblems,
      better_positioning: report.betterPositioning,
      target_user: report.targetUser || null,
      monetization_feedback: report.monetizationFeedback || null,
      first_7_day_plan: report.first7DayPlan,
      first_customers: report.firstCustomers,
      share_text: report.shareText,
      share_card_title: report.shareCardTitle,
      share_card_subtitle: report.shareCardSubtitle,
    })
    .select("id, slug, score")
    .single();

  if (error) throw error;
  return data;
}

export async function getRoastBySlug(slug: string) {
  if (!supabaseServer) return null;

  const { data, error } = await supabaseServer
    .from("roasts")
    .select("*")
    .eq("slug", slug)
    .eq("is_hidden", false)
    .single();

  if (error) return null;
  return data;
}

export async function getPublicRoasts({
  limit = 20,
  offset = 0,
  filter,
}: {
  limit?: number;
  offset?: number;
  filter?: string;
} = {}) {
  if (!supabaseServer) return [];

  let query = supabaseServer
    .from("roasts")
    .select("id, slug, idea, score, verdict, industry, stage, created_at, is_featured")
    .eq("is_public", true)
    .eq("is_hidden", false)
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (filter && filter !== "all") {
    query = query.eq("industry", filter);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

export async function incrementViewCount(slug: string) {
  if (!supabaseServer) return;
  await supabaseServer.rpc("increment_view_count", { roast_slug: slug });
}
