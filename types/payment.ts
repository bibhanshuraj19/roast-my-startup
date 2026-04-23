export type PaymentStatus = "created" | "authorized" | "captured" | "failed" | "refunded";

export type ProductType = "deep_report" | "founder_pro";

export type PaymentRecord = {
  id: string;
  userId?: string;
  roastId: string;
  provider: "razorpay" | "stripe";
  providerPaymentId?: string;
  providerOrderId?: string;
  amountInr: number;
  status: PaymentStatus;
  productType: ProductType;
  createdAt: string;
};

export type PricingTier = {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  popular?: boolean;
  cta: string;
};
