import { Card } from "@/components/ui/Card";
import { Users } from "lucide-react";

export function CustomerChannels({ items }: { items: string[] }) {
  return (
    <Card style={{ backgroundColor: 'rgba(168,85,247,0.03)', borderColor: 'rgba(168,85,247,0.15)' }}>
      <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: '#c084fc' }}>
        <Users className="w-4 h-4" />
        Where to Find First Customers
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-lg text-sm font-medium"
            style={{ backgroundColor: 'rgba(168,85,247,0.1)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.1)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
}
