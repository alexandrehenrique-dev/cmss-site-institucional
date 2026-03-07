"use client";

import { Heading, Text } from "@/components/Typography";
import { InstitutionalValues } from "./InstitutionalValues";

export type InstitutionalCardItem = {
  title: string;
  text?: string;
  values?: string[];
};

export type InstitutionalCardProps = {
  item: InstitutionalCardItem;
  className?: string;
};

export function InstitutionalCard({
  item,
  className = "",
}: InstitutionalCardProps) {
  const hasText = typeof item?.text === "string" && item.text.trim().length > 0;
  const hasValues = Array.isArray(item?.values) && item.values.length > 0;

  if (!item?.title || (!hasText && !hasValues)) return null;

  return (
    <>
      <article
        className={[
          "flex h-full max-h-[320px] w-full max-w-[360px] flex-col",
          "gap-4",
          className,
        ].join(" ")}
      >
        <Heading
          as="h3"
          variant="h2"
          className="institutional-card-title"
        >
          {item.title}
        </Heading>

        <div className="flex min-h-0 flex-1 flex-col">
          {hasText ? (
            <Text variant="body" className="m-0 text-[var(--fg)]">
              {item.text}
            </Text>
          ) : null}

          {hasValues ? (
            <div className={hasText ? "mt-4 min-h-0 flex-1" : "min-h-0 flex-1"}>
              <InstitutionalValues values={item.values!} />
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}