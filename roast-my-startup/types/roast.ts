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

export type RoastRecord = RoastInput &
  RoastReport & {
    id: string;
    slug: string;
    isPublic: boolean;
    isFeatured: boolean;
    isHidden: boolean;
    moderationStatus: "pending" | "approved" | "rejected";
    viewCount: number;
    shareCount: number;
    createdAt: string;
    updatedAt: string;
  };
