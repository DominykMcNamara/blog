import Hero from "@/app/components/Hero";

describe("<Hero />", () => {
  it("Should render and display expected content", () => {
    cy.mount(<Hero />);
    cy.get("#hero").should("not.be.empty");
    cy.get("a")
      .should("not.be.empty")
      .and(($a) => {
        expect($a).to.have.length(3);
        expect($a).to.have.attr("href");
      });
    cy.get('[data-cy="hero-title"]').should(
      "contains.text",
      "Welcome to NXTBLOG"
    );
    cy.get('[data-cy="signup-link"]')
      .should("contains.text", "Signup")
      .and("not.be.disabled");
    cy.get('[data-cy="login-button"]')
      .should("contains.text", "Login or Signup")
      .and("not.be.disabled");
    cy.get('[data-cy="learn-more-button"]')
      .should("contains.text", "Learn More")
      .and("not.be.disabled")

    cy.get("img")
      .should("be.visible")
      .and(($img) => {
        expect($img).to.have.length(2);
        expect($img).to.have.attr("src");
        expect($img).to.have.attr("alt");
      });
  });
});
