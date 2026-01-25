import { getPageContent } from '@/services/contentService';

type Props = {
  page: string;
};

export function RenderPage({ page }: Props) {
  const content = getPageContent(page);

  return (
    <>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
      <img src={content.hero.image} alt="" />

      {content.sections?.map((section, index) => (
        <section key={index}>
          <h1>{section.title}</h1>

          {section.text && <p>{section.text}</p>}

          {section.items && (
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}