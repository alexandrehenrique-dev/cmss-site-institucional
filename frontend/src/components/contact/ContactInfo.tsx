"use client";
import { ContactInfoItem, ContactInfoItemData } from "./ContactInfoItem";

export type ContactInfoProps = {
  items: ContactInfoItemData[];
  className?: string;
};

export function ContactInfo({
  items,
  className = "",
}: ContactInfoProps) {
  const safeItems = Array.isArray(items)
    ? items.filter((item) => item?.label && item?.value && item?.type)
    : [];

  if (safeItems.length === 0) return null;

  return (
    <section
      className={[
        "flex flex-col gap-6",
        className,
      ].join(" ")}
    >
      <div className="flex flex-col gap-6">
        {safeItems.map((item, index) => (
          <ContactInfoItem
            key={`${item.label}-${item.value}-${index}`}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}