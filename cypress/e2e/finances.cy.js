describe('Transações', () => {
//hooks - before| after| beforeEach
beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/')
});

    it('Cadastrar entradas', () => {
        criarTransacao("Freela", 200)
        cy.get("tbody tr td.description").should("have.text", "Freela")
        criarTransacao("uber", 300)
        cy.get("tbody tr td.description").should("have.text", "uber")

    });
    it('Cadastrar saidas', () => {
        criarTransacao("Cinema", -56)
        cy.get("tbody tr td.description").should("have.text", "Cinema")
    })

    it('Excluir transações', () => {
        criarTransacao("Freela", 120)
        criarTransacao("cafe", 10)
        cy.contains(".description", "Freela").parent().find('img').click()
        cy.get('tbody tr').should("have.length", 1)
    })
});

function criarTransacao(descricao,valor) {
    cy.contains("Nova Transação").click()
        cy.get("#description").type(descricao)
        cy.get("#amount").type(valor)
        cy.get("#date").type("2024-09-17")
        cy.contains('button', 'Salvar').click()
}
