describe("<SignupForm />", () => {
  beforeEach(() => {
    cy.visit("/signup");
    cy.task("resetDB");
    cy.task("seedDB");
  });
  it("Should create a new user and display a success link that takes the user to the login page", () => {
    cy.createUser("lady", "McNamara", "lady@lady.com", "lady", "lady");
    cy.get('[data-cy="login-link"]').should(
      "contain",
      "Account successfully created click here to login!"
    );
  });
  it("Should display an error if the email already exists", () => {
    cy.createUser("cleo", "McNamara", "dom@dom.com", "cleo", "cleo");
    cy.get('[data-cy="signup-error-message"]').should(
      "contain",
      "Username or Email is already in use"
    );
  });
  it("Should display an error if the username already exists", () => {
    cy.createUser("cleo", "McNamara", "cle@cleo.com", "Dom", "cleo");
    cy.get('[data-cy="signup-error-message"]').should(
      "contain",
      "Username or Email is already in use"
    );
  });
});
