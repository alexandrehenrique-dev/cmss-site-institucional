"use client";

import { Section } from "@/components/Section";
import { Heading, Text } from "@/components/Typography";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/gallery/Gallery";
import { EventCard } from "@/components/events/EventCard";
import { EventList } from "@/components/events/EventList";
import { InstitutionalCards } from "@/components/institutional/InstitutionalCards";
import { SupportCards } from "@/components/support/SupportCards";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactSection } from "@/components/contact/ContactSection";
import { CTAButton } from "@/components/CTAButton";
import { NavItem } from "@/components/navbar/NavItem";
import { NavLinks } from "@/components/navbar/NavLinks";
import type { GalleryItem } from "@/types/content";
import { SplitMediaText } from "@/components/layout/SplitMediaText";
import { ImageBlock } from "@/components/ImageBlock";

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

const contactInfoMock = [
  {
    label: "Endereço",
    value: "Rua Maestro Carlos Gomes, 123 - Centro",
    secondaryValue: "Macuco de Minas - MG",
    type: "address" as const,
  },
  {
    label: "Telefone",
    value: "(35) 99999-9999",
    type: "phone" as const,
  },
  {
    label: "Email",
    value: "contato@cmss.org.br",
    type: "email" as const,
  },
];

const contactFormMock = {
  title: "Envie sua mensagem",
  description:
    "Preencha o formulário abaixo para falar com a Corporação Musical São Sebastião.",
  nameLabel: "Nome",
  namePlaceholder: "Seu nome completo",
  emailLabel: "Email",
  emailPlaceholder: "voce@email.com",
  messageLabel: "Mensagem",
  messagePlaceholder: "Digite sua mensagem aqui...",
  ctaLabel: "Envio em breve",
  disabledNote: "O envio do formulário será habilitado em breve.",
};

const navLinksMock = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "História", href: "/historia" },
  { label: "Agenda", href: "/agenda" },
  { label: "Apoie", href: "/apoie" },
  { label: "Contato", href: "/contato" },
];

export default function StyleguidePage() {
  const items8 = makeItems(8);
  const items3 = makeItems(3);
  const items1 = makeItems(1);
  const items0: GalleryItem[] = [];

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

      <Section title="CTAButton">
        <div className="flex flex-col gap-4 max-w-sm">
          <CTAButton label="Primário (Link)" href="/quem-somos" />
          <CTAButton label="Primário (Ação)" onClick={() => console.log("primário")} />
          <CTAButton label="Secundário" variant="secondary" href="/historia" />
          <CTAButton label="Ghost" variant="ghost" href="/agenda" />
          <CTAButton label="Disabled" disabled />
          <CTAButton
            label="Texto longo para testar quebra sem estourar o layout"
            variant="secondary"
            href="/apoie"
          />
        </div>
      </Section>

      <Section title="NavItem / NavLinks">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-4">
            <NavItem href="/" label="Home" />
            <NavItem href="/quem-somos" label="Quem Somos" />
            <NavItem href="/agenda" label="Agenda" />
          </div>

          <div className="flex flex-col gap-4">
            <Text variant="muted">Horizontal</Text>
            <NavLinks links={navLinksMock} orientation="horizontal" />
          </div>

          <div className="flex flex-col gap-4">
            <Text variant="muted">Vertical</Text>
            <NavLinks links={navLinksMock} orientation="vertical" />
          </div>
        </div>
      </Section>

      <Section title="Gallery">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Heading variant="h3">8 itens — start no meio</Heading>
            <Gallery items={items8} initialIndex={4} loop={false} aspectRatio="16/9" />
          </div>

          <div className="flex flex-col gap-3">
            <Heading variant="h3">3 itens — loop</Heading>
            <Gallery items={items3} initialIndex={1} loop aspectRatio="4/3" />
          </div>

          <div className="flex flex-col gap-3">
            <Heading variant="h3">1 item</Heading>
            <Gallery items={items1} initialIndex={0} loop={false} aspectRatio="4/3" />
          </div>

          <div className="flex flex-col gap-3">
            <Heading variant="h3">0 itens</Heading>
            <Gallery items={items0} initialIndex={0} loop={false} aspectRatio="16/9" />
          </div>
        </div>
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

      <Section title="Missão, Visão e Valores">
        <InstitutionalCards items={institutionalItems} />
      </Section>

      <Section title="Formas de Apoio">
        <SupportCards items={supportItems} />
      </Section>

      <Section title="Contato">
        <ContactInfo items={contactInfoMock} />
      </Section>

      <Section title="ContactSection">
        <ContactSection
          infoTitle="Contato"
          infoItems={contactInfoMock}
          formLabels={contactFormMock}
        />
      </Section>

      <Section title="SplitMediaText">
        <div className="flex flex-col gap-12">
          <SplitMediaText>
            <ImageBlock
              image={{
                src: "/images/example.jpg",
                alt: "Imagem de exemplo",
                width: 1200,
                height: 800,
              }}
              caption="Imagem à esquerda"
              text="No desktop fica à esquerda; no mobile sobe para cima."
            />

            <div className="flex flex-col gap-4">
              <Heading variant="h2">Bloco texto + imagem</Heading>
              <Text>
                Este componente divide dois conteúdos em colunas no desktop e empilha em telas menores,
                respeitando a ordem em que os children são passados.
              </Text>
              <Text variant="muted">
                Ele serve para Hero secundário, seções institucionais, apoio, história e qualquer bloco editorial.
              </Text>
              <div className="pt-2">
                <CTAButton label="Saiba mais" href="/quem-somos" />
              </div>
            </div>
          </SplitMediaText>

          <SplitMediaText align="start">
            <div className="flex flex-col gap-4">
              <Heading variant="h2">Texto primeiro</Heading>
              <Text>
                Aqui o primeiro child é texto, então no desktop ele fica à esquerda
                e no mobile ele aparece em cima.
              </Text>
              <Text variant="muted">
                Isso deixa o componente totalmente reutilizável sem precisar criar versão invertida.
              </Text>
            </div>

            <ImageBlock
              image={{
                src: "/images/example.jpg",
                alt: "Imagem de apoio",
                width: 1200,
                height: 800,
              }}
              caption="Imagem à direita"
            />
          </SplitMediaText>
        </div>
      </Section>
    </main>
  );
}