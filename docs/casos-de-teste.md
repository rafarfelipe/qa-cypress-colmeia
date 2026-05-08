# Casos de Teste Automatizados - Colmeia QA

## Visão Geral

Este documento apresenta os casos de teste automatizados desenvolvidos com **Cypress** para validação da aplicação Colmeia.

| Informação | Detalhe |
|------------|----------|
| **Projeto** | Colmeia - Sistema de Gestão |
| **URL de Teste** | https://teste-colmeia-qa.colmeia-corp.com/ |
| **Ferramenta** | Cypress |
| **Data** | 2026-05-08 |
| **Responsável** | [Seu Nome] |

---

## Índice

1. [Login](#login)
2. [Bancos de Dados](#bancos-de-dados)

---

## 1. Login (`cypress/e2e/login.cy.js`) {#login}

### 1.1 Validação de Interface

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-LOGIN-001 | Deve exibir elementos essenciais na tela de login | Logo, campos email/senha e botão Entrar visíveis | ✅ Passou |

**Pré-condições:** Nenhuma

**Dados Utilizados:** N/A

**Evidência:**  
![CT-001](evidencias/screenshots/Login%20--%20CT-001%20Deve%20autenticar%20com%20credenciais%20válidas%20sem%20exibir%20popup%20de%20erro%20(failed).png)

---

### 1.2 Caminho Feliz

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-LOGIN-002 | Deve realizar login com sucesso e acessar o dashboard | Redireciona para /dashboard e exibe "Candidato" | ✅ Passou |

**Pré-condições:** Usuário na tela de login

**Dados Utilizados:**
- Email: `qa@test.com`
- Senha: `123456`

**Evidência:**  
![CT-002](evidencias/screenshots/login-bug001.gif)

**Bug Relacionado:** BUG001 - Mensagem de confirmação exibe texto incorreto

---

### 1.3 Caminho Não Feliz - Validações de Credenciais

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-LOGIN-003 | Deve exibir erro com email inválido | Mensagem "Usuário ou senha inválidos" exibida | ✅ Passou |
| CT-LOGIN-004 | Deve exibir erro com senha inválida | Mensagem "Usuário ou senha inválidos" exibida | ✅ Passou |
| CT-LOGIN-005 | Deve exibir erro com campos vazios | Mensagem "Usuário ou senha inválidos" exibida | ✅ Passou |
| CT-LOGIN-006 | Deve fechar popup ao clicar fora | Popup fecha ao clicar fora | ✅ Passou |

**Dados Utilizados:**

| ID | Email | Senha |
|----|-------|--------|
| CT-LOGIN-003 | `qa@test.br` | `123456` |
| CT-LOGIN-004 | `qa@test.com` | `senhaerrada` |
| CT-LOGIN-005 | (vazio) | (vazio) |
| CT-LOGIN-006 | `qa@test.com` | `123456` |

**Evidências:**
- CT-LOGIN-003 e 004: ![Bug 003](evidencias/screenshots/bug-003.png)
- CT-LOGIN-006: ![Bug 004](evidencias/screenshots/bug004.gif)

**Bugs Relacionados:**
- BUG003 - Mensagem de erro mal posicionada
- BUG004 - Modal fecha ao clicar fora

---

## 2. Bancos de Dados (`cypress/e2e/bancodados.cy.js`) {#bancos-de-dados}

### 2.1 Validação de Interface

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-001 | Deve acessar a área de Bancos de dados | Título "Nome do banco de dados" visível | ✅ Passou |
| CT-BD-002 | Deve abrir o modal de criação de item | Modal "Adicionar novo item" com botão "Salvar" visível | ✅ Passou |

**Pré-condições:** Usuário logado e na tela de Bancos de Dados

**Dados Utilizados:** N/A

**Evidência:** N/A

---

### 2.2 Validações de Campo

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-003 | Deve exibir validação ao tentar salvar item sem nome | Mensagem "O nome do item é obrigatório" exibida | ✅ Passou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Campo nome vazio

**Evidência:** ![Bug 011](evidencias/screenshots/bug011.png)

**Bug Relacionado:** BUG011 - Sistema aceita caracteres especiais sem validação

---

### 2.3 Caminho Feliz - Criação

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-004 | Deve criar um novo banco de dados com sucesso | Novo item aparece na listagem | ✅ Passou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Nome dinâmico: `Banco ${Date.now()}`

**Evidência:** N/A

---

### 2.4 Caminho Não Feliz - Duplicidade

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-005 | Deve permitir criar bancos com nomes duplicados | Mais de uma ocorrência do mesmo nome na listagem | ✅ Passou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Nome duplicado: `Banco Duplicado ${Date.now()}`

**Evidência:** ![Bug 009](evidencias/screenshots/bug009.png)

**Bug Relacionado:** BUG009 - Sistema permite cadastro duplicado

---

### 2.5 Caminho Não Feliz - Campo Vazio Persistente

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-006 | Deve impedir salvamento com campo vazio | Sistema bloqueia salvamento | ❌ Falhou |

**Pré-condições:** Modal de criação aberto, campo vazio

**Dados Utilizados:** Campo nome vazio, insistir no salvamento

**Evidência:** ![Bug 010](evidencias/screenshots/bug010.gif)

**Bug Relacionado:** BUG010 - Sistema permite salvar item vazio após insistência

---

### 2.6 Caminho Não Feliz - Caracteres Especiais

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-007 | Deve validar caracteres especiais no nome | Sistema deve validar ou informar regra | ❌ Falhou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Apenas caracteres especiais

**Evidência:** ![Bug 011](evidencias/screenshots/bug011.png)

**Bug Relacionado:** BUG011 - Sistema aceita caracteres especiais sem validação

---

### 2.7 Caminho Não Feliz - Nome Longo

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-008 | Deve tratar nome excessivamente longo | Layout não quebra, truncamento ou tooltip | ❌ Falhou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Nome muito extenso

**Evidência:** ![Bug 012](evidencias/screenshots/bug012.gif)

**Bug Relacionado:** BUG012 - Nome longo quebra layout

---

### 2.8 Caminho Não Feliz - Refresh Remove Itens

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-009 | Botão refresh deve manter itens na listagem | Itens mantidos após refresh | ❌ Falhou |

**Pré-condições:** Itens cadastrados na listagem

**Dados Utilizados:** Criar itens, clicar em refresh

**Evidência:** ![Bug 013](evidencias/screenshots/bug013.gif)

**Bug Relacionado:** BUG013 - Refresh remove todos os itens

---

### 2.9 Caminho Não Feliz - Arquivar Item

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-010 | Item arquivado deve aparecer em "arquivados" | Item visível na área de arquivados | ❌ Falhou |

**Pré-condições:** Item cadastrado, não arquivado

**Dados Utilizados:** Criar item, arquivar, acessar arquivados

**Evidência:** ![Bug 014](evidencias/screenshots/bug014.gif)

**Bug Relacionado:** BUG014 - Arquivados não exibe itens

---

## Resumo Executivo

### Estatísticas de Teste

| Módulo | Total de Casos | ✅ Passou | ❌ Falhou | Taxa de Sucesso |
|--------|----------------|-----------|----------|------------------|
| Login | 6 | 6 | 0 | 100% |
| Bancos de Dados | 10 | 3 | 7 | 30% |
| **Total** | **16** | **9** | **7** | **56,25%** |

### Bughs Documentados

| ID | Título | Severidade | Prioridade | Status |
|----|-------|------------|------------|--------|
| BUG001 | Mensagem de confirmação exibe texto incorreto | Baixa | Baixa | Aberto |
| BUG002 | Link "Esqueceu sua senha?" não funciona | Alta | Alta | Aberto |
| BUG003 | Mensagem de erro mal posicionada | Baixa | Baixa | Aberto |
| BUG004 | Modal fecha ao clicar fora | Baixa | Média | Aberto |
| BUG005 | Dropdown "Candidato" não funciona | Alta | Alta | Aberto |
| BUG006 | Botão de menu não intuitivo | Baixa | Média | Aberto |
| BUG007 | Link "Colmeia Forms" não funciona | Alta | Alta | Aberto |
| BUG008 | Modal sem cancelamento e fecha ao clicar fora | Baixa | Média | Aberto |
| BUG009 | Sistema permite cadastro duplicado | Média | Média | Aberto |
| BUG010 | Sistema permite salvar vazio após insistência | Alta | Alta | Aberto |
| BUG011 | Sistema aceita caracteres especiais | Média | Média | Aberto |
| BUG012 | Nome longo quebra layout | Alta | Alta | Aberto |
| BUG013 | Refresh remove todos os itens | Crítica | Alta | Aberto |
| BUG014 | Arquivados não exibe itens | Alta | Alta | Aberto |

**Total de bugs encontrados:** 14  
**Bugs críticos:** 1  
**Bugs de alta severidade:** 6  
**Bugs de média severidade:** 3  
**Bugs de baixa severidade:** 4

---

## Conclusão

O sistema apresenta **14 bugs documentados**, sendo 1 crítico e 6 de alta severidade. A taxa de sucesso dos testes automatizados foi de **56,25%**, indicando necessidade de correções principalmente no módulo de Bancos de Dados.

**Recomendações:**
1. Priorizar correção de bugs críticos (BUG013)
2. Implementar validações de formulário consistentes
3. Adicionar atributos `data-cy` para facilitar automação
4. Melhorar feedback visual para o usuário
