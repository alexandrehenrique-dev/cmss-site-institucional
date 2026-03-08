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
        "flex h-11 w-11 items-center justify-center rounded-full",
        "select-none",
        "border border-[var(--gold-border)]",
        "bg-[var(--glass-bg)]",
        "backdrop-blur-xl",
        "text-[var(--gold-base)]",
        "shadow-[var(--shadow-elevated)]",
        "transition-[transform,box-shadow,color,background-color,border-color,opacity] duration-[var(--motion-duration-base)] ease-[var(--motion-ease-standard)]",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-[var(--gold-base)]",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        disabled
          ? "cursor-not-allowed opacity-35"
          : [
              "cursor-pointer",
              "hover:scale-[var(--motion-scale-hover-sm)]",
              "hover:text-[var(--gold-light)]",
              "hover:border-[var(--gold-light)]",
              "hover:bg-[var(--gold-bg-subtle)]",
              "hover:shadow-[var(--shadow-gold-glow)]",
              "active:scale-[var(--motion-scale-press)]",
            ].join(" "),
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}