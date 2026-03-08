"use client";

import Link from "next/link";
import { Text, Heading } from "@/components/Typography";
import { ContactInfoIcon, ContactInfoType } from "./ContactInfoIcon";

export type ContactInfoItemData = {
  label: string;
  value: string;
  type: ContactInfoType;
  href?: string;
  secondaryValue?: string;
};

function resolveHref(item: ContactInfoItemData) {
  if (item.href) return item.href;

  if (item.type === "email") return `mailto:${item.value}`;
  if (item.type === "phone") return `tel:${item.value}`;

  return undefined;
}

export function ContactInfoItem({
  item,
  className = "",
}: {
  item: ContactInfoItemData;
  className?: string;
}) {
  if (!item?.label || !item?.value || !item?.type) return null;

  const href = resolveHref(item);
  const isClickable = Boolean(href);

  const content = (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <Heading
        as="h3"
        variant="h2"
        className="institutional-card-title"
      >
        {item.label}
      </Heading>
      <Text
        variant="body"
        className="m-0 break-words text-[var(--fg)]"
      >
        {item.value}
      </Text>

      {item.secondaryValue ? (
        <Text
          variant="muted"
          className="m-0 break-words text-[var(--fg)]"
        >
          {item.secondaryValue}
        </Text>
      ) : null}
    </div>
  );

  return (
    <div className={["flex items-start gap-4", className].join(" ")}>
      <ContactInfoIcon type={item.type} />

      {isClickable ? (
        <Link
          href={href!}
          className={[
            "min-w-0 flex-1 rounded-sm",
            "hover:opacity-90",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-base)]",
          ].join(" ")}
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}