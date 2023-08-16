"use client";
import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfilePic from "../components/ProfilePic";
import ProfileCard from "../components/ProfileCard";
import CreateBlogPost from "../components/CreateBlogPost";

export default function Profile() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  return (
    <div className="min-h-[100vh] flex flex-row">
      {!session ? (
        <h1 className="text-center text-2xl mt-40">Loading...</h1>
      ) : (
        <>
          <section
            id="left-profile-info"
            className="  min-h-screen w-[25vw]"
          >
            <div className="flex border-solid border-indigo-200 border-2 shadow-xl rounded-xl my-10 space-y-6 p-5 flex-col w-96 mx-auto">
              <ProfilePic img={session.user.image} />
              <ProfileCard
                firstName={session.user.firstName}
                lastName={session.user.lastName}
                username={session.user.username}
                email={session.user.email}
                location={session.user.location}
                pronouns={session.user.pronouns}
                bio={session.user.bio}
                link={session.user.link}
              />
            </div>
          </section>
          <>
            <section id="feed" className="mx-auto">
              <CreateBlogPost username={session.user.username} />
            </section>
          </>
        </>
      )}
    </div>
  );
}
