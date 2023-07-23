import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/prisma';

const authHandler: NextApiHandler = (req, res) => (NextAuth as any)(req, res, options);
export default authHandler;

const options: NextAuthOptions = {
  providers: [],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};
