import { Card } from "@/components/ui/Card";
import { Calendar } from "lucide-react";

export function SevenDayPlan({ items }: { items: string[] }) {
  return (
    <Card style={{ backgroundColor: 'rgba(245,158,11,0.03)', borderColor: 'rgba(245,158,11,0.15)' }}>
      <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: '#fbbf24' }}>
        <Calendar className="w-4 h-4" />
        Your First 7-Day Plan
      </h3>
      <ol className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold" style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: '#fbbf24' }}>
              {i + 1}
            </span>
            <span className="text-sm text-[var(--foreground)] leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </Card>
  );
}
