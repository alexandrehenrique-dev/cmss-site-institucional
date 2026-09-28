"use client";

import { useState } from "react";
import { CmsImage } from "@/components/CmsImage";
import { GalleryModal } from "@/components/gallery/GalleryModal";
import { Text } from "@/components/Typography";

export type ImageBlockProps = {
  image: { src: string; alt: string; width: number; height: number };
  caption?: string;
  text?: string;
  className?: string;
  enableModal?: boolean;
};

export function ImageBlock({ image, caption, text, className = "", enableModal = true }: ImageBlockProps) {
  const [open, setOpen] = useState(false);
  if (!image?.src || !image.alt || !image.width || !image.height) return null;
  return (
    <>
      <figure className={`flex flex-col gap-4 ${className}`}>
        {enableModal ? (
          <button type="button" onClick={() => setOpen(true)}
            className="image-trigger text-left rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={`Ampliar imagem: ${image.alt}`} aria-haspopup="dialog">
            <CmsImage {...image} />
          </button>
        ) : <CmsImage {...image} />}
        {(caption || text) && (
          <figcaption className="flex flex-col gap-2">
            {caption && <Text variant="small" className="italic opacity-80">{caption}</Text>}
            {text && <Text variant="muted">{text}</Text>}
          </figcaption>
        )}
      </figure>
      {open && <GalleryModal open item={{ ...image, ...(caption ? { caption } : {}), ...(text ? { description: text } : {}) }} onClose={() => setOpen(false)} />}
    </>
  );
}
