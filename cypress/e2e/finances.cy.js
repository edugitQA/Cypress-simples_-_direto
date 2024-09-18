describe('Transações', () => {
    it('Cadastrar entradas', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/')
        criarTransacao("Freela", 200)
        cy.get("tbody tr td.description").should("have.text", "Freela")

    });

    it('Cadastrar saidas', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/')
        criarTransacao("Cinema", -56)
        cy.get("tbody tr td.description").should("have.text", "Cinema")
 
    })
});

function criarTransacao(descricao,valor) {
    cy.contains("Nova Transação").click()
        cy.get("#description").type(descricao)
        cy.get("#amount").type(valor)
        cy.get("#date").type("2024-09-17")
        cy.contains('button', 'Salvar').click()
}
