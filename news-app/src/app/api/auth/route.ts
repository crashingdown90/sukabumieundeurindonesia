import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { pin } = await request.json();
  const adminPin = process.env.ADMIN_PIN || "882266";

  if (pin === adminPin) {
    return NextResponse.json({ success: true, token: `admin_${Date.now()}_${Math.random().toString(36).slice(2)}` });
  }

  return NextResponse.json({ success: false, message: "PIN salah" }, { status: 401 });
}
