import prisma from '../../lib/prisma'

export default async function seedDB() {
    return await prisma?.user.createMany({
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