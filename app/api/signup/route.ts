import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, email, password, confirmPassword, role } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (password !== confirmPassword) {
    return NextResponse.json(
      { error: "Passwords do not match" },
      { status: 400 }
    );
  }

  const existing = await prisma.user.findUnique({
    where: { email: String(email).toLowerCase() },
  });
  if (existing) {
    return NextResponse.json(
      { error: "Email already in use" },
      { status: 409 }
    );
  }

  const passwordHash = await bcrypt.hash(String(password), 12);

  await prisma.user.create({
    data: {
      name: String(name ?? "").trim(),
      email: String(email).toLowerCase(),
      passwordHash,
      role: role ?? "client",
    },
  });

  return NextResponse.json({ ok: true });
}
