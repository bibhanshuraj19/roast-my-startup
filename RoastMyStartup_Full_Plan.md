# RoastMyStartup.in - Full Product and Code Structure Plan

## 1. One-Line Idea

RoastMyStartup.in is a viral AI website where Indian students, indie hackers, and early founders submit their startup idea and receive a funny but useful roast, a startup score, and a practical next-step validation plan.

The product should feel like a mix of:

- A startup mentor
- A meme page
- A pitch competition
- A practical validation checklist

## 2. Core Promise

"Enter your startup idea. Get roasted. Get scored. Get a better plan."

The roast attracts people.
The score makes it shareable.
The action plan makes it useful.

## 3. Target Users

### Primary Users

1. Indian college students with startup ideas
2. Engineering students building side projects
3. MBA/BBA students preparing pitch decks
4. First-time founders before they build an MVP
5. Hackathon participants
6. Indie hackers who want quick feedback

### Secondary Users

1. Startup meme pages
2. College E-cells
3. Incubators
4. Founder communities
5. Accelerators
6. Recruiters looking for high-signal builders

## 4. Why It Can Go Viral

The product creates personal, funny, screenshot-friendly content.

People share things that are:

- About themselves
- Funny
- Slightly painful
- Easy to understand
- Visually score-based
- Useful enough to not feel like a gimmick

Every generated roast becomes a piece of user-generated content.

Example share card:

```txt
My startup idea got roasted.

Score: 42/100
Verdict: "This is less startup, more final-year project with confidence."
Biggest problem: No clear paying customer
Next move: Sell manually before building an app

Roast yours at RoastMyStartup.in
```

## 5. Product Positioning

### Short Taglines

- Get your startup idea roasted by AI.
- Brutally honest feedback for first-time founders.
- Before you build it, survive the roast.
- Your startup idea needs users, not just vibes.

### Brand Tone

Funny, sharp, founder-friendly, Indian-context-aware.

The app should roast the idea, not insult the person.

Good tone:

```txt
This idea has potential, but right now it sounds like "ChatGPT wrapper for everyone" with no buyer, no wedge, and no reason for people to switch.
```

Bad tone:

```txt
You are stupid for thinking this will work.
```

## 6. MVP Scope

The MVP should be simple enough for one person to build in 7 to 14 days.

### Must-Have Features

1. Landing page with idea input form
2. Startup idea submission form
3. AI-generated roast report
4. Startup score out of 100
5. Shareable public result page
6. Download/share image card
7. Basic email capture
8. Public gallery of selected roasts
9. Admin moderation for gallery items
10. Basic analytics

### Nice-to-Have Features

1. User accounts
2. Founder profile pages
3. Saved idea history
4. Paid deep-dive reports
5. Leaderboards
6. College challenges
7. Startup battle mode
8. Roast comparison between two ideas

### Avoid in MVP

1. Full social network
2. Complex team matching
3. Mobile app
4. Real-time chat
5. Investor marketplace
6. College dashboards

## 7. Main User Flow

1. User lands on homepage.
2. User sees examples of roasted ideas.
3. User enters startup idea.
4. User optionally fills more fields.
5. App generates roast report.
6. User gets a score and practical plan.
7. User shares result card.
8. Other users click shared link and roast their own ideas.
9. User can unlock a deeper report.

## 8. MVP Form Fields

### Required

- Startup idea
- Target customer
- Current stage
- Monetization plan

### Optional

- Founder type
- College/company
- City
- Industry
- Has MVP?
- Has users?
- Has revenue?
- Biggest confusion

### Suggested Options

Current stage:

- Just idea
- Building MVP
- Launched but no users
- Have users
- Have revenue

Founder type:

- Student
- Working professional
- Solo founder
- Team founder
- Freelancer
- Creator

Industry:

- AI
- Edtech
- Fintech
- SaaS
- Consumer app
- Marketplace
- Creator economy
- D2C
- Local business
- Other

## 9. AI Output Structure

Every generated report should return structured JSON.

```json
{
  "score": 42,
  "verdict": "This is a final-year project pretending to be a venture-scale startup.",
  "roast": "The idea is broad, crowded, and has no obvious buyer. Right now it sounds like you added AI to a vague student problem and hoped distribution would appear magically.",
  "what_is_good": [
    "The problem area is large.",
    "Students are easy to reach if the use case is sharp.",
    "A small MVP can be tested quickly."
  ],
  "biggest_problems": [
    "No clear paying customer",
    "Too broad for an MVP",
    "Weak differentiation"
  ],
  "better_positioning": "Instead of 'AI app for students', build 'AI interview practice for tier-2 engineering students preparing for service company placements'.",
  "target_user": "Final-year engineering students in tier-2 and tier-3 colleges preparing for placement interviews.",
  "monetization_feedback": "Do not start with subscriptions. Start with a INR 99 mock interview pack or college group bundle.",
  "first_7_day_plan": [
    "Interview 10 target students.",
    "Create a WhatsApp-based MVP.",
    "Offer 5 mock interview reviews manually.",
    "Charge at least 3 people INR 99.",
    "Turn repeated questions into the first product feature."
  ],
  "first_customers": [
    "Placement WhatsApp groups",
    "College coding clubs",
    "LinkedIn posts targeting final-year students",
    "Telegram placement channels"
  ],
  "share_text": "My startup idea got roasted: 42/100. Biggest issue: no clear paying customer.",
  "share_card_title": "My startup got roasted",
  "share_card_subtitle": "Score: 42/100 - No clear paying customer"
}
```

## 10. Scoring Framework

The AI should score based on 5 dimensions, each out of 20:

1. Problem clarity
2. Target customer specificity
3. Monetization realism
4. Differentiation
5. MVP feasibility

Total = 100.

### Score Interpretation

- 0-20: Meme idea
- 21-40: Needs serious narrowing
- 41-60: Potential, but unfocused
- 61-80: Promising if validated
- 81-100: Strong, but still needs execution

## 11. AI Prompt Strategy

### System Prompt

```txt
You are RoastMyStartup, an AI startup mentor for Indian students, indie hackers, and first-time founders.

Your job is to give brutally honest but constructive feedback on startup ideas.

Tone rules:
- Be funny, sharp, and memorable.
- Roast the idea, never the person.
- Use Indian startup and student context when relevant.
- Avoid generic advice.
- Always give practical next actions.
- Be direct about monetization, distribution, and customer clarity.
- Do not encourage illegal, unsafe, hateful, or exploitative businesses.
- Do not fabricate market data.

Output only valid JSON matching the requested schema.
```

### User Prompt Template

```txt
Roast and evaluate this startup idea.

Startup idea:
{{idea}}

Target customer:
{{targetCustomer}}

Current stage:
{{stage}}

Monetization plan:
{{monetization}}

Founder type:
{{founderType}}

City/college/company:
{{origin}}

Industry:
{{industry}}

Has MVP:
{{hasMvp}}

Has users:
{{hasUsers}}

Has revenue:
{{hasRevenue}}

Biggest confusion:
{{biggestConfusion}}

Return:
- score out of 100
- one-line verdict
- funny roast
- what is good
- biggest problems
- sharper niche
- better positioning
- monetization feedback
- first 7-day plan
- first customer channels
- share text
- share card title
- share card subtitle
```

## 12. Product Pages

### 1. Home Page

Path: `/`

Purpose:

- Explain the product instantly.
- Let user roast an idea without signup.
- Show sample roasts.
- Push users into the main input form.

Sections:

1. Hero with input box
2. Sample roast cards
3. "How it works" in 3 steps
4. Recent public roasts
5. CTA to roast idea

### 2. Roast Creation Page

Path: `/roast`

Purpose:

- Collect detailed idea input.

Components:

- Multi-step form or single clean form
- Character counter
- Stage selector
- Industry selector
- Optional details accordion
- Generate button

### 3. Loading Page/State

Purpose:

- Make AI generation feel entertaining.

Example loading lines:

- Checking if this is a startup or just a Google Form with ambition...
- Looking for paying customers...
- Asking your idea where the revenue is...
- Removing buzzwords...

### 4. Result Page

Path: `/r/[slug]`

Purpose:

- Display public report.
- Encourage sharing.
- Push paid deep dive.

Sections:

1. Score hero
2. One-line verdict
3. Roast
4. What is good
5. Biggest problems
6. Better positioning
7. First 7-day plan
8. Share buttons
9. Unlock deeper report CTA

### 5. Gallery Page

Path: `/gallery`

Purpose:

- SEO and viral browsing.
- Let users see examples.

Filters:

- Funniest
- Most promising
- Worst score
- AI ideas
- Student ideas
- SaaS
- Edtech

### 6. Leaderboard Page

Path: `/leaderboard`

MVP optional.

Leaderboard categories:

- Most roasted today
- Most promising
- Most delusional
- Best comeback
- Top college ideas

### 7. Pricing Page

Path: `/pricing`

Plans:

- Free roast
- Deep report: one-time INR 99 to INR 299
- Founder Pro: INR 299 to INR 499/month

### 8. Admin Page

Path: `/admin`

Purpose:

- Moderate public roasts.
- Feature good examples.
- Hide unsafe/spam content.

## 13. UI Direction

The UI should be bold, fast, meme-friendly, and readable.

### Visual Style

- Clean white or near-white background
- Black text
- Strong accent color: red, electric blue, or lime
- Score cards with clear visual hierarchy
- Big input area
- Crisp buttons
- No heavy startup-corporate design

### Avoid

- Boring SaaS dashboards
- Too many gradients
- Overly polished corporate feel
- Long educational text
- Complex onboarding

### Core Components

- IdeaInputBox
- RoastForm
- StageSelector
- ScoreGauge
- RoastCard
- ProblemList
- SevenDayPlan
- ShareCard
- PublicRoastCard
- PricingCard
- GalleryGrid
- AdminRoastTable

## 14. Tech Stack

Recommended solo-builder stack:

- Framework: Next.js with App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Database: Supabase Postgres
- Auth: Supabase Auth or Clerk
- AI: OpenAI API
- Payments: Razorpay for India, Stripe optional later
- Hosting: Vercel
- Analytics: PostHog or Plausible
- Image generation for share cards: Satori + Resvg, or HTML-to-image
- Rate limiting: Upstash Redis or Supabase-based limits

## 15. Environment Variables

```txt
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
POSTHOG_KEY=
POSTHOG_HOST=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
ADMIN_EMAILS=
```

## 16. Suggested Codebase Structure

```txt
roast-my-startup/
  README.md
  package.json
  next.config.ts
  tsconfig.json
  tailwind.config.ts
  postcss.config.mjs
  eslint.config.mjs
  .env.example

  app/
    layout.tsx
    page.tsx
    globals.css

    roast/
      page.tsx

    r/
      [slug]/
        page.tsx
        opengraph-image.tsx

    gallery/
      page.tsx

    leaderboard/
      page.tsx

    pricing/
      page.tsx

    admin/
      page.tsx

    api/
      roasts/
        route.ts
      roasts/
        [id]/
          route.ts
      generate-roast/
        route.ts
      create-share-image/
        route.ts
      checkout/
        route.ts
      webhooks/
        razorpay/
          route.ts

  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileNav.tsx

    home/
      HeroRoastBox.tsx
      SampleRoasts.tsx
      HowItWorks.tsx
      RecentRoasts.tsx

    roast/
      RoastForm.tsx
      IdeaTextarea.tsx
      StageSelector.tsx
      IndustrySelector.tsx
      LoadingRoast.tsx

    result/
      ScoreGauge.tsx
      VerdictBlock.tsx
      RoastBlock.tsx
      GoodSignals.tsx
      ProblemList.tsx
      BetterPositioning.tsx
      SevenDayPlan.tsx
      CustomerChannels.tsx
      ShareActions.tsx
      UpgradeCta.tsx

    gallery/
      GalleryGrid.tsx
      PublicRoastCard.tsx
      GalleryFilters.tsx

    pricing/
      PricingCard.tsx

    admin/
      AdminRoastTable.tsx
      ModerationActions.tsx

    ui/
      Button.tsx
      Card.tsx
      Input.tsx
      Textarea.tsx
      Select.tsx
      Badge.tsx
      Tabs.tsx
      Toast.tsx

  lib/
    ai/
      openai.ts
      roastPrompt.ts
      roastSchema.ts
      generateRoast.ts

    db/
      supabaseClient.ts
      supabaseServer.ts
      roasts.ts
      users.ts
      payments.ts

    payments/
      razorpay.ts
      plans.ts
      verifyWebhook.ts

    analytics/
      posthog.ts
      events.ts

    moderation/
      validateIdea.ts
      contentSafety.ts

    sharing/
      slug.ts
      shareText.ts
      shareImage.tsx

    utils/
      cn.ts
      dates.ts
      rateLimit.ts
      constants.ts

  types/
    roast.ts
    user.ts
    payment.ts

  supabase/
    migrations/
      001_initial_schema.sql
      002_add_payments.sql
      003_add_gallery_flags.sql

  public/
    images/
      logo.svg
      sample-share-card.png

  tests/
    unit/
      scoring.test.ts
      slug.test.ts
      prompt-schema.test.ts

    e2e/
      roast-flow.spec.ts
      share-page.spec.ts
```

## 17. Database Schema

### Table: users

```sql
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  name text,
  role text,
  city text,
  college_or_company text,
  created_at timestamptz default now()
);
```

### Table: roasts

```sql
create table roasts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  slug text unique not null,

  idea text not null,
  target_customer text not null,
  stage text not null,
  monetization_plan text,
  founder_type text,
  city text,
  college_or_company text,
  industry text,
  has_mvp boolean default false,
  has_users boolean default false,
  has_revenue boolean default false,
  biggest_confusion text,

  score integer not null,
  verdict text not null,
  roast text not null,
  what_is_good jsonb not null,
  biggest_problems jsonb not null,
  better_positioning text not null,
  target_user text,
  monetization_feedback text,
  first_7_day_plan jsonb not null,
  first_customers jsonb not null,
  share_text text,
  share_card_title text,
  share_card_subtitle text,

  is_public boolean default true,
  is_featured boolean default false,
  is_hidden boolean default false,
  moderation_status text default 'pending',

  view_count integer default 0,
  share_count integer default 0,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

### Table: payments

```sql
create table payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  roast_id uuid references roasts(id),
  provider text not null,
  provider_payment_id text,
  provider_order_id text,
  amount_inr integer not null,
  status text not null,
  product_type text not null,
  created_at timestamptz default now()
);
```

### Table: deep_reports

```sql
create table deep_reports (
  id uuid primary key default gen_random_uuid(),
  roast_id uuid references roasts(id) not null,
  user_id uuid references users(id),
  report jsonb not null,
  created_at timestamptz default now()
);
```

## 18. API Routes

### POST /api/generate-roast

Purpose:

- Validate input
- Rate limit user/IP
- Call OpenAI
- Parse structured JSON
- Store roast in DB
- Return result slug

Request:

```json
{
  "idea": "AI app for students",
  "targetCustomer": "College students",
  "stage": "Just idea",
  "monetization": "Subscription",
  "founderType": "Student",
  "industry": "AI",
  "hasMvp": false,
  "hasUsers": false,
  "hasRevenue": false
}
```

Response:

```json
{
  "id": "uuid",
  "slug": "ai-app-for-students-42xk",
  "score": 42
}
```

### GET /api/roasts/[id]

Purpose:

- Fetch one roast by id or slug

### POST /api/create-share-image

Purpose:

- Generate share card image

### POST /api/checkout

Purpose:

- Create Razorpay order for deep report

### POST /api/webhooks/razorpay

Purpose:

- Verify payment
- Unlock deep report

## 19. TypeScript Types

```ts
export type RoastStage =
  | "just_idea"
  | "building_mvp"
  | "launched_no_users"
  | "has_users"
  | "has_revenue";

export type RoastInput = {
  idea: string;
  targetCustomer: string;
  stage: RoastStage;
  monetizationPlan?: string;
  founderType?: string;
  city?: string;
  collegeOrCompany?: string;
  industry?: string;
  hasMvp?: boolean;
  hasUsers?: boolean;
  hasRevenue?: boolean;
  biggestConfusion?: string;
};

export type RoastReport = {
  score: number;
  verdict: string;
  roast: string;
  whatIsGood: string[];
  biggestProblems: string[];
  betterPositioning: string;
  targetUser?: string;
  monetizationFeedback?: string;
  first7DayPlan: string[];
  firstCustomers: string[];
  shareText: string;
  shareCardTitle: string;
  shareCardSubtitle: string;
};
```

## 20. Core Service Flow

```txt
User submits form
  -> validateIdea()
  -> rateLimit()
  -> generateRoast()
  -> validate AI JSON schema
  -> create slug
  -> save roast
  -> return slug
  -> redirect to /r/[slug]
```

## 21. Validation Rules

Reject or ask user to edit if:

- Idea is below 20 characters
- Idea is spam
- Input contains private personal data
- Input asks for illegal activity
- Input is hateful, sexual, or unsafe
- User submits too many requests too quickly

## 22. Rate Limiting

Free users:

- 3 roasts per day per IP

Logged-in users:

- 5 roasts per day

Paid users:

- 50 roasts per month

## 23. Paid Deep Report

The free roast should be valuable enough to share.
The paid report should help the user actually execute.

### Paid Report Includes

1. Detailed customer persona
2. Competitor map
3. MVP feature list
4. Landing page copy
5. Pricing test
6. 30-day execution plan
7. 10 cold DM templates
8. 20 customer interview questions
9. Pitch deck outline
10. "Kill or continue" decision framework

### Pricing

Start with one-time payments:

- INR 99: Deep report launch offer
- INR 199: Standard deep report
- INR 499: Deep report plus pitch deck outline

Later:

- INR 299/month for Founder Pro

## 24. Growth Loops

### Loop 1: Share Card

User gets roast -> shares scorecard -> friends click -> friends generate roasts.

### Loop 2: Public Gallery

Roasts are indexed -> users browse examples -> users submit own idea.

### Loop 3: Leaderboards

Daily categories create recurring posts:

- Lowest score
- Highest score
- Funniest roast
- Most promising idea
- Best student idea

### Loop 4: Programmatic SEO

Create pages like:

- `/startup-ideas/ai`
- `/startup-ideas/edtech`
- `/startup-ideas/college-students`
- `/roast-examples/saas`

Each page shows anonymized public roasts and common advice.

### Loop 5: Social Content Engine

Turn public roasts into:

- Instagram carousels
- LinkedIn posts
- X threads
- YouTube Shorts scripts
- Reddit discussion posts

## 25. Launch Plan

### Pre-Launch

1. Buy domain.
2. Build MVP.
3. Create 20 fake/sample roasts for common ideas.
4. Prepare 30 social posts.
5. Add analytics.
6. Add waitlist/email capture.

### Launch Day

Post:

```txt
I built an AI that roasts Indian startup ideas.

Drop your idea.
It gives you:
- score out of 100
- brutal roast
- practical 7-day validation plan

Try it: RoastMyStartup.in
```

Launch channels:

- LinkedIn
- X/Twitter
- Reddit India startup communities
- Indie Hackers
- Product Hunt
- Instagram reels
- WhatsApp groups
- Telegram student/founder groups

### First 7 Days

Daily content:

- "10 Indian startup ideas roasted by AI"
- "Worst startup idea of the day"
- "This student idea scored 82/100"
- "Why most AI startup ideas fail"
- "Roasting common college startup ideas"

## 26. SEO Plan

Target keywords:

- roast my startup idea
- startup idea feedback
- AI startup idea validator
- startup idea score
- startup idea generator India
- business idea validator
- pitch feedback AI
- startup mentor AI

Programmatic pages:

- AI startup idea validator
- Edtech startup idea feedback
- SaaS startup idea feedback
- College startup ideas
- Student business ideas India
- How to validate a startup idea in India

## 27. Analytics Events

Track:

- home_viewed
- roast_form_started
- roast_form_submitted
- roast_generated
- result_viewed
- share_clicked
- image_downloaded
- gallery_viewed
- pricing_viewed
- checkout_started
- payment_success
- payment_failed

Main metrics:

- Visitor to roast conversion
- Roast to share conversion
- Share to new visitor conversion
- Free to paid conversion
- Average roasts per user

## 28. Admin Moderation

Admin should be able to:

- View latest roasts
- Feature a roast
- Hide a roast
- Mark unsafe
- Edit public title only if needed
- View reports

Gallery should only show:

- Safe roasts
- Non-private submissions
- No personal data
- No illegal ideas

## 29. Safety and Legal

Add disclaimers:

- AI feedback is not financial, legal, or investment advice.
- Public roasts may be visible if user chooses public mode.
- Do not enter confidential business information.
- The product gives educational feedback only.

## 30. Development Timeline

### Day 1

- Set up Next.js
- Add Tailwind
- Build homepage
- Build roast form UI

### Day 2

- Set up Supabase
- Create DB schema
- Create form validation
- Add API route

### Day 3

- Integrate OpenAI
- Add structured JSON schema
- Save roast to database
- Redirect to result page

### Day 4

- Build result page
- Add score gauge
- Add share text
- Add loading states

### Day 5

- Generate share card image
- Add Open Graph image
- Add social sharing
- Add public slug pages

### Day 6

- Build gallery
- Add admin moderation
- Add analytics

### Day 7

- Polish UI
- Add rate limiting
- Add disclaimers
- Add sample roasts
- Deploy to Vercel

### Days 8-14

- Add Razorpay
- Add paid deep report
- Add SEO pages
- Launch content engine

## 31. MVP Build Order

Build in this exact order:

1. Homepage
2. Roast form
3. AI generation
4. Result page
5. Database saving
6. Public slug page
7. Share card
8. Gallery
9. Rate limiting
10. Analytics
11. Payment
12. Deep report

## 32. Example Sample Roasts

### Idea: AI notes app for students

Score: 38/100

Verdict:

```txt
This is every engineering student's first AI idea wearing a productivity hoodie.
```

Better positioning:

```txt
AI revision notes for final-year engineering students preparing for specific university exams.
```

### Idea: LinkedIn for students

Score: 31/100

Verdict:

```txt
The problem with "LinkedIn for students" is that students already avoid actual LinkedIn until placement season panic starts.
```

Better positioning:

```txt
A proof-of-work profile for engineering students that turns GitHub projects, internships, and hackathon submissions into a recruiter-ready page.
```

### Idea: Zomato for home food

Score: 52/100

Verdict:

```txt
This idea has been attempted more times than college students have promised to start going to the gym from Monday.
```

Better positioning:

```txt
Pre-ordered healthy lunch subscriptions from verified home chefs for office workers in one dense business area.
```

## 33. Future Expansion

Once the simple viral product works, expand into:

1. Founder profile pages
2. Build-in-public streaks
3. Monthly idea competitions
4. College startup leaderboards
5. Startup idea marketplace
6. Mentor marketplace
7. Founder resume based on shipped ideas
8. Incubator screening tool
9. B2B college dashboard

## 34. Moat

The AI roast can be copied.
The brand, data, examples, public pages, and founder behavior graph are harder to copy.

Long-term defensibility:

- Public database of anonymized startup idea patterns
- Viral brand
- SEO library
- Founder profiles
- College/community rankings
- Paid reports and execution history
- Distribution through share cards

## 35. Final MVP Definition

The first version is successful if:

- A stranger understands it in 5 seconds
- A user can generate a roast in under 60 seconds
- The result is funny enough to screenshot
- The advice is useful enough to save
- At least 10 percent of users share their result
- At least 1 percent of users pay for a deeper report

## 36. Recommended First Commit Checklist

```txt
[ ] Create Next.js app
[ ] Add Tailwind
[ ] Add basic layout
[ ] Add homepage
[ ] Add roast form
[ ] Add Zod validation
[ ] Add OpenAI integration
[ ] Add Supabase schema
[ ] Add result page
[ ] Add public slug route
[ ] Add share buttons
[ ] Add gallery
[ ] Add analytics
[ ] Add rate limit
[ ] Deploy MVP
```

## 37. Best First Version Name

Use:

```txt
RoastMyStartup.in
```

Alternative names:

- FounderRealityCheck
- StartupScorecard
- PitchPeCharcha
- BuildOrBullshit
- IdeaSePitai

Recommendation:

Use RoastMyStartup.in because it is clear, searchable, and immediately shareable.

