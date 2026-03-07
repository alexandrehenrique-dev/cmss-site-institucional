import { Heading, Text } from "@/components/Typography";

export function EventDateColumn({
  day,
  month,
}: {
  day: string;
  month: string;
}) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-[60px] shrink-0">
      <Heading
        as="div"
        variant="h3"
        className="leading-none text-[var(--gold-base)]"
      >
        {day}
      </Heading>

      <Text
        variant="small"
        className="uppercase tracking-wide text-[var(--gold-base)] opacity-90"
      >
        {month}
      </Text>
    </div>
  );
}