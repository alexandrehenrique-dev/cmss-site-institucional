"use client";

import { CmsImage } from "@/components/CmsImage";
import { ImageBlock } from "@/components/ImageBlock";
import { Text } from "@/components/Typography";
import type { GalleryItem } from "@/types/content";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function GallerySlide({
  item,
  focused,
  offset,
  progress,
  aspectRatio,
  className = "",
}: {
  item: GalleryItem;
  focused: boolean;
  offset: -2 | -1 | 0 | 1 | 2;
  progress: number; // -1..1 (arrasto/animação)
  aspectRatio: string;
  className?: string;
}) {
  const distance = Math.abs(offset);

  const visibleState =
    distance === 0
      ? "opacity-100 blur-0 scale-100"
      : distance === 1
      ? "opacity-75 blur-[2px] scale-[0.95]"
      : "opacity-35 blur-[3px] scale-[0.92]";

  // Parallax/perspective leve:
  // pos = offset + progress (quando arrasta, tudo “escorrega” junto)
  const pos = offset + progress;
  const rotateY = clamp(pos * -7, -12, 12); // graus
  const translateX = clamp(pos * 10, -22, 22); // px (parallax leve)
  const translateZ = distance === 0 ? 0 : -18 * distance; // empurra laterais pra trás

  const style: React.CSSProperties = {
    transform: `perspective(900px) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
    transformStyle: "preserve-3d",
    willChange: "transform",
  };

  return (
    <div
      className={[
        "shrink-0 w-[min(86vw,720px)]",
        "transition-[opacity,filter,transform] duration-300",
        visibleState,
        className,
      ].join(" ")}
      style={style}
      aria-hidden={!focused}
    >
      <div
        className="w-full overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--border)_70%,transparent)]"
        style={{ aspectRatio }}
      >
        {focused ? (
          <ImageBlock
            image={{ src: item.src, alt: item.alt, width: item.width, height: item.height }}
            enableModal
            className="h-full"
            {...(item.caption ? { caption: item.caption } : {})}
            {...(item.description ? { text: item.description } : {})}
          />
        ) : (
          <div className="pointer-events-none">
            <CmsImage
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {(item.caption || item.description) ? (
        <div className="mt-3 flex flex-col gap-1">
          {item.caption ? (
            <Text variant="small" className="italic opacity-90">
              {item.caption}
            </Text>
          ) : null}
          {item.description ? (
            <Text variant="muted" className="opacity-85">
              {item.description}
            </Text>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}