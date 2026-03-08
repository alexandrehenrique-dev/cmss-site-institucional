import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Heading, Text } from "@/components/Typography";
import { ImageBlock } from "@/components/ImageBlock";
import { SplitMediaText } from "@/components/layout/SplitMediaText";
import { Gallery } from "@/components/gallery/Gallery";
import { getPageContent } from "@/services/contentService";
import type {
  GalleryItem,
  GalleryVariant,
  HeroContent,
  SplitMediaSection,
} from "@/types/content";

type HistoryPageContent = {
  hero: HeroContent;
  institution: SplitMediaSection;
  timeline: {
    title: string;
    variant?: GalleryVariant;
    loop?: boolean;
    items: GalleryItem[];
  };
};

export default function HistoriaPage() {
  const content = getPageContent("historia") as HistoryPageContent;

  return (
    <>
      <Hero content={content.hero} />

      <Section>
        <SplitMediaText align="start">
          <div className="flex flex-col gap-4">
            <Heading variant="h2">{content.institution.title}</Heading>
            <Text text={content.institution.text} />
          </div>

          <ImageBlock
            image={content.institution.image}
            enableModal={false}
          />
        </SplitMediaText>
      </Section>

      <Section title={content.timeline.title}>
        <Gallery
          items={content.timeline.items}
          initialIndex={0}
          loop={content.timeline.loop ?? false}
          variant={content.timeline.variant ?? "timeline"}
          aspectRatio="16/9"
        />
      </Section>
    </>
  );
}