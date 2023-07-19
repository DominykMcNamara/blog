import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
const bcrypt = require("bcrypt");

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, username, email, password } = req.body;
  if (!firstName || !lastName || !username || !email || !password) {
    return res.json({ message: "Required data is missing" });
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = await prisma?.user.create({
    data: {
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    },
  });
  return res.json({ User: newUser });
}
