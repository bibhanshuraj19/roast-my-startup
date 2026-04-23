"use client";

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
    description: "Our AI gives you a brutally honest score out of 100 and a memorable roast.",
    color: "#ef4444",
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
    <section className="py-20 px-4 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 text-[var(--foreground)]">
            How It Works
          </h2>
          <p className="text-[var(--muted)] text-lg">
            From idea to action plan in under 60 seconds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-[#f97316]/30 via-[#ef4444]/30 to-[#22c55e]/30" />

          {steps.map((step, i) => (
            <div key={i} className="text-center group relative">
              {/* Number + Icon */}
              <div className="relative inline-flex mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${step.color}10`,
                  }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: step.color, boxShadow: `0 4px 15px ${step.color}40` }}
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)]">{step.title}</h3>
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
