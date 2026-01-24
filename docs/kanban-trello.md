# Gestão do Projeto — Kanban (Trello)

Este documento descreve **como o projeto é gerido individualmente** utilizando **Kanban no Trello**,
permitindo evolução contínua, clareza de progresso e futura colaboração com outros desenvolvedores.

Board oficial: [Trello - Projeto Site Institucional CMSS](https://trello.com/invite/b/6974f35ac6f917f1b5baa48d/ATTI76331e1eea5d2f6345d7e78407b9a7a262C29A38/projeto-site-institucional-cmss-mvp-v1)

---

## 🧠 Conceito de Epic no Trello

O Trello **não possui Epics nativos**.  
Neste projeto, um **Epic é representado por um Card pai**, que:

- Tem um **título claro e amplo**
- Contém uma **descrição de objetivo**
- Possui **checklists internos** representando microatividades
- Pode ser quebrado em cards menores no futuro, se necessário

> Regra: **1 Epic = 1 Card grande**, não misturar execução fina com visão macro.

---

## 🧱 Estrutura do Board

### Colunas (Lists)

- 🧠 **Backlog** — ideias, decisões pendentes, itens ainda não priorizados
- 📋 **A Fazer** — tarefas priorizadas e prontas
- 🔨 **Em Progresso** — trabalho ativo (limite: 1–2 cards)
- 🔍 **Revisão de Código** — auto‑review e ajustes
- 🧪 **Fase de Teste** — validação fora da máquina local
- 🎉 **Concluído** — feito, fechado e celebrado

---

## 🏷️ Labels (Tags) Oficiais

### Prioridade
- 🔴 **Crítico** — bloqueia o avanço do MVP
- 🟡 **Importante** — necessário para completar o MVP
- 🟢 **Opcional** — melhora, mas não bloqueia

### Natureza do Trabalho
- 🧠 **Arquitetura** — decisões estruturais
- 🧩 **Componente** — criação/refino de componentes
- 🎨 **UI** — layout, estilo, responsividade
- 📄 **Conteúdo** — JSON, textos, dados
- ⚙️ **Configuração** — setup, tooling, ambiente

> Regra: **máx. 2 labels por card** (1 prioridade + 1 natureza).

---

## 📐 Regras de Uso

- Um card só entra em **Em Progresso** quando está realmente sendo trabalhado
- Nada pula direto do Backlog para Em Progresso
- Checklists representam progresso real
- Card só vai para Concluído quando:
  - código revisado
  - funcional no ambiente de teste
- Celebrar cards concluídos (sim, isso é regra)

---

## 🎯 Objetivo do Modelo

- Tirar carga mental do desenvolvedor
- Dar visibilidade real ao progresso
- Manter motivação sem pressão artificial
- Facilitar entrada futura de outros devs

---

## ✅ Observação Final

Este modelo foi pensado para **execução individual consciente**, não para controle.
Se o quadro estiver pesado, **simplifique**, não complique.

Kanban aqui é ferramenta, não prisão.
