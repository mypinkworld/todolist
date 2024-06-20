describe("Todo List Page", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });

  it("should display the main header", () => {
    cy.get("h1").contains("My todo list");
  });

  it("should display the todo list header and existing todos", () => {
    cy.contains("My List"); // Kontrollera att det finns en lista
    cy.contains("New Todo").should("exist"); // Kontrollera att det finns en todo
    cy.get('.todo-item').should('have.length.at.least', 1); // Kontrollera att det finns minst en todo
  });

  it("should be able to add a new todo and with description", () => {
    cy.contains("Add Todo").should("exist");
    cy.get('input[name="todo"]').type('Köpa Mat');
    cy.get('input[name="Description"]').type('Mjölk, Honung');
    cy.contains('button', 'Add Todo').click();
    cy.contains('Köpa Mat').should('exist');
    cy.contains("Mjölk, Honung").should("exist"); //kollar att det finns en beskrivning
  });

  // it("should be able to delete an existing todo", () => {
  //   // Antag att "Köp kattmat" är den todo vi vill ta bort
  //   cy.contains("Köp kattmat").should("be.visible");
  //   // Klicka på borttagningsknappen för "Köp kattmat"
  //   // Antag att varje todo har en associerad 'Delete' knapp. Du kan behöva använda en mer specifik selektor här.
  //   cy.get('input[name="delete"]').type('Köp kattmat');
  //   cy.contains('Köp kattmat').parent().contains('button', 'Delete Todo').click();
  //   cy.contains("Köp kattmat").should("not.exist");
  // });
    it('should open a confirmation dialog when attempting to delete a todo', () => {
      cy.contains('.todo-item', 'Köp kattmat').find('.delete-btn').click();
      cy.contains("Are you sure you want to delete?").should('exist');
      cy.contains('button', 'Yes').click();
      cy.contains('button', 'Delete Todo').click();
  });

  it("should display the 'Add Todo' button", () => {
    cy.contains("Add Todo").should("exist");
    cy.get('input[name="todo"]').type('Köpa Mat');
    cy.contains('button', 'Add Todo').click();
    cy.contains('Köpa Mat').should('exist');
  });

  it("should be able to mark a todo as completed", () => {
    // Lägg till en ny todo som vi kan markera som completed
    cy.get('input[name="todo"]').type('First Todo');
    cy.contains('button', 'Add Todo').click();
    // Markera todo som completed
    cy.contains('.todo-item', 'First Todo').within(() => {
    cy.contains('button', 'Completed').click();
    });
  });
});
