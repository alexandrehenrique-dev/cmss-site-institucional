import { Heading, Text } from "@/components/Typography";

export type TextBlockProps = {
  /** Título do bloco (renderiza H3 por padrão pra não competir com títulos de seção) */
  title?: string;
  /** Texto principal */
  text?: string;
  /** Lista de itens (bullets) */
  items?: string[];
  className?: string;
};

export function TextBlock({ title, text, items, className = "" }: TextBlockProps) {
  const hasItems = Array.isArray(items) && items.length > 0;

  // Se vier tudo vazio, não renderiza nada (evita "seção fantasma")
  if (!title && !text && !hasItems) return null;

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {title && <Heading variant="h3">{title}</Heading>}

      {text && <Text>{text}</Text>}

      {hasItems && (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          {items.map((item, i) => (
            <li key={`${i}-${item}`} className="break-words">
              <Text as="span">{item}</Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}