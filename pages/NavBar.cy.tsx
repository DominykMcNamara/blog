import NavBar from "@/app/components/NavBar";

describe("<NavBar />", () => {
  it("Should render and display expected content", () => {
    cy.mount(<NavBar />);
    cy.get("nav").should("not.be.empty");
    cy.get("a")
      .should("not.be.empty")
      .and(($a) => {
        expect($a).to.have.length(3);
        expect($a).to.have.attr("href");
      });
    cy.get('[data-cy="title-link"]').should("contains.text", "NXTBLOG");
    cy.get('[data-cy="home-link"]').should("contains.text", "Home");
    cy.get('[data-cy="account-link"]').should(
      "contains.text",
      "Login"
    );
  });
});
