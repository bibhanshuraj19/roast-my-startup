# 🔥 RoastMyStartup.in

AI-powered startup idea roasting platform. Get a brutally honest score, funny roast, and a practical 7-day validation plan — all shareable as a card.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **AI**: Nebius API (OpenAI-compatible) — GPT-4o-mini
- **Fonts**: Inter + Space Grotesk via `next/font`
- **Animations**: Framer Motion

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

```bash
cp .env.example .env.local
```

Fill in your Supabase and Nebius API keys.

3. **Run database migrations:**

Apply the SQL files in `supabase/migrations/` to your Supabase project.

4. **Start the dev server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Design system & theme tokens
│   ├── roast/page.tsx                # Roast submission form
│   ├── r/[slug]/page.tsx             # Result page (dynamic)
│   ├── gallery/page.tsx              # Public roast gallery
│   ├── pricing/page.tsx              # Pricing tiers
│   └── api/generate-roast/route.ts   # AI roast generation endpoint
├── components/
│   ├── layout/                       # Header, Footer
│   ├── home/                         # Hero, SampleRoasts, HowItWorks, RecentRoasts
│   ├── roast/                        # RoastForm, LoadingRoast
│   ├── result/                       # ScoreGauge, VerdictBlock, ShareActions, etc.
│   └── ui/                           # Button, Card, Input, Textarea, Select, Badge
├── lib/
│   ├── ai/                           # OpenAI client, prompts, schema, generateRoast
│   ├── db/                           # Supabase clients, roast CRUD
│   ├── moderation/                   # Input validation (Zod)
│   ├── sharing/                      # Slug generation
│   └── utils/                        # cn(), constants
├── types/                            # TypeScript types (roast, payment)
└── supabase/migrations/              # Database schema SQL
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Hero with input box, sample roasts, how it works |
| `/roast` | Multi-section form with stage chips & optional fields |
| `/r/[slug]` | Full report: score gauge, verdict, roast, 7-day plan |
| `/gallery` | Filterable grid of public roasts |
| `/pricing` | Free / Deep Report ₹99 / Founder Pro ₹299 |

## Deploy on Vercel

```bash
npm run build
```

Set the environment variables in your Vercel project dashboard and deploy.

## License

Private — All rights reserved.
