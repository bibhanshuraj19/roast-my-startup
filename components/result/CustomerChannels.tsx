import { Card } from "@/components/ui/Card";
import { Users } from "lucide-react";

export function CustomerChannels({ items }: { items: string[] }) {
  return (
    <Card className="bg-purple-500/[0.03] border-purple-500/10">
      <h3 className="font-semibold text-sm text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
        <Users className="w-4 h-4" />
        Where to Find First Customers
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 text-sm font-medium border border-purple-500/10"
          >
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
}
