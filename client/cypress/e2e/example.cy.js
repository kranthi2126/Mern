describe('open Home page',()=>{
    it('open home page',()=>{
        cy.visit('/')
        cy.contains('Welcome')
        cy.contains('Register')
        cy.contains('Login')
    })
})