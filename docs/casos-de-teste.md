# 🧪 Casos de Teste Automatizados - Colmeia QA

## Visão Geral

Este documento apresenta os casos de teste automatizados desenvolvidos com **Cypress** para validação da aplicação Colmeia.

| Informação | Detalhe |
|------------|----------|
| **Projeto** | Colmeia - Sistema de Gestão |
| **URL de Teste** | https://teste-colmeia-qa.colmeia-corp.com/ |
| **Ferramenta** | Cypress |
| **Data** | 2026-05-08 |
| **Responsável** | Rafael Felipe |
| **Total de Casos** | **16** |

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
| [📋 bugs.md](bugs.md) | **14 bugs** documentados (1 crítico, 6 altos) |
| [✅ casos-de-teste.md](casos-de-teste.md) | **16 casos** automatizados (56,25% sucesso) |
| [🔍 testes-exploratorios.md](testes-exploratorios.md) | Testes manuais exploratórios |

---

## 📝 Índice

1. [Login](#1-login)
2. [Bancos de Dados](#2-bancos-de-dados)

---

## 1. Login (`cypress/e2e/login.cy.js`) {#1-login}

### 1.1 Validação de Interface

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-LOGIN-001 | Deve exibir elementos essenciais na tela de login | Logo, campos email/senha e botão Entrar visíveis | ✅ Passou |

**Pré-condições:** Nenhuma

**Dados Utilizados:** N/A

---

### 1.2 Caminho Feliz

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-LOGIN-002 | Deve realizar login com sucesso e acessar o dashboard | Redireciona para /dashboard e exibe "Candidato" | ✅ Passou |

**Pré-condições:** Usuário na tela de login

**Dados Utilizados:**
- Email: `qa@test.com`
- Senha: `123456`

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

**Bugs Relacionados:**
- BUG003 - Mensagem de erro mal posicionada
- BUG004 - Modal fecha ao clicar fora

---

## 2. Bancos de Dados (`cypress/e2e/bancodados.cy.js`) {#2-bancos-de-dados}

### 2.1 Validação de Interface

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-001 | Deve acessar a área de Bancos de dados | Título "Nome do banco de dados" visível | ✅ Passou |
| CT-BD-002 | Deve abrir o modal de criação de item | Modal "Adicionar novo item" com botão "Salvar" visível | ✅ Passou |

**Pré-condições:** Usuário logado e na tela de Bancos de Dados

**Dados Utilizados:** N/A

---

### 2.2 Validações de Campo

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-003 | Deve exibir validação ao tentar salvar item sem nome | Mensagem "O nome do item é obrigatório" exibida | ✅ Passou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Campo nome vazio

**Bug Relacionado:** BUG011 - Sistema aceita caracteres especiais sem validação

---

### 2.3 Caminho Feliz - Criação

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-004 | Deve criar um novo banco de dados com sucesso | Novo item aparece na listagem | ✅ Passou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Nome dinâmico: `Banco ${Date.now()}`

---

### 2.4 Caminho Não Feliz - Duplicidade

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-005 | Deve permitir criar bancos com nomes duplicados | Mais de uma ocorrência do mesmo nome na listagem | ✅ Passou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Nome duplicado: `Banco Duplicado ${Date.now()}`

**Bug Relacionado:** BUG009 - Sistema permite cadastro duplicado

---

### 2.5 Caminho Não Feliz - Campo Vazio Persistente

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-006 | Deve impedir salvamento com campo vazio | Sistema bloqueia salvamento | ❌ Falhou |

**Pré-condições:** Modal de criação aberto, campo vazio

**Dados Utilizados:** Campo nome vazio, insistir no salvamento

**Bug Relacionado:** BUG010 - Sistema permite salvar item vazio após insistência

---

### 2.6 Caminho Não Feliz - Caracteres Especiais

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-007 | Deve validar caracteres especiais no nome | Sistema deve validar ou informar regra | ❌ Falhou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Apenas caracteres especiais

**Bug Relacionado:** BUG011 - Sistema aceita caracteres especiais sem validação

---

### 2.7 Caminho Não Feliz - Nome Longo

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-008 | Deve tratar nome excessivamente longo | Layout não quebra, truncamento ou tooltip | ❌ Falhou |

**Pré-condições:** Modal de criação aberto

**Dados Utilizados:** Nome muito extenso

**Bug Relacionado:** BUG012 - Nome longo quebra layout

---

### 2.8 Caminho Não Feliz - Refresh Remove Itens

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-009 | Botão refresh deve manter itens na listagem | Itens mantidos após refresh | ❌ Falhou |

**Pré-condições:** Itens cadastrados na listagem

**Dados Utilizados:** Criar itens, clicar em refresh

**Bug Relacionado:** BUG013 - Refresh remove todos os itens

---

### 2.9 Caminho Não Feliz - Arquivar Item

| ID | Caso de Teste | Resultado Esperado | Status |
|----|---------------|-------------------|--------|
| CT-BD-010 | Item arquivado deve aparecer em "arquivados" | Item visível na área de arquivados | ❌ Falhou |

**Pré-condições:** Item cadastrado, não arquivado

**Dados Utilizados:** Criar item, arquivar, acessar arquivados

**Bug Relacionado:** BUG014 - Arquivados não exibem itens

---

## 🎯 Resumo Executivo

### Estatísticas de Teste

| Módulo | Total de Casos | ✅ Passou | ❌ Falhou | Taxa de Sucesso |
|--------|----------------|-----------|----------|------------------|
| Login | 6 | 6 | 0 | **100%** |
| Bancos de Dados | 10 | 3 | 7 | **30%** |
| **Total** | **16** | **9** | **7** | **56,25%** |

### Bugs Encontrados

| Severidade | Quantidade | Prioridade Alta |
|------------|-----------|-----------------|
| 🔴 Crítica | 1 | BUG013 |
| 🟠 Alta | 6 | BUG002, BUG005, BUG007, BUG010, BUG012, BUG014 |
| 🟡 Média | 3 | BUG006, BUG009, BUG011 |
| 🟢 Baixa | 4 | BUG001, BUG003, BUG004, BUG008 |

---

## 🎯 Recomendações

1. **Priorizar correção de bugs críticos** (BUG013 - refresh remove itens)
2. **Implementar validações de formulário** consistentes
3. **Adicionar atributos `data-cy`** para facilitar automação
4. **Melhorar feedback visual** para o usuário
5. **Corrigir links que não funcionam** (esqueceu senha, forms, dropdown)

---

**Data:** 2026-05-08  
**QA Responsável:** Rafael Felipe
