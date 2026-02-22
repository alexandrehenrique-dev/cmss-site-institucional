# Decisões de UI Base — Ícones e Tipografia (MVP V1)

Este documento registra as decisões **iniciais** de UI para o frontend do site institucional da **Corporação Musical São Sebastião (CMSS)**, visando consistência visual, boa legibilidade e evolução futura (design system próprio).

---

## Biblioteca de ícones

**Escolha:** `lucide-react`

### Por que Lucide?

- **SVG puro e leve**: ícones nítidos em qualquer resolução.
- **Integração perfeita com Next.js + React**: uso simples via import.
- **Customização fácil**: tamanho, espessura (stroke), cor via CSS/Tailwind.
- **Estética neutra e elegante**: combina com proposta institucional/cultural.
- **Ampla adoção e boa documentação**.

### Instalação

```bash
npm install lucide-react
```

### Exemplo de uso

```tsx
import { Mail, Phone } from "lucide-react";

export function Example() {
  return (
    <div>
      <Mail size={20} />
      <Phone className="w-5 h-5" />
    </div>
  );
}
```

---

## Tipografia

**Escolha (combinação):**

- **Títulos:** _Playfair Display_ (serif clássica)
- **Texto:** _Inter_ (sans moderna e muito legível)

### Por que essa combinação?

- **Playfair Display** traz o tom **tradicional e solene** (concertos, instituições culturais, “clássico”).
- **Inter** mantém o texto corrido **extremamente legível** em telas (mobile first), sem parecer “tech” demais.
- A combinação cria hierarquia clara sem poluição visual.

### Como está aplicada

- Fonte base do site: `Inter`
- Headings (h1/h2/h3…): `Playfair Display`

### Instalação (via CSS no `globals.css`)

No MVP V1 optamos por carregar via CSS para simplificar e permitir ajuste rápido.

> Observação: em projetos maiores, o Next recomenda `next/font` para otimização automática. Podemos migrar depois sem quebrar o layout.

---

## Onde isso aparece no projeto

- Página de validação: `/styleguide`
  - Testa títulos, parágrafos, pesos, tamanhos, ícones e contrastes (dark/light).
