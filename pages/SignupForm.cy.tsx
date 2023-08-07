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
        expect($input).to.have.length(6);
        expect($input).to.have.attr("type");
      });
    cy.get("button").should("have.attr", "type");
  });
});
