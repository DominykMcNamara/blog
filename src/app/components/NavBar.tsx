"use client";

import Link from "next/link";

import { signOut, useSession } from "next-auth/react";

export default function NavBar(): JSX.Element {
  const { data: session } = useSession({
    required: false,
  });
  return (
    <nav className="sticky top-0 p-4  bg-violet-500 drop-shadow-xl  z-10">
      <div className="prose prose-xl flex justify-between flex-row mx-auto">
        <h1 className="text-3xl grid place-content-center">
          <Link
            data-cy="title-link"
            className="no-underline text-slate-200"
            href="/"
          >
            &#127760;NXTBLOG
          </Link>
        </h1>
        <div className="flex flex-row justify-center gap-4">
          <Link
            data-cy="home-link"
            className="no-underline text-slate-200 hover:underline  hover:opacity-90"
            href={session ? "/myProfile" : "/"}
          >
            {session ? "Profile" : "Home"}
          </Link>
          <Link
            onClick={() => session ? signOut() : ''}
            data-cy="account-link"
            className="no-underline text-slate-200 hover:underline hover:opacity-95"
            href={session ? "/" : "/login"}
          >
            {session ? "Signout" : "Login"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
