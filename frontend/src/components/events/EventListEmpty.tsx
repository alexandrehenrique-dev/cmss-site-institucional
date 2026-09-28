import { Text } from "@/components/Typography";

export function EventListEmpty({
  message,
}: {
  message: string;
}) {
  return (
    <div className="event-empty flex min-h-[140px] items-center justify-center border-t border-b border-[var(--gold-border)]">
      <Text variant="muted" className="text-center">
        {message}
      </Text>
    </div>
  );
}