Todo List

## Beskrivning
Snaark är en webbapplikation för att skapa en todo-lista. Användare kan skapa, se och radera todo-uppgifter. Applikationen är byggd med Next.js för frontend, Prisma och Node.js för backend, och använder en databas för att lagra todo-uppgifter. Automatiserade end-to-end (E2E) tester har implementerats med Cypress för att säkerställa att applikationen fungerar som förväntat.

## Funktionalitet för todo-list
- Skapa nya todo med titlar och beskrivningar.
- Visa en lista med befintliga todo-uppgifter.
- Markera uppgifter som är klara.
- Ta bort uppgifter från listan.
- Hantera felaktig inmatning av todo( tomma titlar eller för långa titlar).
- Cypress för att se till att funktioner finns.

## Installation

### Använt 

- Next.js
- TypeScript
- Material-UI
- Prisma
- Cypress

### Steg för installation

1. Installera nödvändiga paket:
    ```bash
    npm install
    ```

2. Installera Prisma CLI globalt om du inte redan har de installerat:
    ```bash
    npm install -g prisma
    ```

3. Skapa en `.env`-fil i projektmappen och lägg till din databas URL:
    ```env
    DATABASE_URL=""
    ```

4. Prisma för att sätta upp synka upp database:
    ```bash
    npx prisma bd push
    ```

5. Seed för att fylla databasen med initial data:
    ```bash
    npm run seed
    ```

## Användning

### Bygg och kör applikationen

1. Starta utvecklingsservern:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

2. För att öppna Prisma Studio och se databasens innehåll:
    ```bash
    npx prisma studio
    ```

### Testning

1. Kör Cypress tester:
    ```bash
    npm test
    ```

2. Detta kommando startar utvecklingsservern på port 3100 och öppnar Cypress test runner där du kan köra de automatiserade E2E-testerna för applikationen.

3. För att pusha schemaändringar till testdatabasen:
    ```bash
    npm run test:push

## Look at more of my git stuff here:
https://github.com/mypinkworld
- elin

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.