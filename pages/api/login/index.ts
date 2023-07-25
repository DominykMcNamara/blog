import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
const bcrypt = require("bcrypt");

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Required data is missing" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma?.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res
      .status(401)
      .json({ message: "Username or password is incorrect" });
  }
  const passwordCheck = await bcrypt.compare(hashedPassword, user.password);
  if (!passwordCheck) {
    return res
      .status(401)
      .json({ message: "Username or password is incorrect" });
  }
  console.log(user)
  return res.status(201).json({ User: user });
}
