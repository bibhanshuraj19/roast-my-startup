import { MessageSquare, BarChart3, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Drop Your Idea",
    description: "Tell us your startup idea, target customer, and stage.",
    color: "#f97316",
  },
  {
    icon: BarChart3,
    title: "Get Roasted & Scored",
    description: "AI gives you a score out of 100 and a memorable roast.",
    color: "#ef4444",
  },
  {
    icon: Lightbulb,
    title: "Get a Real Plan",
    description: "7-day validation plan, customer channels, and sharper positioning.",
    color: "#22c55e",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 px-4 border-t border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-3">
            How It Works
          </h2>
          <p className="text-[var(--muted)] text-base">
            From idea to action plan in under 60 seconds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4" style={{ backgroundColor: `${step.color}15` }}>
                <step.icon className="w-6 h-6" style={{ color: step.color }} />
              </div>
              <div className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold ml-2 mb-4" style={{ backgroundColor: step.color }}>
                {i + 1}
              </div>
              <h3 className="font-semibold text-base mb-2 text-[var(--foreground)]">{step.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[220px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
