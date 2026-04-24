import { Card } from "@/components/ui/Card";
import { Flame } from "lucide-react";

export function RoastBlock({ roast }: { roast: string }) {
  return (
    <Card style={{ backgroundColor: 'rgba(249,115,22,0.04)', borderColor: 'rgba(249,115,22,0.15)' }}>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
          <Flame className="w-5 h-5 text-[var(--accent)]" />
        </div>
        <div>
          <h3 className="font-semibold text-sm text-[var(--accent)] uppercase tracking-wider mb-2">
            The Roast
          </h3>
          <p className="text-[var(--foreground)] leading-relaxed text-base">
            {roast}
          </p>
        </div>
      </div>
    </Card>
  );
}
