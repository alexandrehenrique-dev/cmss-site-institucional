import { EventCard } from "@/components/events/EventCard";
import { EventListEmpty } from "@/components/events/EventListEmpty";
import { EventListHeader } from "@/components/events/EventListHeader";
import type { EventCardProps } from "@/types/content";

export type EventListProps = {
  title: string;
  items: EventCardProps[];
  emptyMessage?: string;
  className?: string;
};

export function EventList({ title, items, emptyMessage = "Não existem eventos neste mês", className = "" }: EventListProps) {
  const list = Array.isArray(items) ? items : [];
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <EventListHeader title={title} />
      {list.length ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {list.map((event, index) => <EventCard key={`${event.title}-${event.date}-${index}`} {...event} />)}
        </div>
      ) : <EventListEmpty message={emptyMessage} />}
    </div>
  );
}
