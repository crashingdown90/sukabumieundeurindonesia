import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { pin } = await request.json();
  const adminPin = process.env.ADMIN_PIN || "179003";

  if (pin === adminPin) {
    const apiToken = process.env.ADMIN_API_TOKEN || "default_fallback_token";
    return NextResponse.json({ success: true, token: apiToken });
  }

  return NextResponse.json({ success: false, message: "PIN salah" }, { status: 401 });
}
