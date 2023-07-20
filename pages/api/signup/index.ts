import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
const bcrypt = require("bcrypt");

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, username, email, password } = req.body;
  const userNameExist = await prisma?.user.findUnique({
    where: {
      username: username,
    },
  });
  if (userNameExist) {
    return res.json({ message: "Username already exists" });
  }
  const emailExist = await prisma?.user.findUnique({
    where: {
      email: email,
    },
  });
  if (emailExist) {
    return res.json({ message: "Email already in use" });
  }
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
