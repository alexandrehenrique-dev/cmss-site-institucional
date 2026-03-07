import { Heading } from "@/components/Typography";

export function EventListHeader({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Heading as="h2" variant="h2">
        {title}
      </Heading>
    </div>
  );
}