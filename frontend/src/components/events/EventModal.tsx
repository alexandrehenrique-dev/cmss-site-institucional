"use client";

import { createPortal } from "react-dom";
import { useEffect, useSyncExternalStore } from "react";
import { MapPin, X } from "lucide-react";
import { CmsImage } from "@/components/CmsImage";
import { Heading, Text } from "@/components/Typography";

export function EventModal({
  title,
  description,
  image,
  date,
  location,
  onClose,
}: {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  date?: string;
  location?: string;
  onClose: () => void;
}) {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (!isClient) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <button
        type="button"
        aria-label="Fechar modal"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={[
          "relative z-10 w-[min(92vw,900px)] max-h-[90vh] overflow-hidden rounded-lg",
          "border border-[var(--border)]",
          "bg-[var(--bg)] text-[var(--fg)]",
          "shadow-[0_20px_50px_rgba(0,0,0,0.28)]",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Detalhes do evento"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] p-3">
          <Heading as="h2" variant="h3" className="text-[var(--fg)]">
            {title}
          </Heading>

          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-base)]"
            aria-label="Fechar"
          >
            <X className="h-4 w-4 text-[var(--gold-base)]" />
          </button>
        </div>

        <div className="flex max-h-[calc(90vh-64px)] flex-col gap-3 overflow-y-auto p-4">
          {image ? (
            <CmsImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="max-h-[40vh] w-full rounded-md object-cover"
            />
          ) : null}

          {date ? <Text variant="muted">{date}</Text> : null}

          {location ? (
            <div className="flex items-center gap-1 opacity-85 text-[var(--fg)]">
              <MapPin className="h-4 w-4 shrink-0" />
              <Text variant="muted">{location}</Text>
            </div>
          ) : null}

          {description ? <Text variant="body">{description}</Text> : null}
        </div>
      </div>
    </div>,
    document.body
  );
}