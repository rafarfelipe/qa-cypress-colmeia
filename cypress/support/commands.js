// Comandos customizados para reutilização

Cypress.Commands.add('login', (email = 'qa@test.com', password = '123456') => {
  cy.visit('/')
  cy.get('#email').type(email)
  cy.get('#password').type(password)
  cy.contains('button', 'Entrar').click()
  cy.contains('button', 'Continuar').click()
  cy.url().should('include', '/dashboard')
})

Cypress.Commands.add('navigateToBancoDados', () => {
  cy.get('a[routerlink="/dashboard/campanha"]').click({ force: true })
  cy.contains('Bancos de dados').click()
  cy.contains('Nome do banco de dados').should('be.visible')
})