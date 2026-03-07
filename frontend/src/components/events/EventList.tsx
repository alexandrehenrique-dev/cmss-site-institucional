"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowButton } from "@/components/ArrowButton";
import { EventCard } from "@/components/events/EventCard";
import { EventListEmpty } from "@/components/events/EventListEmpty";
import { EventListHeader } from "@/components/events/EventListHeader";
import type { EventCardProps } from "@/types/content";

export type EventListProps = {
  title: string;
  items: EventCardProps[];
  emptyMessage?: string;
  className?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function EventList({
  title,
  items,
  emptyMessage = "Não existem eventos neste mês",
  className = "",
}: EventListProps) {
  const list = Array.isArray(items) ? items : [];
  const hasItems = list.length > 0;

  const [rawIndex, setRawIndex] = useState(0);

  const activeIndex = useMemo(() => {
    if (!hasItems) return 0;
    return clamp(rawIndex, 0, list.length - 1);
  }, [rawIndex, hasItems, list.length]);

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < list.length - 1;

  function goPrev() {
    if (!canPrev) return;
    setRawIndex((prev) => prev - 1);
  }

  function goNext() {
    if (!canNext) return;
    setRawIndex((prev) => prev + 1);
  }

  return (
    <div className={["flex flex-col gap-6", className].join(" ")}>
      <EventListHeader title={title} />

      {!hasItems ? (
        <EventListEmpty message={emptyMessage} />
      ) : (
        <div
          className="relative overflow-hidden"
          style={
            {
              "--event-card-w": "min(100%, 450px)",
              "--event-gap": "28px",
              "--event-side-space": "calc((100% - var(--event-card-w)) / 2)",
            } as React.CSSProperties
          }
        >
          <div
            className="flex items-stretch transition-transform duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)]"
            style={{
              gap: "var(--event-gap)",
              paddingLeft: "var(--event-side-space)",
              paddingRight: "var(--event-side-space)",
              transform: `translateX(calc(-1 * ${activeIndex} * (var(--event-card-w) + var(--event-gap))))`,
            }}
          >
            {list.map((event, index) => {
              const distance = Math.abs(index - activeIndex);
              const isActive = distance === 0;
              const isNear = distance === 1;

              const visual = isActive
                ? [
                    "scale-100 opacity-100 blur-0",
                    "shadow-[0_20px_50px_rgba(0,0,0,0.18)]",
                  ].join(" ")
                : isNear
                ? [
                    "scale-[0.94] opacity-80 blur-[1px]",
                    "shadow-[0_10px_24px_rgba(0,0,0,0.10)]",
                  ].join(" ")
                : [
                    "scale-[0.88] opacity-45 blur-[2px]",
                    "shadow-none",
                  ].join(" ");

              return (
                <div
                  key={`${event.title}-${event.date ?? "no-date"}-${index}`}
                  className="shrink-0 w-[var(--event-card-w)]"
                  aria-hidden={distance > 2}
                >
                  <div
                    className={[
                      "transition-[transform,opacity,filter,box-shadow] duration-500 [transition-timing-function:cubic-bezier(.16,1,.3,1)]",
                      "origin-center",
                      visual,
                    ].join(" ")}
                  >
                    <EventCard {...event} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
            <ArrowButton
              disabled={!canPrev}
              onClick={goPrev}
              ariaLabel="Eventos anteriores"
              className="pointer-events-auto z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </ArrowButton>

            <ArrowButton
              disabled={!canNext}
              onClick={goNext}
              ariaLabel="Próximos eventos"
              className="pointer-events-auto z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </ArrowButton>
          </div>
        </div>
      )}
    </div>
  );
}