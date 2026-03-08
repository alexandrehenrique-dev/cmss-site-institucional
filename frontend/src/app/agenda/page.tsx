import { Hero } from "@/components/Hero";
import { EventList } from "@/components/events/EventList";
import { Section } from "@/components/Section";
import { getPageContent } from "@/services/contentService";
import type { EventCardProps, HeroContent } from "@/types/content";

type AgendaPageContent = {
  hero: HeroContent;
  events: {
    title: string;
    items: EventCardProps[];
  };
};

export default function AgendaPage() {
  const content = getPageContent("agenda") as AgendaPageContent;

  return (
    <>
      <Hero content={content.hero} />

      <Section>
        <EventList
          title={content.events.title}
          items={content.events.items}
          emptyMessage="Não existem eventos cadastrados no momento"
        />
      </Section>
    </>
  );
}