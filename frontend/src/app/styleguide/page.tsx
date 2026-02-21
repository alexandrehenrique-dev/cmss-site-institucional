import { CmsImage } from "@/components/CmsImage";

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
          src="/images/example.png"
          alt="Descrição"
          width={1200}
          height={800}
        />
      </section>
    </main>
  );
}