"use client";

import { Menu } from "lucide-react";

export function MobileMenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Menu aberto" : "Abrir menu"}
      className={[
        "inline-flex h-11 w-11 items-center justify-center rounded-full",
        "border border-[var(--glass-border)]",
        "bg-[var(--glass-bg)] text-[var(--gold-base)]",
        "shadow-[var(--glass-shadow)]",
        "supports-[backdrop-filter]:[backdrop-filter:saturate(var(--glass-backdrop-saturate))_blur(var(--glass-backdrop-blur))]",
        "transition-[transform,box-shadow,color,background-color,border-color,opacity] duration-200 ease-out",
        "hover:text-[var(--gold-light)] hover:shadow-[var(--shadow-gold-glow)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-base)]",
        "active:scale-[0.96]",
      ].join(" ")}
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}