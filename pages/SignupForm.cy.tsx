import SignupForm from "@/app/components/SignupForm";

describe("<SignupForm />", () => {
  it("Should render and display expected content", () => {
    cy.mount(<SignupForm />);
    cy.get("form").should("not.be.empty");
    cy.get("input")
      .should("to.be.empty")
      .and(($input) => {
        expect($input).to.have.length(3);
        expect($input).to.have.attr("type");
      });
    cy.get("button").should("have.attr", "type");
  });
});