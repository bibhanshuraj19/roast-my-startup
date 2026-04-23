"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Textarea } from "@/components/ui/Textarea";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  STAGE_OPTIONS,
  FOUNDER_TYPES,
  INDUSTRY_OPTIONS,
} from "@/lib/utils/constants";
import { ChevronDown, ChevronUp, Flame } from "lucide-react";
import { LoadingRoast } from "./LoadingRoast";

type FormData = {
  idea: string;
  targetCustomer: string;
  stage: string;
  monetizationPlan: string;
  founderType: string;
  city: string;
  collegeOrCompany: string;
  industry: string;
  hasMvp: boolean;
  hasUsers: boolean;
  hasRevenue: boolean;
  biggestConfusion: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export function RoastForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prefillIdea = searchParams.get("idea") || "";

  const [form, setForm] = useState<FormData>({
    idea: prefillIdea,
    targetCustomer: "",
    stage: "just_idea",
    monetizationPlan: "",
    founderType: "",
    city: "",
    collegeOrCompany: "",
    industry: "",
    hasMvp: false,
    hasUsers: false,
    hasRevenue: false,
    biggestConfusion: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showOptional, setShowOptional] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (form.idea.trim().length < 20) {
      newErrors.idea = "Your idea needs at least 20 characters — give us something to roast!";
    }
    if (form.targetCustomer.trim().length < 5) {
      newErrors.targetCustomer = "Who is this for? Be specific!";
    }
    if (!form.stage) {
      newErrors.stage = "Select your current stage";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/generate-roast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to generate roast");
      }

      const data = await res.json();
      router.push(`/r/${data.slug}`);
    } catch (err) {
      setLoading(false);
      setErrors({
        idea: err instanceof Error ? err.message : "Something went wrong. Try again!",
      });
    }
  };

  if (loading) {
    return <LoadingRoast />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6 sm:p-8">
        {/* Required Fields */}
        <div className="space-y-6">
          <Textarea
            id="idea"
            label="Your Startup Idea *"
            placeholder="Describe your startup idea in 2-4 sentences. What does it do? What problem does it solve?"
            value={form.idea}
            onChange={(e) => updateField("idea", e.target.value)}
            maxChars={1000}
            rows={4}
            error={errors.idea}
          />

          <Input
            id="targetCustomer"
            label="Target Customer *"
            placeholder='e.g. "College students in tier-2 cities preparing for placements"'
            value={form.targetCustomer}
            onChange={(e) => updateField("targetCustomer", e.target.value)}
            error={errors.targetCustomer}
          />

          {/* Stage Selector (visual chips) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[var(--foreground)]">
              Current Stage *
            </label>
            <div className="flex flex-wrap gap-2">
              {STAGE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => updateField("stage", opt.value)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer ${
                    form.stage === opt.value
                      ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-md shadow-red-500/20"
                      : "bg-[var(--surface)] text-[var(--foreground)] border-[var(--border-color)] hover:border-[var(--accent)]/50"
                  }`}
                >
                  {opt.emoji} {opt.label}
                </button>
              ))}
            </div>
            {errors.stage && <p className="text-sm text-red-500">{errors.stage}</p>}
          </div>

          <Input
            id="monetizationPlan"
            label="Monetization Plan"
            placeholder='e.g. "Subscription model, INR 99/month per student"'
            value={form.monetizationPlan}
            onChange={(e) => updateField("monetizationPlan", e.target.value)}
          />
        </div>

        {/* Optional Fields Toggle */}
        <button
          type="button"
          onClick={() => setShowOptional(!showOptional)}
          className="flex items-center gap-2 mt-6 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
        >
          {showOptional ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {showOptional ? "Hide" : "Show"} optional details (better roast!)
        </button>

        {/* Optional Fields */}
        {showOptional && (
          <div className="space-y-4 mt-4 pt-4 border-t border-[var(--border-color)] animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                id="founderType"
                label="Founder Type"
                placeholder="Select type..."
                options={[...FOUNDER_TYPES]}
                value={form.founderType}
                onChange={(e) => updateField("founderType", e.target.value)}
              />
              <Select
                id="industry"
                label="Industry"
                placeholder="Select industry..."
                options={[...INDUSTRY_OPTIONS]}
                value={form.industry}
                onChange={(e) => updateField("industry", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                id="city"
                label="City"
                placeholder="e.g. Bangalore"
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
              />
              <Input
                id="collegeOrCompany"
                label="College / Company"
                placeholder="e.g. IIT Delhi"
                value={form.collegeOrCompany}
                onChange={(e) => updateField("collegeOrCompany", e.target.value)}
              />
            </div>

            {/* Boolean toggles */}
            <div className="flex flex-wrap gap-3">
              {[
                { key: "hasMvp" as const, label: "Has MVP" },
                { key: "hasUsers" as const, label: "Has Users" },
                { key: "hasRevenue" as const, label: "Has Revenue" },
              ].map((toggle) => (
                <button
                  key={toggle.key}
                  type="button"
                  onClick={() => updateField(toggle.key, !form[toggle.key])}
                  className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                    form[toggle.key]
                      ? "bg-green-50 text-green-700 border-green-300"
                      : "bg-[var(--surface)] text-[var(--muted)] border-[var(--border-color)] hover:border-[var(--muted)]"
                  }`}
                >
                  {form[toggle.key] ? "✓" : "○"} {toggle.label}
                </button>
              ))}
            </div>

            <Textarea
              id="biggestConfusion"
              label="Biggest Confusion"
              placeholder="What's the one thing you're most unsure about?"
              value={form.biggestConfusion}
              onChange={(e) => updateField("biggestConfusion", e.target.value)}
              maxChars={500}
              rows={3}
            />
          </div>
        )}

        {/* Submit */}
        <div className="mt-8">
          <Button
            onClick={handleSubmit}
            size="lg"
            className="w-full gap-2 text-lg"
          >
            <Flame className="w-5 h-5" />
            Generate My Roast
          </Button>
          <p className="text-xs text-[var(--muted)] text-center mt-3">
            Free • Takes ~15 seconds • Results are public by default
          </p>
        </div>
      </Card>
    </div>
  );
}
