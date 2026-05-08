# QA Cypress Colmeia - Teste Técnico

Automação de testes com **Cypress** para validação da aplicação Colmeia.

**URL:** https://teste-colmeia-qa.colmeia-corp.com/

---

## Documentação

| Arquivo | Descrição |
|---------|-------------|
| [docs/bugs.md](docs/bugs.md) | 14 bugs documentados |
| [docs/casos-de-teste.md](docs/casos-de-teste.md) | 16 casos automatizados |
| [docs/testes-exploratorios.md](docs/testes-exploratorios.md) | Testes manuais |

---

## Resumo

### Testes Automatizados
- **Total:** 16 casos
- **Sucesso:** 9 (56,25%)
- **Falhas:** 7 (43,75%)

### Bugs
- **Crítico:** 1
- **Alta:** 6
- **Média:** 3
- **Baixa:** 4

---

## Como Rodar

```bash
# Instalar dependências
npm install

# Abrir Cypress
npm run test:open

# Rodar todos os testes
npm test

# Rodar testes específicos
npm run test:login
npm run test:bancodados
```

---

## Estrutura

```
qa-cypress-colmeia/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── bancodados.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── docs/
│   ├── bugs.md
│   ├── casos-de-teste.md
│   ├── testes-exploratorios.md
│   └── evidencias/screenshots/
├── cypress.config.js
├── package.json
└── README.md
```

---

## Comandos Customizados

Em `cypress/support/commands.js`:
- `cy.login()` - Realiza login automático
- `cy.navigateToBancoDados()` - Navega até Bancos de Dados

---

**Data:** 2026-05-08  
**QA:** Rafael Felipe  
**Ferramenta:** Cypress 15+