describe('Home Page', () => {
  it('The Home Page should have a nav bar, footer, hero, and features sections', () => {
    cy.visit('/')
    cy.get('nav').should('be.visible')
    cy.get('footer').should('be.visible')
    cy.get('#hero').should('be.visible')
    cy.get('#features').should('be.visible')
  })
})