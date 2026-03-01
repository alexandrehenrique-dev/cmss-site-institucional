"use client";

import { useEffect, useId } from "react";
import { X } from "lucide-react";
import { CmsImage } from "@/components/CmsImage";
import { Text } from "@/components/Typography";
import type { GalleryItem } from "@/types/content";

export function GalleryModal({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: GalleryItem | null;
  onClose: () => void;
}) {
  const id = useId();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização de imagem"
      aria-describedby={id}
      className="fixed inset-0 z-50"
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="Fechar modal"
        onClick={onClose}
        className="absolute inset-0 bg-[var(--overlay)]"
      />

      {/* painel */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className={[
            "w-[min(92vw,980px)] overflow-hidden rounded-lg",
            "border border-[var(--border)]",
            "bg-[var(--bg)] text-[var(--fg)]",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-3 p-3 border-b border-[var(--border)]">
            <Text id={id} variant="small" className="opacity-80">
              {item.caption ?? item.alt}
            </Text>

            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-2 text-[var(--fg)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-3">
            <CmsImage
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
            {item.caption ? (
              <div className="mt-3">
                <Text variant="muted">{item.caption}</Text>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}