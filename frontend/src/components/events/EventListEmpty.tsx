import { Text } from "@/components/Typography";

export function EventListEmpty({
  message,
}: {
  message: string;
}) {
  return (
    <div className="flex min-h-[250px] items-center justify-center border-t border-b border-[var(--gold-border)]">
      <Text variant="muted" className="text-center">
        {message}
      </Text>
    </div>
  );
}