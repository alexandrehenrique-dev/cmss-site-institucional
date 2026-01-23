# Git Flow — Monorepo Corporação Musical São Sebastião

Este documento define o fluxo de trabalho Git adotado para o repositório **corp-musical-ss**,
utilizando a estratégia de **monorepo**, com foco em simplicidade, controle e qualidade.

---

## 🎯 Objetivo

- Evitar commits diretos em produção
- Garantir histórico limpo e compreensível
- Permitir evolução segura do frontend e backend
- Manter controle mesmo com poucos desenvolvedores

---

## 🌳 Branches Principais

### `main`
- Representa **produção**
- Deve estar sempre estável
- **Commits diretos são proibidos**
- Só recebe código via **Pull Request**

### `develop`
- Branch de integração
- Onde features são consolidadas
- Base para novas branches de trabalho

---

## 🛠️ Branches Auxiliares

### Feature
Usada para novas funcionalidades.

Formato:
```text
feature/nome-da-feature
```

Exemplos:
```text
feature/home-page
feature/theme-toggle
feature/json-cms
```

Fluxo:
- Criada a partir de `develop`
- Merge de volta para `develop` via Pull Request

---

### Fix
Usada para correções pontuais.

Formato:
```text
fix/nome-do-problema
```

Exemplo:
```text
fix/header-mobile
```

---

## 🔁 Fluxo de Trabalho

1. Criar branch a partir de `develop`
2. Desenvolver a feature ou correção
3. Abrir Pull Request para `develop`
4. Revisar e aprovar
5. Merge em `develop`
6. Quando estável, abrir Pull Request de `develop` → `main`

---

## 🔐 Regras de Proteção

### `main`
- ❌ Push direto proibido
- ✅ Pull Request obrigatório
- ✅ Aprovação obrigatória
- ✅ Histórico linear preferencial

### `develop`
- ❌ Push direto recomendado evitar
- ✅ Pull Request obrigatório

---

## 🧾 Padrão de Commits

Utilizar mensagens claras e objetivas:

```text
feat: cria estrutura inicial do frontend
fix: corrige layout mobile da home
docs: adiciona documentação do git flow
```

Evitar mensagens genéricas como:
```text
ajustes
teste
final agora vai
```

---

## 📌 Observações

- O repositório utiliza **monorepo**
- Diretórios principais:
  - `/prototipo`
  - `/docs`
  - `/frontend`
  - `/backend` (futuro)
- O frontend deve **sempre ser versionado**
- Separações futuras podem usar `git subtree split`

---

## ✅ Conclusão

Este fluxo é simples, eficiente e adequado para projetos pequenos ou médios,
garantindo qualidade sem burocracia excessiva.
