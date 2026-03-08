"use client";

import { Heading } from "@/components/Typography";
import { SupportCard, SupportCardProps } from "./SupportCard";

export type SupportCardsProps = {
  title?: string;
  items: SupportCardProps[];
  className?: string;
};

export function SupportCards({
  title,
  items,
  className = "",
}: SupportCardsProps) {
  const safeItems = Array.isArray(items) ? items.filter((item) => item?.title) : [];

  if (safeItems.length === 0) return null;

  return (
    <section
      aria-label={title ?? "Formas de apoio"}
      className={["flex flex-col gap-8", className].join(" ")}
    >
      {title ? (
        <Heading as="h2" variant="h2">
          {title}
        </Heading>
      ) : null}

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