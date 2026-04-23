import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function RecentRoasts() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Latest Roasts
          </h2>
          <p className="text-[var(--muted)] text-lg">
            Fresh startup ideas getting the reality check they needed
          </p>
        </div>

        {/* Placeholder - will be populated from DB */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { idea: "Uber for tutors in tier-2 cities", score: 47, verdict: "Marketplace with no supply-side strategy" },
            { idea: "AI-powered diet planner for Indian food", score: 63, verdict: "Sharp niche with real cultural pain" },
            { idea: "NFT marketplace for college art students", score: 18, verdict: "Even the blockchain looked away" },
            { idea: "WhatsApp bot for apartment maintenance", score: 71, verdict: "Boring but could actually work" },
            { idea: "Social app for dog owners", score: 34, verdict: "Your users are too busy picking up poop" },
            { idea: "AI mock interview prep platform", score: 58, verdict: "Crowded but the pain is real" },
          ].map((roast, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent)]/30 bg-[var(--surface)] hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="font-medium text-sm line-clamp-1 group-hover:text-[var(--accent)] transition-colors">
                  &ldquo;{roast.idea}&rdquo;
                </p>
                <span className="text-lg font-bold font-[family-name:var(--font-heading)] shrink-0" style={{
                  color: roast.score > 60 ? '#22c55e' : roast.score > 40 ? '#f59e0b' : '#ef4444'
                }}>
                  {roast.score}
                </span>
              </div>
              <p className="text-xs text-[var(--muted)] italic">{roast.verdict}</p>
            </div>
          ))}
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
