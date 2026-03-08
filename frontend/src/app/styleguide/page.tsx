"use client";

import { Section } from "@/components/Section";
import { Heading, Text } from "@/components/Typography";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/gallery/Gallery";
import { EventCard } from "@/components/events/EventCard";
import { EventList } from "@/components/events/EventList";
import type { GalleryItem } from "@/types/content";
import { InstitutionalCards } from "@/components/institutional/InstitutionalCards";
import { SupportCards } from "@/components/support/SupportCards";

function makeItems(count: number): GalleryItem[] {
  return Array.from({ length: count }).map((_, i) => ({
    src: "/images/example.jpg",
    alt: `Foto ${i + 1}`,
    width: 1200,
    height: 800,
    caption: `Legenda ${i + 1}`,
    description: `Descrição opcional da imagem ${i + 1} (mock).`,
  }));
}

const institutionalItems = [
  {
    title: "Missão",
    text: "Promover cultura, formação musical e transformação social por meio da música, fortalecendo vínculos com a comunidade e preservando a tradição da instituição.",
  },
  {
    title: "Visão",
    text: "Ser reconhecida como referência regional em educação musical, impacto cultural e continuidade de legado artístico, inspirando novas gerações de músicos.",
  },
  {
    title: "Valores",
    values: [
      "Compromisso com a comunidade",
      "Disciplina",
      "Respeito",
      "Ética",
      "Tradição",
      "Excelência musical",
      "Inclusão",
      "Trabalho em equipe",
      "Responsabilidade cultural",
      "Formação humana",
      "Cooperação",
      "Pertencimento",
    ],
  },
];

const styleguideEvents = [
  {
    title: "Show ao Vivo — Belo Horizonte",
    date: "2026-03-15",
    location: "Belo Horizonte",
    description: "Apresentação especial com setlist completo do novo álbum.",
    image: {
      src: "/images/example.jpg",
      alt: "Cartaz do evento",
      width: 1200,
      height: 800,
    },
  },
  {
    title: "Festival Rock das Montanhas",
    date: "2026-03-22",
    location: "Ouro Preto",
    description: "Evento cultural com repertório especial da banda.",
  },
  {
    title: "Turnê Sudeste",
    date: "2026-03-30",
    location: "São Paulo",
  },
  {
    title: "Turnê Sudeste",
    date: "2026-04-30",
    location: "São Paulo",
  },
  {
    title: "Turnê Sudeste",
    date: "2026-05-30",
    location: "São Paulo",
  },
];

const supportItems = [
  {
    title: "Apoio Financeiro",
    icon: "financial" as const,
    text: "Contribua com o Pix Solidário e ajude a manter viva a formação musical, a manutenção dos instrumentos e as atividades culturais da instituição.",
    copyLabel: "Chave Pix",
    copyValue: "pix@cmss.org.br",
  },
  {
    title: "Apoio Institucional",
    icon: "institutional" as const,
    text: "Empresas e parceiros podem apoiar a instituição por meio de alianças culturais, patrocínios, ações conjuntas e fortalecimento de projetos de impacto social e artístico.",
  },
  {
    title: "Doação de Materiais e Instrumentos",
    icon: "materials" as const,
    text: "Aceitamos doações de instrumentos, acessórios, estantes, partituras e materiais que contribuam para o desenvolvimento das atividades musicais.",
  },
];

export default function StyleguidePage() {
  const items8 = makeItems(8);

  return (
    <main className="flex flex-col">
      <Hero
        content={{
          title: "Hero padrão",
          subtitle: "Validação visual do componente Hero.",
          image: {
            src: "/images/example.jpg",
            alt: "Exemplo",
            width: 1200,
            height: 1000,
          },
          overlay: { dim: 0.45 },
          cta: { label: "Apoie", href: "/apoie" },
        }}
      />

      <Section>
        <Heading variant="h1">Styleguide CMSS</Heading>
        <Text>
          Página para validar tipografia, componentes e comportamento responsivo.
        </Text>
      </Section>

      <Section title="Tipografia">
        <div className="flex flex-col gap-6">
          <Heading variant="h1">H1 — Cormorant Garamond</Heading>
          <Heading variant="h2">H2 — Seção</Heading>
          <Heading variant="h3">H3 — Subtítulo</Heading>

          <Text>Texto padrão — Montserrat.</Text>
          <Text variant="muted">Texto muted.</Text>
          <Text variant="small">Texto pequeno.</Text>
        </div>
      </Section>

      <Section title="Gallery">
        <Gallery items={items8} initialIndex={4} loop={false} aspectRatio="16/9" />
      </Section>

      <Section title="EventCard">
        <div className="flex flex-col gap-6 max-w-[720px]">
          <EventCard
            title="Show ao Vivo — Belo Horizonte"
            date="2026-03-15"
            location="Belo Horizonte"
          />

          <EventCard
            title="Festival Rock das Montanhas"
            date="2026-04-10"
            location="Ouro Preto"
            description="Apresentação especial com setlist completo do novo álbum."
          />

          <EventCard
            title="Turnê Sudeste"
            date="2026-05-02"
            location="São Paulo"
            description="Show especial da turnê Sudeste com convidados."
            image={{
              src: "/images/example.jpg",
              alt: "Cartaz do evento",
              width: 1200,
              height: 800,
            }}
          />
        </div>
      </Section>

      <Section title="EventList">
        <div className="flex flex-col gap-10">
          <EventList
            title="Eventos do mês"
            items={styleguideEvents}
            emptyMessage="Não existem eventos neste mês"
          />

          <EventList
            title="Lista vazia"
            items={[]}
            emptyMessage="Não existem eventos neste mês"
          />
        </div>
      </Section>
      <Section>
        <InstitutionalCards
          title="Quem Somos"
          items={institutionalItems}
        />
      </Section>
      <Section>
        <SupportCards
          title="Formas de Apoio"
          items={supportItems}
        />
      </Section>
    </main>
  );
}