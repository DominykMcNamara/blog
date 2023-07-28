"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"


export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter()


  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, firstName, lastName, username, password
      })
    })
    console.log(res)
    router.push('/login')

  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col w-96 mx-auto my-5 p-5 bg-slate-200 rounded-lg">
        <input
          className="my-5 p-2 outline-none rounded-sm"
          onChange={(e) => setFirstName(e.target.value)}
          required
          value={firstName}
          type="text"
          cy-data="firstName"
          placeholder="First Name"
        />
        <input
          className="my-5 p-2 outline-none rounded-sm"
          onChange={(e) => setLastName(e.target.value)}
          required
          value={lastName}
          type="text"
          cy-data="lastName"
          placeholder="Last Name"
        />
        <input
          className="my-5 p-2 outline-none rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          cy-data="username"
          value={username}
          required
          placeholder="username"
        />
        <input
          className="my-5 p-2 outline-none rounded-sm"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          cy-data="email"
          value={email}
          required
          placeholder="email"
        />
        <input
          className="my-5 p-2 outline-none rounded-sm"
          type="password"
          value={password}
          cy-data="password"
          required
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-violet-500 p-2 text-slate-100 rounded-sm hover:opacity-90"
          type="submit"
          cy-data="signup-button"
        >
          Signup
        </button>
      </form>
    </>
  );
}
