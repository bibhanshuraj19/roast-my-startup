import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SAMPLE_ROASTS } from "@/lib/utils/constants";
import { getScoreBracket } from "@/lib/utils/constants";

export function SampleRoasts() {
  return (
    <section className="py-20 px-4">
      {/* Divider */}
      <div className="section-divider mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 text-[var(--foreground)]">
            Real Ideas, Real Roasts
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-lg mx-auto">
            See what happens when AI gets brutally honest about startup ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_ROASTS.map((roast, i) => {
            const bracket = getScoreBracket(roast.score);
            return (
              <Card
                key={i}
                hover
                className="flex flex-col relative overflow-hidden"
              >
                {/* Score-colored top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${bracket.color}, transparent)` }}
                />

                {/* Score + Industry */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-3xl font-bold font-[family-name:var(--font-heading)]"
                      style={{ color: bracket.color }}
                    >
                      {roast.score}
                    </span>
                    <span className="text-sm text-[var(--muted)]">/100</span>
                  </div>
                  <Badge variant="muted">{roast.industry}</Badge>
                </div>

                {/* Idea */}
                <h3 className="font-semibold text-base mb-3 text-[var(--foreground)] line-clamp-2">
                  &ldquo;{roast.idea}&rdquo;
                </h3>

                {/* Verdict */}
                <p className="text-sm text-[var(--muted)] mb-4 flex-1 italic leading-relaxed">
                  {roast.verdict}
                </p>

                {/* Better Positioning */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-1.5">
                    Better Positioning →
                  </p>
                  <p className="text-sm text-[var(--foreground)]/80">
                    {roast.betterPositioning}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
