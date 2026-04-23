import { Card } from "@/components/ui/Card";
import { Users } from "lucide-react";

export function CustomerChannels({ items }: { items: string[] }) {
  return (
    <Card>
      <h3 className="font-semibold text-sm text-purple-600 uppercase tracking-wider mb-4 flex items-center gap-2">
        <Users className="w-4 h-4" />
        Where to Find First Customers
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200/50"
          >
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
}
