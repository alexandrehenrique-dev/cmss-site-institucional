"use client";

import {
  Banknote,
  Building2,
  Drum,
  HandHelping,
  LucideIcon,
} from "lucide-react";

export type SupportIconName =
  | "financial"
  | "institutional"
  | "materials"
  | "default";

export function SupportCardIcon({
  name,
  className = "",
}: {
  name?: SupportIconName;
  className?: string;
}) {
  const icons: Record<SupportIconName, LucideIcon> = {
    financial: Banknote,
    institutional: Building2,
    materials: Drum,
    default: HandHelping,
  };

  const Icon = icons[name ?? "default"];

  return (
    <div
      className={[
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
        "bg-[var(--surface-2)] text-[var(--accent)]",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}