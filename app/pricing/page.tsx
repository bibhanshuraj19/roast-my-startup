import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — RoastMyStartup.in",
  description: "Free AI startup roast with score and action plan. Upgrade for competitor analysis, MVP features, pitch deck outline, and more.",
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
  },
];

export default function PricingPage() {
  return (
    <div className="py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-3">
            Simple, Honest Pricing
          </h1>
          <p className="text-[var(--muted)] text-base max-w-md mx-auto">
            The roast is free. The execution plan is worth every rupee.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <Card
              key={i}
              className={`flex flex-col ${
                tier.popular ? "border-[var(--accent)] ring-1 ring-[var(--accent)]/20" : ""
              }`}
            >
              {tier.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-[var(--accent)] to-[#ef4444] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-1">{tier.name}</h3>
                <p className="text-sm text-[var(--muted)] mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-[family-name:var(--font-heading)]">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm text-[var(--muted)]">{tier.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? "text-[var(--accent)]" : "text-green-400"}`} />
                    <span className="text-[var(--muted)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={tier.href}>
                <Button variant={tier.popular ? "primary" : "outline"} className="w-full">
                  {tier.cta}
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* Trust line */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--muted)]">
            💳 Secure payments via Razorpay • No subscription traps
          </p>
        </div>
      </div>
    </div>
  );
}
