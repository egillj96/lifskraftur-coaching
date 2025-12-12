"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("signup");

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#d6eafe] flex flex-col items-center px-6 py-10">
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-[#1e344e]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-semibold tracking-wide text-lg text-[#d6eafe]"
            >
              Lífskraftur - Fjarþjálfun
            </Link>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href="/"
              className="text-[#9ddcff] hover:text-[#c2ecff] transition"
            >
              Heim
            </Link>
            <a
              href="/#coaching"
              className="text-[#9ddcff] hover:text-[#c2ecff] transition"
            >
              Þjálfun
            </a>
            <a
              href="/#about"
              className="text-[#9ddcff] hover:text-[#c2ecff] transition"
            >
              Um mig
            </a>
            <Link
              href="/auth"
              className="px-4 py-2 rounded-lg bg-[#5ecbff] hover:bg-[#7fd8ff] text-[#020813] font-medium transition shadow-md shadow-[#5ecbff]/30"
            >
              Stofna aðgang / Innskráning
            </Link>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="flex-1 w-full flex items-center justify-center">
        <div className="mt-32 w-full max-w-md">
          {/* Heading */}
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-3xl font-semibold text-[#e4f2ff]">
              Taktu næsta skref í þjálfun
            </h1>
            <p className="text-sm text-[#9bb4d8]">
              Búðu til aðgang til að fá aðgang að innra netinu, æfingum, venjum
              og eftirfylgni.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex mb-6 rounded-xl bg-[#050b18] border border-[#1e344e] p-1">
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`flex-1 px-4 py-2 text-sm rounded-lg transition ${
                mode === "signup"
                  ? "bg-[#5ecbff] text-[#020813] font-medium shadow-md shadow-[#5ecbff]/30"
                  : "text-[#9bb4d8] hover:text-[#d6eafe] hover:cursor-pointer"
              }`}
            >
              Skráning
            </button>
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 px-4 py-2 text-sm rounded-lg transition ${
                mode === "login"
                  ? "bg-[#5ecbff] text-[#020813] font-medium shadow-md shadow-[#5ecbff]/30"
                  : "text-[#9bb4d8] hover:text-[#d6eafe] hover:cursor-pointer"
              }`}
            >
              Innskráning
            </button>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-[#0d1624]/80 border border-[#1e344e] px-5 py-6 shadow-xl shadow-black/30">
            {mode === "signup" ? (
              <SignupForm />
            ) : (
              <LoginForm onSwitchToSignup={() => setMode("signup")} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function SignupForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to your signup API (NextAuth / custom route)
    // For now you can console.log or toast.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-[#7fd8ff] mb-1">
        Búðu til aðgang
      </h2>
      <p className="text-xs text-[#9bb4d8] mb-2">
        Fylltu út upplýsingarnar hér fyrir neðan til að stofna aðgang að
        Lífskraftur innra netinu.
      </p>

      <input
        type="text"
        name="name"
        placeholder="Nafn"
        className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Tölvupóstur"
        className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Lykilorð"
        className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Staðfesta lykilorð"
        className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
        required
      />

      {/* Optional: simple role selection for future (client by default) */}
      <input type="hidden" name="role" value="client" />

      <button
        type="submit"
        className="w-full px-6 py-3 rounded-xl bg-[#5ecbff] hover:bg-[#7fd8ff] hover:cursor-pointer text-[#020813] font-medium transition shadow-lg shadow-[#5ecbff]/30"
      >
        Stofna aðgang
      </button>

      <p className="text-[11px] text-[#7a8fb3] mt-1">
        Með því að stofna aðgang samþykkir þú{" "}
        <span className="underline underline-offset-2 decoration-[#5ecbff]/70">
          skilmála þjálfunar
        </span>{" "}
        og meðferð persónuupplýsinga.
      </p>
    </form>
  );
}

type LoginFormProps = {
  onSwitchToSignup: () => void;
};

function LoginForm({ onSwitchToSignup }: LoginFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to your login API / NextAuth signIn()
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-[#7fd8ff] mb-1">Innskráning</h2>
      <p className="text-xs text-[#9bb4d8] mb-2">
        Skráðu þig inn til að sjá æfingaáætlun, venjur og eftirfylgni.
      </p>

      <input
        type="email"
        name="email"
        placeholder="Tölvupóstur"
        className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Lykilorð"
        className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
        required
      />

      <button
        type="submit"
        className="w-full px-6 py-3 rounded-xl bg-[#5ecbff] hover:bg-[#7fd8ff] hover:cursor-pointer text-[#020813] font-medium transition shadow-lg shadow-[#5ecbff]/30"
      >
        Skrá mig inn
      </button>

      <div className="flex items-center justify-between mt-1">
        <button
          type="button"
          className="text-[11px] text-[#9bb4d8] hover:text-[#c2ecff] underline underline-offset-2"
        >
          Gleymt lykilorð?
        </button>
        <p className="text-[11px] text-[#9bb4d8]">
          Ekki með aðgang?{" "}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="underline underline-offset-2 text-[#c2ecff] hover:cursor-pointer"
          >
            Skrá mig
          </button>
        </p>
      </div>
    </form>
  );
}
