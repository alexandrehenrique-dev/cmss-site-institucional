import Link from "next/link";
import type { MouseEventHandler } from "react";

export type NavItemProps = {
  href: string;
  label: string;
  onNavigate?: () => void;
  className?: string;
};

export function NavItem({ href, label, onNavigate, className = "" }: NavItemProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> | undefined = onNavigate
    ? () => onNavigate()
    : undefined;

  return (
    <Link
      href={href}
      {...(handleClick ? { onClick: handleClick } : {})}
      className={[
        "inline-flex items-center rounded-md px-2 py-2 text-sm",
        "text-[var(--accent)]",
        "hover:underline hover:underline-offset-4",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        "hover:[text-shadow:0_0_14px_rgba(211,175,55,0.55)]",
        className,
      ].join(" ")}
    >
      {label}
    </Link>
  );
}