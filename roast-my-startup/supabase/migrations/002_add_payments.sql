-- Payments table
create table if not exists payments (
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

-- Deep reports table
create table if not exists deep_reports (
  id uuid primary key default gen_random_uuid(),
  roast_id uuid references roasts(id) not null,
  user_id uuid references users(id),
  report jsonb not null,
  created_at timestamptz default now()
);

create index if not exists idx_payments_roast on payments(roast_id);
create index if not exists idx_deep_reports_roast on deep_reports(roast_id);
