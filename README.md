# Corporação Musical São Sebastião — Site Institucional

Site institucional e cultural da **Corporação Musical São Sebastião**, com foco em tradição,
memória histórica, atuação social e divulgação institucional.

O projeto é desenvolvido com **arquitetura simples, sustentável e documentada**, respeitando
a identidade cultural da instituição e priorizando longevidade técnica.

---

## 🎯 Objetivo do Projeto

- Apresentar a Corporação Musical São Sebastião como patrimônio cultural vivo
- Divulgar história, eventos e atuação cultural
- Facilitar contato institucional e apoio à banda
- Servir como base digital sólida para evolução futura

---

## 📌 Estado Atual do Projeto

**MVP em desenvolvimento ativo.**

Atualmente o repositório contém:
- Protótipos visuais completos (desktop e mobile, temas light e dark)
- Estrutura de monorepo definida
- Frontend inicial criado com Next.js e Tailwind CSS
- Documentação de fluxo de trabalho e ambiente de desenvolvimento

O backend **ainda não está definido** e está fora do escopo do MVP atual.

---

## 🗂️ Estrutura do Repositório

```text
/
├── docs/
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── images/
│   └── src/
│       ├── app/
│       │   ├── agenda/
│       │   ├── apoie/
│       │   ├── contato/
│       │   ├── historia/
│       │   └── quem-somos/
│       ├── components/
│       ├── content/
│       ├── lib/
│       ├── services/
│       └── types/
└── prototipo/
```

---

## 🧠 Stack Tecnológica (MVP)

### Frontend
- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- Estratégia de renderização: **Static Site Generation (SSG)**
- Abordagem: **Mobile First**
- Conteúdo gerenciado via **arquivos JSON versionados**

### Backend
- ❌ Ainda não definido
- ❌ Fora do escopo do MVP

---

## 📄 Documentação

Mais detalhes técnicos e operacionais estão disponíveis em:

- 📘 **Fluxo de Git / Monorepo**  
  `docs/git-flow.md`

- ⚙️ **Configuração do Ambiente (Node, npm, npx)**  
  `docs/environment.md`

- 📋 **Veja documentação do trello para regras de gestão do projeto**  
  `docs/kanban-trello.md`

Esses documentos explicam:
- Padrão de branches e Pull Requests
- Políticas de proteção de branch
- Instalação e versionamento de Node.js
- Como rodar o projeto localmente

---

## 🧩 Princípios do Projeto

- Conteúdo é configurável via JSON
- Estrutura e layout são definidos em código
- Simplicidade acima de modismos
- Performance, SEO e acessibilidade como requisitos básicos
- Decisões técnicas conscientes e documentadas

---

## 🚧 Fora do Escopo Atual

- Backend funcional
- CMS com painel administrativo
- Autenticação
- Galeria dinâmica
- Integrações externas

---

## ✅ Observação Final

Este projeto prioriza **clareza, estabilidade e respeito à identidade cultural** da
Corporação Musical São Sebastião.  
Qualquer evolução futura deve preservar esses princípios.
