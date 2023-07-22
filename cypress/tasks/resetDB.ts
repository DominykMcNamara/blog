import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function resetDB() {
    return prisma.user.deleteMany({})
}