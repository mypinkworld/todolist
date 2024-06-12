import { db } from "./db";

async function main() {
// ALDRIG LÅTA DETTA FUNKA UTANFÖR EN TEST MIJLÖ FÖR ATT INTE RÅKA TA BORT DATABASEN
  if (process.env.NODE_ENV !== "test") return; 
  await db.post.deleteMany({});
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
