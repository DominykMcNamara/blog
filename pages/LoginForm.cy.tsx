import LoginForm from "@/app/components/LoginForm";

describe("<LoginForm />", () => {
  it("Should render and display expected content", () => {
    cy.mount(<LoginForm />);
    cy.get("form").should("not.be.empty");
    cy.get("input")
      .should("to.be.empty")
      .and(($input) => {
        expect($input).to.have.length(2);
        expect($input).to.have.attr("type");
      });
    cy.get("button").should("have.attr", "type");
    cy.get("a").should("have.attr", "href");
  });
});
