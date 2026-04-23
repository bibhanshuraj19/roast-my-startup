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
    <Card className="bg-blue-50/50 border-blue-200/50">
      <h3 className="font-semibold text-sm text-blue-600 uppercase tracking-wider mb-4 flex items-center gap-2">
        <Target className="w-4 h-4" />
        Better Positioning
      </h3>
      <p className="text-[var(--foreground)] leading-relaxed mb-4">{positioning}</p>

      {targetUser && (
        <div className="mt-4 pt-4 border-t border-blue-200/50">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Target User
          </p>
          <p className="text-sm text-[var(--foreground)]">{targetUser}</p>
        </div>
      )}

      {monetizationFeedback && (
        <div className="mt-4 pt-4 border-t border-blue-200/50">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Monetization Advice
          </p>
          <p className="text-sm text-[var(--foreground)]">{monetizationFeedback}</p>
        </div>
      )}
    </Card>
  );
}
