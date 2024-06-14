import { defineConfig } from "cypress";
import { db } from "./prisma/db";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3100",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        reseed: reseed,
      });
    },
  },
});

async function reseed() {
  // ALDRIG LÅTA DETTA FUNKA UTANFÖR EN TEST MIJLÖ FÖR ATT INTE RÅKA TA BORT DATABASEN
  if (process.env.NODE_ENV !== "test") {
    throw new Error("Cannot reseed outide of the test environment");
  }

  // RESET
  await db.todo.deleteMany({});

  // SEED
  await db.todo.create({
    data: {
      title: 'First Todo',
      completed: false,
    },
  });

  await db.todo.create({
    data: {
      title: 'Second Todo',
      completed: true,
    },
  });
  const initialTodos = [
    { title: "Köp kattmat", completed: false },
    { title: "Köpa Blommor till Cissi", completed: true },
    { title: "Kolla klart ARCANE", completed: false },
  ];

  await db.todo.createMany({
    data: initialTodos,
  });

  return null;
}
