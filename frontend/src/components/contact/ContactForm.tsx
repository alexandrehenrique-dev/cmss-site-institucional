"use client";

import { useMemo, useState } from "react";
import { CTAButton } from "@/components/CTAButton";
import { Heading, Text } from "@/components/Typography";
import { ContactFormField } from "./ContactFormField";

export type ContactFormLabels = {
  title?: string;
  description?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  ctaLabel?: string;
  disabledNote?: string;
};

export type ContactFormProps = {
  labels?: ContactFormLabels | undefined;
  className?: string;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm({
  labels,
  className = "",
}: ContactFormProps) {
  const content = {
    title: labels?.title?.trim() || "Envie sua mensagem",
    description:
      labels?.description?.trim() ||
      "Preencha os campos abaixo para entrar em contato com a instituição.",
    nameLabel: labels?.nameLabel?.trim() || "Nome",
    namePlaceholder: labels?.namePlaceholder?.trim() || "Seu nome completo",
    emailLabel: labels?.emailLabel?.trim() || "Email",
    emailPlaceholder: labels?.emailPlaceholder?.trim() || "voce@email.com",
    messageLabel: labels?.messageLabel?.trim() || "Mensagem",
    messagePlaceholder:
      labels?.messagePlaceholder?.trim() ||
      "Escreva sua mensagem aqui...",
    ctaLabel: labels?.ctaLabel?.trim() || "Envio em breve",
    disabledNote:
      labels?.disabledNote?.trim() ||
      "O envio do formulário será habilitado em uma próxima versão.",
  };

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const errors = useMemo(() => {
    return {
      name:
        form.name.trim().length === 0
          ? "Informe seu nome."
          : "",
      email:
        form.email.trim().length === 0
          ? "Informe seu email."
          : !validateEmail(form.email)
          ? "Informe um email válido."
          : "",
      message:
        form.message.trim().length === 0
          ? "Escreva uma mensagem."
          : "",
    };
  }, [form]);

  return (
    <section
      aria-label={content.title}
      className={["flex flex-col gap-6", className].join(" ")}
    >
      <div className="flex flex-col gap-2">
        <Heading as="h2" variant="h2" className="institutional-card-title">
          {content.title}
        </Heading>

        <Text variant="muted" className="m-0">
          {content.description}
        </Text>
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <ContactFormField
          id="contact-name"
          label={content.nameLabel}
          placeholder={content.namePlaceholder}
          value={form.name}
          error={errors.name ? errors.message : ""}
          required
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
        />

        <ContactFormField
          id="contact-email"
          type="email"
          label={content.emailLabel}
          placeholder={content.emailPlaceholder}
          value={form.email}
          error={errors.email ? errors.message : ""}
          required
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
        />

        <ContactFormField
          id="contact-message"
          multiline
          label={content.messageLabel}
          placeholder={content.messagePlaceholder}
          value={form.message}
          error={errors.message ? errors.message : ""}
          required
          onChange={(value) => setForm((prev) => ({ ...prev, message: value }))}
        />

        <div className="flex flex-col gap-2">
          <CTAButton
            label={content.ctaLabel}
            disabled
            variant="primary"
          />
          <Text variant="small" className="m-0 opacity-75">
            {content.disabledNote}
          </Text>
        </div>
      </form>
    </section>
  );
}