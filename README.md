# 🧪 QA Cypress Colmeia - Teste Técnico

> Automação de testes com **Cypress** para validação da aplicação Colmeia.

**URL de Teste:** https://teste-colmeia-qa.colmeia-corp.com/

---

## 📊 Estatísticas do Projeto

![Cypress](https://img.shields.io/badge/Cypress-15+-green?style=flat)
![Bugs](https://img.shields.io/badge/Bugs-14-red?style=flat)
![Testes](https://img.shields.io/badge/Testes-16-blue?style=flat)
![Taxa de Sucesso](https://img.shields.io/badge/Sucesso-56.25%25-yellow?style=flat)

---

## 📁 Documentação

| Arquivo | Descrição |
|---------|-------------|
| [📋 bugs.md](docs/bugs.md) | **14 bugs** documentados (1 crítico, 6 altos) |
| [✅ casos-de-teste.md](docs/casos-de-teste.md) | **16 casos** automatizados (56,25% sucesso) |
| [🔍 testes-exploratorios.md](docs/testes-exploratorios.md) | Testes manuais exploratórios |

---

## 🎯 Resumo Executivo

### Testes Automatizados
| Módulo | Total | ✅ Passou | ❌ Falhou | Taxa |
|--------|-------|-----------|----------|------|
| **Login** | 6 | 6 | 0 | **100%** |
| **Bancos de Dados** | 10 | 3 | 7 | **30%** |
| **Total** | **16** | **9** | **7** | **56,25%** |

### Bugs Encontrados
| Severidade | Quantidade | Prioridade Alta |
|------------|-----------|-----------------|
| 🔴 Crítica | 1 | BUG013 |
| 🟠 Alta | 6 | BUG002, BUG005, BUG007, BUG010, BUG012, BUG014 |
| 🟡 Média | 3 | BUG006, BUG009, BUG011 |
| 🟢 Baixa | 4 | BUG001, BUG003, BUG004, BUG008 |

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- Conta de acesso à aplicação

### Instalação
```bash
npm install
```

### Executar Testes
```bash
# Abrir interface do Cypress
npm run test:open

# Executar todos os testes (headless)
npm test

# Testes específicos
npm run test:login
npm run test:bancodados
```

---

## 📂 Estrutura do Projeto

```
qa-cypress-colmeia/
├── 📁 cypress/
│   ├── e2e/
│   │   ├── login.cy.js          # 6 casos de teste
│   │   └── bancodados.cy.js    # 10 casos de teste
│   └── support/
│       ├── commands.js          # Comandos customizados
│       └── e2e.js
├── 📁 docs/
│   ├── bugs.md                # Relatório de 14 bugs
│   ├── casos-de-teste.md      # Documentação dos testes
│   ├── testes-exploratorios.md # Testes manuais
│   └── evidencias/
│       └── screenshots/        # GIFs e imagens
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🛠️ Comandos Customizados

Em `cypress/support/commands.js`:

```javascript
// Login automático (padrão: qa@test.com / 123456)
cy.login()

// Navegação para Bancos de Dados
cy.navigateToBancoDados()
```

---

## 🐛 Principais Bugs Encontrados

1. **🔴 BUG013 - Refresh remove todos os itens** (Crítico)
2. **🟠 BUG002 - Link "Esqueceu senha" não funciona** (Alta)
3. **🟠 BUG005 - Dropdown "Candidato" não funciona** (Alta)
4. **🟠 BUG007 - Link "Colmeia Forms" não funciona** (Alta)
5. **🟠 BUG010 - Sistema permite salvar vazio** (Alta)
6. **🟠 BUG012 - Nome longo quebra layout** (Alta)
7. **🟠 BUG014 - Arquivados não exibem itens** (Alta)

👉 [Ver todos os bugs](docs/bugs.md)

---

## 📸 Evidências Visuais

As evidências (screenshots e GIFs) estão disponíveis em `docs/evidencias/screenshots/` e são renderizadas diretamente nos arquivos de documentação.

**Exemplo:**
![Bug 001 - GIF demonstrativo](docs/evidencias/screenshots/login-bug001.gif)

---

## 🎯 Recomendações

1. **Priorizar bugs críticos** (BUG013 - refresh remove itens)
2. **Implementar validações de formulário** consistentes
3. **Adicionar atributos `data-cy`** para facilitar automação
4. **Melhorar feedback visual** para o usuário
5. **Corrigir links que não funcionam** (esqueceu senha, forms, dropdown)

---

## 📝 Informações

**Data:** 2026-05-08  
**QA Responsável:** Rafael Felipe  
**Ferramenta:** Cypress 15+




