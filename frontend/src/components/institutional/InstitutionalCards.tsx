"use client";

import { InstitutionalCard, InstitutionalCardItem } from "./InstitutionalCard";

export type InstitutionalCardsProps = {
  items: InstitutionalCardItem[];
  className?: string;
};

export function InstitutionalCards({
  items,
  className = "",
}: InstitutionalCardsProps) {
  const safeItems = Array.isArray(items) ? items.filter((item) => item?.title) : [];

  if (safeItems.length === 0) return null;

  return (
    <>
      <div className={[
                        "grid grid-cols-1 justify-items-start gap-10",
                        "lg:grid-cols-3 lg:justify-items-center",
                        className,
                      ].join(" ")}
      >
        {safeItems.map((item, index) => (
          <InstitutionalCard
            key={`${item.title}-${index}`}
            item={item}
          />
        ))}
      </div>
    </>
  );
}