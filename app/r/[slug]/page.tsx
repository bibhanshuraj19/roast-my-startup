import { notFound } from "next/navigation";
import { getRoastBySlug } from "@/lib/db/roasts";
import { ScoreGauge } from "@/components/result/ScoreGauge";
import { VerdictBlock } from "@/components/result/VerdictBlock";
import { RoastBlock } from "@/components/result/RoastBlock";
import { GoodSignals } from "@/components/result/GoodSignals";
import { ProblemList } from "@/components/result/ProblemList";
import { BetterPositioning } from "@/components/result/BetterPositioning";
import { SevenDayPlan } from "@/components/result/SevenDayPlan";
import { CustomerChannels } from "@/components/result/CustomerChannels";
import { ShareActions } from "@/components/result/ShareActions";
import { UpgradeCta } from "@/components/result/UpgradeCta";
import type { Metadata } from "next";

// Mock data for when DB is not connected
const MOCK_ROAST = {
  id: "mock-1",
  slug: "demo",
  idea: "AI-powered resume builder for college students",
  target_customer: "College students in tier-2 cities",
  stage: "just_idea",
  score: 42,
  verdict:
    "This is a final-year project pretending to be a venture-scale startup.",
  roast:
    "The idea is broad, crowded, and has no obvious buyer. Right now it sounds like you added AI to a vague student problem and hoped distribution would appear magically. There are 47 AI resume builders on Product Hunt alone, and most of them are free.",
  what_is_good: [
    "The problem area is large.",
    "Students are easy to reach if the use case is sharp.",
    "A small MVP can be tested quickly.",
  ],
  biggest_problems: [
    "No clear paying customer",
    "Too broad for an MVP",
    "Weak differentiation from existing tools",
  ],
  better_positioning:
    "Instead of 'AI app for students', build 'AI interview practice for tier-2 engineering students preparing for service company placements'.",
  target_user:
    "Final-year engineering students in tier-2 and tier-3 colleges preparing for placement interviews.",
  monetization_feedback:
    "Do not start with subscriptions. Start with a INR 99 mock interview pack or college group bundle.",
  first_7_day_plan: [
    "Interview 10 target students about their placement prep struggles.",
    "Create a WhatsApp-based MVP offering mock interview reviews.",
    "Offer 5 mock interview reviews manually — charge nothing, learn everything.",
    "Charge at least 3 people INR 99 for a structured mock interview pack.",
    "Turn repeated questions into the first product feature.",
  ],
  first_customers: [
    "Placement WhatsApp groups",
    "College coding clubs",
    "LinkedIn posts targeting final-year students",
    "Telegram placement channels",
  ],
  share_text:
    "My startup idea got roasted: 42/100. Biggest issue: no clear paying customer.",
  share_card_title: "My startup got roasted",
  share_card_subtitle: "Score: 42/100 — No clear paying customer",
  is_public: true,
  is_hidden: false,
  created_at: new Date().toISOString(),
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let roast;
  try {
    roast = await getRoastBySlug(slug);
  } catch {
    roast = null;
  }

  if (!roast && slug !== "demo") {
    return { title: "Roast Not Found — RoastMyStartup.in" };
  }

  const data = roast || MOCK_ROAST;
  return {
    title: `${data.share_card_title} — RoastMyStartup.in`,
    description: data.share_card_subtitle,
    openGraph: {
      title: data.share_card_title,
      description: data.share_card_subtitle,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.share_card_title,
      description: data.share_card_subtitle,
    },
  };
}

export default async function ResultPage({ params }: Props) {
  const { slug } = await params;

  let roast;
  try {
    roast = await getRoastBySlug(slug);
  } catch {
    roast = null;
  }

  // Use mock data for demo or when DB isn't connected
  if (!roast) {
    if (slug === "demo") {
      roast = MOCK_ROAST;
    } else {
      notFound();
    }
  }

  return (
    <div className="py-8 sm:py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Idea recap */}
        <div className="text-center mb-2">
          <p className="text-sm text-[var(--muted)] mb-1">The idea:</p>
          <h1 className="text-lg sm:text-xl font-semibold">
            &ldquo;{roast.idea}&rdquo;
          </h1>
        </div>

        {/* Score Gauge */}
        <div className="flex justify-center py-4">
          <ScoreGauge score={roast.score} />
        </div>

        {/* Verdict */}
        <VerdictBlock verdict={roast.verdict} />

        {/* Roast */}
        <RoastBlock roast={roast.roast} />

        {/* Good & Bad side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GoodSignals items={roast.what_is_good} />
          <ProblemList items={roast.biggest_problems} />
        </div>

        {/* Better Positioning */}
        <BetterPositioning
          positioning={roast.better_positioning}
          targetUser={roast.target_user}
          monetizationFeedback={roast.monetization_feedback}
        />

        {/* 7-Day Plan */}
        <SevenDayPlan items={roast.first_7_day_plan} />

        {/* Customer Channels */}
        <CustomerChannels items={roast.first_customers} />

        {/* Share */}
        <ShareActions
          slug={roast.slug}
          shareText={roast.share_text}
          score={roast.score}
        />

        {/* Upgrade CTA */}
        <UpgradeCta />
      </div>
    </div>
  );
}
