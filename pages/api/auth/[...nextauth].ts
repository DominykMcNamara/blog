import NextAuth, { AuthOptions, RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";
import { randomUUID } from "crypto";
import Cookies from "cookies";
import { encode, decode } from "next-auth/jwt";
const bcrypt = require("bcrypt");
import prisma from "../../../lib/prisma";

type SessionStrategy = 'database';

function generateSessionToken() {
  return randomUUID();
}

function fromDate(time, date = Date.now()) {
  return new Date(date + time * 1000);
}

const adapter = PrismaAdapter(prisma);
export default async function handler(req, res) {
  const options: AuthOptions = {
    adapter: adapter as Adapter,
    providers: [
      CredentialsProvider({
        name: "Credentials",
        type: "credentials",
        credentials: {
          email: {
            label: "email",
            type: "text",
            placeholder: "email@email.com",
          },
          password: {
            label: "password",
            type: "password",
            placeholder: "Secret123",
          }
        },
          async authorize(credentials) {
            
              const user = await prisma?.user.findUnique({
                where: {
                  email: credentials?.email,
                },
              });
              if (!user) {
                console.log("err");
                return null;
              }
              const passwordCheck = await bcrypt.compare(
                credentials?.password,
                user?.password
              );
              if (!passwordCheck) {
                console.log("wrong password");
                return null;
              }
              if (user && passwordCheck) {
                console.log(user);
                return user;
              }
            }
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if (
          req.query.nextauth.includes("callback") &&
          req.query.nextauth.includes("credentials") &&
          req.method === "POST"
        ) {
          if (user) {
            const sessionToken = generateSessionToken();
            const sessionMaxAge = 60 * 60 * 24 * 30;
            const sessionExpiry = fromDate(sessionMaxAge);
  
            await adapter.createSession({
              sessionToken: sessionToken,
              userId: user.id,
              expires: sessionExpiry,
            });
  
            const cookies = new Cookies(req, res);
  
            cookies.set("next-auth.session-token", sessionToken, {
              expires: sessionExpiry,
            });
            console.log(user)
  
            // Return the sessionToken or true (indicating successful sign-in)
            console.log(sessionToken)
            return sessionToken;
          }
        }
        
        // Return false if sign-in was not successful
        return false;
      },
    },
    session: {
      strategy: "jwt", // Store sessions in the database and store a sessionToken in the cookie for lookups
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours
    },
    jwt: {
      encode: async ({ token, secret, maxAge }) => {
        if (
          req.query.nextauth.includes("callback") &&
          req.query.nextauth.includes("credentials") &&
          req.method === "POST"
        ) {
          const cookies = new Cookies(req, res);
          const cookie = cookies.get("next-auth.session-token");

          console.log("pure Cookie: ", cookie); // <<< Make sure cookie is not undefined. i used cookies-next to get/set the cookie which worked perfectly
          if (cookie) return cookie;
          else return "";
        }
        return encode({ token, secret, maxAge }); // <<<<<<   This needed to be wrapped with braces
      },
      decode: async ({ token, secret }) => {
        if (
          req.query.nextauth.includes("callback") &&
          req.query.nextauth.includes("credentials") &&
          req.method === "POST"
        ) {
          return null;
        }
        return decode({ token, secret }); //  <<<<<  This needed to be wrapped with braces
      },
    },
  };
  return await NextAuth(req, res, options);
}
