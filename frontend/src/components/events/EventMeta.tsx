import { MapPin } from "lucide-react";
import { Heading, Text } from "@/components/Typography";

export function EventMeta({
  title,
  date,
  location,
  onOpen,
  showCTA,
}: {
  title: string;
  date?: string;
  location?: string;
  showCTA?: boolean;
  onOpen?: () => void;
}) {
  return (
    <div className="relative z-10 flex h-full min-w-0 flex-1 flex-col justify-between">
      <div className="flex flex-col gap-1 min-w-0">
        <Heading
          as="div"
          variant="h3"
          className="leading-tight break-words text-[var(--fg)]"
        >
          {title}
        </Heading>

        {date ? (
          <Text variant="muted" className="text-sm text-[var(--fg)]">
            {date}
          </Text>
        ) : null}

        {location ? (
          <div className="flex items-center gap-1 opacity-85 text-[var(--fg)]">
            <MapPin className="w-4 h-4 shrink-0" />
            <Text variant="muted">{location}</Text>
          </div>
        ) : null}
      </div>

      <div className="pt-3">
        {showCTA && onOpen ? (
          <button
            type="button"
            onClick={onOpen}
            className="self-start text-sm text-[var(--gold-base)] hover:text-[var(--gold-light)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold-base)] rounded-sm"
          >
            Saiba mais
          </button>
        ) : null}
      </div>
    </div>
  );
}