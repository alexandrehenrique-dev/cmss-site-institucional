"use client";

import type { ReactNode } from "react";

export function ArrowButton({
  disabled,
  onClick,
  ariaLabel,
  children,
  className = "",
}: {
  disabled: boolean;
  onClick: () => void;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={[
        "pointer-events-auto",
        "h-11 w-11 rounded-full",
        "flex items-center justify-center",
        "backdrop-blur-xl",
        "bg-[var(--glass-bg)]",
        "border border-[var(--gold-border)]",
        "shadow-[var(--shadow-elevated)]",
        "transition-[transform,box-shadow,color,background-color,border-color,opacity] duration-200 ease-out",
        "select-none",
        "text-[var(--gold-base)]",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-[var(--gold-base)]",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        disabled
          ? "opacity-35 cursor-not-allowed"
          : [
              "cursor-pointer",
              "hover:text-[var(--gold-light)]",
              "hover:border-[var(--gold-light)]",
              "hover:shadow-[var(--shadow-gold-glow)]",
              "hover:bg-[var(--gold-bg-subtle)]",
              "active:scale-[0.95]",
            ].join(" "),
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}