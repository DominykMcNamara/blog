describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Welcome to NXTBLOG')
    cy.get('p').contains('Signup to begin blogging and sharing your posts with the world!')
  })
})