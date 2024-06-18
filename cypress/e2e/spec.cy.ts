describe("Todo List Page", () => {
  beforeEach(() => {
    cy.task("reseed");
  });
  afterEach(() => {
    cy.visit("/");
    cy.contains('button', 'Add Todo').click();
    cy.get('input[name="todo"]').type('Köpa Mat');
    cy.contains('button', 'Add Todo').click();
  });
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains("My todo list");
    cy.contains("My List"); //kollar att det finns en todolist
    cy.contains("New Todo").should("exist"); //kollar att de finns en todo
  });
  it('should display todos', () => {
    cy.get('div').should('have.length.at.least', 1); // att det finns en todo
  });
  // it('should correctly mark a completed todo', () => {
  //   cy.contains('span', 'Köp kattmat')
  // });
  it("should delete a todo", () => {
    cy.visit("/");
    cy.contains("Köp kattmat").should("be.visible");
    cy.contains('button', 'Delete Todo').click();
    // cy.contains("Köp kattmat").should("not.exist"); //kollar att köp kattmat inte finns längre RIGHT??
  });
  it("should display the 'Add Todo' button", () => {
    cy.visit("/");
    cy.contains('button', 'Add Todo').should('be.visible');
  });
});
