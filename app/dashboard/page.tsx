"use client";

import { useEffect, useMemo, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

type HabitKey = "sleep" | "steps" | "protein" | "water" | "mobility";

const HABITS: { key: HabitKey; label: string; hint: string }[] = [
  { key: "sleep", label: "Svefn", hint: "7–9 klst" },
  { key: "steps", label: "Skref", hint: "8–12k" },
  { key: "protein", label: "Prótein", hint: "Markmið dagsins" },
  { key: "water", label: "Vatn", hint: "2–3L" },
  { key: "mobility", label: "Teygjur og liðleiki", hint: "5–10 mín" },
];

function getTodayKey() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Client-side guard (even if you also have middleware)
  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth");
  }, [status, router]);

  const name = session?.user?.name ?? "vinur";

  // --- Habits (localStorage) ---
  const storageKey = useMemo(() => `lifskraftur:habits:${getTodayKey()}`, []);
  const [habits, setHabits] = useState<Record<HabitKey, boolean>>({
    sleep: false,
    steps: false,
    protein: false,
    water: false,
    mobility: false,
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setHabits(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(habits));
    } catch {}
  }, [storageKey, habits]);

  const habitScore = Object.values(habits).filter(Boolean).length;
  const habitPercent = Math.round((habitScore / HABITS.length) * 100);

  // --- Check-in form ---
  const [checkinLoading, setCheckinLoading] = useState(false);
  const [checkinDone, setCheckinDone] = useState(false);

  async function submitCheckin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCheckinLoading(true);
    setCheckinDone(false);

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    // v1: just log it. Later we’ll POST to /api/checkins
    console.log("CHECKIN:", payload);

    setTimeout(() => {
      setCheckinLoading(false);
      setCheckinDone(true);
      (e.currentTarget as HTMLFormElement).reset();
    }, 350);
  }

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-[#0a0f1a] text-[#d6eafe] px-6 py-24">
        <div className="max-w-5xl mx-auto">Hleð…</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#d6eafe] px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-[#e4f2ff]">Mín síða</h1>
            <p className="text-sm text-[#9bb4d8] mt-2">
              Velkominn, <span className="text-[#c2ecff]">{name}</span>. Hér
              sérðu áætlun, venjur og check-in.
            </p>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/auth" })}
            className="px-4 py-2 rounded-lg border border-[#1e344e] text-[#d6eafe] hover:bg-white/5 transition"
          >
            Skrá út
          </button>
        </header>

        {/* Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Workout Plan */}
          <Card title="Æfingaáætlun" subtitle="Vika 1 (demo)">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[#9bb4d8]">Næsta æfing</span>
                <span className="text-[#d6eafe]">Push A</span>
              </div>

              <div className="rounded-xl bg-[#050b18] border border-[#1e344e] p-4 space-y-2">
                <p className="text-[#c2ecff] font-medium">Í dag</p>
                <ul className="text-[#9bb4d8] list-disc pl-5 space-y-1">
                  <li>Bekkpressa 3×6–8</li>
                  <li>Hallandi handlóð 3×8–10</li>
                  <li>Hliðar lyftur 3×12–15</li>
                  <li>Triceps 3×10–12</li>
                </ul>
              </div>

              <button
                type="button"
                className="w-full px-4 py-2 rounded-lg bg-[#5ecbff] hover:bg-[#7fd8ff] text-[#020813] font-medium transition shadow-md shadow-[#5ecbff]/30"
                onClick={() => alert("V1: við bætum við æfingasíðu næst 🙂")}
              >
                Skoða allar æfingar
              </button>
            </div>
          </Card>

          {/* Habits */}
          <Card
            title="Venjur í dag"
            subtitle={`Staða: ${habitScore}/${HABITS.length} (${habitPercent}%)`}
          >
            <div className="space-y-3">
              <div className="h-2 rounded-full bg-[#050b18] border border-[#1e344e] overflow-hidden">
                <div
                  className="h-full bg-[#5ecbff]"
                  style={{ width: `${habitPercent}%` }}
                />
              </div>

              <div className="space-y-2">
                {HABITS.map((h) => (
                  <label
                    key={h.key}
                    className="flex items-center justify-between gap-3 rounded-xl bg-[#050b18] border border-[#1e344e] px-4 py-3 hover:bg-white/5 transition cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm text-[#d6eafe]">{h.label}</span>
                      <span className="text-[11px] text-[#9bb4d8]">
                        {h.hint}
                      </span>
                    </div>

                    <input
                      type="checkbox"
                      checked={habits[h.key]}
                      onChange={(e) =>
                        setHabits((prev) => ({
                          ...prev,
                          [h.key]: e.target.checked,
                        }))
                      }
                      className="h-5 w-5 accent-[#5ecbff]"
                    />
                  </label>
                ))}
              </div>

              <p className="text-[11px] text-[#7a8fb3]">
                V1: Þetta vistast í vafranum (localStorage). Næst tengjum við
                þetta við gagnagrunn per notanda.
              </p>
            </div>
          </Card>

          {/* Weekly check-in */}
          <Card title="Vikulegt check-in" subtitle="Sendu stöðu + athugasemd">
            <form onSubmit={submitCheckin} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="weight"
                  inputMode="decimal"
                  placeholder="Vigt (kg)"
                  className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
                  required
                />
                <input
                  name="sleepAvg"
                  inputMode="decimal"
                  placeholder="Svefn (meðaltal)"
                  className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
                />
              </div>

              <textarea
                name="notes"
                placeholder="Hvernig gekk vikan? Orka, streita, æfingar, mataræði…"
                rows={5}
                className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff] resize-none"
              />

              <button
                type="submit"
                disabled={checkinLoading}
                className="w-full px-4 py-3 rounded-xl bg-[#5ecbff] hover:bg-[#7fd8ff] text-[#020813] font-medium transition shadow-md shadow-[#5ecbff]/30 disabled:opacity-50"
              >
                {checkinLoading ? "Sendi…" : "Senda check-in"}
              </button>

              {checkinDone && (
                <p className="text-sm text-[#c2ecff]">
                  Móttekið ✅ (V1: vistað í console)
                </p>
              )}
            </form>
          </Card>
        </section>
      </div>
    </main>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-[#0d1624]/80 border border-[#1e344e] p-5 shadow-xl shadow-black/30">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-[#e4f2ff]">{title}</h2>
        {subtitle && <p className="text-xs text-[#9bb4d8] mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
