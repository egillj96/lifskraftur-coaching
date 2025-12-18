"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  const role = (session?.user as any)?.role as string | undefined;
  const isAuthed = status === "authenticated";

  // Close menu on Escape + prevent background scroll when open
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  async function handleLogout() {
    close();
    await signOut({ callbackUrl: "/auth" });
  }

  const primaryHref = isAuthed
    ? role === "admin"
      ? "/admin"
      : "/dashboard"
    : "/auth";
  const primaryLabel =
    status === "loading"
      ? "Hleð..."
      : isAuthed
      ? role === "admin"
        ? "Stjórnborð"
        : "Mín síða"
      : "Stofna aðgang / Innskráning";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-[#1e344e]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-semibold tracking-wide text-lg text-[#d6eafe]"
            onClick={close}
          >
            Lífskraftur - Fjarþjálfun
          </Link>
        </div>

        {/* DESKTOP LINKS */}
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

          {/* Primary action (Auth / Dashboard / Admin) */}
          <Link
            href={primaryHref}
            className="px-4 py-2 rounded-lg bg-[#5ecbff] hover:bg-[#7fd8ff] text-[#020813] font-medium transition shadow-md shadow-[#5ecbff]/30"
          >
            {primaryLabel}
          </Link>

          {/* Logout when authed */}
          {isAuthed && (
            <button
              type="button"
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg border border-[#1e344e] text-[#d6eafe] hover:bg-white/5 transition"
            >
              Skrá út
            </button>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#d6eafe] hover:bg-white/5 transition cursor-pointer"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU (overlay) */}
      {open && (
        <div className="md:hidden">
          <button
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/50"
            onClick={close}
          />

          <div className="fixed top-0 right-0 z-50 h-dvh w-[85%] max-w-sm bg-[#0a0f1a] border-l border-[#1e344e] shadow-2xl">
            <div className="px-6 py-5 flex items-center justify-between border-b border-[#1e344e]">
              <span className="text-[#d6eafe] font-semibold">Valmynd</span>

              <button
                type="button"
                className="rounded-lg p-2 text-[#d6eafe] hover:bg-white/5 transition cursor-pointer"
                aria-label="Close menu"
                onClick={close}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 py-6 flex flex-col gap-4 text-sm">
              <Link
                href="/"
                onClick={close}
                className="text-[#9ddcff] hover:text-[#c2ecff] transition"
              >
                Heim
              </Link>

              <a
                href="/#coaching"
                onClick={close}
                className="text-[#9ddcff] hover:text-[#c2ecff] transition"
              >
                Þjálfun
              </a>

              <a
                href="/#about"
                onClick={close}
                className="text-[#9ddcff] hover:text-[#c2ecff] transition"
              >
                Um mig
              </a>

              {/* Primary action */}
              <Link
                href={primaryHref}
                onClick={close}
                className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-lg bg-[#5ecbff] hover:bg-[#7fd8ff] text-[#020813] font-medium transition shadow-md shadow-[#5ecbff]/30"
              >
                {primaryLabel}
              </Link>

              {/* Logout */}
              {isAuthed && (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-[#1e344e] text-[#d6eafe] hover:bg-white/5 transition"
                >
                  Skrá út
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
