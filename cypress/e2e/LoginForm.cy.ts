describe('<LoginForm />', () => {
    it('Should navigate to the Signup page', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('[cy-data="login-signup"]').click()
        cy.url().should('include', '/signup')
        cy.get('h1').contains('Signup')
    
      })
      
})