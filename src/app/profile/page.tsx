"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
  });

  return (
    <>
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            {!session?.user ? (
              <>
                <h1>Loading...</h1>
              </>
            ) : (
              <div className="flex items-center gap-8">
                <h2>Welcome {session?.user?.email}</h2>
                <button onClick={() => signOut({ callbackUrl: "/login" })}>
                  Signout
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
