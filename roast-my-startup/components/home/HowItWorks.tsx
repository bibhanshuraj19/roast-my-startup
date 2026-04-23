import { MessageSquare, BarChart3, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Drop Your Idea",
    description: "Tell us your startup idea, target customer, and stage.",
    color: "#ef4444",
  },
  {
    icon: BarChart3,
    title: "Get Roasted & Scored",
    description: "Our AI gives you a brutally honest score out of 100 and a memorable roast.",
    color: "#f97316",
  },
  {
    icon: Lightbulb,
    title: "Get a Real Plan",
    description: "Walk away with a 7-day validation plan, customer channels, and sharper positioning.",
    color: "#22c55e",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-[var(--muted)] text-lg">
            From idea to action plan in under 60 seconds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              {/* Number + Icon */}
              <div className="relative inline-flex mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${step.color}10` }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
                  style={{ backgroundColor: step.color }}
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
