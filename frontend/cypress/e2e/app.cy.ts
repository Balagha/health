/// <reference types="Cypress"/>

describe("App Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("adds text into state and toggle visibility", () => {
    cy.get('[placeholder="Name"]').type("Humayun Ahmed");
    cy.get('[type="email"]').type("humayun200044@diit.edu.bd");
    cy.get('[type="password"]').type("123456789");
    cy.get('[placeholder="blood group"]').type("O+");
    cy.get('[placeholder="contact number"]').type("01789896378");
    cy.get('[placeholder="address"]').type(
        "House no-31/B, Road no-4, Block-C, Munsurabad, Adabor, Dhaka-1207"
    );
    cy.get('[placeholder="profession"]').type("Student");
    cy.get('[placeholder="passort/nid/birth certificate number"]').type(
        "123456789"
    );
    // cy.get(".flex > .bg-blue-500").click();
  });
});
