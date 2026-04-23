import { Card } from "@/components/ui/Card";
import { CheckCircle } from "lucide-react";

export function GoodSignals({ items }: { items: string[] }) {
  return (
    <Card>
      <h3 className="font-semibold text-sm text-green-600 uppercase tracking-wider mb-4 flex items-center gap-2">
        <CheckCircle className="w-4 h-4" />
        What&apos;s Good
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
              ✓
            </span>
            <span className="text-sm text-[var(--foreground)]">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
