import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { pin } = await request.json();

    // Use the same PIN for now
    if (pin === "179003") {
      // In production, use standard JWT library. This is a mock token for demonstration.
      const mockToken = "shop_admin_" + Date.now().toString() + "_" + Math.random().toString(36).substring(7);
      return NextResponse.json({ success: true, token: mockToken }, { status: 200 });
    }

    return NextResponse.json({ success: false, message: "PIN salah" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
