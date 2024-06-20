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

  it("should not allow adding a New Todo with an empty string", () => {
    cy.contains('button', 'Add Todo').click();
    cy.get('[data-cy="todo-error"]').should('contain', 'New Todo cannot be empty');
    cy.contains('New Todo cannot be empty').should('exist');
  });
  
  it('should display an error for New Todo longer than 10 letters', () => {
    cy.get('input[name="todo"]').type('LongerThanTenCharacters');
    cy.get('button').contains('Add Todo').click();
    cy.get('[data-cy="todo-error"]').should('contain', 'Todo cannot be more than 10 letters');
  });

  it('should open a confirmation dailog when trying to delete a todo', () => {
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
