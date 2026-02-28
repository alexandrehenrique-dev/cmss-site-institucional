import { Heading } from "@/components/Typography";
import { resolveFooterTemplate } from "./footerTemplate";

export function FooterTradition({
  foundedYear,
  traditionText,
}: {
  foundedYear: number;
  traditionText: string;
}) {
  const safeFounded = Number.isFinite(foundedYear) ? foundedYear : 1951;
  const safeText = traditionText?.trim() ? traditionText : "{years} anos de tradição e cultura";

  const text = resolveFooterTemplate(safeText, safeFounded);

  return (
    <Heading
      variant="h3"
      className="text-[var(--paper-100)] text-2xl sm:text-3xl md:text-4xl"
    >
      {text}
    </Heading>
  );
}