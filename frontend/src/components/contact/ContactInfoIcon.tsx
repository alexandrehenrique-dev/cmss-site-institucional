"use client";

import {
  Mail,
  MapPin,
  Phone,
  Link as LinkIcon,
  LucideIcon,
} from "lucide-react";

export type ContactInfoType = "email" | "phone" | "address" | "link";

export function ContactInfoIcon({
  type,
  className = "",
}: {
  type: ContactInfoType;
  className?: string;
}) {
  const icons: Record<ContactInfoType, LucideIcon> = {
    email: Mail,
    phone: Phone,
    address: MapPin,
    link: LinkIcon,
  };

  const Icon = icons[type];

  return (
    <div
      className={[
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
        "bg-[var(--surface-2)] text-[var(--accent)]",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}