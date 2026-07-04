"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505]">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

        <h1 className="text-4xl font-black text-white">
          SmartLens Admin
        </h1>

        <p className="mt-4 text-gray-400">
          Sign in with your Google account to continue.
        </p>

        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard",
            })
          }
          className="mt-8 w-full rounded-full bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-700"
        >
          Continue with Google
        </button>

      </div>

    </main>
  );
}