import Footer from "@/app/components/Footer";

describe('<Footer />', () => {
    it('Should render and display expected content', () => {
        cy.mount(<Footer/>)
        cy.get("footer").should("not.be.empty")
        cy.get("a")
        .should("not.be.empty")
        .and(($a) => {
          expect($a).to.have.length(2);
          expect($a).to.have.attr("href");
        });
        cy.get('[data-cy="footer-title"]').should('contains.text', "NXTBLOG")
        cy.get('[data-cy="footer-link"]').should('contains.text', "Support")
        cy.get('[data-cy="footer-copy"]').should('contains.text', "2023 Dominyk McNamara")
    })
})