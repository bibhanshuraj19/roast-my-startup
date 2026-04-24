import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SAMPLE_ROASTS, getScoreBracket } from "@/lib/utils/constants";

export function SampleRoasts() {
  return (
    <section className="py-16 px-4 border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-3">
            Real Ideas, Real Roasts
          </h2>
          <p className="text-[var(--muted)] text-base max-w-md mx-auto">
            See what happens when AI gets brutally honest about startup ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SAMPLE_ROASTS.map((roast, i) => {
            const bracket = getScoreBracket(roast.score);
            return (
              <Card key={i} hover className="flex flex-col">
                {/* Score + Industry */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-2xl font-bold font-[family-name:var(--font-heading)]"
                      style={{ color: bracket.color }}
                    >
                      {roast.score}
                    </span>
                    <span className="text-sm text-[var(--muted)]">/100</span>
                  </div>
                  <Badge variant="muted">{roast.industry}</Badge>
                </div>

                {/* Idea */}
                <h3 className="font-semibold text-sm mb-2 text-[var(--foreground)]">
                  &ldquo;{roast.idea}&rdquo;
                </h3>

                {/* Verdict */}
                <p className="text-sm text-[var(--muted)] mb-4 flex-1 italic leading-relaxed">
                  {roast.verdict}
                </p>

                {/* Better Positioning */}
                <div className="pt-3 border-t border-[var(--border-color)]">
                  <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-1">
                    Better Positioning →
                  </p>
                  <p className="text-sm text-[var(--muted)]">
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
