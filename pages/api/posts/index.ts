import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "lib/auth";
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  const { title, content, published } = req.body;
  if (session) {
    const post = await prisma?.post.create({
      data: {
        title,
        content,
        published,
        authorId: session.user.id,
      },
    });
    res.status(200).json({post});
  } else {
    res.status(401).send({ message: "Please login to continue" });
  }
}

export async function GET(res: NextApiResponse) {}
