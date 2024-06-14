describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains(" My todo list");
    cy.contains("My List"); //kollar att det finns en todolist
    cy.contains("New Todo").should("exist"); //kollar att de finns en todo
  });
  it("should delete a todo", () => {
    cy.visit("/");
    cy.get("button").click(); //klickar på knappen delete
    cy.contains("Köp kattmat").should("not.exist"); //kollar att köp kattmat inte finns längre RIGHT??
  });
});
