# Frontend — Site Institucional CMSS (MVP v1)

Este diretório contém o **frontend do MVP** do site institucional da **Corporação Musical São Sebastião (CMSS)**.

O projeto foi pensado para ser **simples de entender**, **fácil de rodar** e **acessível até para desenvolvedores iniciantes**, rodando em qualquer sistema operacional que suporte **Node.js** (Linux, macOS, Windows — e, teoricamente, até uma geladeira smart se rodar Node).

---

## 🎯 Objetivo do Projeto

- Criar um site institucional para a CMSS
- Renderizar páginas a partir de **conteúdo em arquivos JSON**
- Simular um **CMS simples** no frontend
- Preparar a arquitetura para futura integração com **backend/API** (v2+)
- Manter código organizado, legível e sustentável

Este projeto **não possui fins lucrativos**.

---

## 🧱 Stack Tecnológica

### Framework e Linguagem

- **Next.js (16.1.4)**  
  Framework React que oferece:
  - Roteamento por pastas
  - Renderização no servidor (Server Components)
  - Otimizações automáticas de performance

- **React (19.2.3)**  
  Biblioteca para criação de interfaces baseadas em componentes.

- **TypeScript (5.x)**  
  JavaScript com tipagem estática, trazendo:
  - Mais segurança
  - Melhor legibilidade
  - Menos erros em tempo de execução

---

### Estilos

- **Tailwind CSS (v4)**  
  Framework de CSS utilitário para:
  - Estilização rápida
  - Layouts responsivos (mobile first)
  - Padronização visual

---

### Qualidade de Código

- **ESLint**  
  Ferramenta que analisa o código e aponta:
  - Erros comuns
  - Más práticas
  - Problemas de padrão

- **Prettier**  
  Ferramenta que **formata o código automaticamente**, cuidando apenas de:
  - Espaçamento
  - Quebras de linha
  - Aspas e vírgulas

> ESLint decide *o que está errado*.  
> Prettier decide *como o código deve ficar formatado*.

---

## 📁 Estrutura de Pastas

```text
src/
├── app/          # Páginas e rotas (Next.js App Router)
├── components/   # Componentes reutilizáveis (Hero, Section, etc.)
├── content/      # Conteúdo em JSON (simula um CMS)
├── lib/          # Funções utilitárias (baixo nível)
├── services/     # Camada intermediária (JSON hoje, API amanhã)
public/           # Imagens e arquivos públicos
```

---

## 📦 Dependências Principais

Instaladas automaticamente via `npm install`:

- **next**
- **react**
- **react-dom**

Dependências de desenvolvimento:
- **typescript**
- **eslint**
- **prettier**
- **tailwindcss**
- **@types/** (tipagens para TypeScript)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (versão LTS ou superior)
- **npm** (vem junto com o Node)

> Não importa o sistema operacional:  
> Linux, macOS ou Windows funcionam da mesma forma.

---

### Instalação

```bash
npm install
```

---

### Ambiente de Desenvolvimento

```bash
npm run dev
```

Abra no navegador:
```
http://localhost:3000
```

---

### Build de Produção

```bash
npm run build
npm run start
```

---

## 🧪 Validando o ESLint

O projeto já possui ESLint configurado.

Para rodar a validação manualmente:

```bash
npm run lint
```

O ESLint irá:
- Analisar todos os arquivos do projeto
- Mostrar avisos e erros no terminal
- **Não alterar o código automaticamente**

Os avisos também aparecem diretamente no VS Code, se a extensão ESLint estiver instalada.

---

## 🧠 Observações Importantes

- O diretório `content/` será removido no futuro quando o backend existir
- A pasta `services/` já está preparada para consumir uma API externa
- Este projeto prioriza **clareza e aprendizado**, não complexidade desnecessária

---

## 📚 Documentação Adicional

Consulte a pasta `docs/` no repositório principal para:
- Git Flow
- Kanban (Trello)
- Ambiente de desenvolvimento
- Padrões do projeto

---

## 🤝 Contribuição

Mesmo sendo um projeto pequeno, boas práticas são incentivadas:
- Código legível
- Commits claros
- Componentes reutilizáveis

---

Feito com dedicação, cultura e música 🎺🎶  
**Corporação Musical São Sebastião**
