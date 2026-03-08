"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/Skeleton";

type CmsImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function CmsImage({
  src,
  alt,
  width,
  height,
  className,
}: CmsImageProps) {
  const [loaded, setLoaded] = useState(false);

  const ratio =
    width > 0 && height > 0 ? `${width} / ${height}` : undefined;

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {!loaded ? (
        <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
      ) : null}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        className={[
          "h-auto w-full",
          "transition-[opacity,transform] duration-[var(--motion-duration-slow)] ease-[var(--motion-ease-soft)]",
          loaded ? "opacity-100" : "opacity-0",
          "group-hover:scale-[var(--image-hover-scale)]",
          className,
        ].join(" ")}
      />
    </div>
  );
}