"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem, GalleryProps } from "@/types/content";
import { ArrowButton } from "../ArrowButton";
import { GallerySlide } from "./GallerySlide";
import { useGallerySwipe } from "./useGallerySwipe";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

type Dir = -1 | 1;
type Offset = -2 | -1 | 0 | 1 | 2;

export function Gallery({
  items,
  initialIndex = 0,
  aspectRatio = "16/9",
  className = "",
  index: controlledIndex,
  onChangeIndex,
  loop = false,
}: GalleryProps) {
  const list = Array.isArray(items) ? items : [];
  const len = list.length;

  const isControlled = typeof controlledIndex === "number";
  const [rawIndex, setRawIndex] = useState(() =>
    clamp(initialIndex, 0, Math.max(0, len - 1))
  );

  const index = useMemo(() => {
    if (len === 0) return 0;
    const base = isControlled ? (controlledIndex as number) : rawIndex;
    return clamp(base, 0, len - 1);
  }, [len, isControlled, controlledIndex, rawIndex]);

  const canPrev = loop ? len > 1 : index > 0;
  const canNext = loop ? len > 1 : index < len - 1;

  function commitIndex(next: number) {
    if (len === 0) return;

    const safe = loop ? mod(next, len) : clamp(next, 0, len - 1);
    if (!isControlled) setRawIndex(safe);
    onChangeIndex?.(safe);
  }

  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<Dir | 0>(0);
  const [snapReset, setSnapReset] = useState(false);

  function startMove(d: Dir) {
    if (animating) return;
    if (d === -1 && !canPrev) return;
    if (d === 1 && !canNext) return;

    setDir(d);
    setAnimating(true);
  }

  const swipe = useGallerySwipe({
    enabled: len > 1,
    onPrev: () => startMove(-1),
    onNext: () => startMove(1),
  });

  if (len === 0) return null;

  const progress = swipe.dragging
    ? clamp(swipe.dragPct, -1, 1)
    : animating
    ? (dir * -1)
    : 0;

  function getItem(offset: Offset): GalleryItem | null {
    if (len === 0) return null;

    const target = index + offset;

    if (loop) {
      return list[mod(target, len)] ?? null;
    }

    if (target < 0 || target >= len) return null;
    return list[target] ?? null;
  }

  function onTrackTransitionEnd() {
    if (!animating) return;

    commitIndex(index + dir);

    setSnapReset(true);
    setAnimating(false);
    setDir(0);

    requestAnimationFrame(() => setSnapReset(false));
  }

  const offsets: Offset[] = [-2, -1, 0, 1, 2];

  return (
    <section className={["w-full", className].join(" ")}>
      <div
        className="relative w-full overflow-hidden select-none touch-pan-y"
        {...swipe.handlers}
      >
        <div
          className={[
            "flex items-start justify-center gap-4",
            !swipe.dragging && !snapReset
              ? "transition-transform duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1.06)]"
              : "",
          ].join(" ")}
          style={{ transform: `translateX(${progress * 100}%)` }}
          onTransitionEnd={onTrackTransitionEnd}
        >
          {offsets.map((off) => {
            const item = getItem(off);

            if (!item) {
              return (
                <div
                  key={`empty-${off}-${index}`}
                  className="shrink-0 w-[min(86vw,720px)] opacity-0"
                  aria-hidden="true"
                />
              );
            }

            return (
              <GallerySlide
                key={`${item.src}-${off}-${index}`}
                item={item}
                focused={off === 0}
                offset={off}
                progress={progress}
                aspectRatio={aspectRatio}
              />
            );
          })}
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
          <ArrowButton
            disabled={!canPrev || animating}
            onClick={() => startMove(-1)}
            ariaLabel="Imagem anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </ArrowButton>

          <ArrowButton
            disabled={!canNext || animating}
            onClick={() => startMove(1)}
            ariaLabel="Próxima imagem"
          >
            <ChevronRight className="h-5 w-5" />
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}