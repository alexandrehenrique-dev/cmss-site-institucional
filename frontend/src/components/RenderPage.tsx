import { getPageContent } from '@/services/contentService';
import { CmsImage } from './CmsImage';

type Props = {
  page: string;
};

export function RenderPage({ page }: Props) {
  const content = getPageContent(page);

  return (
    <>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
      <CmsImage 
        src={content.hero.image.src}
        alt={content.hero.image.alt}
        width={content.hero.image.width}
        height={content.hero.image.height}
      />
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