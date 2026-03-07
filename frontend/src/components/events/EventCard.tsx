"use client";

import { useState } from "react";
import { CmsImage } from "@/components/CmsImage";
import { EventCardProps } from "@/types/content";
import { formatEventDate } from "./eventDate";
import { EventDateColumn } from "./EventDateColumn";
import { EventMeta } from "./EventMeta";
import { EventModal } from "./EventModal";

export function EventCard({
  title,
  date,
  location,
  description,
  image,
  className = "",
}: EventCardProps) {
  const [open, setOpen] = useState(false);

  const dateParts = formatEventDate(date);
  const showCTA = Boolean(description || image);

  return (
    <>
      <article
        className={[
          "relative overflow-hidden",
          "border-t border-b border-[var(--gold-border)]",
          "bg-[var(--bg)]",
          "px-4 py-4",
          "flex gap-4",
          "min-h-[96px]",
          className,
        ].join(" ")}
      >
        {image && (
          <div className="absolute inset-0 z-0 opacity-25">
            <CmsImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-[var(--bg)] opacity-80" />

        {dateParts && (
          <EventDateColumn
            day={dateParts.day}
            month={dateParts.month}
          />
        )}

        <EventMeta
          title={title}
          showCTA={showCTA}
          onOpen={() => setOpen(true)}
          {...(dateParts?.full !== undefined ? { date: dateParts.full } : {})}
          {...(location !== undefined ? { location } : {})}
        />
      </article>

      {open && (
        <EventModal
          title={title}
          onClose={() => setOpen(false)}
          {...(image ? { image } : {})}
          {...(description ? { description } : {})}
          {...(dateParts?.full ? { date: dateParts.full } : {})}
          {...(location ? { location } : {})}
        />
      )}
    </>
  );
}