"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryProps } from "@/types/content";
import { ArrowButton } from "../ArrowButton";
import { ImageBlock } from "../ImageBlock";
import { useGallerySwipe } from "./useGallerySwipe";

export function Gallery({ items, initialIndex = 0, aspectRatio = "16/9", className = "",
  index: controlledIndex, onChangeIndex, loop = false }: GalleryProps) {
  const list = Array.isArray(items) ? items : [];
  const [localIndex, setLocalIndex] = useState(initialIndex);
  const index = Math.max(0, Math.min(controlledIndex ?? localIndex, list.length - 1));
  const canPrev = list.length > 1 && (loop || index > 0);
  const canNext = list.length > 1 && (loop || index < list.length - 1);

  function move(direction: number) {
    if (!list.length) return;
    const next = loop ? (index + direction + list.length) % list.length
      : Math.max(0, Math.min(index + direction, list.length - 1));
    if (controlledIndex === undefined) setLocalIndex(next);
    onChangeIndex?.(next);
  }
  const swipe = useGallerySwipe({ enabled: list.length > 1, onPrev: () => move(-1), onNext: () => move(1) });
  if (!list.length) return null;

  return (
    <section aria-label="Galeria de fotografias" aria-roledescription="carrossel"
      className={`gallery mx-auto w-full max-w-[880px] ${className}`}>
      <div className="overflow-hidden rounded-lg touch-pan-y" {...swipe.handlers}
        onClickCapture={(event) => { if (swipe.suppressClick()) { event.preventDefault(); event.stopPropagation(); } }}>
        <div className="flex items-start transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {list.map((item, itemIndex) => (
            <div key={`${item.src}-${itemIndex}`} className="w-full min-w-0 shrink-0"
              inert={itemIndex !== index} aria-hidden={itemIndex !== index}
              role="group" aria-label={`${itemIndex + 1} de ${list.length}`}>
              <div className="gallery-frame" style={{ aspectRatio }}>
                <ImageBlock image={item} enableModal />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0" aria-live="polite" aria-atomic="true">
          <p className="!m-0 text-sm font-medium">{list[index]?.caption || list[index]?.alt}</p>
          {list[index]?.description && <p className="text-sm text-[var(--muted)]">{list[index]?.description}</p>}
          <p className="!mb-0 text-xs text-[var(--muted)]">{index + 1} / {list.length}</p>
        </div>
        {list.length > 1 && <div className="flex shrink-0 gap-2">
          <ArrowButton disabled={!canPrev} onClick={() => move(-1)} ariaLabel="Imagem anterior"><ChevronLeft className="h-5 w-5" /></ArrowButton>
          <ArrowButton disabled={!canNext} onClick={() => move(1)} ariaLabel="Próxima imagem"><ChevronRight className="h-5 w-5" /></ArrowButton>
        </div>}
      </div>
    </section>
  );
}
