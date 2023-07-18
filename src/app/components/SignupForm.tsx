"use client";
import Link from "next/link";
import { useState } from "react";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <>
      <form className="flex flex-col w-96 mx-auto my-5 p-5 bg-slate-200 rounded-lg">
        <input
          className="my-5 p-2 outline-none rounded-sm"
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <input
          className="my-5 p-2 outline-none rounded-sm"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
        />
        <input
          className="my-5 p-2 outline-none rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
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
    </>
  );
}