import prisma from '../../lib/prisma'

export default async function resetDB() {
    return prisma?.user.deleteMany({})
}