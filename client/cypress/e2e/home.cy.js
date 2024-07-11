describe('Home page test',()=>{
    it('check the input field',()=>{
        cy.visit('/');
        cy.get('input').type('KranthiSree')
        cy.get('button').should('be.visible')
        cy.get('button.bg-blue').click();
        cy.contains('Welcome,KranthiSree')
        cy.get('input').should('have.value','KranthiSree')
    })
})