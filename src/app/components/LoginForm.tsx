"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";


function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/profile";
async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  try {
  const result = await signIn('credentials', {email, password, callbackUrl})
  if (!result?.error) {
    console.log(result)
    router.push(callbackUrl)
  }
  else {
    console.log('Wrong email or password')
  }
} catch(error) {
  console.log(error)
}
}
  return (
    <>
      <form
       onSubmit={handleSubmit}
        className="flex flex-col my-5 w-96 mx-auto p-5 bg-slate-200 rounded-lg"
      >
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
        <button   className="bg-violet-500 p-2 text-slate-100 rounded-sm hover:opacity-90">
          Login
        </button>
      </form>
      <button onClick={() => signOut({ callbackUrl: "/profile" })}>
        Signout
      </button>
      <Link
        cy-data="login-signup"
        className="text-center no-underline hover:underline my-5"
        href="/signup"
      >
        Dont have an account? Create a free account here
      </Link>
    </>
  );
}

export default LoginForm;
