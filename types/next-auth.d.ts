import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lasName: string;
      username: string;
      email: string;
      image: string;
    };
  }
}
