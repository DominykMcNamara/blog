"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/myProfile";
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true)
    try {
      const result = await signIn("credentials", {
        email: email.toLowerCase(),
        password,
        redirect: false,
        callbackUrl,
      });
      if (!result?.error) {
        setLoading(false)
        router.push(callbackUrl);
      }
      else {
        setLoading(false)
        setError("Email or password is incorrect");
      }
    } catch (err) {
      console.log(err);
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
          cy-data="login-email"
          required
        />
        <input
          className="my-5 p-2 outline-none rounded-sm"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          cy-data="login-password"
          required
        />
        {error && <p className="text-center text-red-500">{error}</p>}
        <button
        disabled={loading}
          cy-data="login-button"
          className="bg-violet-500 p-2 text-slate-100 rounded-sm hover:opacity-90"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
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
