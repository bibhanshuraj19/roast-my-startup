import { cn } from "@/lib/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, glass = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-6",
          "transition-all duration-300",
          hover && "hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 hover:border-[var(--accent)]/20",
          glass && "backdrop-blur-xl bg-white/80",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export { Card };
