"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryItem } from "@/types/content";

// Render outside the carousel so its transforms and clipping never affect the viewer.
export function GalleryModal({ open, item, onClose }: {
  open: boolean;
  item: GalleryItem | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open || !item) return;
    const dialog = ref.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open, item]);

  if (!open || !item) return null;

  return createPortal(
    <dialog ref={ref} className="image-viewer" aria-labelledby={titleId}
      onCancel={onClose} onClose={() => { if (!ref.current?.open) onClose(); }}
      onClick={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        if (event.clientX < box.left || event.clientX > box.right ||
            event.clientY < box.top || event.clientY > box.bottom) onClose();
      }}>
      <div className="image-viewer-heading">
        <p id={titleId}>{item.caption || item.alt}</p>
        <button type="button" onClick={onClose} aria-label="Fechar imagem" autoFocus>
          <X size={20} />
        </button>
      </div>
      <div className="image-viewer-media">
        <Image src={item.src} alt={item.alt} width={item.width} height={item.height}
          sizes="(max-width: 1100px) 94vw, 1040px" />
      </div>
      {item.description && <p className="image-viewer-description">{item.description}</p>}
    </dialog>, document.body
  );
}
