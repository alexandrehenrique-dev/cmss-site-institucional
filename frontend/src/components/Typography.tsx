import { ElementType, ReactNode } from "react";

type HeadingVariant = "h1" | "h2" | "h3";
type TextVariant = "body" | "muted" | "small";

type BaseProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
};

type HeadingProps<T extends ElementType> = BaseProps<T> & {
  variant?: HeadingVariant;
};

type TextProps<T extends ElementType> = BaseProps<T> & {
  variant?: TextVariant;
};

/* ============================= */
/* Heading */
/* ============================= */

function getHeadingClasses(variant: HeadingVariant): string {
  switch (variant) {
    case "h1":
      return "font-heading text-4xl md:text-5xl leading-tight";
    case "h2":
      return "font-heading text-2xl md:text-3xl leading-snug";
    case "h3":
      return "font-heading text-xl md:text-2xl leading-snug";
    default:
      return "font-heading text-2xl leading-snug";
  }
}

export function Heading<T extends ElementType = "h2">({
  as,
  variant = "h2",
  className = "",
  children,
}: HeadingProps<T>) {
  const Component = (as ?? variant) as ElementType;

  return (
    <Component
      className={`${getHeadingClasses(variant)} break-words ${className}`}
    >
      {children}
    </Component>
  );
}

/* ============================= */
/* Text */
/* ============================= */

function getTextClasses(variant: TextVariant): string {
  switch (variant) {
    case "body":
      return "font-body text-base leading-relaxed";
    case "muted":
      return "font-body text-sm opacity-80 leading-relaxed";
    case "small":
      return "font-body text-xs leading-relaxed";
    default:
      return "font-body text-base leading-relaxed";
  }
}

export function Text<T extends ElementType = "p">({
  as,
  variant = "body",
  className = "",
  children,
}: TextProps<T>) {
  const Component = (as ?? "p") as ElementType;

  return (
    <Component
      className={`${getTextClasses(variant)} break-words ${className}`}
    >
      {children}
    </Component>
  );
}