import { Card } from "@/components/ui/Card";
import { Target } from "lucide-react";

export function BetterPositioning({
  positioning,
  targetUser,
  monetizationFeedback,
}: {
  positioning: string;
  targetUser?: string;
  monetizationFeedback?: string;
}) {
  return (
    <Card style={{ backgroundColor: 'rgba(59,130,246,0.04)', borderColor: 'rgba(59,130,246,0.15)' }}>
      <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: '#60a5fa' }}>
        <Target className="w-4 h-4" />
        Better Positioning
      </h3>
      <p className="text-[var(--foreground)] leading-relaxed mb-4">{positioning}</p>

      {targetUser && (
        <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#60a5fa' }}>
            Target User
          </p>
          <p className="text-sm text-[var(--muted)]">{targetUser}</p>
        </div>
      )}

      {monetizationFeedback && (
        <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#60a5fa' }}>
            Monetization Advice
          </p>
          <p className="text-sm text-[var(--muted)]">{monetizationFeedback}</p>
        </div>
      )}
    </Card>
  );
}
