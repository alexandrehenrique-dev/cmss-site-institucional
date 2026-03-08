import { Heading } from "@/components/Typography";
import { resolveFooterTemplateParts } from "./footerTemplate";

export function FooterTradition({
  foundedYear,
  traditionText,
}: {
  foundedYear: number;
  traditionText: string;
}) {
  const safeFounded = Number.isFinite(foundedYear) ? foundedYear : 1951;
  const safeText = traditionText?.trim()
    ? traditionText
    : "{years} anos de tradição e cultura";

  const { years, text } = resolveFooterTemplateParts(safeText, safeFounded);

  return (
    <Heading
      variant="h2"
      className="text-[var(--paper-100)] text-2xl sm:text-3xl md:text-4xl"
    >
      <span
        className={[
          "inline-block",
          "text-[var(--primary)]",
          "font-bold",
          "text-[1.15em]",
          "tracking-[0.02em]",
          "drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]",
          "[text-shadow:0_1px_0_rgba(255,255,255,0.08),0_0_10px_rgba(177,0,0,0.18)]",
        ].join(" ")}
      >
        {years}
      </span>
      <span className="ml-2">{text}</span>
    </Heading>
  );
}