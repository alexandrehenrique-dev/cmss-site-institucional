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
      return "border-transparent text-white bg-[var(--primary)] hover:opacity-90";
    case "secondary":
      return "border-[var(--border)] text-[var(--fg)] bg-[var(--surface-2)] hover:bg-[var(--surface-3)]";
    case "ghost":
      return "border-transparent text-[var(--link)] bg-transparent hover:underline";
    default:
      return "border-transparent text-white bg-[var(--primary)] hover:opacity-90";
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
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] " +
    "disabled:opacity-50 disabled:cursor-not-allowed " +
    "border";

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