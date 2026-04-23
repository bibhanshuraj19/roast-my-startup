export const SITE_NAME = "RoastMyStartup.in";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://roastmystartup.in";
export const SITE_DESCRIPTION =
  "Get your startup idea roasted by AI. Brutally honest feedback for first-time founders.";

export const STAGE_OPTIONS = [
  { value: "just_idea", label: "Just an Idea", emoji: "💡" },
  { value: "building_mvp", label: "Building MVP", emoji: "🔨" },
  { value: "launched_no_users", label: "Launched, No Users", emoji: "🚀" },
  { value: "has_users", label: "Have Users", emoji: "👥" },
  { value: "has_revenue", label: "Have Revenue", emoji: "💰" },
] as const;

export const FOUNDER_TYPES = [
  { value: "student", label: "Student" },
  { value: "working_professional", label: "Working Professional" },
  { value: "solo_founder", label: "Solo Founder" },
  { value: "team_founder", label: "Team Founder" },
  { value: "freelancer", label: "Freelancer" },
  { value: "creator", label: "Creator" },
] as const;

export const INDUSTRY_OPTIONS = [
  { value: "ai", label: "AI / ML", emoji: "🤖" },
  { value: "edtech", label: "Edtech", emoji: "📚" },
  { value: "fintech", label: "Fintech", emoji: "💳" },
  { value: "saas", label: "SaaS", emoji: "☁️" },
  { value: "consumer_app", label: "Consumer App", emoji: "📱" },
  { value: "marketplace", label: "Marketplace", emoji: "🏪" },
  { value: "creator_economy", label: "Creator Economy", emoji: "🎨" },
  { value: "d2c", label: "D2C", emoji: "📦" },
  { value: "local_business", label: "Local Business", emoji: "🏠" },
  { value: "other", label: "Other", emoji: "🔮" },
] as const;

export const SCORE_BRACKETS = [
  { min: 0, max: 20, label: "Meme Idea", color: "#ef4444", class: "score-meme", emoji: "💀" },
  { min: 21, max: 40, label: "Needs Serious Narrowing", color: "#f97316", class: "score-needs-work", emoji: "😬" },
  { min: 41, max: 60, label: "Potential, But Unfocused", color: "#f59e0b", class: "score-potential", emoji: "🤔" },
  { min: 61, max: 80, label: "Promising If Validated", color: "#22c55e", class: "score-promising", emoji: "🎯" },
  { min: 81, max: 100, label: "Strong, Needs Execution", color: "#10b981", class: "score-strong", emoji: "🔥" },
] as const;

export function getScoreBracket(score: number) {
  return SCORE_BRACKETS.find((b) => score >= b.min && score <= b.max) || SCORE_BRACKETS[0];
}

export const LOADING_LINES = [
  "Checking if this is a startup or just a Google Form with ambition...",
  "Looking for paying customers...",
  "Asking your idea where the revenue is...",
  "Removing buzzwords...",
  "Checking if this already exists on Product Hunt...",
  "Consulting the startup graveyard...",
  "Measuring the vibes-to-value ratio...",
  "Searching for your competitive moat... not finding one...",
  "Calculating how many pivot tables you'll need to pivot...",
  "Checking if your TAM is real or just a dream...",
  "Asking ChatGPT if it already does this better...",
  "Evaluating your unit economics... wait, there are none...",
];

export const SAMPLE_ROASTS = [
  {
    idea: "AI notes app for students",
    score: 38,
    verdict: "This is every engineering student's first AI idea wearing a productivity hoodie.",
    betterPositioning:
      "AI revision notes for final-year engineering students preparing for specific university exams.",
    industry: "AI",
    stage: "Just an Idea",
  },
  {
    idea: "LinkedIn for students",
    score: 31,
    verdict:
      "The problem with 'LinkedIn for students' is that students already avoid actual LinkedIn until placement season panic starts.",
    betterPositioning:
      "A proof-of-work profile for engineering students that turns GitHub projects, internships, and hackathon submissions into a recruiter-ready page.",
    industry: "Consumer App",
    stage: "Building MVP",
  },
  {
    idea: "Zomato for home food",
    score: 52,
    verdict:
      "This idea has been attempted more times than college students have promised to start going to the gym from Monday.",
    betterPositioning:
      "Pre-ordered healthy lunch subscriptions from verified home chefs for office workers in one dense business area.",
    industry: "Marketplace",
    stage: "Just an Idea",
  },
];
