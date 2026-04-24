import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const recentRoasts = [
  { idea: "Uber for tutors in tier-2 cities", score: 47, verdict: "Marketplace with no supply-side strategy" },
  { idea: "AI-powered diet planner for Indian food", score: 63, verdict: "Sharp niche with real cultural pain" },
  { idea: "NFT marketplace for college art students", score: 18, verdict: "Even the blockchain looked away" },
  { idea: "WhatsApp bot for apartment maintenance", score: 71, verdict: "Boring but could actually work" },
  { idea: "Social app for dog owners", score: 34, verdict: "Your users are too busy picking up poop" },
  { idea: "AI mock interview prep platform", score: 58, verdict: "Crowded but the pain is real" },
];

function getScoreColor(score: number) {
  if (score >= 70) return "#22c55e";
  if (score >= 50) return "#f59e0b";
  if (score >= 30) return "#f97316";
  return "#ef4444";
}

export function RecentRoasts() {
  return (
    <section className="py-16 px-4 border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-3">
            Latest Roasts
          </h2>
          <p className="text-[var(--muted)] text-base">
            Fresh startup ideas getting the reality check they needed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {recentRoasts.map((roast, i) => {
            const color = getScoreColor(roast.score);
            return (
              <div
                key={i}
                className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-medium text-sm text-[var(--foreground)] line-clamp-1 flex-1">
                    &ldquo;{roast.idea}&rdquo;
                  </p>
                  <span
                    className="text-base font-bold font-[family-name:var(--font-heading)] shrink-0"
                    style={{ color }}
                  >
                    {roast.score}
                  </span>
                </div>
                <p className="text-xs text-[var(--muted)] italic">{roast.verdict}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link href="/gallery">
            <Button variant="outline" className="gap-2">
              View All Roasts
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
