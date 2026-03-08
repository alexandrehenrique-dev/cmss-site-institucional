"use client";

import { Children, type ReactNode } from "react";

export type SplitMediaTextProps = {
  children: ReactNode;
  className?: string;
  gapClassName?: string;
  leftClassName?: string;
  rightClassName?: string;
  align?: "start" | "center";
};

export function SplitMediaText({
  children,
  className = "",
  gapClassName = "gap-8 lg:gap-12",
  leftClassName = "",
  rightClassName = "",
  align = "center",
}: SplitMediaTextProps) {
  const items = Children.toArray(children);

  if (items.length < 2) return null;

  const [first, second] = items;
  const alignClass = align === "start" ? "lg:items-start" : "lg:items-center";

  return (
    <section
      className={[
        "grid grid-cols-1",
        "lg:grid-cols-2",
        gapClassName,
        alignClass,
        className,
      ].join(" ")}
    >
      <div className={["min-w-0", leftClassName].join(" ")}>
        {first}
      </div>

      <div className={["min-w-0", rightClassName].join(" ")}>
        {second}
      </div>
    </section>
  );
}