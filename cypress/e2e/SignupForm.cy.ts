describe('<SignupForm />', () => {
    beforeEach(() => {
        cy.visit("/signup")
        cy.task("resetDB");
        cy.task("seedDB");
    })
    it('Should create a new user', () => {
      cy.createUser("lady", "McNamara", "lady@lady.com", "lady", "lady");
      cy.url().should('contain', '/login')
    })
  
      
})