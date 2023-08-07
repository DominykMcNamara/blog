import prisma from "../../../lib/prisma";
import cloudinary from 'cloudinary';
import '../../../lib/cloudinary'
import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
const bcrypt = require("bcrypt");

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, username, email, password, image } = req.body;
  const userNameExist = await prisma?.user.findUnique({
    where: {
      username: username,
    },
  });
  if (userNameExist) {
    return res.status(409).json({ message: "Username already exists" });
  }
  const emailExist = await prisma?.user.findUnique({
    where: {
      email: email,
    },
  });
  if (emailExist) {
    return res.status(409).json({ message: "Email already in use" });
  }
  if (!firstName || !lastName || !username || !email || !password) {
    return res.status(400).json({ message: "Required data is missing" });
  }
  const uploadResult = await cloudinary.v2.uploader.upload(image, {
    folder: 'user-profiles', // Folder where images will be stored in Cloudinary
  });
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma?.user.create({
    data: {
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      image: uploadResult.secure_url
    },
  });

  const account = await prisma?.account.create({
    data: {
      userId: newUser?.id || "err",
      type: "credentials",
      provider: "credentials",
      providerAccountId: newUser?.id || "err",
    },
  });
  if (newUser && account) {
    res.status(200).json({
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      username: newUser.username,
      image: newUser.image
    });
  } else {
    res.status(500).json({
      message: "Unable to create account.",
    });
  }
}
