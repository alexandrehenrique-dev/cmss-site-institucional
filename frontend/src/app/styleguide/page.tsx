"use client";

import { Section } from "@/components/Section";
import { Heading, Text } from "@/components/Typography";
import { CTAButton } from "@/components/CTAButton";
import { CmsImage } from "@/components/CmsImage";
import { TextBlock } from "@/components/TextBlock";
import { ImageBlock } from "@/components/ImageBlock";
import { Hero } from "@/components/Hero";

import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  HeartHandshake,
  Music,
} from "lucide-react";

export default function StyleguidePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col">
        {/* 1) padrão (dim só) */}
        <Hero
          content={{
            title: "Hero padrão (dim)",
            subtitle: "Sem gradiente, sem blur. Só escurece a imagem.",
            image: { src: "/images/example.jpg", alt: "Exemplo", width: 1200, height: 1000 },
            overlay: { dim: 0.45 },
            cta: { label: "Apoie", href: "/apoie" },
          }}
        />

        {/* 2) gradiente vermelho -> transparente */}
        <Hero
          content={{
            title: "Gradiente (primary → transparente)",
            subtitle: "Estilo protótipo: identidade forte, texto legível.",
            image: { src: "/images/example.jpg", alt: "Exemplo", width: 1200, height: 800 },
            overlay: {
              dim: 0.35,
              gradient: {
                type: "linear",
                direction: "to-r",
                from: "var(--primary)",
                via: "transparent",
                to: "transparent",
                fromOpacity: 0.75,
                viaOpacity: 0,
                toOpacity: 0,
              },
            },
            cta: { label: "Ver História", href: "/historia", variant: "secondary" },
          }}
        />

        {/* 3) gradiente + blur */}
        <Hero
          content={{
            title: "Gradiente + blur",
            subtitle: "Blur controlado por parâmetro, sem gambiarra.",
            image: { src: "/images/example.jpg", alt: "Exemplo", width: 1200, height: 800 },
            overlay: {
              dim: 0.25,
              blur: 6,
              gradient: {
                type: "linear",
                direction: "to-b",
                from: "var(--primary)",
                via: "transparent",
                to: "transparent",
                fromOpacity: 0.55,
                viaOpacity: 0,
                toOpacity: 0,
              },
            },
            cta: { label: "Agenda", href: "/agenda" },
          }}
        />
      </section>

      {/* TÍTULO PRINCIPAL */}
      <Section>
        <Heading variant="h1">Styleguide CMSS</Heading>
        <Text>
          Página para validar tipografia, cores, componentes e comportamento responsivo.
        </Text>
      </Section>

      {/* TIPOGRAFIA */}
      <Section title="Tipografia">
        <div className="flex flex-col gap-6">
          <Heading variant="h1">H1 — Playfair Display</Heading>
          <Heading variant="h2">H2 — Seção</Heading>
          <Heading variant="h3">H3 — Subtítulo</Heading>

          <Text>Texto padrão — Inter.</Text>
          <Text variant="muted">Texto muted.</Text>
          <Text variant="small">Texto pequeno (metadado).</Text>
        </div>
      </Section>

      {/* CORES / SUPERFÍCIES */}
      <Section title="Superfícies">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-md border bg-[var(--surface-1)]">
            <Text>surface-1</Text>
          </div>

          <div className="p-4 rounded-md border bg-[var(--surface-2)]">
            <Text>surface-2</Text>
          </div>

          <div className="p-4 rounded-md border bg-[var(--surface-3)]">
            <Text>surface-3</Text>
          </div>

          <div className="p-4 rounded-md border bg-[var(--bg)]">
            <Text>bg</Text>
          </div>
        </div>
      </Section>

      {/* BOTÕES */}
      <Section title="CTAButton">
        <div className="flex flex-col gap-4 max-w-sm">
          <CTAButton label="Primário (Link)" href="/quem-somos" />

          <CTAButton
            label="Primário (Ação)"
            onClick={() => console.log("Clique primário")}
          />

          <CTAButton
            label="Secundário"
            variant="secondary"
            href="/historia"
          />

          <CTAButton
            label="Ghost"
            variant="ghost"
            href="/agenda"
          />

          <CTAButton label="Disabled" disabled />

          <CTAButton
            label="Texto longo para testar quebra no mobile first sem estourar layout"
            variant="secondary"
            href="/apoie"
          />
        </div>
      </Section>

      {/* IMAGEM */}
      <Section title="Imagem responsiva">
        <Text>
          A imagem deve respeitar telas pequenas e manter proporção.
        </Text>

        <CmsImage
          src="/images/example.jpg"
          alt="Imagem de exemplo"
          width={1200}
          height={800}
        />
      </Section>

      {/* ÍCONES */}
      <Section title="Ícones (Lucide)">
        <div className="flex flex-wrap gap-6 items-center">
          <IconItem icon={<Mail size={20} />} label="Email" />
          <IconItem icon={<Phone size={20} />} label="Telefone" />
          <IconItem icon={<MapPin size={20} />} label="Endereço" />
          <IconItem icon={<Calendar size={20} />} label="Agenda" />
          <IconItem icon={<HeartHandshake size={20} />} label="Apoie" />
          <IconItem icon={<Music size={20} />} label="Música" />
        </div>
      </Section>

      {/* TextBlock */}
      <Section title="TextBlock">
        <div className="flex flex-col gap-8 max-w-prose">
          <TextBlock
            title="Bloco simples"
            text="Este é um TextBlock renderizando título e parágrafo usando Typography."
          />

          <TextBlock
            title="Bloco com lista"
            text="Agora com uma lista de itens:"
            items={[
              "Item 1: texto curto",
              "Item 2: texto maior para testar quebra de linha no mobile sem estourar nada",
              "Item 3: mais um item",
            ]}
          />

          <TextBlock
            text="Bloco sem título (somente texto)."
          />

          <TextBlock
            title="Somente lista"
            items={[
              "Bullet 1",
              "Bullet 2",
            ]}
          />

          <TextBlock
            title="Vazio não deve aparecer"
            items={[]}
          />
        </div>
      </Section>

      {/* ImageBlock */}
      <Section title="ImageBlock">
        <div className="flex flex-col gap-10 max-w-xl">

          <ImageBlock
            image={{
              src: "/images/example.jpg",
              alt: "Imagem de exemplo",
              width: 1200,
              height: 800,
            }}
          />

          <ImageBlock
            image={{
              src: "/images/example.jpg",
              alt: "Imagem com legenda",
              width: 1200,
              height: 800,
            }}
            caption="Legenda da imagem"
          />

          <ImageBlock
            image={{
              src: "/images/example.jpg",
              alt: "Imagem completa",
              width: 1200,
              height: 800,
            }}
            caption="Legenda estilizada"
            text="Texto complementar explicando o contexto da imagem."
          />

        </div>
      </Section>

    </main>
  );
}

function IconItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      {icon}
      <Text variant="small">{label}</Text>
    </span>
  );
}