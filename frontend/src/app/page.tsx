import { Ornament } from "@/components/Ornament";
import { Hero } from "@/components/Hero";
import { EventList } from "@/components/events/EventList";
import { Section } from "@/components/Section";
import { getPageContent, getPageMetadata } from "@/services/contentService";
import type { HomePageContent } from "@/types/content";

export const metadata = getPageMetadata("home");

export default function HomePage() {
  const content = getPageContent("home") as HomePageContent;

  return (
    <div className="home-page">
      <Hero content={content.hero} className="home-hero" />

      <Section className="home-events">
        <EventList
          title={content.events.title}
          items={content.events.items}
          emptyMessage="Não existem eventos neste mês"
        />
      </Section>

      <div className="home-about">
        <Ornament />
        <Hero content={content.secondaryHero} secondary />
      </div>
    </div>
  );
}