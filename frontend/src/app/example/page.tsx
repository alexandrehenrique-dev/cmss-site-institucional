import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { getExampleContent } from "@/services/contentService";

export default function ExamplePage() {
  const content = getExampleContent();

  return (
    <>
      <Hero {...content.hero} />
      <Section {...content.section} />
    </>
  );
}