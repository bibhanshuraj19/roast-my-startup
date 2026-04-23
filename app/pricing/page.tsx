import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — RoastMyStartup.in",
  description:
    "Free AI startup roast with score and action plan. Upgrade to Deep Report for competitor analysis, MVP features, pitch deck outline, and more.",
};

const tiers = [
  {
    name: "Free Roast",
    price: "₹0",
    period: "",
    description: "Everything you need to validate your idea",
    features: [
      "AI-generated roast",
      "Score out of 100",
      "One-line verdict",
      "What's good & biggest problems",
      "Better positioning suggestion",
      "7-day validation plan",
      "First customer channels",
      "Shareable result card",
      "3 roasts per day",
    ],
    cta: "Start Roasting — Free",
    href: "/roast",
    popular: false,
    accent: false,
  },
  {
    name: "Deep Report",
    price: "₹99",
    period: "one-time",
    description: "Go from roast to real execution plan",
    features: [
      "Everything in Free, plus:",
      "Detailed customer persona",
      "Competitor map",
      "MVP feature list",
      "Landing page copy suggestions",
      "Pricing strategy test",
      "30-day execution plan",
      "10 cold DM templates",
      "20 customer interview questions",
      "Pitch deck outline",
      '"Kill or Continue" framework',
    ],
    cta: "Get Deep Report — ₹99",
    href: "/roast",
    popular: true,
    accent: true,
  },
  {
    name: "Founder Pro",
    price: "₹299",
    period: "/month",
    description: "For serial thinkers and habitual builders",
    features: [
      "Everything in Deep Report, plus:",
      "50 roasts per month",
      "Unlimited deep reports",
      "Founder profile page",
      "Idea history & progress tracking",
      "Priority AI generation",
      "Early access to new features",
    ],
    cta: "Go Pro — ₹299/mo",
    href: "/roast",
    popular: false,
    accent: false,
  },
];

export default function PricingPage() {
  return (
    <div className="py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4 text-[var(--foreground)]">
            Simple, Honest Pricing
          </h1>
          <p className="text-[var(--muted)] text-lg max-w-md mx-auto">
            The roast is free. The execution plan is worth every rupee.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <Card
              key={i}
              className={`relative flex flex-col ${
                tier.accent
                  ? "border-[var(--accent)]/30 shadow-xl shadow-orange-500/10 scale-[1.02] gradient-border"
                  : "border-white/[0.06]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-[var(--accent)] to-[#ef4444] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-orange-500/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-1 text-[var(--foreground)]">{tier.name}</h3>
                <p className="text-sm text-[var(--muted)] mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--foreground)]">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm text-[var(--muted)]">
                      {tier.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        tier.accent ? "text-[var(--accent)]" : "text-green-400"
                      }`}
                    />
                    <span className="text-[var(--foreground)]/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={tier.href}>
                <Button
                  variant={tier.accent ? "primary" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* FAQ or trust line */}
        <div className="text-center mt-14 space-y-2">
          <p className="text-sm text-[var(--muted)]">
            💳 Secure payments via Razorpay • No subscription traps • Cancel anytime
          </p>
          <p className="text-xs text-[var(--muted)]/50">
            All prices are in INR. GST included where applicable.
          </p>
        </div>
      </div>
    </div>
  );
}
