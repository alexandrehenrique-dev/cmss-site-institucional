import { Hero } from "@/components/Hero";
import { EventList } from "@/components/events/EventList";
import { Section } from "@/components/Section";
import { getPageContent } from "@/services/contentService";
import type { HomePageContent } from "@/types/content";

export default function HomePage() {
  const content = getPageContent("home") as HomePageContent;

  return (
    <>
      <Hero content={content.hero} />

      <Section>
        <EventList
          title={content.events.title}
          items={content.events.items}
          emptyMessage="Não existem eventos neste mês"
        />
      </Section>

      <Hero content={content.secondaryHero} />
    </>
  );
}