"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import { createClient } from "@/lib/supabase/client";

type AccountMode = "login" | "register";

export default function AccountPage() {
  const [mode, setMode] = useState<AccountMode>("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    const supabase = createClient();

    try {
      if (mode === "register") {
        const { data, error: authError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: fullName.trim(),
            },
            emailRedirectTo: `${window.location.origin}/auth/callback?next=/account/profile`,
          },
        });

        if (authError) throw authError;

        if (data.session) {
          window.location.assign("/account/profile");
          return;
        }

        setMessage(
          "Your account has been created. Please check your email to confirm your address before signing in."
        );
      } else {
        const { error: authError } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (authError) throw authError;

        window.location.assign("/account/profile");
        return;
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function changeMode(nextMode: AccountMode) {
    setMode(nextMode);
    setError("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-pearl">
      <AnnouncementBar />
      <Header />

      <section className="mx-auto flex min-h-[75vh] max-w-[1500px] items-center justify-center px-5 py-16 sm:px-10 lg:py-24">
        <div className="grid w-full max-w-5xl overflow-hidden border border-black/10 bg-white lg:grid-cols-2">
<div
  className="relative flex min-h-[560px] flex-col justify-between overflow-hidden bg-cover bg-center p-8 text-pearl sm:p-12 lg:min-h-[650px]"
  style={{
backgroundImage:
  "url('https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000')",  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60" />

  <div className="relative z-10">
    <p className="text-[9px] font-semibold tracking-[0.35em] text-white">
      THE MIVRA EXPERIENCE
    </p>

    <h2 className="mt-8 font-display text-6xl leading-[0.95] tracking-tight text-white sm:text-7xl">
      Your style.
      <br />
      Your space.
    </h2>
  </div>

  <div className="relative z-10 border-t border-white/40 pt-6">
    <p className="max-w-xs text-xs leading-6 text-white">
      Discover considered essentials, explore new collections and keep your
      MIVRA experience in one place.
    </p>

    <p className="mt-8 text-[9px] tracking-[0.3em] text-white">
      DEFINE YOUR STYLE.
    </p>
  </div>
</div>

          <div className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-14">
            <div className="w-full max-w-md">
              <p className="text-center text-[9px] font-semibold tracking-[0.3em] text-chrome">
                MIVRA / YOUR ACCOUNT
              </p>

              <h1 className="mt-5 text-center font-display text-5xl tracking-tight sm:text-6xl">
                {mode === "login" ? "Welcome back." : "Join MIVRA."}
              </h1>

              <p className="mt-4 text-center text-xs leading-6 text-chrome">
                {mode === "login"
                  ? "Sign in to access your account and continue your journey."
                  : "Create an account and make your MIVRA experience yours."}
              </p>

              <div className="mt-10 grid grid-cols-2 border-b border-black/10">
                <button
                  type="button"
                  onClick={() => changeMode("login")}
                  className={`pb-4 text-[10px] font-semibold tracking-[0.2em] transition ${
                    mode === "login"
                      ? "border-b-2 border-obsidian text-obsidian"
                      : "text-chrome hover:text-obsidian"
                  }`}
                >
                  SIGN IN
                </button>
                <button
                  type="button"
                  onClick={() => changeMode("register")}
                  className={`pb-4 text-[10px] font-semibold tracking-[0.2em] transition ${
                    mode === "register"
                      ? "border-b-2 border-obsidian text-obsidian"
                      : "text-chrome hover:text-obsidian"
                  }`}
                >
                  CREATE ACCOUNT
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {mode === "register" && (
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-[9px] font-semibold tracking-[0.18em] text-carbon"
                    >
                      FULL NAME
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      placeholder="Your full name"
                      className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-obsidian"
                    />
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[9px] font-semibold tracking-[0.18em] text-carbon"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-obsidian"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[9px] font-semibold tracking-[0.18em] text-carbon"
                  >
                    PASSWORD
                  </label>
                  <div className="flex items-center border-b border-black/20 focus-within:border-obsidian">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete={
                        mode === "login" ? "current-password" : "new-password"
                      }
                      required
                      minLength={8}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Minimum 8 characters"
                      className="w-full bg-transparent px-0 py-3 text-sm outline-none placeholder:text-black/30"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="shrink-0 py-2 text-[9px] font-semibold tracking-wider text-chrome hover:text-obsidian"
                    >
                      {showPassword ? "HIDE" : "SHOW"}
                    </button>
                  </div>
                </div>

                {mode === "login" && (
                  <div className="flex justify-end">
                    <Link
                      href="/account/forgot-password"
                      className="text-[10px] text-chrome underline underline-offset-4 hover:text-obsidian"
                    >
                      Forgot password?
                    </Link>
                  </div>
                )}

                {error && (
                  <p role="alert" className="bg-red-50 px-4 py-3 text-xs leading-5 text-red-700">
                    {error}
                  </p>
                )}

                {message && (
                  <p role="status" className="bg-green-50 px-4 py-3 text-xs leading-5 text-green-800">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-obsidian px-6 py-4 text-[10px] font-semibold tracking-[0.25em] text-white transition hover:bg-carbon disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading
                    ? "PLEASE WAIT..."
                    : mode === "login"
                      ? "SIGN IN"
                      : "CREATE ACCOUNT"}
                </button>
              </form>

              <p className="mt-8 text-center text-[10px] leading-6 text-chrome">
                By continuing, you agree to shop responsibly with MIVRA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
