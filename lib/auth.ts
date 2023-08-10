import prisma from "./prisma";
import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma?.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (
          !user ||
          !(await bcrypt.compare(credentials.password, user.password))
        ) {
          return null;
        }
        console.log(user);
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          image: user.image,
          bio: user.bio,
          link: user.link,
          location: user.location,
          pronouns: user.pronouns,
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      const userData = await prisma?.user.findUnique({
        where: {
          email: session.user?.email || undefined,
        },
      });
      return {
        ...session,
        user: {
          ...session.user,
          userId: userData?.id,
          firstName: userData?.firstName,
          lastName: userData?.lastName,
          username: userData?.username,
          id: token.id,
          randomKey: token.randomKey,
          image: userData?.image,
          bio: userData?.bio,
          location: userData?.location,
          pronouns: userData?.pronouns,
          link: userData?.link,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
