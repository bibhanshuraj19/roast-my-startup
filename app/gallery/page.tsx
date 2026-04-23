import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getScoreBracket, SAMPLE_ROASTS } from "@/lib/utils/constants";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Best Startup Roasts | RoastMyStartup.in",
  description:
    "Browse the funniest, most promising, and most savage startup idea roasts. See what AI thinks of real ideas from Indian founders and students.",
};

// Extended sample data for gallery
const GALLERY_DATA = [
  ...SAMPLE_ROASTS,
  {
    idea: "Uber for tutors in tier-2 cities",
    score: 47,
    verdict: "Marketplace with no supply-side strategy",
    betterPositioning: "WhatsApp-based math tutoring for CBSE Class 10-12 exam prep in one city",
    industry: "Edtech",
    stage: "Just an Idea",
  },
  {
    idea: "AI-powered diet planner for Indian food",
    score: 63,
    verdict: "Sharp niche with real cultural pain — but distribution is unclear",
    betterPositioning: "Weekly meal prep plans for vegetarian office workers tracking macros",
    industry: "Consumer App",
    stage: "Building MVP",
  },
  {
    idea: "NFT marketplace for college art students",
    score: 18,
    verdict: "Even the blockchain looked away from this one",
    betterPositioning: "Commission marketplace for student illustrators and small business logo needs",
    industry: "Marketplace",
    stage: "Just an Idea",
  },
  {
    idea: "WhatsApp bot for apartment maintenance",
    score: 71,
    verdict: "Boring but could actually work — the best kind of startup",
    betterPositioning: "Automated maintenance request tracker for housing societies with 100+ flats",
    industry: "SaaS",
    stage: "Has Users",
  },
  {
    idea: "Social app for dog owners",
    score: 34,
    verdict: "Your users are too busy picking up poop to download another app",
    betterPositioning: "Dog walking and pet sitting marketplace for one metro city",
    industry: "Consumer App",
    stage: "Just an Idea",
  },
  {
    idea: "AI mock interview prep platform",
    score: 58,
    verdict: "Crowded but the pain is real — differentiation is everything",
    betterPositioning: "AI case study interview prep specifically for consulting internships",
    industry: "AI",
    stage: "Building MVP",
  },
];

const FILTER_OPTIONS = [
  "All",
  "Funniest",
  "Most Promising",
  "Worst Score",
  "AI",
  "SaaS",
  "Edtech",
];

export default function GalleryPage() {
  const sorted = [...GALLERY_DATA].sort((a, b) => b.score - a.score);

  return (
    <div className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 text-[var(--foreground)]">
            🏆 Roast Gallery
          </h1>
          <p className="text-[var(--muted)] text-lg max-w-lg mx-auto">
            Browse real startup ideas and their AI roasts. Learn from others&apos;
            mistakes (and wins).
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTER_OPTIONS.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                filter === "All"
                  ? "bg-gradient-to-r from-[var(--accent)] to-[#ef4444] text-white shadow-lg shadow-orange-500/20"
                  : "bg-[var(--surface)] text-[var(--muted)] border border-white/[0.06] hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((roast, i) => {
            const bracket = getScoreBracket(roast.score);
            return (
              <Card key={i} hover className="flex flex-col cursor-pointer relative overflow-hidden">
                {/* Score-colored top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${bracket.color}, transparent)` }}
                />

                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="muted">{roast.industry}</Badge>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-2xl font-bold font-[family-name:var(--font-heading)]"
                      style={{ color: bracket.color, textShadow: `0 0 15px ${bracket.color}30` }}
                    >
                      {roast.score}
                    </span>
                    <span className="text-xs text-[var(--muted)]/60">/100</span>
                  </div>
                </div>

                {/* Idea */}
                <h3 className="font-semibold text-sm mb-2 text-[var(--foreground)] line-clamp-2">
                  &ldquo;{roast.idea}&rdquo;
                </h3>

                {/* Verdict */}
                <p className="text-xs text-[var(--muted)] italic flex-1 mb-3">
                  {roast.verdict}
                </p>

                {/* Badge */}
                <div className="pt-3 border-t border-white/[0.06]">
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: `${bracket.color}10`,
                      color: bracket.color,
                    }}
                  >
                    {bracket.emoji} {bracket.label}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--muted)]/60">
            More roasts coming as people submit their ideas!
          </p>
          <Link
            href="/roast"
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[#ef4444] text-white rounded-xl font-semibold hover:brightness-110 transition-all shadow-lg shadow-orange-500/20"
          >
            🔥 Add Your Roast
          </Link>
        </div>
      </div>
    </div>
  );
}
