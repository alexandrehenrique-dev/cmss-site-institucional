import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";

type PropsOf<T extends ElementType> = ComponentPropsWithoutRef<T>;

type PolymorphicProps<
  T extends ElementType,
  OwnProps extends object = Record<string, never>,
> = OwnProps & {
  as?: T;
} & Omit<PropsOf<T>, keyof OwnProps | "as">;

type HeadingVariant = "h1" | "h2" | "h3";
type TextVariant = "body" | "muted" | "small";

type HeadingOwnProps = {
  variant?: HeadingVariant;
  className?: string;
  children?: ReactNode;
};

type TextOwnProps = {
  variant?: TextVariant;
  className?: string;
  children?: ReactNode;
  text?: string;
  preserveBreaks?: boolean;
};

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

export function Heading<T extends ElementType = "h2">(
  props: PolymorphicProps<T, HeadingOwnProps>
) {
  const {
    as,
    variant = "h2",
    className = "",
    children,
    ...rest
  } = props;

  const Component = (as ?? variant) as ElementType;

  return (
    <Component
      className={`${getHeadingClasses(variant)} break-words cursor-default ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

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

export function Text<T extends ElementType = "p">(
  props: PolymorphicProps<T, TextOwnProps>
) {
  const {
    as,
    variant = "body",
    className = "",
    children,
    text,
    preserveBreaks = true,
    ...rest
  } = props;

  const Component = (as ?? "p") as ElementType;
  const content = text ?? children;

  return (
    <Component
      className={[
        getTextClasses(variant),
        "break-words cursor-default",
        preserveBreaks ? "whitespace-pre-line" : "",
        className,
      ].join(" ")}
      {...rest}
    >
      {content}
    </Component>
  );
}