describe("App Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("adds text into state and toggle visibility", () => {
    cy.get(":nth-child(1) > .font-light").type("Humayun Ahmed");
    cy.get(".grid > :nth-child(2) > .font-light").type(
      "humayun200044@diit.edu.bd"
    );
    cy.get(".grid > :nth-child(3) > .font-light").type("17/05/2000");
    // cy.get("#countries").click();
    cy.get("form > :nth-child(2) > .font-light").type("01789896378");
    cy.get("form > :nth-child(3) > .font-light").type(
      "Lorem Ipsum is simply dummy text of the printing and typesetting "
    );
  });
});
