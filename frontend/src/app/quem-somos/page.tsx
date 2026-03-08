import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Heading, Text } from "@/components/Typography";
import { ImageBlock } from "@/components/ImageBlock";
import { SplitMediaText } from "@/components/layout/SplitMediaText";
import { InstitutionalCards } from "@/components/institutional/InstitutionalCards";
import { Gallery } from "@/components/gallery/Gallery";
import { getPageContent } from "@/services/contentService";
import type {
  GalleryItem,
  HeroContent,
  InstitutionalCardsContent,
  SplitMediaSection,
} from "@/types/content";

type AboutPageContent = {
  hero: HeroContent;
  institution: SplitMediaSection;
  institutionalCards: InstitutionalCardsContent;
  culturalWork: SplitMediaSection;
  gallery: {
    title: string;
    items: GalleryItem[];
  };
  forceGoldTitle: boolean;
};

export default function QuemSomosPage() {
  const content = getPageContent("quem-somos") as AboutPageContent;

  return (
    <>
      <Hero content={content.hero} />

      <Section>
        <SplitMediaText align="center">
          <div className="flex flex-col gap-4">
            <Heading variant="h2">{content.institution.title}</Heading>
            <Text text={content.institution.text}/>
          </div>

          <ImageBlock
            image={content.institution.image}
            enableModal={false}
          />
        </SplitMediaText>
      </Section>

      <Section title={content.institutionalCards.title ? content.institutionalCards.title : ""}>
        <InstitutionalCards items={content.institutionalCards.items} />
      </Section>

      <Section>
        <SplitMediaText align="center">
          <ImageBlock
            image={content.culturalWork.image}
            enableModal={false}
          />

          <div className="flex flex-col gap-4">
            <Heading variant="h2">{content.culturalWork.title}</Heading>
            <Text text={content.culturalWork.text}/>
          </div>
        </SplitMediaText>
      </Section>

      <Section title={content.gallery.title}>
        <Gallery
          items={content.gallery.items}
          initialIndex={0}
          loop={true}
          aspectRatio="16/9"
        />
      </Section>
    </>
  );
}