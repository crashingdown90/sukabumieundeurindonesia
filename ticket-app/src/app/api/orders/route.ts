import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event_id, buyer_name, buyer_email, buyer_whatsapp, quantity, total_price } = body;

    // Validate inputs
    if (!event_id || !buyer_name || !buyer_email || !buyer_whatsapp || !quantity || !total_price) {
      return NextResponse.json({ error: "Semua field harus diisi" }, { status: 400 });
    }

    // Generate unique order ID (SE-TICKET-TIMESTAMP)
    const orderId = `SE-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000)}`;

    const orderData = {
      order_id: orderId,
      event_id,
      buyer_name,
      buyer_email,
      buyer_whatsapp,
      quantity,
      total_price,
      payment_status: "pending"
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from("ticket_orders")
      .insert([orderData])
      .select();

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: "Order created successfully", order: data[0] }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating order:", error);
    return NextResponse.json({ error: error.message || "Failed to create order" }, { status: 500 });
  }
}
