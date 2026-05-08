describe('Bancos de Dados - Gestão de Itens', () => {
  beforeEach(() => {
    cy.login()
    cy.navigateToBancoDados()
  })

  context('Validação de interface', () => {
    it('Deve acessar a área de Bancos de dados', () => {
      cy.contains('Nome do banco de dados').should('be.visible')
    })

    it('Deve abrir o modal de criação de item', () => {
      cy.contains('button', 'Criar').click()

      cy.contains('Adicionar novo item').should('be.visible')
      cy.contains('button', 'Salvar').should('be.visible')
    })
  })

  context('Validações de campo', () => {
    it('Deve exibir validação ao tentar salvar item sem nome', () => {
      cy.contains('button', 'Criar').click()
      cy.contains('button', 'Salvar').click()

      cy.contains('O nome do item é obrigatório').should('be.visible')
    })
  })

  context('Caminho feliz - Criação', () => {
    it('Deve criar um novo banco de dados com sucesso', () => {
      const nomeDados = `Banco ${Date.now()}`

      cy.contains('button', 'Criar').click()
      cy.get('input[placeholder="Nome do item"]').type(nomeDados)
      cy.contains('button', 'Salvar').click()

      cy.contains(nomeDados).should('be.visible')
    })
  })

  context('Caminho não feliz - Duplicidade', () => {
    it('Deve permitir criar bancos de dados com nomes duplicados', () => {
      const nomeDados = `Banco Duplicado ${Date.now()}`

      // Cria o primeiro item
      cy.contains('button', 'Criar').click()
      cy.get('input[placeholder="Nome do item"]').type(nomeDados)

      cy.contains('button', 'Salvar').click()
      cy.contains(nomeDados).should('be.visible')

      // Tenta criar segundo item com mesmo nome
      cy.contains('button', 'Criar').click()
      cy.get('input[placeholder="Nome do item"]').type(nomeDados)
      
      cy.contains('button', 'Salvar').click()

      // Valida que há mais de uma ocorrência do nome
      cy.get('body').then(($body) => {
        const ocorrencias = $body.find(`:contains("${nomeDados}")`).length
        expect(ocorrencias).to.be.greaterThan(1)
      })
    })
  })
})
