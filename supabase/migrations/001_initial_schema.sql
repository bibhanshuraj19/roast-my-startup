-- RoastMyStartup.in - Initial Schema

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  name text,
  role text,
  city text,
  college_or_company text,
  created_at timestamptz default now()
);

create table if not exists roasts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  slug text unique not null,

  -- Input fields
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

  -- AI output fields
  score integer not null,
  score_label text,
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
  og_image_url text,

  -- Moderation flags
  is_public boolean default true,
  is_featured boolean default false,
  is_hidden boolean default false,
  moderation_status text default 'pending',

  -- Metrics
  view_count integer default 0,
  share_count integer default 0,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Indexes for common queries
create index if not exists idx_roasts_slug on roasts(slug);
create index if not exists idx_roasts_public on roasts(is_public, is_hidden, created_at desc);
create index if not exists idx_roasts_featured on roasts(is_featured) where is_featured = true;
create index if not exists idx_roasts_score on roasts(score desc);

-- Function to increment view count
create or replace function increment_view_count(roast_slug text)
returns void as $$
begin
  update roasts set view_count = view_count + 1 where slug = roast_slug;
end;
$$ language plpgsql;
