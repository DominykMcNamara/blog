import FeatureCard from "@/app/components/FeatureCard";

describe("<FeatureCard />", () => {
  it("Should render and display expected content", () => {
    cy.mount(
      <FeatureCard
        img="/images/images"
        alt="test image"
        description="test image description"
      />
    );
    cy.get("#feature-card").should("not.be.empty");
    cy.get("img").should("be.visible");
    cy.get("p").should("be.visible");
  });
});
