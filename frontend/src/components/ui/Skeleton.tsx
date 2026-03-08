"use client";

export type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "animate-pulse rounded-md",
        "bg-[var(--surface-2)]",
        className,
      ].join(" ")}
    />
  );
}