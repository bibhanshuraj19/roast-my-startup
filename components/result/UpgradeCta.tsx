import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Zap, ArrowRight } from "lucide-react";

export function UpgradeCta() {
  return (
    <Card className="bg-gradient-to-br from-[var(--accent)]/5 to-orange-500/5 border-[var(--accent)]/20 text-center">
      <div className="py-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent)]/10 mb-4">
          <Zap className="w-6 h-6 text-[var(--accent)]" />
        </div>

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
          Want the Full Picture?
        </h3>
        <p className="text-sm text-[var(--muted)] mb-6 max-w-md mx-auto">
          Get a deep report with competitor map, MVP feature list, 30-day plan,
          cold DM templates, pitch deck outline, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/pricing">
            <Button size="md" className="gap-2">
              Unlock Deep Report — ₹99
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <span className="text-xs text-[var(--muted)]">One-time payment • Instant delivery</span>
        </div>
      </div>
    </Card>
  );
}
