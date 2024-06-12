import { db } from "./db";

async function main() {
  await db.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "Hello World",
      content: "This is a test post",
    //   authorId: 123, // Replace 123 with the actual authorId value
    },
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
