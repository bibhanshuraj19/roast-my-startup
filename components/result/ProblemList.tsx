import { Card } from "@/components/ui/Card";
import { AlertTriangle } from "lucide-react";

export function ProblemList({ items }: { items: string[] }) {
  return (
    <Card className="bg-red-500/[0.04] border-red-500/10">
      <h3 className="font-semibold text-sm text-red-400 uppercase tracking-wider mb-4 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        Biggest Problems
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
              !
            </span>
            <span className="text-sm text-[var(--foreground)]/85">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
