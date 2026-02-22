"use client";

import { CmsImage } from "@/components/CmsImage";
import { Mail, Phone, MapPin, Calendar, HeartHandshake, Music } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Heading, Text } from "@/components/Typography";

export default function StyleguidePage() {
  return (
    <main>
      <h1>Styleguide CMSS</h1>
      <p>Esta página existe para testar tipografia, cores, superfícies e elementos básicos.</p>

      <section>
        <h2>Tipografia</h2>
        <p style={{ fontSize: 'var(--text-xs)' }}>Texto XS (var(--text-xs))</p>
        <p style={{ fontSize: 'var(--text-sm)' }}>Texto SM (var(--text-sm))</p>
        <p style={{ fontSize: 'var(--text-md)' }}>Texto MD (var(--text-md))</p>
        <p style={{ fontSize: 'var(--text-lg)' }}>Texto LG (var(--text-lg))</p>
        <p style={{ fontSize: 'var(--text-xl)' }}>Texto XL (var(--text-xl))</p>
        <p style={{ fontSize: 'var(--text-2xl)' }}>Texto 2XL (var(--text-2xl))</p>
        <p style={{ fontSize: 'var(--text-3xl)' }}>Texto 3XL (var(--text-3xl))</p>
      </section>

      <section>
        <h2>Cores</h2>

        <p><strong>BG:</strong> var(--bg) | <strong>FG:</strong> var(--fg)</p>
        <p><strong>Primary:</strong> var(--primary) | <strong>Accent:</strong> var(--accent)</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          <div style={{ padding: 12, background: 'var(--surface-1)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            surface-1
          </div>
          <div style={{ padding: 12, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            surface-2
          </div>
          <div style={{ padding: 12, background: 'var(--surface-3)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            surface-3
          </div>
          <div style={{ padding: 12, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            bg
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <a href="#">Link de exemplo</a>
        </div>

        <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button style={{ padding: '10px 12px', background: 'var(--primary)', color: 'white', border: 0, borderRadius: 'var(--radius-sm)' }}>
            Botão Primário
          </button>
          <button style={{ padding: '10px 12px', background: 'var(--surface-2)', color: 'var(--fg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
            Botão Neutro
          </button>
        </div>
      </section>

      <section>
        <h2>Imagem responsiva</h2>
        <p>Essa imagem deve respeitar telas pequenas (max-width: 100%).</p>
        <CmsImage 
          src="/images/example.jpg"
          alt="Descrição"
          width={1200}
          height={800}
        />
      </section>
      <h1>Styleguide CMSS</h1>
      <p>Testes de tipografia e ícones (Lucide).</p>

      <section>
        <h2>Ícones</h2>
        <p>Exemplos básicos:</p>

        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <Mail size={20} /> Email
          </span>

          <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <Phone size={20} /> Telefone
          </span>

          <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <MapPin size={20} /> Endereço
          </span>

          <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <Calendar size={20} /> Agenda
          </span>

          <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <HeartHandshake size={20} /> Apoie
          </span>

          <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <Music size={20} /> Música
          </span>
        </div>
      </section>
      <section>
        <h2>Tipografia</h2>

        <h1>H1 — Playfair Display</h1>
        <p>
          Parágrafo — Inter. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mobile first: legibilidade e respiro.
        </p>

        <h2>H2 — Seção</h2>
        <p>
          Texto normal. Teste de contraste e leitura em dark/light.
        </p>

        <h3>H3 — Sub-seção</h3>
        <p>
          Texto menor / detalhes.
        </p>
      </section>
      <section>
        <h2>CTAButton</h2>
        <p>Variantes, estados e teste de quebra de linha.</p>

        <div className="flex flex-col gap-3 max-w-sm">
          <CTAButton label="Primário (Link)" href="/quem-somos" />

          <CTAButton
            label="Primário (Ação)"
            onClick={() => console.log("CTAButton: clique primário")}
          />

          <CTAButton label="Secundário" variant="secondary" href="/historia" />

          <CTAButton label="Ghost" variant="ghost" href="/agenda" />

          <CTAButton label="Disabled (Link)" href="/contato" disabled />

          <CTAButton label="Disabled (Button)" disabled />

          <CTAButton
            label="Texto bem grande pra testar quebra de linha no mobile first sem estourar layout nenhum"
            variant="secondary"
            href="/apoie"
          />
        </div>
      </section>
      <section>
        <Heading variant="h1">H1 — Playfair Display</Heading>
        <Text>
          Body — Inter. Texto padrão do sistema. Mobile first, leitura confortável.
        </Text>

        <Heading variant="h2">H2 — Seção</Heading>
        <Text variant="muted">
          Texto muted com leve opacidade.
        </Text>

        <Heading variant="h3">H3 — Subtítulo</Heading>
        <Text variant="small">
          Texto pequeno para metadados.
        </Text>
      </section>
    </main>
  );
}