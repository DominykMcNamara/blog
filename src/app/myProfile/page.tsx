"use client";
import { useEffect } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
     onUnauthenticated() {
      router.push('/login')
    },
  });

  return (
    <>
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            {!session?.user ? (
             <>
             <p>Loading...</p>
             </>
            ) : (
              <div className="flex items-center gap-8">
                <h2>Welcome {session?.user?.email}</h2>
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt="profilepic"
                    height={300}
                    width={300}
                  />
                )}
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
