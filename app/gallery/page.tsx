import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getScoreBracket, SAMPLE_ROASTS } from "@/lib/utils/constants";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata   = {
  title: "Gallery — Best Startup Roasts | RoastMyStartup.in",
  description:
    "Browse the funniest, most promising, and most savage startup idea roasts.",
};

const GALLERY_DATA = [
  ...SAMPLE_ROASTS,
  { idea: "Uber for tutors in tier-2 cities", score: 47, verdict: "Marketplace with no supply-side strategy", betterPositioning: "WhatsApp-based math tutoring for CBSE Class 10-12 exam prep in one city", industry: "Edtech", stage: "Just an Idea" },
  { idea: "AI-powered diet planner for Indian food", score: 63, verdict: "Sharp niche with real cultural pain", betterPositioning: "Weekly meal prep plans for vegetarian office workers tracking macros", industry: "Consumer App", stage: "Building MVP" },
  { idea: "NFT marketplace for college art students", score: 18, verdict: "Even the blockchain looked away from this one", betterPositioning: "Commission marketplace for student illustrators and small business logo needs", industry: "Marketplace", stage: "Just an Idea" },
  { idea: "WhatsApp bot for apartment maintenance", score: 71, verdict: "Boring but could actually work", betterPositioning: "Automated maintenance request tracker for housing societies with 100+ flats", industry: "SaaS", stage: "Has Users" },
  { idea: "Social app for dog owners", score: 34, verdict: "Your users are too busy picking up poop", betterPositioning: "Dog walking and pet sitting marketplace for one metro city", industry: "Consumer App", stage: "Just an Idea" },
  { idea: "AI mock interview prep platform", score: 58, verdict: "Crowded but the pain is real", betterPositioning: "AI case study interview prep specifically for consulting internships", industry: "AI", stage: "Building MVP" },
];

export default function GalleryPage() {
  const sorted = [...GALLERY_DATA].sort((a, b) => b.score - a.score);

  return (
    <div className="py-12 sm:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-3">
            🏆 Roast Gallery
          </h1>
          <p className="text-[var(--muted)] text-base max-w-md mx-auto">
            Browse real startup ideas and their AI roasts
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((roast, i) => {
            const bracket = getScoreBracket(roast.score);
            return (
              <Card key={i} hover className="flex flex-col">
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="muted">{roast.industry}</Badge>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-xl font-bold font-[family-name:var(--font-heading)]"
                      style={{ color: bracket.color }}
                    >
                      {roast.score}
                    </span>
                    <span className="text-xs text-[var(--muted)]">/100</span>
                  </div>
                </div>

                {/* Idea */}
                <h3 className="font-semibold text-sm mb-2 text-[var(--foreground)]">
                  &ldquo;{roast.idea}&rdquo;
                </h3>

                {/* Verdict */}
                <p className="text-xs text-[var(--muted)] italic flex-1 mb-3">
                  {roast.verdict}
                </p>

                {/* Badge */}
                <div className="pt-3 border-t border-[var(--border-color)]">
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${bracket.color}20`, color: bracket.color }}
                  >
                    {bracket.emoji} {bracket.label}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--muted)] mb-4">
            More roasts coming as people submit their ideas!
          </p>
          <Link href="/roast">
            <Button className="gap-2">
              🔥 Add Your Roast
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
