import Link from "next/link";
import type { MouseEventHandler } from "react";

export type NavItemProps = {
  href: string;
  label: string;
  onNavigate?: () => void;
  className?: string;
};

export function NavItem({
  href,
  label,
  onNavigate,
  className = "",
}: NavItemProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> | undefined = onNavigate
    ? () => onNavigate()
    : undefined;

  return (
    <Link
      href={href}
      {...(handleClick ? { onClick: handleClick } : {})}
      className={[
        "inline-flex items-center rounded-md px-2 py-2 text-sm",
        "institutional-card-title",
        "transition-[transform,color,text-shadow,opacity,background-color] duration-[var(--motion-duration-base)] ease-[var(--motion-ease-standard)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        "hover:scale-[var(--motion-scale-hover-sm)]",
        "hover:underline hover:underline-offset-4",
        "hover:[text-shadow:0_0_14px_rgba(211,175,55,0.42)]",
        "active:scale-[var(--motion-scale-press)]",
        className,
      ].join(" ")}
    >
      {label}
    </Link>
  );
}