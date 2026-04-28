"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const eventSlug = params.id as string;

  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Fetch event details
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const foundEvent = data.find(e => e.slug === eventSlug || e.id === eventSlug);
          if (foundEvent) {
            setEvent(foundEvent);
          } else {
            setErrorMsg("Event tidak ditemukan");
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("Gagal memuat data event");
        setLoading(false);
      });
  }, [eventSlug]);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !whatsapp) {
      setErrorMsg("Semua field wajib diisi!");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_id: event.id,
          buyer_name: name,
          buyer_email: email,
          buyer_whatsapp: whatsapp,
          quantity: quantity,
          total_price: event.price * quantity,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Terjadi kesalahan saat membuat pesanan");
      }

      // Redirect to payment instruction page
      router.push(`/my-tickets/payment?order_id=${result.order.order_id}`);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message);
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "100px 24px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>MEMUAT DATA CHECKOUT...</h2>
      </div>
    );
  }

  if (!event) {
    return (
      <div style={{ padding: "100px 24px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", color: "red" }}>{errorMsg}</h2>
        <button onClick={() => router.push("/")} style={{ marginTop: "24px", padding: "12px 32px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontWeight: "bold", border: "none", cursor: "pointer" }}>KEMBALI KE HOME</button>
      </div>
    );
  }

  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "40px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "8px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>CHECKOUT TIKET</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>LENGKAPI DATA DIRI ANDA</p>
      </div>

      <div className="container" style={{ padding: "60px 24px", minHeight: "60vh" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
          
          {/* Order Summary Form */}
          <div style={{ flex: "1 1 500px", border: "1px solid var(--color-border)", padding: "32px", backgroundColor: "var(--color-bg-primary)" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "24px", fontFamily: "var(--font-heading)", letterSpacing: "1px", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px" }}>DATA PEMESAN</h2>
            
            {errorMsg && (
              <div style={{ backgroundColor: "#ef4444", color: "white", padding: "12px", marginBottom: "24px", fontWeight: "bold", fontSize: "0.9rem" }}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleCheckout} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>NAMA LENGKAP</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="SESUAI IDENTITAS (KTP/KARTU PELAJAR)" 
                  style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>ALAMAT EMAIL</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-TICKET AKAN DIKIRIM KE EMAIL INI" 
                  style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>NOMOR WHATSAPP</label>
                <input 
                  type="tel" 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="08XXXXXXXXXX" 
                  style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
                  required
                />
              </div>

              <button type="submit" disabled={submitting} style={{ padding: "16px", fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", border: "none", backgroundColor: "#22c55e", color: "#fff", fontWeight: "bold", cursor: submitting ? "not-allowed" : "pointer", marginTop: "16px", opacity: submitting ? 0.7 : 1 }}>
                {submitting ? "MEMPROSES..." : "SELESAIKAN PESANAN"}
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div style={{ flex: "1 1 400px", border: "1px solid var(--color-border)", padding: "32px", backgroundColor: "var(--color-bg-secondary)", position: "sticky", top: "120px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "24px", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>DETAIL PESANAN</h2>
            
            <div style={{ display: "flex", gap: "16px", marginBottom: "24px", alignItems: "center" }}>
              <div style={{ width: "80px", height: "80px", backgroundImage: `url('${event.poster_url || "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000"}')`, backgroundSize: "cover", backgroundPosition: "center", border: "1px solid var(--color-border)" }}></div>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", marginBottom: "4px" }}>{event.name}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>{new Date(event.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", borderBottom: "1px dashed var(--color-border)", paddingBottom: "16px" }}>
              <span style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>JUMLAH TIKET</span>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", border: "1px solid var(--color-border)", padding: "4px 16px", backgroundColor: "var(--color-bg-primary)" }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} type="button" style={{ border: "none", background: "none", fontSize: "1.5rem", cursor: "pointer", fontWeight: "bold", color: "var(--color-text-primary)" }}>-</button>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} type="button" style={{ border: "none", background: "none", fontSize: "1.5rem", cursor: "pointer", fontWeight: "bold", color: "var(--color-text-primary)" }}>+</button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "1rem", color: "var(--color-text-secondary)" }}>Harga Satuan:</span>
              <span style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>Rp {event.price.toLocaleString("id-ID")}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px", borderTop: "1px solid var(--color-border)", paddingTop: "16px" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>TOTAL:</span>
              <span style={{ fontSize: "2rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>Rp {(event.price * quantity).toLocaleString("id-ID")}</span>
            </div>
            
          </div>

        </div>
      </div>
    </>
  );
}
