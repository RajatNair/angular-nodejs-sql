/// <reference types="cypress"/>

describe("List Customers", () => {
  it("View customers", () => {
    cy.visit("https://test.aunlead.com");
    cy.url().should("include", "/customers");
  });

  it("Click on customer to view addresses", () => {
    cy.get("tbody > :nth-child(2) > :nth-child(2)").click();
    cy.get(":nth-child(1) > .card-body > .item-sub-heading").should(
      "contain",
      "Address 1:"
    );
  });

  it("Click on customer to hide addresses", () => {
    cy.get("tbody > :nth-child(2) > :nth-child(2)").click();
    cy.get(":nth-child(1) > .card-body > .item-sub-heading").should(
      "not.exist"
    );
  });

  it("Click on multiple customers to view addresses", () => {
    cy.get("tbody > :nth-child(4n+0) > :nth-child(2)").click({
      multiple: true,
    });
    cy.get(
      ":nth-child(n) > .no-padding > .inner-table > :nth-child(1) > .card-body > .item-sub-heading"
    ).should("contain", "Address 1:");
  });
});
