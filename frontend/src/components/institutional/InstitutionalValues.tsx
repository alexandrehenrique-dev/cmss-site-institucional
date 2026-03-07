"use client";

import { Check } from "lucide-react";
import { Text } from "@/components/Typography";

export type InstitutionalValuesProps = {
  values: string[];
  className?: string;
};

export function InstitutionalValues({
  values,
  className = "",
}: InstitutionalValuesProps) {
  if (!Array.isArray(values) || values.length === 0) return null;

  return (
    <ul
      className={[
        "grid grid-flow-col auto-cols-fr grid-rows-6 gap-x-6 gap-y-1",
        "min-h-0 overflow-hidden",
        className,
      ].join(" ")}
    >
      {values.map((value, index) => (
        <li
          key={`${value}-${index}`}
          className="flex items-center h-12 break-inside-avoid gap-2"
        >
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
          <Text variant="muted" className="m-0 leading-relaxed">
            {value}
          </Text>
        </li>
      ))}
    </ul>
  );
}