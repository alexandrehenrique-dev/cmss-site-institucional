"use client";

import { Text, Heading } from "@/components/Typography";
import { SupportCardIcon, SupportIconName } from "./SupportCardIcon";
import { SupportCopyField } from "./SupportCopyField";

export type SupportCardProps = {
  title: string;
  text?: string;
  icon?: SupportIconName;
  copyValue?: string;
  copyLabel?: string;
  className?: string;
};

export function SupportCard({
  title,
  text,
  icon = "default",
  copyValue,
  copyLabel,
  className = "",
}: SupportCardProps) {
  const hasText = typeof text === "string" && text.trim().length > 0;
  const hasCopy = typeof copyValue === "string" && copyValue.trim().length > 0;

  if (!title) return null;

  return (
    <article
      className={[
        "flex h-[260px] w-full max-w-[360px] gap-4",
        className,
      ].join(" ")}
    >
      <SupportCardIcon name={icon} />

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-col gap-3">
          <Heading
            as="h3"
            variant="h2"
            className="institutional-card-title"
          >
            {title}
          </Heading>

          {hasText ? (
            <Text variant="body" className="m-0 text-[var(--fg)]">
              {text}
            </Text>
          ) : null}
        </div>

        <div className="mt-auto">
          {hasCopy ? (
            <SupportCopyField
              label={copyLabel ? copyLabel : ""}
              value={copyValue}
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}