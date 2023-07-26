import  NextAuth, { RequestInternal }  from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from 'next-auth/adapters';
const bcrypt = require("bcrypt");
import prisma from '../../../lib/prisma';



export default NextAuth({
    adapter: PrismaAdapter(prisma as PrismaClient) as Adapter,
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
        email: {
            label: 'username',
            type: 'email',
            placeholder: 'email@email.com'
        },
        password: {
            label: 'Password',
            type: 'password',
            placeholder: 'Secret123'
        }
    },
       async authorize(credentials) {
         
            const user = await prisma?.user.findUnique({
                where: {
                    email: credentials?.email
                }
            })
            if (!user) {
                return null
            }
            const hashedPassword = await bcrypt.hash(credentials?.password, 10);
            const passwordCheck = await bcrypt.compare(hashedPassword, user?.password)
            if(!passwordCheck) {
                return null
            }
           if(user) {
            return { ...user }
           }
             
        }
    })
  ]
}) 






