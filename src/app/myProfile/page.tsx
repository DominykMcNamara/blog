"use client";
import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfilePic from "../components/ProfilePic";

export default function Profile() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  useEffect(() => console.log(session));


  return (
    <>
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <div className="flex flex-col  items-center gap-8">
              <ProfilePic img={session?.user.image} />
              <h2>Welcome {session?.user.username}</h2>

              <button onClick={() => signOut({ callbackUrl: "/login" })}>
                Signout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
