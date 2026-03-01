"use client";

import type { ReactNode } from "react";

export function GalleryArrowButton({
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

        // Glass base
        "backdrop-blur-xl",
        "bg-[var(--glass-bg)]",
        "border border-[var(--gold-border)]",

        // Shadow base
        "shadow-[var(--shadow-elevated)]",

        // Transition
        "transition-[transform,box-shadow,color,background-color,border-color,opacity] duration-200 ease-out",
        "select-none",

        // Gold base color
        "text-[var(--gold-base)]",

        // Focus
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-[var(--gold-base)]",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",

        disabled
          ? "opacity-35 cursor-not-allowed"
          : [
              "cursor-pointer",

              // Hover gold brighter
              "hover:text-[var(--gold-light)]",
              "hover:border-[var(--gold-light)]",

              // Glow
              "hover:shadow-[var(--shadow-gold-glow)]",

              // Subtle gold background
              "hover:bg-[var(--gold-bg-subtle)]",

              // Active interaction
              "active:scale-[0.95]",
            ].join(" "),

        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}