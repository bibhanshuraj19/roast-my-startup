"use client";

import { cn } from "@/lib/utils/cn";
import { TextareaHTMLAttributes, forwardRef, useState } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxChars?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, maxChars, id, onChange, value, ...props }, ref) => {
    const [charCount, setCharCount] = useState(
      typeof value === "string" ? value.length : 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[var(--foreground)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            id={id}
            className={cn(
              "w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)]",
              "text-[var(--foreground)] placeholder:text-[var(--muted)]",
              "transition-all duration-200 resize-none",
              "focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
            onChange={handleChange}
            value={value}
            maxLength={maxChars}
            {...props}
          />
          {maxChars && (
            <span
              className={cn(
                "absolute bottom-3 right-3 text-xs",
                charCount > maxChars * 0.9
                  ? "text-red-500"
                  : "text-[var(--muted)]"
              )}
            >
              {charCount}/{maxChars}
            </span>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export { Textarea };
