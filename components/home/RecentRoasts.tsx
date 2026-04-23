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
    <section className="py-20 px-4 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 text-[var(--foreground)]">
            Latest Roasts
          </h2>
          <p className="text-[var(--muted)] text-lg">
            Fresh startup ideas getting the reality check they needed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {recentRoasts.map((roast, i) => {
            const color = getScoreColor(roast.score);
            return (
              <div
                key={i}
                className="p-4 rounded-xl border border-white/[0.06] bg-[var(--surface)] hover:bg-[var(--surface-elevated)] hover:border-white/[0.1] transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-medium text-sm text-[var(--foreground)]/90 line-clamp-1 group-hover:text-[var(--foreground)] transition-colors">
                    &ldquo;{roast.idea}&rdquo;
                  </p>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
                    />
                    <span
                      className="text-lg font-bold font-[family-name:var(--font-heading)]"
                      style={{ color }}
                    >
                      {roast.score}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[var(--muted)] italic">{roast.verdict}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
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
