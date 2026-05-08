describe('Login - Validação de Acesso', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Validação de interface', () => {
    it('Deve exibir elementos essenciais na tela de login', () => {
      cy.get('img[alt="Colmeia logo"]').should('be.visible')
      cy.get('#email').should('be.visible')
      cy.get('#password').should('be.visible')

      cy.get('button[type="submit"]').should('be.visible')
    })
  })

  context('Caminho feliz', () => {
    it('Deve realizar login com sucesso e acessar o dashboard', () => {
      cy.get('#email').type('qa@test.com')
      cy.get('#password').type('123456')
      cy.get('button[type="submit"]').click()

      cy.contains('Seu login está incorreto, quer continuar?').should('be.visible')
      cy.contains('button', 'Continuar').should('be.visible').click()

      cy.url().should('include', '/dashboard')
      cy.contains('Candidato').should('be.visible')
    })
  })

  context('Caminho não feliz - Validações de credenciais', () => {
    it('Deve exibir mensagem de erro com email inválido', () => {
      cy.get('#email').type('qa@test.br')
      cy.get('#password').type('123456')
      cy.get('button[type="submit"]').click()

      cy.contains('span', 'Usuário ou senha inválidos').should('be.visible')
    })

    it('Deve exibir mensagem de erro com senha inválida', () => {
      cy.get('#email').type('qa@test.com')
      cy.get('#password').type('senhaerrada')
      cy.get('button[type="submit"]').click()

      cy.contains('span', 'Usuário ou senha inválidos').should('be.visible')
    })

    it('Deve exibir mensagem de erro com campos vazios', () => {
      cy.get('button[type="submit"]').click()

      cy.contains('span', 'Usuário ou senha inválidos').should('be.visible')
    })

    it('Deve fechar popup de confirmação ao clicar fora (bug: sem botão cancelar)', () => {
      cy.get('#email').type('qa@test.com')
      cy.get('#password').type('123456')
      cy.get('button[type="submit"]').click()

      cy.contains('Seu login está incorreto, quer continuar?').should('be.visible')
      cy.get('body').click(0, 0) // clica fora do popup para fechar
      cy.contains('Seu login está incorreto, quer continuar?').should('not.exist')
    })
  })
})
