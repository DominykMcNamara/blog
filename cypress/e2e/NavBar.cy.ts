describe("<NavBar /> - No session", () => {
  it("Should navigate to the Home page", () => {
    cy.visit("/");
    cy.get('[data-cy="home-link"]').click();
    cy.url().should("include", "/");
    cy.get('[data-cy="hero-title"]').contains("Welcome to NXTBLOG");
  });
  it("Should navigate to the Login page", () => {
    cy.visit("/");
    cy.get('[data-cy="account-link"]').click();
    cy.url().should("include", "/login");
  });
});
