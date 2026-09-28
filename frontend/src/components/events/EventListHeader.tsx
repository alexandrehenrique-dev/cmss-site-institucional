import { Heading } from "@/components/Typography";

export function EventListHeader({
  title,
}: {
  title: string;
}) {
  return (
    <div className="event-heading flex items-center justify-between gap-4">
      <Heading as="h2" variant="h2">
        {title}
      </Heading>
      <span className="engraved-rule" aria-hidden="true" />
    </div>
  );
}