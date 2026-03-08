"use client";

import { SupportCard, SupportCardProps } from "./SupportCard";

export type SupportCardsProps = {
  items: SupportCardProps[];
  className?: string;
};

export function SupportCards({
  items,
  className = "",
}: SupportCardsProps) {
  const safeItems = Array.isArray(items) ? items.filter((item) => item?.title) : [];

  if (safeItems.length === 0) return null;

  return (
    <section
      className={["flex flex-col gap-8", className].join(" ")}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:justify-items-start">
        {safeItems.map((item, index) => (
          <SupportCard
            key={`${item.title}-${index}`}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}