import { Container } from "@/components/Container";
import { Text } from "@/components/Typography";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { FooterTradition } from "./FooterTradition";
import type { FooterContent } from "@/types/content";

export function Footer({ content }: { content: FooterContent }) {
  if (!content?.foundedYear || !content?.traditionText || !content?.copyrightText) {
    return null;
  }

  return (
    <footer
      className={[
        "w-full mt-auto",
        "bg-[var(--bg-footer)] text-[var(--paper-200)]",
        "border-t border-[color-mix(in_srgb,var(--accent)_30%,transparent)]",
      ].join(" ")}
    >
      <Container>
        <div className="py-10 flex flex-col items-center text-center gap-6">
          <FooterTradition foundedYear={content.foundedYear} traditionText={content.traditionText} />
          {Array.isArray(content.socialLinks) && content.socialLinks.length > 0 ? (
            <FooterSocialLinks links={content.socialLinks} />
          ) : null}
          <Text variant="small" className="text-[var(--paper-300)] text-sm sm:text-base">
            {content.copyrightText}
          </Text>
        </div>
      </Container>
    </footer>
  );
}