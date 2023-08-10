import SignupForm from "@/app/components/SignupForm";


describe("<SignupForm />", () => {
  beforeEach(() => {
    cy.mount(<SignupForm />)
  })
  it("Should render and display expected content", () => {
    cy.get("form").should("not.be.empty");
    cy.get("input")
      .should("to.be.empty")
      .and(($input) => {
        expect($input).to.have.length(7);
        expect($input).to.have.attr("type");
      });
      cy.get("label")
      .should("not.be.empty")
      .and(($label) => {
        expect($label).to.have.length(9);
      });
    cy.get("button").should("have.attr", "type");
  });
});

