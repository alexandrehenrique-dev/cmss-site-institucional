"use client";

import { useRef, useState } from "react";

export function useGallerySwipe({
  enabled,
  onPrev,
  onNext,
}: {
  enabled: boolean;
  onPrev: () => void;
  onNext: () => void;
}) {
  const pointerIdRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const activeRef = useRef(false);

  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragPct, setDragPct] = useState(0);

  function reset() {
    pointerIdRef.current = null;
    activeRef.current = false;
    setDragging(false);
    setDragX(0);
    setDragPct(0);
  }

  function onPointerDown(e: React.PointerEvent) {
    if (!enabled) return;

    pointerIdRef.current = e.pointerId;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    activeRef.current = false;

    setDragX(0);
    setDragPct(0);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!enabled) return;
    if (pointerIdRef.current !== e.pointerId) return;

    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;

    if (Math.abs(dy) > Math.abs(dx)) return;

    const activateAt = 8;
    if (!activeRef.current && Math.abs(dx) < activateAt) return;

    if (!activeRef.current) {
      activeRef.current = true;
      setDragging(true);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }

    const w = Math.max(1, (e.currentTarget as HTMLElement).clientWidth || 360);
    setDragX(dx);
    setDragPct(dx / w);
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!enabled) return;
    if (pointerIdRef.current !== e.pointerId) return;

    const dx = e.clientX - startXRef.current;

    if (!activeRef.current) {
      reset();
      return;
    }

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    const w = Math.max(1, (e.currentTarget as HTMLElement).clientWidth || 360);
    const threshold = Math.max(50, Math.min(120, w * 0.18));

    reset();

    if (dx > threshold) onPrev();
    else if (dx < -threshold) onNext();
  }

  return {
    dragging,
    dragX,
    dragPct,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
  };
}