import { db } from "./db";

async function main() {
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
  
} // man seedar för att testa databasen

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
