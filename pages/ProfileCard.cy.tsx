import ProfileCard from "@/app/components/ProfileCard";

describe("<ProfileCard />", () => {
  it("Should render and display expected content", () => {
    cy.mount(
      <ProfileCard
        firstName="Dominyk"
        lastName="McNamara"
        email="dominyksmith@gmail.com"
        username="DominykMcNamara"
        location="Planet Earth"
        link="google.com"
        pronouns="He/Him"
        bio="Hello World"
      />
    );

    cy.get("#profileInfo").should("not.be.empty");
    cy.get('[data-cy="name"]').should("contain", "Dominyk McNamara | He/Him");
    cy.get('[data-cy="username"]').should("contains.text", "@DominykMcNamara");
    cy.get('[data-cy="location"]').should("contains.text", "Planet Earth");
    cy.get('[data-cy="link"]').should("contains.text", "google.com");
    cy.get('[data-cy="bio"]').should("contains.text", "Hello World");
  });
});
