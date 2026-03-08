"use client";

import { ContactForm, ContactFormLabels } from "./ContactForm";
import { ContactInfo, ContactInfoProps } from "./ContactInfo";

export type ContactSectionProps = {
  infoTitle?: string;
  infoItems: ContactInfoProps["items"];
  formLabels?: ContactFormLabels | undefined;
  className?: string;
};

export function ContactSection({
  infoItems,
  formLabels,
  className = "",
}: ContactSectionProps) {
  return (
    <section
      aria-label="Seção de contato"
      className={[
        "grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start",
        className,
      ].join(" ")}
    >
      <ContactInfo
        items={infoItems}
      />

      <ContactForm labels={formLabels} />
    </section>
  );
}