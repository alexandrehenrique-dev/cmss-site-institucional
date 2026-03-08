import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ContactSection } from "@/components/contact/ContactSection";
import { getPageContent } from "@/services/contentService";
import type { ContactSectionContent, HeroContent } from "@/types/content";

type ContactPageContent = {
  hero: HeroContent;
  contactSection: ContactSectionContent;
};

export default function ContatoPage() {
  const content = getPageContent("contato") as ContactPageContent;

  return (
    <>
      <Hero content={content.hero} />

      <Section>
        <ContactSection
          infoTitle={content.contactSection.infoTitle ? content.contactSection.infoTitle : ""}
          infoItems={content.contactSection.infoItems}
          formLabels={content.contactSection.formLabels}
        />
      </Section>
    </>
  );
}