import { ElementType, ReactNode } from "react";
import { Heading } from "@/components/Typography";
import { Container } from "@/components/Container";

type SectionProps<T extends ElementType> = {
  title?: string;
  as?: T;
  children: ReactNode;
  className?: string;
};

export function Section<T extends ElementType = "section">({
  title,
  as,
  children,
  className = "",
}: SectionProps<T>) {
  const Component = (as ?? "section") as ElementType;

  return (
    <Component className={`py-12 md:py-16 ${className}`}>
      <Container>
        <div className="flex flex-col gap-6">
          {title && (
            <Heading variant="h2">
              {title}
            </Heading>
          )}

          {children}
        </div>
      </Container>
    </Component>
  );
}