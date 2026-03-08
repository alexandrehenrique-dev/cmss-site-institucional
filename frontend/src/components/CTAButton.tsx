"use client";

import Link from "next/link";

export type CTAButtonVariant = "primary" | "secondary" | "ghost";

export type CTAButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: CTAButtonVariant;
  disabled?: boolean;
  ariaLabel?: string;
};

function getVariantClass(variant: CTAButtonVariant): string {
  switch (variant) {
    case "primary":
      return [
        "border-transparent",
        "bg-[var(--primary)] text-white",
        "hover:opacity-95",
        "hover:shadow-[var(--shadow-interactive)]",
      ].join(" ");

    case "secondary":
      return [
        "border-[var(--border)]",
        "bg-[var(--surface-2)] text-[var(--fg)]",
        "hover:bg-[var(--surface-3)]",
        "hover:shadow-[var(--shadow-interactive)]",
      ].join(" ");

    case "ghost":
      return [
        "border-transparent",
        "bg-transparent text-[var(--link)]",
        "hover:text-[var(--link-hover)]",
        "hover:bg-[var(--surface-2)]/40",
      ].join(" ");

    default:
      return [
        "border-transparent",
        "bg-[var(--primary)] text-white",
        "hover:opacity-95",
        "hover:shadow-[var(--shadow-interactive)]",
      ].join(" ");
  }
}

export function CTAButton({
  label,
  href,
  onClick,
  variant = "primary",
  disabled = false,
  ariaLabel,
}: CTAButtonProps) {
  const baseClass = [
    "inline-flex items-center justify-center gap-2",
    "rounded-md border px-4 py-2 text-sm font-medium",
    "transition-[transform,box-shadow,color,background-color,border-color,opacity] duration-[var(--motion-duration-base)] ease-[var(--motion-ease-standard)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
    "disabled:cursor-not-allowed disabled:opacity-50",
    disabled ? "" : "hover:scale-[var(--motion-scale-hover-sm)] active:scale-[var(--motion-scale-press)]",
  ].join(" ");

  const variantClass = getVariantClass(variant);

  const content = (
    <span className="whitespace-normal break-words text-center">{label}</span>
  );

  if (href) {
    if (disabled) {
      return (
        <span
          aria-disabled="true"
          className={`${baseClass} ${variantClass}`}
        >
          {content}
        </span>
      );
    }

    return (
      <Link
        href={href}
        aria-label={ariaLabel ?? label}
        className={`${baseClass} ${variantClass}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
      className={`${baseClass} ${variantClass}`}
    >
      {content}
    </button>
  );
}