import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        firstName: "Dom",
        lastName: "McNamara",
        username: "Dom",
        password: "dom",
        email: "dom@dom.com",
      },
      {
        firstName: "Mackenzie",
        lastName: "McNamara",
        username: "Mackenzie",
        password: "Mackenzie",
        email: "Mackenzie@Mackenzie.com",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
