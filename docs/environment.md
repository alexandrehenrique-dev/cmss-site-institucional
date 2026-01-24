# Ambiente de Desenvolvimento — Node.js & Tooling

Este documento descreve o **ambiente de desenvolvimento oficial** do projeto
**Corporação Musical São Sebastião** e como configurá-lo em **macOS, Linux e Windows**,
usando **terminal apenas**.


---

## 🧠 Stack base do projeto (MVP)

Este projeto utiliza:

- **Node.js** (runtime JavaScript)
- **npm** (gerenciador de pacotes)
- **npx** (executor de pacotes)
- **Next.js** (framework frontend – App Router)
- **Tailwind CSS** (estilização)

---

## 🔢 Versões oficiais utilizadas (referência)

Estas são as versões utilizadas no desenvolvimento inicial do projeto:

```text
Node.js: v24.13.0
npm:     v11.6.2
npx:     v11.6.2
```

> ⚠️ Não é obrigatório usar exatamente essas versões,
> mas recomenda-se manter versões compatíveis.

---

## 🍎 macOS — Instalação via Terminal

### 1. Instalar Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Após a instalação, siga as instruções exibidas no terminal para adicionar o `brew` ao PATH.

---

### 2. Instalar o gerenciador de Node (`n`)
```bash
brew install n
```

---

### 3. Instalar Node.js (LTS ou Latest)
```bash
sudo n latest
```
ou
```bash
sudo n lts
```

---

### 4. Verificar instalação
```bash
node -v
npm -v
npx -v
```

---

## 🐧 Linux — Instalação via Terminal

### 1. Instalar `n`
```bash
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n | bash
```

Adicione ao PATH (se necessário):
```bash
export N_PREFIX="$HOME/.n"
export PATH="$N_PREFIX/bin:$PATH"
```

---

### 2. Instalar Node.js
```bash
n latest
```

---

### 3. Verificar instalação
```bash
node -v
npm -v
npx -v
```

---

## 🪟 Windows — Instalação via Terminal (PowerShell)

### Opção recomendada: Node Version Manager (nvm-windows)

1. Instalar o `nvm-windows` (via terminal ou winget):
```powershell
winget install CoreyButler.NVMforWindows
```

2. Reinicie o terminal

3. Instalar Node.js:
```powershell
nvm install latest
nvm use latest
```

4. Verificar:
```powershell
node -v
npm -v
npx -v
```

---

## 🧩 Observações Importantes

- Este projeto **não depende** de instalação gráfica
- Todo o setup pode ser feito via terminal
- O uso de gerenciador de versões de Node é **fortemente recomendado**
- Evite instalar Node manualmente via site oficial

---

## ✅ Conclusão

Com este setup, qualquer desenvolvedor consegue:
- Rodar o frontend
- Criar novos projetos Next.js
- Manter consistência de ambiente
- Evitar conflitos de versão

Este arquivo deve ser mantido atualizado caso as versões principais mudem.
