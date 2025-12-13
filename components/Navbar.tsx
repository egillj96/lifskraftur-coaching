import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}
