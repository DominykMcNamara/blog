describe("<LoginForm />", () => {
  it("Should navigate to the Login page", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[cy-data="login-signup"]').click();
    cy.url().should("include", "/signup");
  });
});
describe("Logging in", () => {
  before(() => {
    cy.task("resetDB");
    cy.task("seedDB");
    cy.createUser("lady", "McNamara", "lady@lady.com", "lady", "lady");
    cy.login("lady@lady.com", "lady");
  });
  it("should take the user to their profile page", () => {
    cy.getCookie("next-auth.callback-url").should("exist");
  });
});
