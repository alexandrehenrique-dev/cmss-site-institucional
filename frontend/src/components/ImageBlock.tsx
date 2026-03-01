"use client";

import { useEffect, useId, useRef } from "react";
import { CmsImage } from "@/components/CmsImage";
import { Text } from "@/components/Typography";
import { X } from "lucide-react";

export type ImageBlockProps = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  caption?: string;
  text?: string;
  className?: string;
  enableModal?: boolean;
};

export function ImageBlock({
  image,
  caption,
  text,
  className = "",
  enableModal = true,
}: ImageBlockProps) {
  const isValid = Boolean(image?.src && image?.alt && image?.width && image?.height);

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const dialogId = useId();

  useEffect(() => {
    if (!enableModal) return;

    const el = dialogRef.current;
    if (!el) return;

    // só pra garantir que fechou via ESC/backdrop não deixe nada pendurado
    const onClose = () => {};
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, [enableModal]);

  if (!isValid) return null;

  function openModal() {
    if (!enableModal) return;
    const el = dialogRef.current;
    if (!el) return;

    if (typeof el.showModal === "function") el.showModal();
  }

  function closeModal() {
    const el = dialogRef.current;
    if (!el) return;

    if (typeof el.close === "function") el.close();
  }

  function onDialogClick(e: React.MouseEvent<HTMLDialogElement>) {
    const el = dialogRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const clickedInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!clickedInDialog) closeModal();
  }

  return (
    <>
      <figure className={`flex flex-col gap-4 ${className}`}>
        {enableModal ? (
          <button
            type="button"
            onClick={openModal}
            className="text-left rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-haspopup="dialog"
            aria-controls={dialogId}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <CmsImage src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </button>
        ) : (
          <CmsImage src={image.src} alt={image.alt} width={image.width} height={image.height} />
        )}

        {(caption || text) && (
          <figcaption className="flex flex-col gap-2">
            {caption && (
              <Text variant="small" className="italic opacity-80">
                {caption}
              </Text>
            )}
            {text && <Text variant="muted">{text}</Text>}
          </figcaption>
        )}
      </figure>

      {enableModal && (
        <dialog
          id={dialogId}
          ref={dialogRef}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={onDialogClick}
          className="fixed inset-0 m-auto w-[min(92vw,900px)] rounded-lg p-0 border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]"
          aria-label="Visualização de imagem"
        >
          <div className="flex items-center justify-between gap-3 p-3 border-b border-[var(--border)]">
            <Text variant="small" className="opacity-80">
              {caption ?? image.alt}
            </Text>

            <button
              type="button"
              onClick={closeModal}
              className="rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3">
            <CmsImage src={image.src} alt={image.alt} width={image.width} height={image.height} />
            {text && (
              <div className="mt-3">
                <Text variant="muted">{text}</Text>
              </div>
            )}
          </div>
        </dialog>
      )}
    </>
  );
}