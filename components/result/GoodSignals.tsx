import { Card } from "@/components/ui/Card";
import { CheckCircle } from "lucide-react";

export function GoodSignals({ items }: { items: string[] }) {
  return (
    <Card style={{ backgroundColor: 'rgba(34,197,94,0.04)', borderColor: 'rgba(34,197,94,0.15)' }}>
      <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: '#4ade80' }}>
        <CheckCircle className="w-4 h-4" />
        What&apos;s Good
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5" style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#4ade80' }}>
              ✓
            </span>
            <span className="text-sm text-[var(--foreground)]">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
