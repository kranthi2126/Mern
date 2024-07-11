describe('Register page E2E testing',function(){
    beforeEach(function(){
        cy.fixture('user').then((user)=>{
            this.userData=user
        });
    });
    it('Testing Register Page Fun',function(){
        cy.visit('/register');
        cy.get('input[name="Name"]').type(this.userData.name);
        cy.get('input[name="email"]').type(this.userData.email);
        cy.get('input[name="password"]').type(this.userData.password);
        cy.get('button[type="submit"]').click({multiple:true});
        cy.log('Register Functionality is Working');
    })
})