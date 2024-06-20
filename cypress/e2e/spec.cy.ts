describe("Todo List Page", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });
    it("should display the main header", () => {
      cy.get("h1").contains("My todo list");
      // cy.visit("/");
    });

    it("should display the todo list header and existing todos", () => {
    cy.contains("My List"); //kollar att det finns en todolist
    cy.contains("New Todo").should("exist"); //kollar att de finns en todo
    cy.get('div').should('have.length.at.least', 1); // att det finns en todo
  });

  it("should be able to add a new todo and with description", () => {
    cy.contains("Add Todo").should("exist");
    cy.get('input[name="todo"]').type('Köpa Mat');
    cy.get('input[name="Description"]').type('Mjölk, Honung');
    cy.contains('button', 'Add Todo').click();
    cy.contains('Köpa Mat').should('exist');
    cy.contains("Mjölk, Honung").should("exist"); //kollar att det finns en beskrivning
  });

    it("should delete a todo", () => {
      cy.visit("/");
      cy.contains("Köp kattmat").should("be.visible");
      cy.contains('button', 'Delete Todo').click();
      // cy.contains("Köp kattmat").should("not.exist"); //kollar att köp kattmat inte finns längre RIGHT??
    });

    it("should display the 'Add Todo' button", () => {
      cy.visit("/");
      cy.contains("Add Todo").should("exist");
        cy.get('input[name="todo"]').type('Köpa Mat');
        cy.contains('button', 'Add Todo').click();
    });
    
    it("should be able to mark a todo as Completed", () => {
      cy.contains('button', 'Completed').click();
      cy.contains('First Todo').should('text-decoration', 'line-through'); // 
    });
});
