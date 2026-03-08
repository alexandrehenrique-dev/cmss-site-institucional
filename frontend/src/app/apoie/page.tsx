import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Heading, Text } from "@/components/Typography";
import { ImageBlock } from "@/components/ImageBlock";
import { SplitMediaText } from "@/components/layout/SplitMediaText";
import { SupportCards } from "@/components/support/SupportCards";
import { getPageContent } from "@/services/contentService";
import type {
  HeroContent,
  SplitMediaSection,
  SupportCardsContent,
} from "@/types/content";

type SupportPageContent = {
  hero: HeroContent;
  whySupport: SplitMediaSection;
  supportCards: SupportCardsContent;
};

export default function ApoiePage() {
  const content = getPageContent("apoie") as SupportPageContent;

  return (
    <>
      <Hero content={content.hero} />

      <Section>
        <SplitMediaText align="center">
          <div className="flex flex-col gap-4">
            <Heading variant="h2">{content.whySupport.title}</Heading>
            <Text text={content.whySupport.text} />
          </div>

          <ImageBlock
            image={content.whySupport.image}
            enableModal={false}
          />
        </SplitMediaText>
      </Section>

      <Section title={content.supportCards.title ? content.supportCards.title : ""}>
        <SupportCards items={content.supportCards.items} />
      </Section>
    </>
  );
}