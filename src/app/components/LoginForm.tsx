"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form  className="flex flex-col my-5 w-96 mx-auto p-5 bg-slate-200 rounded-lg">
        <input
          className="my-5 p-2 outline-none rounded-sm"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          className="my-5 p-2 outline-none rounded-sm"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-violet-500 p-2 text-slate-100 rounded-sm hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
      <Link cy-data='login-signup' className="text-center no-underline hover:underline my-5" href="/signup">
        Dont have an account? Create a free account here
      </Link>
    </>
  );
}
