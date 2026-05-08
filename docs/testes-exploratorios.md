# Testes Exploratórios - Colmeia QA

**Projeto:** Colmeia - Sistema de Gestão  
**URL de Teste:** https://teste-colmeia-qa.colmeia-corp.com/  
**Data:** 2026-05-08  

---

## Objetivo

Documentar descobertas realizadas durante testes exploratórios na aplicação, complementando os testes automatizados.

---

## Escopo

- Login e autenticação
- Navegação lateral (menu)
- Gestão de Bancos de Dados
- Usabilidade geral

---

## Metodologia

Os testes exploratórios foram realizados seguindo uma abordagem de **session-based testing**, com foco em:
- Descoberta de bugs não cobertos por testes automatizados
- Avaliação de usabilidade
- Identificação de fluxos quebrados

---

## Descobertas Relevantes

### 1. Navegação e Menu

| Item | Observação | Severidade |
|------|-------------|------------|
| Menu lateral | Ícone de megafone não intuitivo | Baixa |
| Dropdown "Candidato" | Não funciona ao clicar | Alta |
| Link "Colmeia Forms" | Não realiza navegação | Alta |
| Link "Esqueceu sua senha?" | Não funciona | Alta |

### 2. Autenticação

| Item | Observação | Severidade |
|------|-------------|------------|
| Popup de confirmação | Texto incorreto para credenciais válidas | Baixa |
| Popup de confirmação | Fecha ao clicar fora, perdendo estado | Baixa |
| Mensagem de erro | Mal posicionada e pouco amigável | Baixa |
| Mensagem de erro | Exibida em ambos os campos | Baixa |

### 3. Bancos de Dados

| Item | Observação | Severidade |
|------|-------------|------------|
| Criação de item | Permite nomes duplicados | Média |
| Criação de item | Aceita caracteres especiais sem validação | Média |
| Criação de item | Permite salvar vazio após insistência | Alta |
| Modal de criação | Não possui botão "Cancelar" | Baixa |
| Modal de criação | Fecha ao clicar fora, perdendo dados | Baixa |
| Nome longo | Quebra o layout da tabela | Alta |
| Botão refresh | Remove todos os itens da listagem | Crítica |
| Arquivar item | Item não aparece em "arquivados" | Alta |

---

## Fluxos Não Testados (Pendentes)

- [ ] Recuperação de senha (link não funciona)
- [ ] Edição de item em Bancos de Dados
- [ ] Exclusão de item em Bancos de Dados
- [ ] Perfil do usuário (dropdown não funciona)
- [ ] Configurações da conta
- [ ] Logout
- [ ] Colmeia Forms (link não funciona)
- [ ] Responsividade (mobile/tablet)
- [ ] Performance da aplicação

---

## Sugestões de Testes Futuros

1. **Testes de Responsividade:** Validar comportamento em diferentes resoluções
2. **Testes de Performance:** Medir tempo de carregamento das telas
3. **Testes de Segurança:** Validação de injeção de SQL, XSS, etc.
4. **Testes de Acessibilidade:** Contraste, navegação por teclado, leitores de tela
5. **Testes de Integração:** Fluxo completo de ponta a ponta

---

## Riscos Identificados

| Risco | Impacto | Probabilidade |
|-------|---------|----------------|
| Perda de dados (refresh, modal fecha) | Alto | Alta |
| Usuário não consegue recuperar senha | Alto | Alta |
| Usuário não consegue acessar funcionalidades (dropdown, links) | Alto | Alta |
| Dados inconsistentes (duplicidade, caracteres especiais) | Médio | Alta |

---

## Conclusão

A aplicação apresenta **problemas de usabilidade significativos** que impedem o uso fluido por parte dos usuários:
- Links e dropdowns que não funcionam
- Perda de dados em fluxos comuns
- Falta de feedback adequado

**Recomendação:** Priorizar correção de bugs críticos e de alta severidade antes de novas funcionalidades.

---

## Histórico de Sessões

| Data | Duração | Escopo | Bugs Encontrados |
|------|----------|--------|-------------------|
| 2026-05-08 | 4h | Login + Bancos de Dados | 14 bugs |
