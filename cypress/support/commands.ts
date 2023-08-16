/// <reference types="cypress" />
export {};

Cypress.Commands.add(
  "createUser",
  (
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string
  ) => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[cy-data="firstName"]').focus()
    cy.get('[cy-data="firstName"]').type(firstName);
    cy.get('[cy-data="lastName"]').focus()
    cy.get('[cy-data="lastName"]').type(lastName);
    cy.get('[cy-data="email"]').focus();
    cy.get('[cy-data="email"]').type(email);
    cy.get('[cy-data="username"]').focus();
    cy.get('[cy-data="username"]').type(username);
    cy.get('[cy-data="password"]').focus();
    cy.get('[cy-data="password"]').type(password);
    cy.get('[cy-data="signup-button"]').click();
    //cy.url().should("include", "/login");
  }
);

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("http://localhost:3000/login");
  cy.get('[cy-data="login-email"]').focus()
  cy.get('[cy-data="login-email"]').type(email);
  cy.get('[cy-data="login-password"]').type(password);
  cy.get('[cy-data="login-button"]').click();
  
 
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      createUser(
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        password: string
      ): Chainable;

      login(email: string, password: string): Chainable;
    }
  }
}
