import  NextAuth  from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";     
import { Adapter } from 'next-auth/adapters';

const prisma: PrismaClient = new PrismaClient();

export default NextAuth({
    adapter: PrismaAdapter(prisma) as Adapter,
    providers:[]
}) 






